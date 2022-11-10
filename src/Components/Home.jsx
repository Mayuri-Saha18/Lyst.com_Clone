import React from "react"
import { Slider } from "./Carousel/Slider";
import "./HomePage.css";
function Home()  {
    const data = [
        {
          image:
            "https://cdna.lystit.com/cms/blackfriday_XL_2800_1050_23a75a1eaf.gif"
        },
        {
          image:
            "https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png"
        },
        {
          image:
            "https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png"
        },
        {
          image:
            "https://cdna.lystit.com/cms/blackfriday_XL_2800_1050_23a75a1eaf.gif"
        },
       
      ];
      
    return (
        <div>
          
            <div className="imgbg" >
            <Slider data={data} />
           </div>

<div id="container2" >
    <div >
        {/* <h1>BREAKOUT BRANDS</h1> */}
    </div>

    
</div>
<div className="catog" style={{marginTop:"50px"}}>
    <div className="box1">
     <h1 className="head1" >WHAT TO WISHLIST NOW</h1>
    <img className="imgbox" src="https://cdna.lystit.com/cms/5_C90_EA_3_D_C641_4_C59_AEE_7_729_E7036_BCF_1_ea93f2a099.PNG" alt=""/>

    </div>
    <div className="box1">
    <h1 className="head1">AHEAD OF THE TREND</h1>
    <img className="imgbox" src="https://cdna.lystit.com/cms/791d5cce_14ec_4b7a_b6df_6cb35f1abf9c_0e299e3b12.png" alt=""/>
    </div>
    <div className="box1">
   <h1 className="head1">JUST LANDED :LOEWE F/W'22</h1>
  <img  className="imgbox" src="https://cdna.lystit.com/cms/f78e6396_e4f3_4c06_b8da_e9a03e5cd2e6_8a37c6d66c.png" alt=""/>
    </div>
    <div className="box1">
    <h1 className="head1">IF YOU ONLY BUY ONE THING</h1>
    <img className="imgbox" src="https://cdna.lystit.com/cms/660e7499_cd9e_4185_ab62_d391ade33995_ba91f9c180.png" alt=""/>
    </div>
    <div className="box1">
     <h1 className="head1" >STRATEGIC BUYS</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/b64f1667_734e_4565_ada8_f8fd0a6fefc9_0fac2b73d5.png" alt=""/>

    </div>
    <div className="box1">
     <h1 className="head1" >CHRISP MONOCHROME</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/Image_from_i_OS_570_8c4ba5ce61.png" alt=""/>

    </div>
</div>

<div className="catog" id="catog">
<div className="box1">
     <h1 className="head1">FERRAGAMO SS23 PREVIEW</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/Q4_Nov_Lyst_Homepage_Top_Lyst_Banner_600x600_US_8d5732b497.jpg" alt=""/>
    </div>
    <div className="box1">
     <h1 className="head1">SHOP THE LATEST FEAR OF GOD ESSENTIALS AT SSENSE</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/ssense_600_x_600_woman_a1d11da9ce.jpg" alt=""/>
    </div>
    <div className="box1">
     <h1 className="head1">BODEN UPTO 15% OFF + FREE SHIPPING WHEN YOU SPEND $49 WITH CODE F2L9</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/600x600_Boden_7_Nov_6e206863ac.jpg" alt=""/>
    </div>
    <div className="box1">
     <h1 className="head1">SEBRINA ZENG I SUSTAINABLE DESIGNER LEATHER GOODS</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg" alt=""/>
    </div>
    <div className="box1">
     <h1 className="head1">ITALIST: SHOP DESIGNER BRANDS AND SAVE UPTO 70%</h1>
     <img className="imgbox" src="https://cdna.lystit.com/cms/JPG_SS_22_RTW_TOP_THE_ATTICO_PANTS_DOLCE_and_GABBANA_BAG_PRADA_WOMAN_1_8a2611b9e1.jpg" alt=""/>
    </div>
    
    <div className="box1">
    <h1 className="head1">THE MULBERRY SOFTIE- A BAG MADE TO SQUIZEED</h1>
    <img className="imgbox" src="https://cdna.lystit.com/cms/Screenshot_2022_03_08_at_14_40_26_4809776918.png" alt=""/>
    </div>
    

</div>

<div id="offzone" className="offzone">
    <div id="off_div">
        <div className="head3" id="bg_col"><h1 className="head3_h1">BREAKOUT <br></br>BRANDS</h1></div>
       <div className="head3"><h3 className="head3_h12">PATAO</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/My_Post_81_76121ffa01.jpg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">GUCCI</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">SAINT LAURENT</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_saint_laurent_2031eb80f7.jpeg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">OFF WHITE C/O VIRGIL ABLOH</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_off_white_co_virgil_abloh_d8c6b37a9f.jpeg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">BALENCIAGA</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_balenciaga_215cbc0fe0.jpeg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">NIKE</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_nike_c3045162ba.png" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">DOLCE & GABBANA</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_dolce_gabbana_bcb7049bb0.jpeg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">MONCLER</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_moncler_bcdcdc131d.jpeg" alt=""/></div>
       <div className="head3"><h3 className="head3_h12">VALENTINO</h3>  <img className="imgbox2" src="https://cdna.lystit.com/cms/designer_rail_valentino_421c18fab0.jpeg" alt=""/></div>
    </div>
    </div>
    
<div id="offzone">
    <div id="off_div"><div className="head3"><h4 className="head3_h12">ETON SHIRTS</h4>  <img className="imgbox2" src="https://cdna.lystit.com/cms/eton_sweden_shirt_da4fff6982.jpg" alt=""/></div>
    <div className="head3"><h4 className="head3_h12">GALVAN LONDON DRESSES</h4>  <img className="imgbox2" src="https://cdna.lystit.com/cms/galvan_dress_cb31d2b319.jpg" alt=""/></div>
        <div className="head3" id="bg_col"><h1 className="head3_h1">TRENDING  <br></br>NOW</h1></div>
        <div className="head3"><h4 className="head3_h12">ROBERT ROLLER RABBIT NIGHTWEAR AND SLEEPWEAR</h4>  <img className="imgbox2" src="https://cdna.lystit.com/cms/roberta_roller_rabbit_480eb63ae6.jpg" alt=""/></div>
        </div>
        </div>
       
<div id="offzone"> 
    <div className="off_div" id="off_div">
    <div className="head3"><h4 className="head3_h12">BONOBOS SHORTS</h4>  <img className="imgbox2" src="https://cdna.lystit.com/cms/bonobos_shorts_6a3e83ea91.jpg" alt=""/></div>
       <div className="head3" id="bg_col"><h1 className="head3_h1">HOT RIGHT <br></br>NOW</h1></div>
       <div className="head3"><h4 className="head3_h12">BALENCIAGA BEACHWEAR AND SWIMWEAR OUTFITS</h4>  <img className="imgbox2" src="https://cdna.lystit.com/cms/balenciaga_swimwear_a06622c701.jpg" alt=""/></div>
       <div className="head3"><h4 className="head3_h12">PENDORA BRACELETS</h4>  <img className="imgbox2" src="https://cdna.lystit.com/cms/pandora_bracelets_1e97a9f038.jpg" alt=""/></div>
        </div>
</div>

<div className="offer">
    
    <div className="offermain">
    <div className="offerdiv">
     <h1 id="h1el" >1</h1>
     <h3 id="h3el">THE BIGGEST <br></br>SELECTION</h3>
     <h6 id="h6el">Shop over 12,000 brands and stores in one place.
  <br></br>
Find exactly what you want with powerful search and personal recommendations.</h6>
    </div>
    <div className="offerdiv">
     <h1 id="h1el">2</h1>
     <h3 id="h3el">THE HOTTEST <br></br> PRODUCTS</h3>
     <h6 id="h6el">See what’s new and what’s trending.
     <br></br>
Hit the heart to receive alerts on the latest drops from your favourite brands.</h6>
</div>
    <div className="offerdiv">
    <h1 id="h1el">3</h1>
     <h3 id="h3el">THE BEST <br></br>PRICES</h3>
     <h6 id="h6el">Compare prices and shipping options across thousands of stores.
<br></br>
Lyst members are notified when an item goes on sale.</h6>
    </div>
  </div>
    <div id="signupdiv">
    <h2 className="h3el" id="h3el">SIGN UP FOR<br></br>SMARTER<br></br> SHOPPING</h2>
    <button id="btn" type="submit" > Join➔ </button>
    </div>
    
</div>
<div className="menus">
    <h1 className="head2">MOST WANTED</h1>
    <div className="menu-div">
        <h2>ZEBRA PRINT<br></br>DRESSES</h2>
        <br></br>
        <h2> MENS<br></br> PARACHUTE <br></br> PANTS</h2>
    </div>
    <div className="menu-div">
        <h2>PHILIP STIEN<br></br>WATCH STAPS</h2><br></br>
        <h2>CORDORY<br></br> BLAZERRS </h2>
    </div>
    <div className="menu-div">
        <h2>VELCRO<br></br>SNEAKERS</h2><br></br>
        <h2>CHUNKY<br></br>SNEAKERS</h2>
    </div>
    <div className="menu-div">
        <h2>MESH PALLETS<br></br>FLATS</h2><br></br>
        <h2> BALMAIN BIKER <br></br> JEANS</h2>
    </div>
    <div className="menu-div">
        <h2>VANS<br></br>PLATFORM<br></br>SNEAKERS</h2><br></br>
        <h2> DRAWSTINGS<br></br> BAGS</h2>
    </div>
</div>
<div className="menus2">
    <h1 className="head2">WOMEN'S CLOTHING</h1>
    <div className="menu-div2">
      <h5>Night Ware</h5>
        <h5>Jackets</h5>
      <h5>Skirts</h5>
       <h5>Skirts</h5>
        <h5>Shoes</h5>
        <h5>Knitwear</h5>
        <h5>Pants</h5>
        <h5>Jeans</h5>
        <h5>Active Wear</h5>
    </div>
    <h1 className="head2">MEN'S CLOTHING</h1>
    <div className="menu-div2">
        <h5>Night Ware</h5>
        <h5>Jackets</h5>
        <h5>Skirts</h5>
        <h5>Shoes</h5>
        <h5>Sweaters and Knitwear</h5>
        <h5>Coats</h5>
        <h5>Jeans</h5>
        <h5>Active Wear</h5>
    </div>
    <h1 className="head2">WOMEN'S SHOES</h1>
    <div className="menu-div2">
        <h5>Flats</h5>
        <h5>Boots</h5>
        <h5>Heels</h5>
        <h5>Sneakers</h5>
    </div>
    <h1 className="head2">MEN'S SHOES</h1>
    <div className="menu-div2">
        <h5>Flats</h5>
        <h5>Boots</h5>
        <h5>Lace-Ups</h5>
        <h5>Sandals</h5>
        <h5>Sneakers</h5>
        <h5>Pants</h5>
        <h5>Jeans</h5>
        <h5>Active Wear</h5>
    </div>
    <h1 className="head2">MEN'S ACCESSORIES</h1>
    <div className="menu-div2">
        <h5>Gloves</h5>
        <h5>Wallets and Cardholders</h5>
        <h5>Sunglasses</h5>
        <h5>Hats</h5>
        <h5>Cufflinks</h5>
        <h5>Watches</h5>
        <h5>Ties</h5>
        <h5>Belts</h5>
    </div>
    <h1 className="head2">MEN'S ACCESSORIES</h1>
    <div className="menu-div2">
        <h5>Gloves</h5>
        <h5>Wallets and Cardholders</h5>
        <h5>Sunglasses</h5>
        <h5>Hats</h5>
        <h5>Cufflinks</h5>
        <h5>Watches</h5>
        <h5>Ties</h5>
        <h5>Belts</h5>
    </div>
</div>

</div>


    )
}

export default Home;