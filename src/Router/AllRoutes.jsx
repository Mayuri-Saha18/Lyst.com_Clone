import React from "react";
 import { Routes, Route } from "react-router-dom";
import  Home from "../Components/Home";
// import Womens from "../Components/Womens";
// import Mens from "../Components/Mens";
import Login from "../Components/Login";
import { Mens } from "../Components/Products/men";
import { Womens } from "../Components/Products/women";
import Details from "../Components/Products/detail"
  import PrivateRoutes from "./PrivateRoutes";
function AllRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} /> */}
        <Route path="/product/men" element={<Mens />} />
        <Route path="/product/women" element={<Womens />} />
        <Route path="/login" element={<Login />}></Route>
        <Route
        path="/details"
        element={
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        }
      ></Route>
      </Routes>

     
   
  );
}

export default AllRoutes;

