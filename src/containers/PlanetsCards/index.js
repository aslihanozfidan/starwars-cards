import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";

const axios = require("axios");

class PlanetsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }

  getplanets = () => {
    axios
      .get("https://swapi.co/api/planets")
      .then(response => {
        this.setState({ planets: response.data.results });
       // console.log(this.state.planets, "in planets");
      })
      .catch(error => {
        console.error(error, "in planets");
      });
  };

  componentDidMount = () => {
    this.getplanets();
  };

  render() {
    return (
      <div className="flex card-container"> 
        <Card items={this.state.planets} type="planets" />
      </div>
    );
  }
}

PlanetsCards.defaultProps = {
  planets: []
};
PlanetsCards.propTypes = {
  planets: PropTypes.array
};

export default PlanetsCards;
