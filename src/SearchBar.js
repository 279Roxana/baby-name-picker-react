import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [searchName, setSearchName] = useState("");
  const [displayNames, setDisplayNames] = useState([])

  const handleChange = (event) => {
   
    setSearchName(event.target.value) 
  };

  useEffect(()=>{
 let filterNames = props.names.filter((name) =>
      name.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setDisplayNames(filterNames)
    console.log(filterNames)
  }, [searchName])


console.log(useEffect)
  return (
    <div>
      <div>
        <input placeholder="Search..." type="text" onChange={handleChange} />
        <input type="submit" onClick={useEffect}/> 
      </div>
      <ul className = "container">
        {displayNames.map((babyName, id) => (

        <li key = {babyName.id} className = {babyName.sex === "f" ? "girl name" : "boy name"}> {babyName.name} </li>  
        
        ))}
        
    </ul>
    </div>
  );
};

export default SearchBar;
