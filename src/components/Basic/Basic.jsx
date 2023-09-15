import React from "react";
import "../Basic/Basic.css";

const Basic = ({ isMonthly }) => {
  return (
    <div className="card">
      <h1 className="basic-h">Basic</h1>
      <div className="dollar-div">
        <span className="dollar">$</span>

        <strong className="price">{!isMonthly ? "199.99" : "19.99"}</strong>
      </div>
      <div className="descriptions">
        <hr className="first" />
        <p className="storage">500 GB Storage</p>

        <hr className="second" />
        <p className="users">2 Users Allowed</p>

        <hr className="third" />
        <p className="send">Send up to 3 GB</p>
        <hr className="fourth" />
      </div>
      <button className="basic-button">LEARN MORE</button>
    </div>
  );
};

export default Basic;
