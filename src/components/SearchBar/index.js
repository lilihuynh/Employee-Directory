import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          id="searchResults"
          list = "searchEmployee"
          placeholder="by Employee name" />
      </div>

      <button onClick={props.handleSubmit} className="btn btn-primary">Submit</button>
    </form>
  )
}

export default SearchBar;