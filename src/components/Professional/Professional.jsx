import "../Professional/Professional.css";
import React from "react";
const Professional = ({ isMonthly }) => {
  return (
    <div className="card-prof">
      <h1 className="prof-h"> Professional</h1>
      <div className="dollar-div-prof">
        <span className="dollar-prof">$</span>
        <strong className="price-prof">
          {!isMonthly ? "249.99" : "24.99"}
        </strong>
      </div>
      <div className="descriptions-prof">
        <hr className="first-prof" />
        <p className="storage-prof">1 TB Storage</p>

        <hr className="second-prof" />
        <p className="users-prof">5 Users Allowed</p>

        <hr className="third-prof" />
        <p className="send-prof">Send up to 10 GB</p>
        <hr className="fourth-prof" />
      </div>
      <button className="prof-button">LEARN MORE</button>
    </div>
  );
};

export default Professional;
