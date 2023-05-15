import React from 'react';
import { Link } from 'react-router-dom';
// import DropDown from './DropDown';

function Nav() {
  const handleClick = (e)=>{
   
 };

   return(
        <div id ="nav-body">
           <Link to="/"> 
                <img
                    id="logo-nav"
                    src={`${process.env.PUBLIC_URL}/images/nav-logo.png`}
                    alt="logo-nav"
                />
    
            <div id ="title">COZ Shopping</div>
            </Link>
         
                <img
                    id="nav-menu"
                    src={`${process.env.PUBLIC_URL}/images/nav-menu.png`}
                    alt="logo-nav"
                />
              {/* <DropDown /> */}
         
        </div>
    );


}

export default Nav;
