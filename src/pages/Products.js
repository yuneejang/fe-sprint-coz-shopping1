import React from "react";
import Grid from "../component/Grid";
import FilterButton from "../component/FilterButton";

export default function Products({filterIcons, setFilters}) {
const items = [1,2,3,4,5,6];
const handleClick = ()=>{
    setFilters();
}
    return(
        <div className="wrapper product-body">

            <div><FilterButton filterIcons={filterIcons} onclick={handleClick}/></div>
            <div className="product-list" ><Grid items={items}/></div>
        </div>
    )
}