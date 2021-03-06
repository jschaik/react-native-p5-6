import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import Icon from "./Icon";

function ListItem({ image, title, subTitle, onPress, renderRightActions, ImageComponent }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  subTitle: {
    color: colors.medium,
  },

  title: {
    fontWeight: "500",
  },
});

export default ListItem;
