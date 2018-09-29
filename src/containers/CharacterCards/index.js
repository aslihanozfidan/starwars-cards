import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";

const axios = require("axios");

class CharacterCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  getPeople = () => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        this.setState({ people: response.data.results });
       // console.log(this.state.people, "in people");
      })
      .catch(error => {
        console.error(error, "in people");
      });
  };

  componentDidMount = () => {
    this.getPeople();
  };

  render() {
    return (
      <div className="flex card-container"> 
        <Card items={this.state.people} type="characters" />
      </div>
    );
  }
}

CharacterCards.defaultProps = {
  people: []
};
CharacterCards.propTypes = {
  people: PropTypes.array
};

export default CharacterCards;