import React, { useEffect, useState } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

import Footer from "../Footer/Footer";
import Kfc_Lunch_Specials from "../assets/Kfc_Lunch_Specials.jpg";
import Wedmesday_banner from "../assets/Wedmesday_banner_1440x396px.webp";
import Chicken_Bucket from "../assets/Chiken_Buckets.jpg";
import Burger from "../assets/Burgers.jpg";
import Rice_Bowlz from "../assets/rice_bowlz.jpg";
import Box_Meals from "../assets/Box_Measl.jpg";
import Chicken_Rolls from "../assets/Chicken_Rolles.jpg";
import side from "../assets/Sides.jpg";
import Beverages_deserts from "../assets/Beverages_Desserts.jpg";
import view_all_menu from "../assets/finger_lickin.fc21c805.svg";
import Days from "../assets/Days.png";
import periperi_match_specials_Banner from "../assets/Periperi_match_specials_Banner.webp";
import Allu_Arjun_Combo_Meal from "../assets/Allu_Arjun_Combo_Meal.webp";
import web from "../assets/web_1440x396px.webp";
import { Image, Box, Heading, Flex, Grid, GridItem } from "@chakra-ui/react";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getUTCDay()];
  const PosterImage = [
    {
      url: periperi_match_specials_Banner,
    },
    {
      url: Allu_Arjun_Combo_Meal,
    },
    {
      url: web,
    },
  ];
  const Menu = [
    {
      url: Kfc_Lunch_Specials,
      title: "KFC LUNCH SPECIALS",
      link: "PERI_PERI_MATCH_SPECIALS",
    },

    {
      url: Chicken_Bucket,
      title: "CHICKEN BUCKETS",
      link: "CHICKEN_BUCKETS",
    },
    {
      url: Burger,
      title: "BURGERS",
      link: "BURGERS",
    },
    {
      url: Rice_Bowlz,
      title: "RICE ROWZL",
      link: "RICEBOWLZ",
    },
    {
      url: Box_Meals,
      title: "BOX MEALS",
      link: "BOX_MEALS",
    },
    {
      url: Chicken_Rolls,
      title: "CHICKEN ROLLS",
      link: "CHICKEN_ROLLS",
    },
    {
      url: side,
      title: "SIDES",
      link: "SIDES",
    },
    {
      url: Beverages_deserts,
      title: "BEVERAGES & DESSERTS",
      link: "Beverages_DESEERTS",
    },
    {
      url: view_all_menu,
      title: "View All New Menu🠒",
    },
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <>
      {/* <StartOrder /> */}

      <Box width={"100%"} mt={"100px"}>
        <Image
          src={PosterImage[currentIndex].url}
          alt=""
          width={"100%"}
          hight={"400px"}
        />
      </Box>

      <Box width={"100%"}>
        <Image
          src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
          alt=""
        />
        <Heading textTransform={"uppercase"} fontFamily={"Helvetica"}>
          welcome to kfc
        </Heading>
      </Box>
      <Flex
        fontFamily={"Arial Black"}
        mt={"100px"}
        ml={"100px"}
        fontSize={"20px"}
        justifyContent={"space-between"}
      >
        <Heading textTransform={"uppercase"} fontFamily={"Helvetica"}>
          browse categories
        </Heading>
      </Flex>

      <Grid
        width={"80%"}
        height={"fit-content"}
        margin={"auto"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap={"6"}
      >
        {Menu.map((item) => (
          <GridItem
            textAlign={"center"}
            cursor={"pointer"}
            borderRadius={"4px"}
            height={"fit-content"}
          >
            <NavHashLink to={`/RestaurentMune#${item.link}`} smooth>
              <Image
                src={item.url}
                alt=""
                width={"100%"}
                borderRadius={"4px 4px 0px 0px"}
              />
              <Box
                bgColor={"#f8f7f5"}
                display={"inline-grid"}
                height="6vw"
                margin={"1%"}
                borderRadius={"0px 0px 4px 4px"}
                width={{ base: "24%", lg: "24%", md: "100%", lg: "100%" }}
              >
                <Heading
                  as="h4"
                  size="md"
                  fontFamily={"Helvetica"}
                  fontWeight={"700"}
                  letterSpacing={".5px"}
                  color={"#202124"}
                  lineHeight={"25px"}
                  textTransform={"uppercase"}
                >
                  {item.title}
                </Heading>
              </Box>
            </NavHashLink>
          </GridItem>
        ))}
      </Grid>

      <Footer />
    </>
  );
};
