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
import { Link } from "react-router-dom";
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
      <Box
        bg={useColorModeValue("white", "white")}
        px={4}
        height={"100px"}
        mt={{ base: "50px", lg: "50px", md: "50px", sm: "5px", xm: "5px" }}
        position="fixed"
        top={0}
        width="100%"
        zIndex={1000}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
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
              <Link to="/Sign"> Sign In</Link>
            </Button>
            <Divider orientation="vertical" color={"grey"} />
            <Menu>
              <Text>₹ 0</Text>
              <Link to="/Cart">
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {" "}
                <Text
                  position={"absolute"}
                  top={"20px"}
                  left={"25px"}
                  zIndex={"999"}
                  fontWeight={"705"}
                >
                  0
                </Text>
                <Avatar size={"lg"} src={bucket_cart_icon} />
              </MenuButton>
              </Link>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            zIndex={1000}
            backgroundColor={"grey"}
            width={"100%"}
            height={"100vh"}
          >
            <Stack as={"nav"} spacing={4} px={10}>
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
