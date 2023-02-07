import React from "react";
import "./index.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-Steps">
        <div className="Navbar-Step">
          <button className="Navbar-Button">1</button>
          <div>
            <p className="Navbar-Step-Numbers">Step 1</p>
            <p className="Navbar-Step-Info">Your Info</p>
          </div>
        </div>
        <div className="Navbar-Step">
          <button className="Navbar-Button">2</button>
          <div>
            <p className="Navbar-Step-Numbers">Step 2</p>
            <p className="Navbar-Step-Info">Select Plan</p>
          </div>
        </div>
        <div className="Navbar-Step">
          <button className="Navbar-Button">3</button>
          <div>
            <p className="Navbar-Step-Numbers">Step 3</p>
            <p className="Navbar-Step-Info">Add-ons</p>
          </div>
        </div>
        <div className="Navbar-Step">
          <button className="Navbar-Button">4</button>
          <div>
            <p className="Navbar-Step-Numbers">Step 4</p>
            <p className="Navbar-Step-Info">Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
