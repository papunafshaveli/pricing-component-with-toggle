import "../Master/Master.css";
import React from "react";
const Master = ({ isMonthly }) => {
  return (
    <div className="card-master">
      <h1 className="master-h">Master</h1>
      <div className="dollar-div-master">
        <span className="dollar-master">$</span>
        <strong className="price-master">
          {!isMonthly ? "399.99" : "39.99"}
        </strong>
      </div>
      <div className="descriptions-master">
        <hr className="first-master" />
        <p className="storage-master">2 TB Storage</p>

        <hr className="second-master" />
        <p className="users-master">10 Users Allowed</p>

        <hr className="third-master" />
        <p className="send-master">Send up to 20 GB</p>
        <hr className="fourth-master" />
      </div>
      <button className="master-button">LEARN MORE</button>
    </div>
  );
};

export default Master;
