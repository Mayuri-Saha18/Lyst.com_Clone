import React from "react";
 import { Routes, Route } from "react-router-dom";
import  Home from "../Components/Home";
// import Womens from "../Components/Womens";
// import Mens from "../Components/Mens";
import Login from "../Components/Login";
import { Mens } from "../Components/Products/men";
//  import PrivateRoutes from "./PrivateRoutes";
function AllRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} /> */}
        <Route path="/product/men" element={<Mens />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>

     
   
  );
}

export default AllRoutes;

