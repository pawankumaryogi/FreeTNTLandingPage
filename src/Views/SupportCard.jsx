import React from "react";
import "./SupportCard.css";
import { useState, useEffect } from "react";

function SupportCard() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 400; // Adjust the threshold as needed
      setIsFixed(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className={`supportCard ${isFixed ? "fixed" : ""}`}>
      <div className="counter-block">
        <span
          className="hashtag"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          #FreeTNTemples
        </span>
        <div id="click-to-support-popup-div" style={{}}>
          <button
            className="supportCardButton"
            style={{
              backgroundColor: "#febd2c",
              padding: "10px 100px ",
              borderRadius: "10px",
            }}
            onClick={() => {}}
          >
            Click Here to support
          </button>{" "}
          <br />
          <span className="subtitle" style={{ fontSize: "20px" }}>
            OR
          </span>
        </div>
        <div className="subtitle" style={{ fontSize: "30px" }}>
          Show your support with a <br /> missed call
        </div>
        <div className="call" style={{ display: "flex", margin: "2px 80px " }}>
          <img
            src="https://static.consciousplanet.org/static/assets/img/phone.svg"
            alt="Phone icon"
          />
          <p style={{ fontSize: "35px", color: "brown", padding: "7px" }}>
            {" "}
            83000 83000
          </p>
        </div>
        <div style={{fontWeight:"bold"}}>
          Tell your family &amp; friends to show <br /> their support with a
          missed call
        </div>
      </div>
      <div className="socialMedia" style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
        <img width={"70px"}
          src="https://static.consciousplanet.org/static/assets/img/whatsapp.png"
          alt=""
        />
        <img width={"70px"} style={{padding:"5px"}}
          src="https://static.consciousplanet.org/static/assets/img/twiter.png"
          alt=""
        />
        <img width={"70px"} style={{padding:"5px"}}
          src="https://static.consciousplanet.org/static/assets/img/fb.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SupportCard;
