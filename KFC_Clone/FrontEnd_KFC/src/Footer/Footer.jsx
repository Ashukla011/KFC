import React from "react";

import { MdEditLocation } from "react-icons/md";

import {
  Box,
  UnorderedList,
  ListItem,
  Image,
  List,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FooterHome } from "./FooterHome";
const Footer = () => {
  const [showList1, setShowList1] = React.useState(true);
  const [showList2, setShowList2] = React.useState(true);
  const [showList3, setShowList3] = React.useState(true);
  const [showList4, setShowList4] = React.useState(true);

  const toggleVisible = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    <>
      <Box bgColor={"#000"} mt={"50px"} >
        <FooterHome />
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "column", sm: "column", lg: "row",  }}
          justifyContent={"space-between"}
          gap={"10px"}
          height={"fit-content"}
        >
          <Image
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt=""
            height={"100px"}
          />
          <Box margin={"auto"} cursor={"pointer"} textAlign={"left"}>
            <List>
              <ListItem
                fontSize={"17px"}
                onClick={() => setShowList1(!showList1)}
                color={"#eee"}
              >
                Legal
              </ListItem>
            </List>
            {toggleVisible && showList1 && (
              <List listStyleType={"none"} color={"#eee"}>
                <ListItem>Terms and Condition</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Disclaimer</ListItem>
                <ListItem>Caution & Notice</ListItem>
              </List>
            )}
          </Box>

          <Box margin={"auto"} cursor={"pointer"} textAlign={"left"}>
            <List>
              <ListItem
                fontSize={"17px"}
                onClick={() => setShowList2(!showList2)}
                color={"#eee"}
              >
                KFC India
              </ListItem>
            </List>
            {toggleVisible && showList2 && (
              <List listStyleType={"none"} color={"#eee"}>
                <ListItem>Menu</ListItem>
                <ListItem>About KFC</ListItem>
                <ListItem>KFC Care</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Our Golden Past</ListItem>
              </List>
            )}
          </Box>

          <Box cursor={"pointer"} margin={"auto"} textAlign={"left"}>
            <List>
              <ListItem
                fontSize={"17px"}
                onClick={() => setShowList3(!showList3)}
                color={"#eee"}
              >
                KFC Food
              </ListItem>
            </List>
            {toggleVisible && showList3 && (
              <List listStyleType={"none"} color={"#eee"}>
                <ListItem>Menu</ListItem>
                <ListItem>Order Lookup</ListItem>
                <ListItem>Gift Card</ListItem>
                <ListItem>Nuetrition & Allergen</ListItem>
              </List>
            )}
          </Box>

          <Box cursor={"pointer"} margin={"auto"} textAlign={"left"}>
            <List>
              <ListItem
                fontSize={"17px"}
                onClick={() => setShowList4(!showList4)}
                color={"#eee"}
              >
                Support
              </ListItem>
            </List>
            {toggleVisible && showList4 && (
              <List listStyleType={"none"} color={"#eee"}>
                <ListItem>Get Help</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>KFC Fedback</ListItem>
                <ListItem>Privacy Policy </ListItem>
              </List>
            )}
          </Box>

          <UnorderedList
            listStyleType={"none"}
            color={"#eee"}
            display={"flex"}
            margin={"auto"}
          >
            <ListItem>
              {" "}
              <u>
                {" "}
                <MdEditLocation color={"red"} />
              </u>
            </ListItem>
            <u>
              {" "}
              <ListItem>Find KFC</ListItem>
            </u>
          </UnorderedList>

          <UnorderedList
            margin={"auto"}
            listStyleType={"none"}
            display={"flex"}
            gap={"5px"}
            flexDirection={{
              base: "row",
              md: "column",
              sm: "column",
              lg: "row",
              xm:"column"
            
            }}
          >
            <ListItem>
              <Image
                src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
                alt=""
              />
            </ListItem>
            <ListItem>
              <Image
                src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
                alt=""
              />
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
