import React, { useState } from "react";
import Card from "../Card/Card";
import "./Cards.scss";

function Cards({ data }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const sorter = (e) => {
    setSort(e.target.value);
  };

  const sortMe = (data, option) => {
    switch (option) {
      case "coxdan":
        return [...data].sort((a, b) => b.price - a.price);
      case "azdan":
        return [...data].sort((a, b) => a.price - b.price);
      case "A-Z":
        return [...data].sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
      case "Z-A":
        return [...data].sort((a, b) => {
          if (a.title < b.title) return 1;
          if (a.title > b.title) return -1;
          return 0;
        });
      default:
        return data;
    }
  };

  const sortedData = sortMe(data, sort);

  return (
    <React.Fragment>
      <input type="text" placeholder="Search..." onChange={(e)=>{
        setSearch(e.target.value)
      }} />
      <select name="sort" id="sort" onChange={sorter}>
        <option value="default">Default</option>
        <option value="coxdan">Coxdan-Aza</option>
        <option value="azdan">Azdan-coxa</option>
        <option value="A-Z">A TO Z</option>
        <option value="Z-A">Z TO A</option>
      </select>
      <div className="cards">
        {sortedData.slice(0,3).filter((x)=>x.title.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default Cards;
