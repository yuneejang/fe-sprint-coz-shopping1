import React from 'react'

// export default function FilterButton({ item, handleClick }) {
export default function FilterButton(filterIcon) {
  return (
    <div  key={filterIcon.id} >
      <img className="filter-icon" src={filterIcon.img} alt="이미지"></img>
      <div className="filter-text">이름</div>
    </div>
  )
}

