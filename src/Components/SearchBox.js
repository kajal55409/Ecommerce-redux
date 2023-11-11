import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Colors from "../Utils/Colors";

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color={"#B7C7E6"} />
      <TextInput
        placeholder="Search product or store"
        placeholderTextColor={"#6F80AA"}
        style={{
          backgroundColor: "#1D2F6F",
          height:50,
          width:280
        }}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2F6F",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#1D2F6F",
    borderWidth: 2,
    height: 50,
    borderRadius: 60,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
