import React from "react";
import "./index.css";

function PersonalInfo() {
  return (
    <div className="Personal-Info">
      <div className="Personal-Info-Description">
        <p className="Personal-Info-Title">Personal info</p>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="Name" placeholder="e.g. Nicola Tesla" />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="Email"
          placeholder="e.g. Nicolatesla@scienceb*tch.com"
        />
        <label htmlFor="phone-number">Phone Number</label>
        <input type="tel" id="Tel" placeholder="e.g. 123-456-7890" />
      </form>
    </div>
  );
}

export default PersonalInfo;
