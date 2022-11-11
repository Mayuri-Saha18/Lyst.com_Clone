import styledComponents from "styled-components";
import { Category, Color, Designers, Gender, Materials, Price, Sale, Shipping, Stores } from "./dropdown";

const Container=styledComponents.div`
    width:100%;
    height:800px;
    display:flex;
    flex-direction: column;
    overflow-y:scroll;
`;
const Box=styledComponents.div`
    flex:8;
`;
const Titlebar=styledComponents.div`
    flex:1;
    justify-content: centre;
    display:flex;
`;
const Filter = styledComponents.p`
    font-size:25px;
    height:25%;
  justify-content: space-between;

`;
const Clearall=styledComponents.span`
  font-size:medium;
  font-weight:bold;
  margin-left:110px;
`;
const BrandDiv=styledComponents.div`
  border-top:0.5px solid gray;
  display:flex;
  flex-direction:column;
`;
const Anchor=styledComponents.a`
  text-decoration:none;
 
  color:black;
  font-size:small;
  letter-spacing:0.5px;
  padding:5px 0;

  &:hover{
    text-decoration:underline;
  }
`;
export const Sidebar=()=>{
    return (
      <Container>
        <Titlebar>
            <Filter>Filters <Clearall>Clear all</Clearall></Filter>
            
        </Titlebar>
           <Box>
             <Gender/>
             <Category/>
             <Sale/>
             <Price/>
             <Shipping/>
             <Color/>
             <Materials/>
             <Designers/>
             <Stores/>
            <BrandDiv>
            <h3>Top Brands for clothing</h3>
            <Anchor href="">
            DSquared² Clothing
            </Anchor>
            <Anchor href="">Dolce & Gabbana Clothing</Anchor>
            <Anchor href="">BOSS by HUGO BOSS Clothing</Anchor>
            <Anchor href="">Polo Ralph Lauren Clothing</Anchor>
            <Anchor href="">Emporio Armani Clothing</Anchor>
            <Anchor href="">Brunello Cucinelli Clothing</Anchor>
            <Anchor href="">PT Torino Clothing</Anchor>
            <Anchor href="">Moschino Clothing</Anchor>
            <Anchor href="">Alexander McQueen Clothing</Anchor>
            <Anchor href="">Valentino Clothing</Anchor>
            <Anchor href="">DIESEL Clothing</Anchor>
            <Anchor href="">Stone Island Clothing</Anchor>
            <Anchor href="">C.P. Company Clothing</Anchor>
            <Anchor href="">Barbour Clothing</Anchor>
            </BrandDiv>
      

           </Box>
      </Container>
    );
};