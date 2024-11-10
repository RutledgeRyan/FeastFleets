import React from "react";

const Header = ({backgroundPic, fontFamily})=>{
    console.log(backgroundPic);
     return (
       <header
         className="header text-center py-8 bg-cover bg-center opacity-50"
         style={{ backgroundImage: `url(./images/${backgroundPic})` }}
       >
         <h1
           className="text-9xl font-bolder text-white"
           style={{ fontFamily: `${fontFamily}` }}
         >
           Feast by the Fleet
         </h1>
         <button className="button-lg">
           Get Catered
         </button>
       </header>
     );
}

export default Header;
