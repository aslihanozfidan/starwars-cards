import React from "react";
import "./style.css";
import Carousel from "../../components/Carousel";

const Card = props =>
  props.people.map((person, i) => (
    <div className="Card" key={i}>
      <div className="front-side">
        <div
          className="overlay"
          style={{ backgroundImage: `url(http://localhost:5000/${i}.jpg)` }}
        />
        <h4>{person.name}</h4>
        <hr />
      </div>
      <div className="back-side">
        <ul>
          <li>Birth Year: {person.birth_year}</li>
          <li>Gender: {person.gender}</li>
          <li>Height: {person.height}</li>
          <li>Eye Color: {person.eye_color}</li>
          <li>Hair Color: {person.hair_color}</li>
          <li>Skin Color: {person.skin_color}</li>
        </ul>
      </div>
    </div>
  ));

export default Card;
