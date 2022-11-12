import {BsChevronDown} from "react-icons/bs"
import { useState } from "react";

import "./sortingDropdown.css"
import { Link } from "react-router-dom";

export const Gender=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Gender
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <Link to="/product/women"><p>Women's</p></Link>

             <Link to="/product/men"><p>Men's</p></Link>
             </div>
         </div>
         )}
        </div>
    );
};

export const Category=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Category
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Activewear</p>
             <p><input type="checkbox" name="" id="" />Beachwear</p>
             <p><input type="checkbox" name="" id="" />Jeans</p>
             <p><input type="checkbox" name="" id="" />Coats</p>
             <p><input type="checkbox" name="" id="" />Pants</p>
             <p><input type="checkbox" name="" id="" />Nightwear</p>
             <p><input type="checkbox" name="" id="" />Jackets</p>
             <p><input type="checkbox" name="" id="" />Shirts</p>
             <p><input type="checkbox" name="" id="" />Shorts</p>
             <p><input type="checkbox" name="" id="" />Suits</p>
             <p><input type="checkbox" name="" id="" />Sweaters and knitwear</p>
             <p><input type="checkbox" name="" id="" />T-shirts</p>

             </div>
         </div>
         )}
        </div>
    );
};
export const Sale=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Sale
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />on sale</p>
             <p><input type="checkbox" name="" id="" />20% off or more</p>
             <p><input type="checkbox" name="" id="" />50% off or more</p>
             <p><input type="checkbox" name="" id="" />70% off or more</p>
             </div>
         </div>
         )}
        </div>
    );
};
export const Price=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Price
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Below $1000</p>
             <p><input type="checkbox" name="" id="" />Below $500</p>
             <p><input type="checkbox" name="" id="" />Below $200</p>
             <p><input type="checkbox" name="" id="" />Below $100</p>
    
             </div>
         </div>
         )}
        </div>
    );
};
export const Shipping=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" >
             Shipping
             <BsChevronDown />
         </div>
       
        </div>
    );
};
export const Color=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" >
             Color
             <BsChevronDown />
         </div>
       
        </div>
    );
};

export const Materials=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" >
             Materials
             <BsChevronDown />
         </div>
        
        </div>
    );
};

export const Designers=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" >
             Designers
             <BsChevronDown />
         </div>
        
        </div>
    );
};

export const Stores=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" >
             Stores
             <BsChevronDown />
         </div>
        
        </div>
    );
};