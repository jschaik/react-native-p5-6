import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Games", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectItem={category}
        onSelectedItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories}
      />
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}

//test2
