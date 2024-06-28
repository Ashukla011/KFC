import React, { useEffect } from "react";
import { Link } from "react-scroll";
import MenuChildOne from "../Components/MenuChildOne";
import { PeriPeri } from "../Components/PeriPeri";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/KfcDataSlice";
import ScrollSpy from "react-scrollspy-navigation";
import Loading from "../Components/Loadding";
import "../styles/MenuComponents.css";
import { v4 as uuidv4 } from "uuid";

import {
  Box,
  Heading,
  Image,
  Grid,
  ListItem,
  UnorderedList,
  Toast,
  useToast,
} from "@chakra-ui/react";

export const RestaurentMune = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { loading, error, data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const HandleCardData = (iteam) => {
    let cartiteam = JSON.parse(localStorage.getItem("kfcCart")) || [];
    let localstorageiteam = cartiteam.find((data) => data._id === iteam._id);
    console.log("iteam", iteam);
    if (localstorageiteam) {
      localstorageiteam.price += iteam.price;
      localstorageiteam.quantity += 1;
    } else {
      cartiteam.push(iteam);
    }

    toast({
      position: "top-center",
      title: "Item Added Sucessfuly ",
      description: "We've Added  your product for you.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    localStorage.setItem("kfcCart", JSON.stringify(cartiteam));
  };

  const CHICKEN_ROLLS =
    data && data.filter((iteam) => iteam.foodType === "ChickenRools");
  const Peri_Peri =
    data && data.filter((iteam) => iteam.foodType === "Peri_Peri");
  const CHICKENBUCKETS =
    data && data.filter((iteam) => iteam.foodType === "CHICKENBUCKETS");
  const BOXMEALS =
    data && data.filter((iteam) => iteam.foodType === "BOXMEALS");
  const BURGERS = data && data.filter((iteam) => iteam.foodType === "BURGERS");
  const RICEBOWLZ =
    data && data.filter((iteam) => iteam.foodType === "RICEBOWLZ");
  const SIDES = data && data.filter((iteam) => iteam.foodType === "SIDES");
  const BEVERAGES =
    data && data.filter((iteam) => iteam.foodType === "BEVERAGES");

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          sm: "column",
        }}
        margin={{ lg: "20px" }}
        padding={{ lg: "20px" }}
      >
        <Box
          height={{ base: "100px", lg: "800px", md: "100px", sm: "100px" }}
          width={{ base: "100%", lg: "25%", md: "100%", sm: "100%" }}
          padding={"10px"}
          position={{ lg: "fixed" }}
          left={{ lg: 50, md: 0, base: 0, sm: 0 }}
          top={{ base: 0, md: 0, sm: 0, lg: 20 }}
        >
          <Image
            className="img"
            src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
            alt=""
            display={{
              base: "hidden",
              sm: "hidden",
              md: "visible",
              lg: "visible",
            }}
          />

          <Heading
            as={"h1"}
            fontSize={"38px"}
            fontWeight={"700"}
            fontFamily={"National 2 Condensed"}
            textTransform={"uppercase"}
            display={{ base: "hidden", sm: "hidden" }}
          >
            kfc menu{" "}
          </Heading>

          <ScrollSpy activeClass="navActive" behavior="smooth">
            <UnorderedList
              listStyleType={"none"}
              lineHeight={{ base: "15px", md: "30px", sm: "30px", lg: "40px" }}
              display={{ base: "flex", md: "flex", sm: "flex", lg: "block" }}
              justifyContent={"space-between"}
              gap={20}
              flexDirection={{
                base: "row",
                md: "row",
                sm: "row",
                lg: "row",
              }}
              padding={"20px"}
              overflowX={"auto"}
              overflowY={"hidden"}
            >
              <ListItem w="100%" h="10">
                <Link
                  to="PERI_PERI_MATCH_SPECIALS"
                  smooth={true}
                  duration={500}
                  className="periperi"
                >
                  <a href="#PERI_PERI_MATCH_SPECIALS">
                    PERI PERI MATCH SPECIALS
                  </a>
                </Link>
              </ListItem>
              <ListItem w="100%" h="10">
                <Link
                  to="CHICKEN_ROLLS"
                  smooth={true}
                  duration={500}
                  className="chickenrolls"
                >
                  <a href="#CHICKEN_ROLLS">CHICKEN ROLLS</a>
                </Link>
              </ListItem>
              <ListItem w="100%" h="10">
                <Link
                  to="CHICKEN_BUCKETS"
                  smooth={true}
                  duration={500}
                  className="chickenbuckets"
                >
                  <a href="#CHICKEN_BUCKETS">CHICKEN BUCKETS</a>
                </Link>
              </ListItem>

              <ListItem w="100%" h="10">
                <Link
                  to="BOX_MEALS"
                  smooth={true}
                  duration={500}
                  className="boxmeals"
                >
                  <a href="#BOX_MEALS">BOX MEALS</a>
                </Link>
              </ListItem>
              <ListItem w="100%" h="10">
                <Link
                  to="BURGERS"
                  smooth={true}
                  duration={500}
                  className="burgers"
                >
                  <a href="#BURGERS">BURGERS</a>
                </Link>
              </ListItem>
              <ListItem w="100%" h="10">
                <Link
                  to="RICEBOWLZ"
                  smooth={true}
                  duration={500}
                  className="burgers"
                >
                  <a href="#RICEBOWLZ">RICE BOWLZ</a>
                </Link>
              </ListItem>
              <ListItem w="100%" h="10">
                <Link
                  to="SIDES"
                  smooth={true}
                  duration={500}
                  className="snacks"
                >
                  <a href="#SIDES">SIDES</a>
                </Link>
              </ListItem>
              <ListItem w="100%" h="10">
                <Link
                  to="Beverages_DESEERTS"
                  smooth={true}
                  duration={500}
                  className="beverages"
                >
                  <a href="#Beverages_DESEERTS">BEVERAGES</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </ScrollSpy>
        </Box>

        <Box
          height={"auto"}
          width={{ lg: "75%", md: "100%", sm: "100%", base: "100%" }}
          position={"absolute"}
          right={0}
          top={{ base: 300, md: 300, sm: 300, lg: 20 }}
        >
          {loading ? (
            <Loading />
          ) : (
            <Box>
              <section id="PERI_PERI_MATCH_SPECIALS">
                <Box background={"#f8f7f5"} paddingLeft={"2vw"}>
                  <Box
                    fontFamily="National 2 Condensed"
                    fontSize="36px"
                    fontWeight="700"
                    lineHeight="36px"
                    textTransform="uppercase"
                    id="PERI_PERI_MATCH_SPECIALS"
                    pl={"10px"}
                    pt={"20px"}
                    pb={"15px"}
                  >
                    <Heading as={"h2"}>peri peri match specials</Heading>
                  </Box>

                  <Grid
                    templateColumns={{
                      base: "repeat(1,1fr)",
                      md: "repeat(2,1fr)",
                      lg: "repeat(3,1fr)",
                      sm: "repeat(1,1fr)",
                    }}
                    justifyContent={"space-evenly"}
                    gap={"10px"}
                    height={"auto"}
                    padding={"10px"}
                  >
                    {Peri_Peri &&
                      Peri_Peri.map((iteam) => (
                        <PeriPeri
                          id={uuidv4()}
                          name={iteam.name}
                          image={iteam.image}
                          icon={iteam.icon}
                          type={iteam.type}
                          quantity={iteam.quantity}
                          description={iteam.description}
                          price={iteam.price}
                          onClick={() => HandleCardData(iteam)}
                        />
                      ))}
                  </Grid>
                </Box>
              </section>

              <section id="CHICKEN_ROLLS">
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="CHICKEN_ROLLS"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    chicken rolls
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {CHICKEN_ROLLS &&
                    CHICKEN_ROLLS.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                        onClick={() => HandleCardData(iteam)}
                      />
                    ))}
                </Grid>
              </section>

              <section id="CHICKEN_BUCKETS">
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="CHICKEN_ROLLS"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    chicken rolls
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {CHICKENBUCKETS &&
                    CHICKENBUCKETS.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                      />
                    ))}
                </Grid>
              </section>

              <section id="BOX_MEALS">
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="BOX_MEALS"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    box meals
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {BOXMEALS &&
                    BOXMEALS.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                        onClick={() => HandleCardData(iteam)}
                      />
                    ))}
                </Grid>
              </section>

              <section id={"BURGERS"}>
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="BURGERS"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    burgers
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {BURGERS &&
                    BURGERS.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                        onClick={() => HandleCardData(iteam)}
                      />
                    ))}
                </Grid>
              </section>
              <section id={"RICEBOWLZ"}>
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="RICEBOWLZ"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    rice bowlz
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {RICEBOWLZ &&
                    RICEBOWLZ.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                        onClick={() => HandleCardData(iteam)}
                      />
                    ))}
                </Grid>
              </section>
              <section id={"SIDES"}>
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="SIDES"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    sides
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {SIDES &&
                    SIDES.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                        onClick={() => HandleCardData(iteam)}
                      />
                    ))}
                </Grid>
              </section>

              <section id={"Beverages_DESEERTS"}>
                <Box
                  fontFamily="National 2 Condensed"
                  fontSize="36px"
                  fontWeight="700"
                  lineHeight="36px"
                  textTransform="uppercase"
                  id="Beverages_DESEERTS"
                  paddingLeft={"25px"}
                  paddingTop={"20px"}
                  paddingBottom={"20px"}
                >
                  <Heading as={"h2"} textTransform={"uppercase"}>
                    beverages
                  </Heading>
                </Box>

                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                    sm: "repeat(1,1fr)",
                  }}
                  justifyContent={"space-evenly"}
                  gap={"10px"}
                  padding={"30px"}
                >
                  {BEVERAGES &&
                    BEVERAGES.map((iteam) => (
                      <MenuChildOne
                        Id={uuidv4()}
                        image={iteam.image}
                        Name={iteam.name}
                        icon={iteam.icon}
                        type={iteam.type}
                        quantity={iteam.quantity}
                        price={iteam.price}
                        Description={iteam.description}
                        onClick={() => HandleCardData(iteam)}
                      />
                    ))}
                </Grid>
              </section>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
