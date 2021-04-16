import React, { useState } from "react";

function Search(props) {
  let [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    setKeyword({ ...keyword, [name]: value });
  };

  const onSearch = () => {
    props.onSearch(keyword);
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          name="keyword"
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={onChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={onSearch}>
            <span className="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
