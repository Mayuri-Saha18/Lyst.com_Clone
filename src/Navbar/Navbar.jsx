import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Spacer,
    useDisclosure,
  Box,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
 import styles from "../styles/navbar.module.css"
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../Image/dressup1.png"
  
  function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const link = [
    //     {
    //       path: "/women",
    //       title: "WOMEN",
    //     },
    //     {
    //       path: "/mens",
    //       title: "MEN",
    //     },
    //   ];
    return (
      <div>
        <div style={{width: "95%",
  margin: "auto"}}>
          <div style={{height: "50px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"}}>
            <div style={{width: "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"}}>
              <div>
                <Button
                  style={{ background: "none", fontSize: "12px" ,border: "0px"}}
                  onClick={onOpen}
                >
                  CN-US$
                </Button>
                <Modal
                  style={{ borderRadius: "0px" }}
                  isCentered
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset="slideInBottom"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Set your country</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Select placeholder="Select option">
                        <option value="option1">Afghanistan</option>
                        <option value="option2">Albania</option>
                        <option value="option3">Algeria</option>
                        <option value="option1">Andorra</option>
                        <option value="option2">Angola</option>
                        <option value="option3">Antigua and Barbuda </option>
                        <option value="option1">Argentina</option>
                        <option value="option2">Armenia</option>
                        <option value="option3">Australia</option>
                        <option value="option1">Austria</option>
                        <option value="option2">Azerbaijan</option>
                        <option value="option3">Bahamas</option>
                        <option value="option1">Bahrain</option>
                        <option value="option2">Bangladesh</option>
                        <option value="option3">Barbados</option>
                        <option value="option1">Belarus</option>
                        <option value="option2">Belgium</option>
                        <option value="option3">Belize</option>
                        <option value="option1">Benin</option>
                        <option value="option2">Bhutan</option>
                        <option value="option3">Bolivia</option>
                        <option value="option1">Bosnia and Herzegovina </option>
                        <option value="option2">Brazil</option>
                        <option value="option3">Brunei</option>
                        <option value="option1">Bulgaria</option>
                        <option value="option2">Côte d'Ivoire</option>
                        <option value="option3">Cabo Verde</option>
                        <option value="option1">Cambodia</option>
                        <option value="option2">Cameroon</option>
                        <option value="option3">Canada</option>
                        <option value="option3">Central African Republic </option>
                        <option value="option1">
                          Democratic Republic of the Congo{" "}
                        </option>
                        <option value="option2">Denmark</option>
                        <option value="option3">Djibouti</option>
                        <option value="option1">Dominica</option>
                        <option value="option2">Dominican Republic </option>
                        <option value="option3">Ecuador</option>
                        <option value="option1">Egypt</option>
                        <option value="option2">El Salvador </option>
                        <option value="option3">Equatorial Guinea </option>
                        <option value="option1">Eritrea</option>
                        <option value="option2">Estonia</option>
                        <option value="option3">Fiji</option>
                        <option value="option2">Finland</option>
                        <option value="option3">France</option>
                        <option value="option2">Gabon</option>
                        <option value="option3">Gambia</option>
                        <option value="option2">Georgia</option>
                        <option value="option3">Germany</option>
                        <option value="option2">Ghana</option>
                        <option value="option3">Greece</option>
                        <option value="option2">Grenada</option>
                        <option value="option3">Haiti</option>
                        <option value="option2">Holy See</option>
                        <option value="option3">Honduras</option>
                        <option value="option2">Hungary</option>
                        <option value="option3">Iceland</option>
                        <option value="option2">India</option>
                        <option value="option3">Indonesia</option>
                        <option value="option2">Iran</option>
                        <option value="option3">Iraq</option>
                        <option value="option2">Ireland</option>
                        <option value="option3">Israel</option>
                        <option value="option2">Italy</option>
                        <option value="option3">Jamaica</option>
                        <option value="option2">Japan</option>
                        <option value="option3">Jordan</option>
                        <option value="option2">Kazakhstan</option>
                        <option value="option3">Kenya</option>
                        <option value="option2">Kiribati</option>
                        <option value="option3">Kuwait</option>
                        <option value="option2">Kyrgyzstan</option>
                        <option value="option3">Laos</option>
                        <option value="option2">Latvia</option>
                        <option value="option3">Lebanon</option>
                        <option value="option2">Lesotho</option>
                        <option value="option3">Liberia</option>
                        <option value="option2">Libya</option>
                        <option value="option3">Liechtenstein</option>
                        <option value="option2">Madagascar</option>
                        <option value="option3">Malawi</option>
                        <option value="option2">Malaysia</option>
                        <option value="option3">Maldives</option>
                        <option value="option2">Marshall Islands</option>
                        <option value="option3">Marshall Islands</option>
                        <option value="option2">Morocco</option>
                        <option value="option2">Myanmar </option>
                        <option value="option3">Nauru</option>
                        <option value="option2">Nepal</option>
                        <option value="option3">Niger</option>
                        <option value="option2">Oman</option>
                        <option value="option3">Palau</option>
                        <option value="option2">Uganda</option>
                        <option value="option3">Ukraine</option>
                        <option value="option2">United Arab Emirates</option>
                        <option value="option3">United Kingdom</option>
                        <option value="option2">United States of America</option>
                        <option value="option3">Uruguay</option>
                        <option value="option2">Yemen</option>
                        <option value="option3">Zambia</option>
                        <option value="option2">Zimbabwe</option>
                      </Select>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        style={{ background: "black", color: "white" }}
                        mr={130}
                        onClick={onClose}
                      >
                        Set Country
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
              <select name="" placeholder="Help" style={{outline: "0px",
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
            >
                Sign up or Log in
            </Button>
            </div>
          </div>
          <Box
          bg="white"
          w="100%"
          p={6}
          color="black"
          pb={0}
          borderBottom={"1px solid black"}
          bor
        >
          <Box display="flex" gap={20} alignItems="center">
           
              <Image
                h={[0, 0, 10, 10]}
                ml={[0, 0, 0, 0]}
                w={["0px", "80px", 160, 160]}
                display={["none", "none", "block", "block"]}
                src={img1}
                borderRadius="50%"
                alt="Dan Abramov"
              />
           
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
                w={["90%", "90%", "90%", "90%"]}
                h={["30px", "30px", "40px", "40px"]}
                fontSize={["13px", "13px", "16px", "16px"]}
                isInvalid
                errorBorderColor="black"
                placeholder='SEARCH (EG. "VALENTINO DRESSES")'
               
              />
            </InputGroup>
            <Box
              ml={["10px"]}
            >
            
                <AiOutlineHeart className={styles.cart}/>
             
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
              
              <Box ml="20px">
                
                  <AiOutlineHeart className={styles.cart} />
               
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
          
        </div>
      </div>
    );
  }
  export default Navbar;
  