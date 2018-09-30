import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const axios = require("axios");

class CharacterCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      loading: false
    };
  }

  getPeople = () => {
    this.setState({ loading: true });
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        this.setState({ people: response.data.results, loading: false });
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
    let cardArea = this.state.loading ? <Loading /> : <Card items={this.state.people} type="characters" />;
    return (
      <div className="flex card-container">
        {cardArea}
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
