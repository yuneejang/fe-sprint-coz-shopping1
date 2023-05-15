import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function DropDown({isOpen,setIsOpen})  {
  // const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  return (

  <div className ="drop-menu-wapper">
      <div className="relative inline-block text-right">
      <div>
      <img
                    // id="logo_header"
                    src={`${process.env.PUBLIC_URL}/images/nav-menu.png`}
                    alt="menu"
               onClick={handleClick} />
      </div>
      {isOpen&&
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
      <div className="py-1" role="none">
      <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">ooo님 안녕하세요</Link>
      </div>
      <div className="py-1" role="none">
  
        <Link to="/products/list"className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">
        <img
                  id="drop-icon"
                  src={`${process.env.PUBLIC_URL}/images/product-icon.png`}
                  alt="product-icon"
              />
          상품리스트 페이지</Link>
      </div>
      <div className="py-1" role="none">
        <Link to="/bookmark" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4" > 
        <img
                  id="drop-icon"
                  src={`${process.env.PUBLIC_URL}/images/bookmark-icon.png`}
                  alt="bookmark-icon"
              />
              북마크 페이지 
              </Link>
      </div>
     
    </div>
      }
      

    </div>
  </div>

  )
}

export default  DropDown;