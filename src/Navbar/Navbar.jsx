import {
    Button,
    Spacer,
  Box,
  Text,Image,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
import {React} from "react";
//  import { Link,NavLink } from "react-router-dom";
 import styles from "../styles/navbar.module.css"
import { AiOutlineHeart } from "react-icons/ai";
  
  function Navbar() {
   
    // const link = [
    //   {
    //     path: "/womens",
    //     title: "WOMEN",
    //   },
    //   {
    //     path: "/mens",
    //     title: "MEN",
    //   },
    // ];
    return (
      <div className="navbar">
        <Box
          alignItems="top"
          bg="white"
          w="100%"
          p={6}
          color="black"
          pb={0}
          borderTop={"1px solid black"}
          bor
        >
          {/* <Link to="/"> */}
            <Image
              h={[4, 8, 10, 10]}
              ml={[0, 0, 3, 3]}
              w={["60px", "80px", 180, 180]}
              position="absolute"
              display={["block", "block", "none", "none"]}
              src="https://i.postimg.cc/TPBz6N0w/Screenshot-2022-08-24-164137.png"
              alt="Lyst"
            />
          {/* </Link> */}
          <Box display="flex" float="right" padding={0} gap="10px">
            <Text
              mt="5px"
              display={["none", "none", "block", "block"]}
              fontSize="lg"
            >
              IN-USS
            </Text>
            <select name="" placeholder="Help" style={{ outline: "0px",
  border: "0px"}}>
              <option value="">Help center</option>
              <hr />
              <Spacer />
              <option value="">Contact us</option>
              <hr />
              <Spacer />
              <option value="">About us</option>
              <hr />
              <Spacer />
              <option value="">Careers</option>
              <hr />
              <Spacer />
            </select>
            <Button
              pt={["0px", "0px", "0px", "0px"]}
              fontSize={["12px", "12px", "16px", "16px"]}
              w={["110px", "110px", "150px", "150px"]}
              h={["25px", "25px", "35px", "35px"]}
              color="white"
              bg="black"
              _hover={{
                bg: "grey",
              }}
              className="butt1"
            >
              
                Sign up or Log in
             
            </Button>
          </Box>
        </Box>
        <Box mt="30px"
          bg="white"
          w="100%"
          p={6}
          color="black"
          pb={0}
          borderBottom={"1px solid black"}
          bor
        >
          <Box display="flex" gap={30} alignItems="center">
            {/* <Link to="/"> */}
              <Image
                h={[0, 0, 10, 10]}
                ml={[0, 0, 0, 0]}
                w={["0px", "80px", 160, 160]}
                display={["none", "none", "block", "block"]}
                src="https://i.postimg.cc/TPBz6N0w/Screenshot-2022-08-24-164137.png"
                alt="LYST"
              />
            {/* </Link> */}
            {/* {link.map((elem) => (
              <NavLink
                className={({ isActive }) =>
                  !isActive ? styles.active : styles.default
                }
                key={elem.path}
                to={elem.path}
              >
                <Text
                  display={["none", "none", "block", "block"]}
                  mt={0}
                  ml={"-30px"}
                  mr={"-30px"}
                  fontSize={["0px", "0px", "lg", "lg"]}
                >
                  {elem.title}
                </Text>
              </NavLink>
            ))} */}
            <InputGroup
              position={["absolute", "absolute", "relative", "relative"]}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type={"search"}
                w={["85%", "85%", "100%", "100%"]}
                h={["30px", "30px", "40px", "40px"]}
                fontSize={["13px", "13px", "16px", "16px"]}
                isInvalid
                errorBorderColor="black"
                placeholder="SEARCH (EG. VALENTINO DRESSES)"
               
              />
            </InputGroup>
            <Box
              mt={["-1000px", "-1000px", "0px", "0px"]}
              mr={["-0px", "0px", "-200px", "-200px"]}
              ml={["75px", "75px", "10px", "10px"]}
            >
             
                <AiOutlineHeart className={styles.cart} />
             
            </Box>
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            <SimpleGrid
              columns={5}
              m={"auto"}
              textAlign={"center"}
              w={"100%"}
              ml={"2px"}
              h="30px"
            >
              {/* {link.map((elem) => (
                <NavLink
                  className={({ isActive }) =>
                    !isActive ? styles.iactive : styles.idefault
                  }
                  key={elem.path}
                  to={elem.path}
                >
                  <Text mt={"2px"} w={"66px"} fontSize="16px">
                    {elem.title}
                  </Text>
                </NavLink>
              ))} */}
              <Text mt={"2px"} fontSize="16px">
                IN-USS
              </Text>
              <select name="" placeholder="Help" id="navselect">
              <option value="">Help center</option>
              <hr />
              <Spacer />
              <option value="">Contact us</option>
              <hr />
              <Spacer />
              <option value="">About us</option>
              <hr />
              <Spacer />
              <option value="">Careers</option>
              <hr />
              <Spacer />
            </select>
              <Box ml="30px">
                
                  <AiOutlineHeart className={styles.cart} />
               
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        
      </div>
    );
  }
  export default Navbar;
  