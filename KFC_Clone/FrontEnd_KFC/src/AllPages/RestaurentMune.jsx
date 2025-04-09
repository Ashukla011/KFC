import "../styles/MenuComponents.css";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import MenuChildOne from "../Components/MenuChildOne";
import { PeriPeri } from "../Components/PeriPeri";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/KfcDataSlice";
import ScrollSpy from "react-scrollspy-navigation";
import { v4 as uuidv4 } from "uuid";
import Loading from '../Components/Loadding'
import {
  Box,
  Heading,
  Image,
  Grid,
  ListItem,
  UnorderedList,
  Toast,
  useToast,
  Skeleton
} from "@chakra-ui/react";

export const RestaurentMune = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { loading, error, data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const HandleCardData = (item) => {
    let cartItem = JSON.parse(localStorage.getItem("kfcCart")) || [];
    let localStorageItem = cartItem.find((data) => data._id === item._id);

    if (localStorageItem) {
      localStorageItem.price += item.price;
      localStorageItem.quantity += 1;
    } else {
      cartItem.push(item);
    }

    toast({
      position: "top-center",
      title: "Item Added Successfully",
      description: "We've added your product for you.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    localStorage.setItem("kfcCart", JSON.stringify(cartItem));
  };

  const FOOD_CATEGORIES = [
    { id: "PERI_PERI_MATCH_SPECIALS", label: "Peri Peri Match Specials", type: "Peri_Peri" },
    { id: "CHICKEN_ROLLS", label: "Chicken Rolls", type: "ChickenRools" },
    { id: "CHICKEN_BUCKETS", label: "Chicken Buckets", type: "CHICKENBUCKETS" },
    { id: "BOX_MEALS", label: "Box Meals", type: "BOXMEALS" },
    { id: "BURGERS", label: "Burgers", type: "BURGERS" },
    { id: "RICEBOWLZ", label: "Rice Bowlz", type: "RICEBOWLZ" },
    { id: "SIDES", label: "Sides", type: "SIDES" },
    { id: "Beverages_DESEERTS", label: "Beverages", type: "BEVERAGES" }
  ];

  return (
    <>
      <Box display="flex" flexDirection={{ base: "column", lg: "row" }} margin="20px" padding="20px">
        <Box height="800px" width="25%" padding="10px" position="fixed" left="50" top="20">
          <Image className="img" src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="" display={{ base: "none", lg: "block" }} />
          <Heading as="h1" fontSize="38px" fontWeight="700" fontFamily="National 2 Condensed" textTransform="uppercase" display={{ base: "none", sm: "block" }}>
            KFC Menu
          </Heading>
          <ScrollSpy activeClass="navactive" behavior="smooth">
            <UnorderedList listStyleType="none" lineHeight="40px" display={{ base: "flex", lg: "block" }} justifyContent="space-between" gap="20" padding="20px" overflowX="auto" overflowY="hidden">
              {FOOD_CATEGORIES.map((category) => (
                <ListItem key={category.id} w="100%" h="10">
                  <Link to={category.id} smooth={true} duration={500}>
                    <a href={`#${category.id}`}>{category.label}</a>
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </ScrollSpy>
        </Box>

        <Box height="auto" width="75%" position="absolute" right={0} top="20">
          {loading ? <Loading/> :FOOD_CATEGORIES.map((category) => (
            <section id={category.id} key={category.id}>
           
                <Box background="#f8f7f5" paddingLeft="2vw">
                  <Box fontFamily="National 2 Condensed" fontSize="36px" fontWeight="700" lineHeight="36px" textTransform="uppercase" pl="10px" pt="20px" pb="15px">
                    <Heading as="h2">{category.label}</Heading>
                  </Box>
                  <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" justifyContent="space-evenly" gap="10px" padding="10px">
                    {data && data.filter((item) => item.foodType === category.type).map((item) => (
                      <MenuChildOne key={uuidv4()} image={item.image} Name={item.name} icon={item.icon} type={item.type} quantity={item.quantity} price={item.price} Description={item.description} onClick={() => HandleCardData(item)} />
                    ))}
                  </Grid>
                </Box>
            
            </section>
          ))}
        </Box>
      </Box>
    </>
  );
};
