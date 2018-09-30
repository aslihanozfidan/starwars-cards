import React from "react";
import "./style.css";
import DetailButton from "../../components/DetailButton";

const Card = props => {
  const items = [];
  let i = -1;
  let propertyWithSpace = "";
  props.items.forEach(element => {
    i++
    items[i] = [];
    for (let property in element) {
      property !== "homeworld" &&
        property !== "films" &&
        property !== "species" &&
        property !== "vehicles" &&
        property !== "starships" &&
        property !== "url" &&
        property !== "edited" &&
        property !== "created" &&
        property !== "residents" &&
        property !== "pilots" &&
        property !== "people" ? (
          property.includes("_") ?
            propertyWithSpace = property.replace("_", " ") :
            propertyWithSpace = property,
          items[i].push(<li key={i + property}>{propertyWithSpace} : {element[property]}</li>)
        ) : "";
    }
  });
  return (
    props.items.map((item, i) => (
      <div className="Card" key={i}>
        <div className="front-side">
          <div
            className="overlay"
            style={{ backgroundImage: `url(http://localhost:5000/${props.type}/${i}.jpg)` }}
          />
          <h4>{item.name}</h4>
          <hr />
        </div>
        <div className="back-side">
          <ul>
            {items[i]}
          </ul>
          <DetailButton url={`/${props.type}/${i + 1}`} />
        </div>
      </div>
    )));
}

export default Card;