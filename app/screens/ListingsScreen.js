import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
    {
        id: 1,
        title: "Jacket for sale",
        price: 100,
        image: require("../assets/jackets.jpeg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 2000,
        image: require("../assets/couch.jpg")
    },
]

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList 
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
            <Card 
                title={item.title}
                subTitle={"€" + item.price}
                image={item.image}
            />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
});

export default ListingsScreen;
