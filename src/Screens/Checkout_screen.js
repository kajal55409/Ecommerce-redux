import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { AntDesign } from "@expo/vector-icons";
import Common_Styles from "../Components/Common_Styles";
import Colors from "../Utils/Colors";

const Checkout_screen = ({ route }) => {
  const { item } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotalPrice] = useState(0);
  const [Total, setTotalPrice] = useState(0);
  const [Delivery, setDelivery] = useState(20);

  const handleIncrase = (item) => {
    let result = quantity + 1;
    setQuantity(result);
  };
  const handleDecrase = (item) => {
    if (quantity === 1) {
      return;
    }
    let result = quantity - 1;
    setQuantity(result);
  };

  useEffect(() => {
    const calculatedTotalPrice = item.price * quantity;
    setSubTotalPrice(calculatedTotalPrice);
  }, [quantity]);

  useEffect(() => {
    const TotalPrice = subTotal + Delivery;
    setTotalPrice(TotalPrice);
  }, [subTotal]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header headername={"Checkout screen"} />
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 72,
            justifyContent: "space-between",
            width: "100%",
            flexDirection: "row",
            borderBottomColor: "#EBEBFB",
            borderBottomWidth: 0.5,
          }}
        >
          <View
            style={{
              width: "10%",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: item?.thumbnail }}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: Colors.grey_text,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {item?.title}
            </Text>
            <Text
              style={{
                color: Colors.grey_text,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              ${item?.price}
            </Text>
          </View>

          <View
            style={{
              width: "35%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
              padding: 10,
            }}
          >
            <TouchableOpacity onPress={() => handleIncrase(item)}>
              <AntDesign name="pluscircleo" size={30} color={Colors.black} />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
                color: Colors.grey_text,
                marginTop: 5,
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => handleDecrase(item)}>
              <AntDesign name="minuscircleo" size={30} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom_view}>
          <View style={styles.bottom_txt_view}>
            <Text style={styles.bottom_txt1}>Subtotal</Text>
            <Text style={styles.bottom_txt2}>${subTotal}</Text>
          </View>
          <View style={styles.bottom_txt_view}>
            <Text style={styles.bottom_txt1}>Delivery</Text>
            <Text style={styles.bottom_txt2}>${Delivery}</Text>
          </View>
          <View style={styles.bottom_txt_view}>
            <Text style={styles.bottom_txt1}>Total</Text>
            <Text style={styles.bottom_txt2}>${Total}</Text>
          </View>
          <TouchableOpacity
            style={[
              Common_Styles.button_view,
              { width: "95%", marginVertical: 15 },
            ]}
          >
            <Text style={Common_Styles.button_txt}>Proceed To checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout_screen;

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,

    backgroundColor: "#FFFFFF",
  },
  image: {
    height: 30,
    width: 50,
    // backgroundColor:'red'
  },
  bottom_view: {
    height: 200,
    width: "95%",
    backgroundColor: "#F8F9FB",
    marginVertical: 10,
    borderRadius: 30,
    padding: 20,
    // position:'absolute'
  },
  bottom_txt_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  bottom_txt1: {
    fontWeight: "300",
    fontSize: 14,
    color: "#616A7D",
    lineHeight: 20,
  },
  bottom_txt2: {
    fontWeight: "400",
    fontSize: 13,
    color: "#616A7D",
    lineHeight: 20,
  },
});
