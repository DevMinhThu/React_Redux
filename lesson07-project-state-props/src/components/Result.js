import React from "react";

function Result(props) {
  const setStyle = () => {
    return {
      color: props.color,
      borderColor: props.color,
      fontSize: props.fontSize_Props,
    };
  };
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p>
        Color: {props.color} - Fontsize : {props.fontSize_Props}px
      </p>
      <div id="content" style={setStyle()}>
        Content setting
      </div>
    </div>
  );
}

export default Result;
