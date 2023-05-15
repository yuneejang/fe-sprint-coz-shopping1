import React from "react";
import Grid from "../component/Grid";
import { initialState } from '../assets/state';

export default function Main() {
  const productItems = [1, 2, 3, 4];
  const bookmarkItems = [11, 12, 13, 14];

  return(
        <div className="wrapper main-body">
            <div className="main-title">상품리스트</div>
            <div className="main-products"><Grid items={productItems}/></div>
            <div className="main-title">북마크리스트</div>
            <div className="main-products"><Grid items={bookmarkItems}/></div>
   
        </div>
    )
}