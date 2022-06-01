import React, {useState} from "react";
import { FlatList, View, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
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

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
      setMessages(messages.filter((m) => m.id !== message.id));
  }

  return (
    <Screen >
      <FlatList
        style={styles.container}
        ItemSeparatorComponent={ListItemSeparator}
        data={messages}
        refreshing = {refreshing}
        onRefresh ={() => setMessages(initialMessages)}
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
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
});
export default MessagesScreen;
