import React from "react";
import "./style.css";

const Detail = props => {
  let items = [];
  let itemWithSpace = "";

  for (let item in props.items) {
    item !== "homeworld" &&
      item !== "films" &&
      item !== "species" &&
      item !== "vehicles" &&
      item !== "starships" &&
      item !== "url" &&
      item !== "edited" &&
      item !== "created" &&
      item !== "residents" &&
      item !== "pilots" &&
      item !== "people" ? (
        item.includes("_") ?
          itemWithSpace = item.replace("_", " ") :
          itemWithSpace = item,
        items.push(<li key={item}>
          <h3>{itemWithSpace}</h3>
          <div> {props.items[item]}</div>
        </li>)) : "";
  }

  let imageUrl = `/${props.url.split("/")[1]}/${parseInt(props.url.split("/")[2]) - 1}`;

  return (
    <div className="detail">
      <div
        className="blur"
        style={{ backgroundImage: `url(http://localhost:5000${imageUrl}.jpg)` }}
      />
      <h4>{props.items.name}</h4>
      <hr />
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default Detail;