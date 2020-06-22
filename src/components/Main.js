import React from "react";
import logo from "../img/guardian-logo.jpeg";

const Main = ({ setSearchterm }) => {
  let inputVal;

  return (
    <div>
      <div className="hero flex__column">
        <img src={logo} className="logo" alt="The Guardian Logo" />
        <h2 className="header">News</h2>
      </div>
      <form
        className="controls flex__column"
        onSubmit={e => {
          e.preventDefault();
          setSearchterm(inputVal);
        }}
      >
        <input
          data-js-input
          type="text"
          className="controls__input"
          placeholder="'Football'"
          onChange={e => (inputVal = e.target.value)}
        ></input>
        <button data-js-button className="controls__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Main;
