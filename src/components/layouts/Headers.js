import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header className="Header">
      <img src="/images/logo192.png" alt="logo" className="Logo" />
      <nav className="Nav">
        <Link to="#">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Contacts</Link>
        <button>Sign In</button>
      </nav>
    </header>
  );
};

export default Headers;
