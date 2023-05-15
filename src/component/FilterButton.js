import React from 'react'
import { initialState } from '../assets/state';

// export default function FilterButton({ item, handleClick }) {
export default function FilterButton() {
  const item = initialState.filters;
  return (
    <div  key={item.id} className="filter">
      <img className="filter-img" src={item.img} alt={item.name}></img>
      <span className="filter-button-title">{item.name}</span>
    </div>
  )
}

