import React, { useState } from "react";
import logo1 from "../assests/images/logo-1.png";
import logo2 from "../assests/images/logo-2.png";
import web1 from "../assests/images/web-1.png";
import CardImage from "./CardImage";
const data = [
  {
    url:
      "https://images.unsplash.com/photo-1607370854756-4ad5e482dc54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    type: "web",
  },
  {
    url:
      "https://images.unsplash.com/photo-1573496358349-d97974b2339b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    type: "graphic",
  },
  {
    url:
      "https://images.unsplash.com/photo-1546116057-0c5db85521c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    type: "graphic",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const handleChange = (value) => {
    setIndex(value);
  };
  return (
    <>
      <div className="container">
        <div className="tab-container mx-5">
          <button
            className="btn grid-btn"
            onClick={() => {
              handleChange(0);
            }}
          >
            <h5 className={`${index == 0 ? "active" : ""}`}>All</h5>
          </button>
          <button
            className="btn grid-btn"
            onClick={() => {
              handleChange(1);
            }}
          >
            <h5 className={`${index == 1 ? "active" : ""}`}>Graphics</h5>
          </button>
          <button
            className="btn grid-btn"
            onClick={() => {
              handleChange(2);
            }}
          >
            <h5 className={`${index == 2 ? "active" : ""}`}>Web</h5>
          </button>
        </div>
        {/* Card-Container-start */}
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#28e4e5" }}>
        <div className="row">
          {index == 0 &&
            data.map((item) => {
              return (
                <div className="col-lg-6 col-12">
                  <CardImage url={item.url} />
                </div>
              );
            })}
          {index == 1 &&
            data.map((item) => {
              return (
                item.type == "graphic" && (
                  <div className="col-lg-6 col-12">
                    <CardImage url={item.url} />
                  </div>
                )
              );
            })}
          {index == 2 &&
            data.map((item) => {
              return (
                item.type == "web" && (
                  <div className="col-lg-6 col-12">
                    <CardImage url={item.url} />
                  </div>
                )
              );
            })}
        </div>
      </div>
    </>
  );
}
