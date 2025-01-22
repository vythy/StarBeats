import React from "react";

import "../../utilities.css";

import { Link } from "wouter";

const NavButton = ({ destination, prompt }) => {
  return (
    <Link to={destination}>
      <button>{prompt}</button>
    </Link>
  )
} 

export default NavButton