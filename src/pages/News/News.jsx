import React from "react";
import "./news.css";
import { language } from "../../lang/index.jsx";

export const News = () => {
  return (
    <section>
      <div className="container news membership">
        <h1 className="about_title membership_title news_tt">
          {" "}
          {localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.header?.news
            : language?.english?.header?.news}
        </h1>
        <div className="line"></div>
        <h2 className=" news_title2">
          {localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.news?.title
            : language?.english?.news?.title}
        </h2>

        <p className="news_text">
          {localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.news?.desc
            : language?.english?.news?.desc}
        </p>

        <ul className="news_ul">
          <li className="news_ul_li">
            <strong>
              {" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.news?.testing
                : language?.english?.news?.testing}
            </strong>{" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.news?.testingD
              : language?.english?.news?.testingD}
          </li>
          <li className="news_ul_li">
            <strong>
              {" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.news?.discount
                : language?.english?.news?.discount}
            </strong>{" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.news?.discountD
              : language?.english?.news?.discountD}
          </li>
          <li className="news_ul_li">
            <strong>
              {" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.news?.shopping
                : language?.english?.news?.shopping}
            </strong>{" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.news?.shoppingD
              : language?.english?.news?.shoppingD}
          </li>
          <li className="news_ul_li">
            <strong>
              {" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.news?.multi
                : language?.english?.news?.multi}
            </strong>{" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.news?.multiD
              : language?.english?.news?.multiD}
          </li>
          <li className="news_ul_li">
            <strong>
              {" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.news?.bug
                : language?.english?.news?.bug}
            </strong>{" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.news?.bugD
              : language?.english?.news?.bugD}
          </li>
        </ul>
        <p className="news_text">
          {localStorage.getItem("lang") === "Uzbek"
            ? language?.uzbek?.news?.desc2
            : language?.english?.news?.desc2}
        </p>
      </div>
    </section>
  );
};
