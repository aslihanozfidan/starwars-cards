import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const axios = require("axios");

class StarshipsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
      loading: false
    };
  }

  getStarships = () => {
    this.setState({ loading: true });
    axios
      .get("https://swapi.co/api/starships/")
      .then(response => {
        this.setState({ starships: response.data.results, loading: false });
       // console.log(this.state.starships, "in starships");
      })
      .catch(error => {
        console.error(error, "in starships");
      });
  };

  componentDidMount = () => {
    this.getStarships();
  };

  render() {
    let cardArea = this.state.loading ? <Loading /> : <Card items={this.state.starships} type="starships" />;
    return (
      <div className="flex card-container">
        {cardArea}
      </div>
    );
  }
}

StarshipsCard.defaultProps = {
  starships: []
};
StarshipsCard.propTypes = {
  starships: PropTypes.array
};

export default StarshipsCard;
