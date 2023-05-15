import React from 'react'

export default function Item({item}) {

  return (
    <div key={item.id} className="item">
      <img className="item-img" src={item.img} alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
      <img className="bookmark-icon" src={`${process.env.PUBLIC_URL}/images/bookmark-off.png`} alt="bookmark"></img>
      <span className="item-name">{item.name}</span>
      {/* <span className="item-price">{item.price}</span> */}
      {/* <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button> */}
    </div>
  )
}

