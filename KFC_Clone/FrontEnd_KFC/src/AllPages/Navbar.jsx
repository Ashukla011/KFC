import {
  Box,
  Flex,
  Avatar,
  HStack,
  Image,
  IconButton,
  Button,
  Text,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link, } from "react-router-dom";
import Account_Icon from "../assets/Account_Icon.svg";
import bucket_cart_icon from "../assets/bucket_cart_icon.svg";

const Links = [
  { id: 1, linkto: "/RestaurentMune", Title: "Menu" },
  { id: 2, linkto: "/Deals", Title: "Deals" },
];



export function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "white")} px={4} height={"100px"} mt={{base:"50px",lg:"50px",md:"50px",sm:"5px",xm:"5px"}} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"} >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Image
                  src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                  alt=""
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, _i) => (
                <Heading fontSize="20px" fontFamily="Helvetica" key={_i++}>
                  <Link to={link.linkto}>{link.Title}</Link>
                </Heading>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Image src={Account_Icon} alt="" />
            <Button
              variant={"solid"}
              colorScheme={"whtie"}
              color={"#000"}
              size={"sm"}
              fontSize={"18px"}
              mr={4}
            >
              <Link to="/Sign"> Sign</Link>
            </Button>
            <Divider
              orientation="vertical"
              color={"white"}
              border={"1px solid white"}
            />
            <Menu>
              <Text>₹ 0</Text>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={bucket_cart_icon} />
                <Link to="/Cart"></Link>
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, _i) => (
                <Heading fontSize="20px" fontFamily="Helvetica" key={_i++}>
                  <Link to={link.linkto}>{link.Title}</Link>
                </Heading>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

   
    </>
  );
}
