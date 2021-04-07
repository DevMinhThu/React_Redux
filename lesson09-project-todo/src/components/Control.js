import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Control() {
  return (
    <div className="row mt-15">
      {/* Search */}
      <Search />
      {/* Sort */}
      <Sort />
    </div>
  );
}

export default Control;
