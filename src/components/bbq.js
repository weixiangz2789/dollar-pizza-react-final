import React from "react";
import bbq from "./images/bbq.jpg";
import "./css/slice.css";

function Bbq() {
  return (
    <div className="BBQ col-4">
      <div className="card">
        <img src={bbq} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">BBQ Slice</h5>
          <p className="card-text">
            It's got cheese, it's got tomato sauce, and it's only a dollar. What
            more could you ask for?
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Bbq;
