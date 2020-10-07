import React from "react";
import Web from "./images/about.png";
import { NavLink } from "react-router-dom";
// import Sdata from './Sdata';

const Card = (props) => {
  return (
    <>
      {/* <div className='my-5'>
            <h1 className='text-center'> Our Services</h1>
        </div> */}

      <div className="col-md-4 col-10 mx-auto">
        {/* Bootstrap card */}

        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
