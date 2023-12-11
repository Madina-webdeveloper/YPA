import React, { useState } from "react";
import "./home.css";
import { language } from "../../lang/index.jsx";
import about from "../../assets/images/about.jpg";
import empowerment from "../../assets/images/empowerment.jpg";
import movement from "../../assets/images/movement.png";
import result from "../../assets/images/result.webp";

export const Home = () => {
  return (
    <>
      {" "}
      <section className="hero">
        <div className="container ">
          <div className="hero_wrap">
            <h1 className="hero_wrap__title">
              Young Programmers Association of Uzbekistan{" "}
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap container">
          <h2 className="about_title">{localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.title
              : language?.english?.homePG?.title}</h2>
          <p className="hero_wrap__desc">
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.desc
              : language?.english?.homePG?.desc}
          </p>
        </div>
      </section>
      <section>
        <div className="container about">
          <h2 className="about_title">
          {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.title
              : language?.english?.homePG?.aboutS?.title}
          </h2>

          <div className="about_box">
            <div className="cardW">
              <img src={about} alt="" className="card_img" />
              <div className="card__wrap">
                <h3 className="card_wrap_title"> {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.title1
              : language?.english?.homePG?.aboutS?.title1}</h3>
                <p className="card_wrap_text">
                {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.desc1
              : language?.english?.homePG?.aboutS?.desc1}
                </p>
              </div>
            </div>
            <div className="cardW">
              <img src={empowerment} alt="" className="card_img" />
              <div className="card__wrap">
                <h3 className="card_wrap_title">
                {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.title2
              : language?.english?.homePG?.aboutS?.title2}
                </h3>
                <p className="card_wrap_text">
                {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.desc2
              : language?.english?.homePG?.aboutS?.desc2}
                </p>
              </div>
            </div>
            <div className="cardW">
              <img src={movement} alt="" className="card_img" />
              <div className="card__wrap">
                <h3 className="card_wrap_title"> {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.title3
              : language?.english?.homePG?.aboutS?.title3}</h3>
                <p className="card_wrap_text">
                {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.desc3
              : language?.english?.homePG?.aboutS?.desc3}
                </p>
              </div>
            </div>
            <div className="cardW">
              <img src={result} alt="" className="card_img" />
              <div className="card__wrap">
                <h3 className="card_wrap_title"> {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.title4
              : language?.english?.homePG?.aboutS?.title1}</h3>
                <p className="card_wrap_text">
                {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutS?.desc4
              : language?.english?.homePG?.aboutS?.desc4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
