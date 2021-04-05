import React from "react";

function SizeSetting(props) {
  // function gui value sang cho cha la App
  const changSize = (value) => {
    props.onChangeSize_Props(value); // value = 2,-2
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Size: {props.fontSize_Props}px</h3>
      </div>
      <div className="panel-body">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => changSize(-2)}
        >
          reduction
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => changSize(2)}
        >
          increase
        </button>
      </div>
    </div>
  );
}

export default SizeSetting;
