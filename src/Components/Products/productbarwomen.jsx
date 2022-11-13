import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import styledComponents from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModalComponent } from "./modalcomponent";

const Container = styledComponents.div`
    width:100%;
  height:100%;
    display:flex;
  flex-direction: column;
`;
const Titlebar = styledComponents.div`
   display:flex;
   flex-direction: column;
`;

const Sort = styledComponents.div`
   display:flex;
   justify-content:space-between;
`;

const Box = styledComponents.div`
   flex:4;
   height:1000px;
   display:grid;
   grid-template-columns: repeat(4,25%);
   grid-template-rows: repeat(40,500px);
`;
const Button=styledComponents.div`

background-color:#202020;
                color:white;
                margin-top:10px;
                margin-left:4px;
                size:xs;
                float:left;
    
               
`;
const Productcount = styledComponents.p`
font-size:x-large;
`;
const SortButton = styledComponents.select`
background-color:white;
color:black;
font-weight:bold;
padding:0px 35px;
height:35px;
margin-top:25px;
`;
const ProductBox = styledComponents.div`
 border:0.1px solid gainsboro;
 display:flex;
 flex-direction:column;
 
`;
const Image = styledComponents.img`
  width:90%;
  height:100%;
  object-fit:cover;
`;
const ImageDiv = styledComponents.div`
height:70%;
flex:3;
width:100%;
margin:auto;
padding:10px;
`;
const ProductInfo = styledComponents.div`
   width:100%;
   height:30%;
   display:flex;
   flex-direction: column;
   padding:5px;
   justify-content:center;
   flex:1;
`;
const InfoDiv = styledComponents.div`
  width:100%;
  height:40%;
  flex:1;
`;
const Details = styledComponents.p`
   margin-top:10px;
   font-size:15px;
`;
const ProTitle = styledComponents.p`
   font-size:large;
`;
const Pricediv = styledComponents.div`
  display:flex;
  margin-top:20px;
  justify-content:left;

`;
const Offprice = styledComponents.p`
  text-decoration: line-through;
  font-weight:bold;
`;
const Proprice = styledComponents.p`
  color:red;
  font-weight:bold;
  margin-left:5px;
`;
const Offer = styledComponents.p`
 color:gray;
 margin-left:10px;
`;
const Icondiv = styledComponents.div`

 width:8%;
 height:8%;
 border-radius:50%
 margin:auto;
 background-color:white;
 margin-left:200px;
 transition:all 0.5s ease;
 cursor:pointer;
 &:hover{
  transform:scale(1.5);
 }
`;

export const ProductbarW = () => {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
    localStorage.setItem("details", JSON.stringify(item))
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    return await axios
      .get(`https://json-server-ms.herokuapp.com/data`)
      .then((res) => {
        setData(res.data);
        const filteredData = res.data.filter((obj) => {
          return obj.gender === "woman";
        });
        setFiltered(filteredData);
      })
      .catch((err) => console.log(err));
  };

  const handleSort = (e) => {
    if (e.target.value === "highToLow") {
      console.log(e.target.value);
      setFiltered([...data].sort((a, b) => b.offPrice - a.offPrice));
    } else if (e.target.value === "lowToHigh") {
      setFiltered([...data].sort((a, b) => a.offPrice - b.offPrice));
    } else if (e.target.value === "no") {
      setFiltered(data);
    }
  };
  return (
    <Container>
      <main>
        <Titlebar>
          <Sort>
            <Productcount>Products,Stores</Productcount>
            <SortButton onClick={handleSort}>
              <option value="no">Sort By Recommended</option>
              <option value="highToLow">Sort by price(high to low)</option>
              <option value="lowToHigh">Sort by price(low to high)</option>
            </SortButton>
          </Sort>
        </Titlebar>
        <Box>
          {filtered.map((el) => (
            <ProductBox key={el.id}>
              <Link to="/details">
              <ImageDiv>
                <Image src={el.Image}></Image>
              </ImageDiv>
              
              <ProductInfo>
                <Icondiv>
                  <BsHeart />
                </Icondiv>
                <InfoDiv>
                  <ProTitle>{el.title}</ProTitle>
                  <Details>{el.details}</Details>
                </InfoDiv>
                <Pricediv>
                  <Offprice>{el.price} </Offprice>
                  <Proprice>${el.offPrice}</Proprice>
                  <Offer>({el.off})</Offer>
                </Pricediv>
                
              </ProductInfo>
              </Link>
              <Button
                onClick={() => handleClick(el)}
              >
              View Details
              </Button>
            </ProductBox>
            
          ))}
          
        </Box>
      </main>
      <ModalComponent
    data={selectedBox}
    isOpen={isModalVisible}
    setIsOpen={setIsModalVisible}
  />
    </Container>
    
  );
};
