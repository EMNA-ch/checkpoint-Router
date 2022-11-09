import React from "react";
import StarRating from "./StarRating";

const Search = ({ text, handleChange, rating, handleRating }) => {
  return (
    <div className="header-container">
      <div>
        <form>
          <input
            type="text"
            placeholder="  Search..."
            className="search inputText"
            value={text}
            onChange={handleChange}
          />
          <button className=" search button">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div className="str">
        <StarRating rating={rating} handleRating={handleRating} />
      </div>
    </div>
  );
};
StarRating.defaultProps = {
  handleRating: () => {},
};
export default Search;
