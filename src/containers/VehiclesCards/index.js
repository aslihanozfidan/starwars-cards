import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const axios = require("axios");

class VehiclesCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      loading: false
    };
  }

  getvehicles = () => {
    this.setState({ loading: true });
    axios
      .get("https://swapi.co/api/vehicles")
      .then(response => {
        this.setState({ vehicles: response.data.results, loading: false });
        // console.log(this.state.vehicles, "in vehicles");
      })
      .catch(error => {
        console.error(error, "in vehicles");
      });
  };

  componentDidMount = () => {
    this.getvehicles();
  };

  render() {
    let cardArea = this.state.loading ? <Loading /> : <Card items={this.state.vehicles} type="vehicles" />;
    return (
      <div className="flex card-container">
        {cardArea}
      </div>
    );
  }
}

VehiclesCards.defaultProps = {
  vehicles: []
};
VehiclesCards.propTypes = {
  vehicles: PropTypes.array
};

export default VehiclesCards;
