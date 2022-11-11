import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import img2 from "../Image/imgI.png"

const Bottom = () => {
  return (
    <div style={
      {
        borderTop:"1px solid black",
        marginTop:"30px"
      }
    }>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        spacing="0px"
        bg={"#f5f4f2"}
        p={30}
        pt={"100px"}
      >
        <Box bg="#f5f4f2" p={30} pb={36} w={["100%", "100%", "100%", "100%"]}>
          <Image
            w={"100%"}
            src={img2}
            alt="img"
          />
          <Text textAlign={"left"} mt={16} w={"80%"}  ml={[0,0,"100px","100px"]}>
            Learn about the LYST app for iPhone, iPad and Android.
          </Text>
          <Text ml={[0,0,"100px","100px"]} textAlign={"left"}>
            © 2022 LYST
          </Text>
        </Box>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={20}>
          <Box bg="f5f4f2" textAlign="left" pl={50} ml={[0,0,20,20]}>
            <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
              INTERNATIONAL
            </h2>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - AU</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - CA</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - UK</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - Österreich</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - Schweiz</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - Deutschland</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - España</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - France</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - Italia</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - 日本</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST - België</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>LYST- Nederland</Text>
          </Box>
          <Box bg="f5f4f2" textAlign="left" pl={50} ml={[0,0,20,20]}>
            <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
              Help and info
            </h2>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Help center</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>About us</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Shipping policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Returns policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Payments</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Refund policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Developers</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Careers</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Contact</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Terms & conditions</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Privacy & cookie policy</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Intellectual property</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Categories</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Become a partner</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst Insights</Text>
            <Text fontWeight={500} cursor="pointer" _hover={{color:"blue", textDecoration:"underline"}}>Lyst News</Text>
          </Box>
          </SimpleGrid>
      </SimpleGrid>
    </div>
  );
};

export default Bottom;

