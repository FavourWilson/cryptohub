import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-heroColor to-heroColor">
        <Nav />
        <Hero />
      </div>
    </>
  );
};

export default Header;
