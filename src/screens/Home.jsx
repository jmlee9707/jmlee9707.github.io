import React from "react";
import "./Home.scss";
import balloon from "../assets/images/balloon.png";

function Home() {
  return (
    <div className="home flex justify-center">
      <div className="home_text flex column align-center justify-center">
        <p className="notoMid fs-32">HI THERE, I&apos;M </p>
        <p className="home_text_name notoBold fs-130">정민</p>
        <p className="notoMid fs-32">FRONT-END DEVELOPER</p>
      </div>
      <div>
        <img src={balloon} alt="ballon" className="balloon" />
      </div>
    </div>
  );
}

export default Home;
