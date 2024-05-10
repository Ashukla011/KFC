import React, { useState } from "react";
import CHKZINGER from "../assets/CHKZINGER.jpg";
import VEGZINGER from "../assets/VEGZINGER.jpg";
import BIGSAVE from "../assets/BIGSAVE.jpg";
import ADDCHHK99 from "../assets/ADDCHK99.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Heading, Box, Image, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const FooterHome = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box bgColor={"#000"} mb={"20px"}>
      <Image
        src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2242%22%20viewBox%3D%220%200%2080%2042%22%20fill%3D%22none%22%20class%3D%22injected-svg%22%20data-src%3D%22%2Fstatic%2Fmedia%2FStripes_Small_OffersIcon.87fc6256.svg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%3Crect%20width%3D%2216.4103%22%20height%3D%2241.0256%22%20fill%3D%22%23E4002B%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2232.8203%22%20width%3D%2216.4103%22%20height%3D%2241.0256%22%20fill%3D%22%23E4002B%22%3E%3C%2Frect%3E%0A%3Crect%20x%3D%2263.5898%22%20width%3D%2216.4103%22%20height%3D%2241.0256%22%20fill%3D%22%23E4002B%22%3E%3C%2Frect%3E%0A%3C%2Fsvg%3E"
        alt=""
      />

      <Box display={"flex"} justifyContent={"space-between"}>
        <Heading color={"#eee"}>OFFER & DEALS</Heading>
        <Heading as={"h5"} color={"#eee"}>
          <Link to ="">Veiw All Menu🠒</Link>
        </Heading>
      </Box>
      <Carousel
        responsive={responsive}
       
        keyBoardControl={true}
      >
        <Box
          borderRadius={"15px"}
          margin={"5px"}
          textAlign={"center"}
          width={"80%"}
        >
          <Image
            src={CHKZINGER}
            alt=""
            width={"fit-content"}
            borderRadius={"15px 15px 0px 0px"}
          />
          <Box bgColor={"#eee"} borderRadius={"0px 0px 15px 15px"} overflowY={"hidden"}>
            <Heading color={"red"}>FREE CHICKEN...</Heading>
            <Text >
              1 PC free Chicken Zinger on a cart value of 499 or above on
              first...
            </Text >
            <Flex justifyContent={"space-around"} padding={"5px"}>
              <Text cursor={"pointer"}>
                <u>View Details </u>
              </Text>
              <Button cursor={"pointer"} colorScheme="black" size="md" variant="outline">
                Apply
              </Button>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          margin={"5px"}
          textAlign={"center"}
          width={"80%"}
        >
          <Image
            src={BIGSAVE}
            alt=""
            width={"fit-content"}
            borderRadius={"15px 15px 0px 0px"}
          />
          <Box bgColor={"#eee"} borderRadius={"0px 0px 15px 15px"} overflowY={"hidden"}>
            <Heading color={"red"}>UP TO 100 OF 0...</Heading>
            <Text >
              Upto Rs 100 off on min cart value of Rs 699 or more.applicable...
            </Text>
            <Flex justifyContent={"space-around"} padding={"5px"}>
              <Text cursor={"pointer"}>
                <u>View Details </u>
              </Text>
              <Button cursor={"pointer"} colorScheme="black" size="md" variant="outline">
                Apply
              </Button>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          margin={"5px"}
          textAlign={"center"}
          width={"80%"}
        >
          <Image
            src={ADDCHHK99}
            alt=""
            width={"fit-content"}
            borderRadius={"15px 15px 0px 0px"}
          />
          <Box bgColor={"#eee"} borderRadius={"0px 0px 15px 15px"} overflowY={"hidden"}>
            <Heading color={"red"}>ADD TO PC HOT N...</Heading>
            <Text>
              Add 2 Pc Hot n Crispy Chicken at just RS 99 on min cart value of
              ...
            </Text>
            <Flex justifyContent={"space-around"} padding={"5px"}>
              <Text cursor={"pointer"}>
                <u>View Details </u>
              </Text>
              <Button cursor={"pointer"} colorScheme="black" size="md" variant="outline">
                Apply
              </Button>
            </Flex>
          </Box>
        </Box>

        <Box
          borderRadius={"15px"}
          margin={"5px"}
          textAlign={"center"}
          width={"80%"}
        >
          <Image
            src={VEGZINGER}
            alt=""
            width={"fit-content"}
            borderRadius={"15px 15px 0px 0px"}
          />
          <Box bgColor={"#eee"} borderRadius={"0px 0px 15px 15px"} overflowY={"hidden"}>
            <Heading color={"red"}>1 PC FREE VEG...</Heading>
            <Text>
              1Pc free Veg Zinger on cart vlaue of 499 or above on first..
            </Text>
            <Flex justifyContent={"space-around"} padding={"5px"}>
              <Text cursor={"pointer"}>
                <u>View Details </u>
              </Text>
              <Button cursor={"pointer"} colorScheme="black" size="md" variant="outline">
                Apply
              </Button>
            </Flex>
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};
