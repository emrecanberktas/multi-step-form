import React from "react";
import "./index.css";

function PickAddons() {
  return (
    <div className="Pick-Addons">
      <div className="Pick-Addons-Description">
        <p className="Pick-Addons-Title">Pick add-ons</p>
        <p>Add-ons help enchance your gaming experience.</p>
      </div>
      <form>
        <div className="Pick-Addons-Checkbox">
          <input
            className="Pick-Addons-Input"
            type="checkbox"
            id="Online-Service"
          />
          <div className="Pick-Addons-Labels">
            <label htmlFor="Online-Service" className="Label-Title">
              Online Service
            </label>
            <label className="Label-Description">
              Access to multiplayer games
            </label>
          </div>
        </div>
        <div className="Pick-Addons-Checkbox">
          <input
            className="Pick-Addons-Input"
            type="checkbox"
            id="Larger-Storage"
          />
          <div className="Pick-Addons-Labels">
            <label htmlFor="Larger-Storage" className="Label-Title">
              Larger Storage
            </label>
            <label className="Label-Description">
              Extra 1 TB of cloud save
            </label>
          </div>
        </div>
        <div className="Pick-Addons-Checkbox">
          <input
            type="checkbox"
            className="Pick-Addons-Input"
            id="Custom-Profile"
          />
          <div className="Pick-Addons-Labels">
            <label htmlFor="Custom-Profile" className="Label-Title">
              Customazible Profile
            </label>
            <label className="Label-Description">
              Custom theme on your profile
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PickAddons;
