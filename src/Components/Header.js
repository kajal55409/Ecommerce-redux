import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Common_Styles from "./Common_Styles";
import { useNavigation } from "@react-navigation/native";
import Colors from "../Utils/Colors";
import { StatusBar } from "expo-status-bar";
import { Badge, Card } from "react-native-paper";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addWishlist, allProduct, restDat } from "../redux/reducer";
const Header = (props) => {
  const navigation = useNavigation();
  const { product, cart, wishlist } = useSelector((state) => state.reducer);
  const inCart = cart?.length;
  return (
    <View style={styles.maintoolview}>
      <StatusBar backgroundColor={Colors.white} />
      <TouchableOpacity
        style={Common_Styles.mainbackBtn}
        onPress={() =>
          props.onPress
            ? navigation.navigate(props.onPress)
            : navigation.goBack()
        }
      >
        <Entypo name={"chevron-small-left"} size={40} color={"black"} />
      </TouchableOpacity>

      <Text style={Common_Styles.maintooltxt}>{props.headername}</Text>
       
      <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                // backgroundColor: "red",
                justifyContent: "flex-end",
              }}
              onPress={() => navigation.navigate("Cart_screen")}
            >
        
              <SimpleLineIcons name="handbag" size={22} color={Colors.black} />
              <Badge style={{ top: -18, left: -7 }} size={20}>
                {inCart}
              </Badge>
            </TouchableOpacity>

      <View style={Common_Styles.maintoolblankview} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  maintoolview: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#E7E7E7",
    marginTop: 22
  },
});
