import React from "react";
import "./style.css";
import loading from "../../assets/loading.svg";

const Loading = props => {
  return (
   <div className="loading-box">
     <img src={loading} alt="loading" />
   </div>
    );
}

export default Loading;