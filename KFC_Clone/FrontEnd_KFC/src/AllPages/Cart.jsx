import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import { Link, Navigate } from "react-router-dom";
import { StartOrder } from "../Components/StartOrder";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import lineLogo from "../assets/lineLogo.png";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
export const Cart = () => {
  const [Product, setProduct] = useState([]);
  const navigate = useNavigate();
  let [total, setTotal] = useState(0);
  let [finalTotal, setfinalTotal] = useState(0);

  const fetchData = () => {
    let data = JSON.parse(localStorage.getItem("kfcCart")) || [];
    setProduct(data);
  };
  const CalculatePrice = () => {
    let kfcProduct = [...Product];
    if (kfcProduct.length > 0) {
      let totalPrice = kfcProduct.reduce((sum, el) => sum + el.price, 0);
      setTotal(totalPrice);
      setfinalTotal(totalPrice + 18 + 37);
      localStorage.setItem(
        "kfcTotalPrice",
        JSON.stringify(totalPrice + 18 + 37)
      );
    }
  };

  const handleIncrementPrice = (item) => {
    let kfcProduct = [...Product];
    const productIndex = kfcProduct.findIndex((data) => data._id === item._id);

    if (productIndex !== -1) {
      kfcProduct[productIndex].price += item.price;
      kfcProduct[productIndex].quantity += 1;
      setProduct(kfcProduct);
      localStorage.setItem("kfcCart", JSON.stringify(kfcProduct));

      // Update total price
      setTotal(total + item.price);
      setfinalTotal(total + item.price + 18 + 37);
      localStorage.setItem(
        "kfcTotalPrice",
        JSON.stringify(total + item.price + 18 + 37)
      );
    }
  };

  const handleDecrementPrice = (item) => {
    let kfcProduct = [...Product];
    const productIndex = kfcProduct.findIndex((data) => data._id === item._id);

    if (productIndex !== -1 && kfcProduct[productIndex].quantity > 0) {
      kfcProduct[productIndex].price =
        kfcProduct[productIndex].price - item.price;

      kfcProduct[productIndex].quantity -= 1;
      if (kfcProduct[productIndex].quantity === 0) {
        kfcProduct.splice(productIndex, 1); // Remove the item if quantity is zero
      }
      setProduct(kfcProduct);
      localStorage.setItem("kfcCart", JSON.stringify(kfcProduct));

      // Update total price
      setTotal(total - item.price);
      setfinalTotal(total - item.price + 18 + 37);
      localStorage.setItem(
        "kfcTotalPrice",
        JSON.stringify(total - item.price + 2.8 + 37)
      );
    }
  };
  useEffect(() => {
    fetchData();
    CalculatePrice(0);
  }, [Product]);

  return (
    <>
      <Box mt={"100px"} px={5}>
        <Image src={lineLogo} alt="" />
        <Heading
          as={"h2"}
          fontSize={"44px"}
          fontWeight={"700"}
          fontFamily={"National 2 Condensed"}
          lineHeight={"44px"}
          fontStyle={"normal"}
          textTransform={"uppercase"}
          color={"#202124"}
        >
          my cart
        </Heading>
      </Box>
      <Center>
        <Flex
          gap={"10px"}
          flexDirection={{
            base: "column",
            md: "column",
            sm: "column",
            lg: "row",
          }}
          border={"1px solid red"}
          padding={"20px"}
        >
          <Box border={"1px solid blue"} textAlign={"center"}>
            {Product.length == 0 ? (
              <Box>
                <Image
                  src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
                  alt=""
                  width={"100%"}
                  height={"400px"}
                />
              </Box>
            ) : (
              Product &&
              Product.map((el) => (
                <Flex
                  backgroundColor="#f8f7f5"
                  borderRadius="10px"
                  mt={"5px"}
                  gap={"10"}
                  flexDirection={{
                    base: "column",
                    md: "column",
                    sm: "column",
                    lg: "row",
                  }}
                >
                  <Box border={"1px solid black"} width={"24%"} padding={"5px"}>
                    <Image
                      src={el.image}
                      alt=""
                      width={"70%"}
                      borderRadius={"5px"}
                    />
                  </Box>

                  <Box border={"1px solid black"} width={"24%"} padding={"5px"}>
                    <Text>{el.name}</Text>
                    <Button colorScheme="black" variant="link" mt={"50px"}>
                      remove
                    </Button>
                  </Box>

                  <HStack
                    border={"1px solid black"}
                    width={"24%"}
                    padding={"10px"}
                  >
                    <Button
                      rounded={100}
                      padding={"10px"}
                      fontSize={"18px"}
                      colorScheme="green"
                      onClick={() => handleDecrementPrice(el)}
                    >
                      -
                    </Button>
                    <Button
                      rounded={100}
                      padding={"10px"}
                      fontSize={"18px"}
                      colorScheme="blackAlpha"
                    >
                      {el.quantity}
                    </Button>
                    <Button
                      rounded={100}
                      padding={"10px"}
                      fontSize={"18px"}
                      colorScheme="green"
                      onClick={() => handleIncrementPrice(el)}
                    >
                      +
                    </Button>
                  </HStack>
                  <Box width={"25%"}>{`₹ ${el.price}`}</Box>
                </Flex>
              ))
            )}

            <Flex justifyContent={"space-around"} mt={"20px"}>
              <Button
                colorScheme="black"
                variant="link"
                onClick={() => localStorage.removeItem("KFC")}
              >
                Remove All
              </Button>

              <Button
                colorScheme="black"
                variant="outline"
                borderRadius={"20px"}
                onClick={() => navigate("/Menu")}
              >
                Add More Menu
              </Button>
            </Flex>
          </Box>

          <Box
            display={Product.length === 0 ? "hidden" : "visible"}
            border={"1px solid red"}
            width={{ base: "80%", sm: "90%", md: "80%", lg: "40%" }}
            h={"450px"}
            m={{ base: "auto", md: "auto", sm: "auto", lg: "0px" }}
            padding={"10px"}
          >
            <Heading
              as={"h1"}
              textTransform={"uppercase"}
            >{`${Product.length} Items`}</Heading>

            <Flex
              justifyContent={"space-between"}
              mt={"20px"}
              backgroundColor="#f8f7f5"
              padding={"20px"}
            >
              <Heading as={"h5"} color={"red.600"} size={"md"}>
                Apply Offers & Deals
              </Heading>
              <Button colorScheme="red" size={"sm"} variant={"outline"}>
                View All
              </Button>
            </Flex>

            <Flex justifyContent={"space-between"} mt={"20px"}>
              <Text>SubTotal</Text>
              <Text>{`₹ ${total.toFixed(2)}`}</Text>
            </Flex>
            <Flex justifyContent={"space-between"} mt={"20px"}>
              <p>GST</p>
              <p>{`₹ ${18}%`}</p>
            </Flex>

            <Flex justifyContent={"space-between"} mt={"20px"}>
              <Text>Rasturante Handling (Inc.taxes) </Text>
              <Text>{`₹ ${37}`}</Text>
            </Flex>
            <Box mt={"5px"} border={".5px solid grey"}></Box>
            <HStack
              mt={"5px"}
              border={".5px solid grey"}
              spacing={"10px"}
              padding={"5px 5px"}
            >
              <Checkbox
                size={"md"}
                colorScheme="grey"
                defaultChecked
              ></Checkbox>
              <Text fontSize={"11px"} fontWeight={"100"}>
                Donate ₹5.00 Tick to Add Hope. Our goal is to feed 20 million
                people by 2023.
              </Text>
              <Image
                src="https://causemarketing.com/wp-content/uploads/2016/12/add-hope-logo.png"
                alt=""
                width={"30%"}
              />
            </HStack>
            <Box m={"auto"} width={""} mt={"20px"}>
              <Link to="/Payment">
                <Button
                  size={"lg"}
                  borderRadius={"20px"}
                  colorScheme="red"
                  fontWeight={"700"}
                  border={"none"}
                  width={"100%"}
                >{`checkout   ₹${finalTotal.toFixed(2)}`}</Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Center>
      <Footer />
    </>
  );
};
