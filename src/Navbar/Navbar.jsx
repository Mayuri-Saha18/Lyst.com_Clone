import {
    Button,
    Spacer,
  Box,
  Text,Image,
 
  } from "@chakra-ui/react";
import {React,useState} from "react";
 import { Link,NavLink,useNavigate } from "react-router-dom";
 import styles from "../styles/navbar.module.css";
 import "./Navbar.css";
 import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../Image/dressup1.png"
import { createContext, useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
  
export const AppContext = createContext();
  function Navbar() {
    const { isAuth, logOutUser, email } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(false);
    
    const navigate = useNavigate();
  
    return (
      <div style={
        {
          borderBottom:"1px solid black",
        }
        }
      >
        <Box
          alignItems="top"
          bg="white"
          w="100%"
          p={6}
          color="black"
          pb={0}
          borderTop={"1px solid black"}
        >
          <Link to="/">
          <Image
              h={[4, 8, 10, 10]}
              ml={[0, 0, 3, 3]}
              w={["60px", "60px", 180, 180]}
              position="absolute"
             
              display={["block", "block", "none", "none"]}
              src="https://i.postimg.cc/TPBz6N0w/Screenshot-2022-08-24-164137.png"
              alt="lyst"
            />
          </Link>
          <Box display="flex" float="right" padding={0} gap="10px">
            <Text
              mt="5px"
              display={[ "none", "none","block", "block"]}
              fontSize="lg"
            >
              CN-US$
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
              onClick={() => navigate("/login")}
              className="but"
            >
              {isAuth ? (
                <>
                  <button style={{ marginBottom: "0px" }} onClick={logOutUser}>
                    LOGOUT
                  </button>
                </>
              ) : (
                `Sign up or Log in`
              )}
            </Button>
          </Box>
        </Box>
       
         <div className="inner_header_bottom">
        <div className="headder__bottom_img">
          <Link to="/">
            <img src={img1} alt="lyst"/>
          </Link>
        </div>
        <div className="header_bottom">
          <span
            className="woman"
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >
            <Link className="Link_remove" to="/product/women"> WOMEN</Link>
          </span>
          <span
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >
            <Link className="Link_remove" to="/product/men"> MEN</Link>
          </span>
          <div className="header_bottom_search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              placeholder='Search (e.g. "Valentino dresses")'
            />
    
          </div>
        </div>
        <Box
            
              mt={["20px"]}
            >
             
                <AiOutlineHeart className={styles.cart} />
             
            </Box>
         
      </div>
           
       
        <Box h="40px" w={"50%"} float="right">
          {isAuth ? (
            <Text
              float={"right"}
              pr="10px"
              pl="10px"
              bg={"#dfe8f9"}
              borderRadius="10px"
            >
              <BsFillPersonFill />
              {email}
            </Text>
          ) : (
            ""
          )}
        </Box>
        
      </div>
    );
  }
  export default Navbar;
  