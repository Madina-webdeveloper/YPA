import React from "react";
import "./policy.css";
import { language } from "../../lang/index.jsx";


export const Policy = () => {
  return (
    <>
      <section className="policy">
        <div className="container membership">
          <h1 className="about_title policy_t">
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.header?.policy
              : language?.english?.header?.policy}
          </h1>{" "}
         
          <div className="line"></div>
          <h2 className=" news_title2">
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.policyPG?.title
              : language?.english?.policyPG?.title}
          </h2>
          <ul className="about_wrap">
            <li className="about_wrap_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.policyPG?.composition
                  : language?.english?.policyPG?.composition}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.policyPG?.compositionD
                : language?.english?.policyPG?.compositionD}
            </li>
            <li className="about_wrap_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.policyPG?.power
                  : language?.english?.policyPG?.power}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.policyPG?.powerD
                : language?.english?.policyPG?.powerD}
            </li>
            <li className="about_wrap_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.policyPG?.duty
                  : language?.english?.policyPG?.duty}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.policyPG?.dutyD
                : language?.english?.policyPG?.dutyD}
            </li>
            <li className="about_wrap_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.policyPG?.compensation
                  : language?.english?.policyPG?.compensation}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.policyPG?.compensationD
                : language?.english?.policyPG?.compensationD}
            </li>
            <li className="about_wrap_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.policyPG?.removal
                  : language?.english?.policyPG?.removal}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.policyPG?.removalD
                : language?.english?.policyPG?.removalD}
            </li>
            <li className="about_wrap_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.policyPG?.resignation
                  : language?.english?.policyPG?.resignation}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.policyPG?.resignationD
                : language?.english?.policyPG?.resignationD}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
