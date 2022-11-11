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
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
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
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
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
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Shipping
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
             </div>
         </div>
         )}
        </div>
    );
};
export const Color=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Color
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
             </div>
         </div>
         )}
        </div>
    );
};

export const Materials=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Materials
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
             </div>
         </div>
         )}
        </div>
    );
};

export const Designers=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Designers
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
             </div>
         </div>
         )}
        </div>
    );
};

export const Stores=()=>{
    const [isActive,setIsActive]=useState(false);
   
    return (
        <div className="dropdown">
         <div className="dropdownbtn" onClick={e=>setIsActive(!isActive)}>
             Stores
             <BsChevronDown />
         </div>
         {isActive && (
             <div className="dropdwonContent">
             <div className="dropdownItems">
             <p><input type="checkbox" name="" id="" />Women's</p>
             <p><input type="checkbox" name="" id="" />Men's</p>
             </div>
         </div>
         )}
        </div>
    );
};