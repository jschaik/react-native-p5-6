import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jackets.jpeg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Jackets for sale</AppText>
        <AppText style={styles.price}>€1000</AppText>

        <View style={styles.container}>
          <ListItem
            image={require("../assets/person.jpeg")}
            title="jason van schaik"
            subTitle="5 artikelen"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },

  container: {
    marginVertical: 20
  }

});

export default ListingDetailsScreen;
