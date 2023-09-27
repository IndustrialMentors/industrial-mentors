import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Counter.css";

export default function Counter() {
  return (
    <div className="container-fluid counter">
      <div className="row">
        <div className="col-12">
          <h4 className="pt-5 text-lg-center text-md-center text-sm-center">We Proud</h4>
          <p className="paragraph text-lg-center text-md-center text-sm-center">
            Discover your potential with our industrial mentor's extensive
            network of career opportunities.<br/> Join and elevate your career with
            our team, where excellence is the standard.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-5 mt-5 ms-5">
        <div className="col counter_number_a">
          <div className="p-3 counter_number">
            <p>998</p>
            <h4>Students</h4>
          </div>
        </div>
        <div className="col">
          <div className="p-3 counter_number">
            <p>897</p>
            <h4>Courses</h4>
          </div>
        </div>
        <div className="col">
          <div className="p-3 counter_number">
            <p>345</p>
            <h4>Hours Video</h4>
          </div>
        </div>
        <div className="col">
          <div className="p-3 counter_number">
            <p>87</p>
            <h4>Countries reached</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
