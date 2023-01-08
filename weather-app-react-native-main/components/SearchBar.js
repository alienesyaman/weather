import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar({ fetchWeatherData }) {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Enter City Name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <EvilIcons
        name="search"
        size={32}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 12.5,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "black",
  },
});
