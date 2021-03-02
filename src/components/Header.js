import React from "react";
import Button from "./Button";
import car from "./Car1.jpg";
import "./Header.css";

const Header = ({ showAdd, onAdd }) => {
  return (
    <header className="header">
      <img src={car} className="photo" />
      <h1>ONLYCARS</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
