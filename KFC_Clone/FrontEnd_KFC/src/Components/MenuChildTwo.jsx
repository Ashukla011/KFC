import React from "react";
import styles from "../styles/Mastercomponents.module.css";
import { Box, Image, Text, Button } from "@chakra-ui/react";
const MasterComponentswithoutquntity = ({
  image,
  Name,
  icon,
  type,
  price,
  Description,
  id,
  onclick,
}) => {
  return (
    <Box className={styles.first} key={id}>
      <Image src={image} alt="" className={styles.Image2} />
      <Text className={styles.Name}>{Name}</Text>
      <Box className={styles.icon_type_quantity}>
        <Image src={icon} alt="" />
        <Text>{type}</Text>
      </Box>
      <Text className={styles.Name}>{`₹${price}`}</Text>
      <Text className={styles.dis}>{Description}</Text>
      <Button className={styles.btn} onClick={onclick}>
        Add to Cart
      </Button>
    </Box>
  );
};
export default MasterComponentswithoutquntity;
