import React from "react";

function Reset(props) {
  
  const resetAll = () => {
    props.handle_props(true);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={resetAll}>
      Reset
    </button>
  );
}

export default Reset;
