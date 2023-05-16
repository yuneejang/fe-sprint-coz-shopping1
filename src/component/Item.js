import React from 'react'

export default function Item({item}) {

  return (
    <div key={item.id} className="item">
      {/* <img className="item-img" src={`${process.env.PUBLIC_URL}/{item.img}`} alt={item.name}></img> */}
      <img className="item-img" src={item.img } alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
      {/* <img className="bookmark-icon" src={`${process.env.PUBLIC_URL}/images/bookmark-off.png`} alt="bookmark"></img> */}
      <div className="item-name"></div>
          <img
           id="bookmark"
           src={`${process.env.PUBLIC_URL}/images/bookmark-off.png`}
           alt="bookmark"
          />
      <div className="item-price">추가정보</div>
   </div>
  )
}

