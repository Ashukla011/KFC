import React from "react";
import { Box, Image, Text, Button, GridItem, HStack } from "@chakra-ui/react";

export const PeriPeri = ({
  id,
  name,
  price,
  image,
  description,
  icon,
  type,
  quantity,
  onClick,
}) => {
  return (
    <>
      <GridItem key={id} borderRadius={"5px"}>
        <Image src={image} alt="" width="100%" borderRadius={"10px"} />
        <Text
          fontFamily={"National 2 Regular"}
          fontStyle={"normal"}
          fontWeight={"600"}
          fontSize={"16px"}
          lineHeight={"24px"}
          color={"#202124"}
          mb={"5px"}
        >
          {name}
        </Text>
        <HStack
          color={"#494949"}
          fontSize={"12px"}
          fontWeight={"400"}
          lineHeight={"22px"}
          mb={"5px"}
        >
          <Image src={icon} alt="" />
          <Text> {type}</Text>
          <Text>Serve {quantity}</Text>
        </HStack>
        <Box
          color={"#202124"}
          fontWeight={"600"}
          fontSize={"16px"}
          lineHeight={"22px"}
          fontStyle={"normal"}
        >
          {`₹${price}`}
        </Box>

        <Box
          fontWeight={"600"}
          fontSize={"14px"}
          fontStyle={"normal"}
          lineHeight={"24px"}
          color={"#494949"}
          textOverflow={"ellipsis"}
          display={"-webkit-box"}
        >
          {description}
        </Box>

        <Button
          padding={"11px 40px"}
          width={"184px"}
          height={"44px"}
          cursor={"pointer"}
          fontFamily={"National 2 Regular"}
          textAlign={"center"}
          margin={"10px"}
          colorScheme="red"
          size="lg"
          onClick={onClick}
        >
          Add to cart
        </Button>
      </GridItem>
    </>
  );
};
