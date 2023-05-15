import React from 'react'
import { initialState } from '../assets/state';

// export default function FilterButton({ item, handleClick }) {
export default function FilterButton() {
  const filterIcons = initialState.filterIcons;
  return (
    <div  key={filterIcons.id} className="filter-icon">
      <img className="filter-img" src={filterIcons.img} alt={filterIcons.name}></img>
      <span className="filter-button-title">{filterIcons.name}</span>
    </div>
  )
}

