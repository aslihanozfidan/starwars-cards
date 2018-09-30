import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const axios = require("axios");

class PlanetsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      loading: false
    };
  }

  getplanets = () => {
    this.setState({ loading : true })
    axios
      .get("https://swapi.co/api/planets")
      .then(response => {
        this.setState({ planets: response.data.results, loading: false });
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
    let cardArea = this.state.loading ? <Loading /> : <Card items={this.state.planets} type="planets" />;
    return (
      <div className="flex card-container">
        {cardArea}
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
