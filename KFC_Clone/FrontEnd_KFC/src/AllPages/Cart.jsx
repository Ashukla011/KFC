import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import { Link, Navigate } from "react-router-dom";
import { StartOrder } from "../Components/StartOrder";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import lineLogo from "../assets/lineLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/KfcDataSlice";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
export const Cart = () => {
  const [Product, setProduct] = useState([]);
  const navigate = useNavigate();
  let [total, setTotal] = useState(0);
  let [finalTotal, setfinalTotal] = useState(0);
  let [initialprice, setInitialPrice] = useState(0);
  const toast = useToast();
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const fetchLocalData = () => {
    let LocalStorageData = JSON.parse(localStorage.getItem("kfcCart")) || [];
    setProduct(LocalStorageData);
  };

  const handleRemove = (el,i) =>{
     let index = Product.findIndex((data)=>data._id == el._id)
       Product.splice(index,1)
       setProduct([...Product])
       console.log("remove")
  }
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
    const productIndex = Product.findIndex((data) => data._id === item._id);
    const productPrice = data.find((el) => el._id === item._id);
    console.log("productPrice", productPrice.price);
    if (item.quantity) {
      setInitialPrice(item.price);
    }
    if (productIndex !== -1) {
      Product[productIndex].price += productPrice.price;
      Product[productIndex].quantity += 1;
        localStorage.setItem("kfcCart", JSON.stringify(Product));

      // Update total price
      setTotal(total + productPrice.price);
      setfinalTotal(total + productPrice.price + 18 + 37);
      localStorage.setItem(
        "kfcTotalPrice",
        JSON.stringify(total + productPrice.price + 18 + 37)
      );
    }
  };

  const handleDecrementPrice = (item) => {
    const productIndex = Product.findIndex((data) => data._id === item._id);
    const productPrice = data.find((el) => el._id === item._id);
    if (productIndex !== -1 && Product[productIndex].quantity > 0) {
      Product[productIndex].price -= productPrice.price;

      Product[productIndex].quantity -= 1;
      if (Product[productIndex].quantity === 0) {
        Product.splice(productIndex, 1); // Remove the item if quantity is zero
      }
      setProduct(Product);
      localStorage.setItem("kfcCart", JSON.stringify(Product));

      // Update total price
      setTotal(total - productPrice.price);
      setfinalTotal(total - productPrice.price + 18 + 37);
      localStorage.setItem(
        "kfcTotalPrice",
        JSON.stringify(total - productPrice.price + 2.8 + 37)
      );
    }
  };
  useEffect(() => {
    fetchLocalData();
    CalculatePrice();
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
          padding={"20px"}
        >
          <Box textAlign={"center"}>
            {Product.length === 0 ? (
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
              Product.map((el, i) => (
                <Flex
                  backgroundColor="#f8f7f5"
                  borderRadius="10px"
                  mt={"10px"}
                  gap={"10"}
                  flexDirection={{
                    base: "column",
                    md: "column",
                    sm: "column",
                    lg: "row",
                  }}
                
                  width={{base:"100%",sm:'100%',md:"100%",lg:'100%'}}
                  padding={{base:"20px",sm:'20px',md:'20px',lg:"0px"}}
                  key={i}
                >
                  <Box width={{base:"100%",md:"100%",sm:"100%",lg:"24%"}} padding={"5px"} >
                    <Image
                      src={el.image}
                      alt=""
                      width={{base:"100%",md:"100%",sm:"100%",lg:"70%"}}
                      borderRadius={"5px"}
                    />
                  </Box>

                  <Box width={{base:"100%",md:"100%",sm:"100%",lg:"24%"}} padding={"5px"} textAlign={"left"}>
                    <Text mt={"10px"}>{el.name}</Text>
                    <Button
                      colorScheme="black"
                      variant="link"
                      mt={"40px"}
                      onClick={() => handleRemove(el, i)}
                    >
                      remove
                    </Button>
                  </Box>

                  <HStack width={{base:"100%",md:"100%",sm:"100%",lg:"24%"}} padding={"10px"} textAlign ={{base:"left",sm:'left',md:'left'}}>
                    <Button
                      rounded={100}
                      padding={"10px"}
                      fontSize={"18px"}
                      border={"1px solid black"}
                      backgroundColor={"white"}
                      _hover={{backgroundColor:"white"}}
                      onClick={() => handleDecrementPrice(el)}
                    >
                      -
                    </Button>
                    <Button
                      rounded={100}
                      padding={"10px"}
                      fontSize={"18px"}
                      backgroundColor={"white"}
                      _hover={{backgroundColor:"white"}}
                    >
                      {el.quantity}
                    </Button>
                    <Button
                      rounded={100}
                      padding={"10px"}
                      fontSize={"18px"}
                      backgroundColor={"white"}
                      _hover={{backgroundColor:"white"}}
                      border={"1px solid black"}
                      onClick={() => handleIncrementPrice(el)}
                    >
                      +
                    </Button>
                  </HStack>
                  <Box width={{base:"100%",md:"100%",sm:"100%",lg:"24%"}} mt={{lg:"50px"}} textAlign ={{base:"left",sm:'left',md:'left'}}>{`₹ ${el.price.toFixed(2)}`}</Box>
                </Flex>
              ))
            )}

            <Flex justifyContent={"space-around"} mt={"20px"}  >
             {Product.length !==0?  <Button
                colorScheme="black"
                variant="link"
                onClick={() => localStorage.removeItem("kfcCart")}
              >
                Remove All
              </Button>:null}

              <Button
                colorScheme="black"
                variant="outline"
                borderRadius={"20px"}
                onClick={() => navigate("/RestaurentMune")}
              >
                Add More items
              </Button>
            </Flex>
          </Box>

            {Product.length !==0 ? <Box
          
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          width={{ base: "100%", sm: "100%", md: "100%", lg: "40%" }}
          h={"fit-content"}
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
        <Divider/>
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
                display={"flex"}
                justifyContent={"space-around"}
              > <span>Checkout </span> <span>  ₹{finalTotal.toFixed(2)}</span></Button>
            </Link>
          </Box>
        </Box>:null}
        </Flex>
      </Center>
      <Footer />
    </>
  );
};
