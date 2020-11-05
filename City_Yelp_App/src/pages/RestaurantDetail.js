import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, Button, Linking } from 'react-native';

const RestaurantDetail = (props) => {
    const { selectedRestaurant } = props.route.params;
    return (
        // SafeAreaView padding almaz, SafeAreaView özel yapıdadır
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>
                <Image 
                    style={styles.image}
                    source = {{ uri: selectedRestaurant.image_url }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
                </View>
                <View style={styles.button}>
                    {/* <Text style={{color: 'darkblue', textAlign: "center"}}
                        onPress={() => Linking.openURL(selectedRestaurant.mobile_reserve_url)}>
                    Go To Reserve
                    </Text> */}
                    <Button 
                        title= "Go To Reserve"
                        onPress={() => Linking.openURL(selectedRestaurant.mobile_reserve_url)}
                        color= "#ba68c8"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export { RestaurantDetail }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    name: {
        fontWeight: "300",
        fontSize: 20,
    },
    image: {
        height: Dimensions.get("window").height /3,
    },
    infoContainer: {
        backgroundColor: "#ce93d8",
        margin: 5,
        padding: 10,
        borderRadius: 5,
    },
    infoText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    button: {
        margin: 7,
        borderRadius: 5,
    }
})