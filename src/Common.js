import React from "react";
import Web from "./images/img1.PNG";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section className="hero">
        {/* <img src={props.imgsrc} className="img1"/>         */}
        <div id="container">
          <h1 id="myHead">{props.title} </h1>

          <div className="row">
            <div className="col-md-7">
              <p>{props.name}</p>
              <div className="mt-3 mybtn">
                <NavLink to={props.visit} className="btn btn-primary">
                  {props.btname}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
