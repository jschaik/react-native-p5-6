import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles"

import colors from "../config/colors";

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        style={styles.icon}
        size={20}
        color={colors.medium}
      />
      <TextInput style={defaultStyles.text} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
     marginRight: 10 
  },
  
});
export default AppTextInput;
