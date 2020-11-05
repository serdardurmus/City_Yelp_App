import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SafeAreaView, Text, View, FlatList} from 'react-native';

import { CityItem, SearchBar } from '../components';

const CityList = (props) => {
    const [originalList, setOriginalList] = useState([]);
    const [cityList, setCityList] = useState([]);
    
    // ASYNC - AWAIT
    const fetchCityData = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities");
        // console.log(data);
        setCityList(data.cities);
        setOriginalList(data.cities);
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({ item }) => <CityItem cityName={item} />

    const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: "#e0e0e0"}}/>

    function searchCity(search) {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();
            
            return cityName.indexOf(text) > -1;
        })
        setCityList(filteredCities);
    }

    return (
        <SafeAreaView>
            <View>
                <SearchBar 
                    placeholder="Bir şehir arayın..."
                    onSearch={(value) => searchCity(value)}
                />
                <FlatList 
                    keyExtractor= {(_, index) => index.toString()}
                    data = {cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent = {renderSeperator}
                />
            </View>
        </SafeAreaView>
    );
};

export { CityList };