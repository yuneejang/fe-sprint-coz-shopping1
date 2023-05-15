import React from "react";

function Grid({items}) {
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div
      style={{
        // margin: "50px",
        // padding: "50px",
        width: "480vh",
        heith:"480vh",
        display: "grid",
        gridTemplateRows: "1fr ",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        backgroundColor: "gray",
      }}
    >
      {items.map((item, key) => (
        <div
          key={key}
          style={{ margin: "5px", backgroundColor: "white", height: "90px" }}
        >
          {item}
          <img
           id="bookmark"
           src={`${process.env.PUBLIC_URL}/images/bookmark-off.png`}
           alt="bookmark"
          />
          <div>이름</div>
          <div>추가정보</div>
        </div>
        
       
      ))}
    </div>
  );
}

export default Grid;