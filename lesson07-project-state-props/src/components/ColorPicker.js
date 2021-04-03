import React, { useState } from "react";

function ColorPicker(props) {
  const [colors, setColors] = useState(["red", "green", "blue", "purple"]);

  const showColor = (value_color) => {
    return {
      backgroundColor: value_color,
    };
  };

  const setActiveColor = (value_color) => {
    props.onReceiveColor(value_color);
  };

  const elmColors = colors.map((value_color, index) => {
    return (
      <span
        key={index}
        style={showColor(value_color)}
        className={props.color === value_color ? "active" : ""}
        onClick={() => setActiveColor(value_color)}
      ></span>
    );
  });

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Colors Picker</h3>
        </div>
        <div className="panel-body">
          {elmColors}
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
