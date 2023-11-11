//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import Header from "../Components/Header";
import { Card } from "react-native-paper";
import Colors from "../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import image from "../Utils/Image";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addWishlist, allProduct, restDat } from "../redux/reducer";
// create a component
const Wishlist = () => {
  const [isLoading, setisLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const HandleAddCart = (product) => {
    let object = {
      ...product,
      quantity: 1,
    };
    dispatch(addToCart(object));
    let productId = object.id;
    const isProductInCart = (productId) => {
      return cart.some((product) => product.id === productId);
    };
    if (!isProductInCart(productId)) {
      dispatch(addToCart(object));
      alert("Product added succesfully to Your cart");
    } else {
      alert("Product already added to Your cart");
    }
  };
  const HandleAddWishList = (product) => {
    dispatch(addWishlist(product));
  };

  const renderWishlistproduct = ({ item }) => {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() =>
            navigation.navigate("Product_details_screen", { productData: item })
          }
        >
          <Card>
            <View
              style={{
                height: 200,
                width: 150,
                borderRadius: 12,
                margin: 10,
                padding: 10,
              }}
            >
              <TouchableOpacity onPress={() => HandleAddWishList(item)}>
                <AntDesign name="heart" size={20} color="red" />
              </TouchableOpacity>
              <Image
                source={{ uri: item?.thumbnail }}
                resizeMode={"contain"}
                defaultSource={image.defaultImage}
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: "center",
                  marginVertical: 10,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{ fontWeight: "600", fontSize: 14, lineHeight: 20 }}
                >
                  ${item?.price}
                </Text>
                <TouchableOpacity onPress={() => HandleAddCart(item)}>
                  <AntDesign
                    name="pluscircle"
                    size={20}
                    color={Colors.theme_color}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.product_name}>{item?.title}</Text>
            </View>
          </Card>
        </Pressable>
      </View>
    );
  };
  const { product, cart, wishlist } = useSelector((state) => state.reducer);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFFFFF", height: "100%", width: "100%" }}
    >
      <Header headername={"Wishlist Screen"} />
      {/* <View style={styles.container}> */}
      {wishlist?.length > 0 ? (
        <FlatList
          data={wishlist}
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingBottom: 100,
          }}
          keyExtractor={(item, index) => index}
          renderItem={renderWishlistproduct}
          numColumns={2}
        />
      ) : (
        <View
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>No Item Found</Text>
        </View>
      )}
      {/* </View> */}
      {isLoading ? (
        <ActivityIndicator
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
          }}
          color="black"
          size="large"
        />
      ) : null}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#FFFFFF",
    // marginHorizontal: 15,
    // marginVertical: 10,
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginHorizontal: 15,
    width: "100%",
    marginVertical: 10,
  },
  header: {
    height: 60,
    backgroundColor: Colors.theme_color,
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
  },
  image: {
    height: 20,
    width: 50,
  },
  product_name: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 15,
    color: "#616A7D",
    marginVertical: 5,
  },
});

//make this component available to the app
export default Wishlist;
