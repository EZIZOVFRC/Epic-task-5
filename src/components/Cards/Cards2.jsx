import React, { useState } from "react";
import Card from "../Card/Card";
import "./Cards.scss";

function Cards2({ data }) {
    return (
      <React.Fragment>
        <span id="sp">Latest News</span>
        <h1 id="chair">The Blog</h1>
        <div className="cards">
          {data.slice(3,6).map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
  
  export default Cards2;
  