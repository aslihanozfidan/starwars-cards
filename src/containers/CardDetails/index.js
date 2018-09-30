import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Detail from "../../components/Detail";
import Loading from "../../components/Loading";

const axios = require("axios");

class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
  }

  getItems = () => {
    this.setState({ loading: true });
    const rootUrl = "https://swapi.co/api";
    const urlParams = this.props.match.url;

    axios
      .get(`${rootUrl}${urlParams}`)
      .then(response => {
        this.setState({ items: response.data, loading: false });
        console.log(this.state.items, "in card details");
      })
      .catch(error => {
        console.error(error, "in card details");
      });
  };

  componentDidMount = () => {
    this.getItems();
  };

  render() {
    const url = this.props.match.url;
    let cardArea = this.state.loading ? <Loading /> :
      <Detail items={this.state.items} url={url} />;
    return (
      <div className="flex card-container">
        {cardArea}
      </div>
    );
  }
}

CardDetails.defaultProps = {
  items: [],
  loading: false
};
CardDetails.propTypes = {
  people: PropTypes.array,
  loading: PropTypes.bool
};

export default CardDetails;
