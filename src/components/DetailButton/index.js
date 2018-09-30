import React from "react";
import "./style.css";

const DetailButton = props => {
  return (
    <a href={props.url} className="detail-button">
      Detail
   </a>
  );
}

export default DetailButton;