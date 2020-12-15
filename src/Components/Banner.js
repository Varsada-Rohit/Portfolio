import React from "react";
import Lottie from "react-lottie";
import animationData from "../assests/Blogging Colored.json";

export default function Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* left side of banner */}
          <div className="col-lg-6 col-12">
            <div className="heading-container ">
              <h1 className="heading">Hello,</h1>
              <h4 className="sub-heading" style={{ color: "#29e4e4" }}>
                We Are Nex Art !
              </h4>
              <p style={{ fontSize: "1rem", fontWeight: "400" }}>
                NexArt is a graphic design studio and web developers. We love
                art direction, motion graphics, interactive design and
                illustration
              </p>
              <button
                type="button"
                class="btn btn-dark my-2"
                style={{ width: "30%" }}
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* rightside start */}
          <div className="col-lg-6 col-12 lottieAnim">
            <div className="heading-container ">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
