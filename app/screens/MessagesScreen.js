import React from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "Bericht 1",
    description: "Hier komt het bericht",
    image: require("../assets/person.jpeg"),
  },
  {
    id: 2,
    title: "Bericht 2",
    description: "Hier komt het bericht",
    image: require("../assets/person.jpeg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        ItemSeparatorComponent={ListItemSeparator}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Dit is bericht: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  console.log("goodbye");
                }}
              />
            )}
          />
        )}
      />
    </Screen>
  );
}

export default MessagesScreen;
