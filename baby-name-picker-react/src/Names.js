import React from "react";

const Names = (props) => {
    
return(
    <ul className = "container">
        {props.names.map((babyName, id) => (

        <li key = {babyName.id} className = {babyName.sex === "f" ? "girl name" : "boy name"}> {babyName.name} </li>  
        
        ))}
        
    </ul>
)
}

export default Names