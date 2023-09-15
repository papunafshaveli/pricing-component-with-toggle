import React from "react";
import "./Pricing.css";

const Pricing = ({ onCheckboxChange }) => {
  return (
    <div className="pricing-div">
      <h1 className="pricing-h">Our Pricing</h1>
      <div className="tariff">
        <span className="Annually">Annually</span>

        <input
          type="checkbox"
          name="price-checker"
          id="price-checker"
          onChange={onCheckboxChange} // Handle checkbox change
        />
        <label htmlFor="price-checker"></label>

        <span className="monthly">Monthly</span>
      </div>
    </div>
  );
};

export default Pricing;
