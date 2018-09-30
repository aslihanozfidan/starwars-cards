import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const axios = require("axios");

class SpeciesCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      loading: false
    };
  }

  getspecies = () => {
    this.setState({ loading: true });
    axios
      .get("https://swapi.co/api/species")
      .then(response => {
        this.setState({ species: response.data.results, loading: false });
        // console.log(this.state.species, "in species");
      })
      .catch(error => {
        console.error(error, "in species");
      });
  };

  componentDidMount = () => {
    this.getspecies();
  };

  render() {
    let cardArea = this.state.loading ? <Loading /> : <Card items={this.state.species} type="species" />;
    return (
      <div className="flex card-container">
        {cardArea}
      </div>
    );
  }
}

SpeciesCards.defaultProps = {
  species: []
};
SpeciesCards.propTypes = {
  species: PropTypes.array
};

export default SpeciesCards;
