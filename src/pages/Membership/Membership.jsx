import * as React from "react";
import "./membership.css";
import { language } from "../../lang/index.jsx";
import membership from "../../assets/images/membership.jpg";
// import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import platinum from "../../assets/images/platinum.png";
import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import bronze from "../../assets/images/bronze.png";

export const Membership = () => {
  return (
    <>
      <section>
        <div className="container membership">
          <div className="card">
            {" "}
            <h1 className="membership_title about_title">
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.title
                : language?.english.membershipPG?.title}
            </h1>
            <img src={membership} alt="" />
          </div>
          <div className="line"></div>

          <h3 className="about_title second">
            {" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.membershipPG?.title2
              : language?.english?.membershipPG?.title2}
          </h3>
          <ul className="membershW">
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.qualification
                  : language?.english?.membershipPG?.qualification}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.qualificationD
                : language?.english?.membershipPG?.qualificationD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.excelle
                  : language?.english?.membershipPG?.excelle}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.excelleD
                : language?.english?.membershipPG?.excelleD}
              D
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.knowledge
                  : language?.english?.membershipPG?.knowledge}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.knowledgeD
                : language?.english?.membershipPG?.knowledgeD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.exper
                  : language?.english?.membershipPG?.exper}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.experD
                : language?.english?.membershipPG?.experD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.commit
                  : language?.english?.membershipPG?.commit}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.commitD
                : language?.english?.membershipPG?.commitD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.learn
                  : language?.english?.membershipPG?.learn}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.learnD
                : language?.english?.membershipPG?.learnD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.ethics
                  : language?.english?.membershipPG?.ethics}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.ethicsD
                : language?.english?.membershipPG?.ethicsD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.community
                  : language?.english?.membershipPG?.community}
              </strong>
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.communityD
                : language?.english?.membershipPG?.communityD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.leadership
                  : language?.english?.membershipPG?.leadership}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.leadershipD
                : language?.english?.membershipPG?.leadershipD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.attendance
                  : language?.english?.membershipPG?.attendance}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.attendanceD
                : language?.english?.membershipPG?.attendanceD}
            </li>
            <li className="ul_li">
              <strong>
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.membershipPG?.good
                  : language?.english?.membershipPG?.good}
              </strong>{" "}
              {localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.membershipPG?.goodD
                : language?.english?.membershipPG?.goodD}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container tiers">
          <h3 className="about_title requir">
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.membershipPG?.title3
              : language?.english?.membershipPG?.title3}
          </h3>
          <p className="ul_li_tiers ul_li">
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.membershipPG?.desc
              : language?.english?.membershipPG?.desc}
          </p>
          <div className="wrap_member">
            <div className="cardM">
              <img src={platinum} alt="" />
              <div className="cardM__wrap">
                <h3 className="cardM__wrap__title">
                  {" "}
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.membershipPG?.platinum
                    : language?.english?.membershipPG?.platinum}
                </h3>
                <ul className="cardM__wrap__ul">
                  <h4 className="ul__title">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.requirement
                      : language?.english?.membershipPG?.requirement}
                  </h4>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.req1
                      : language?.english?.membershipPG?.req1}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.req2
                      : language?.english?.membershipPG?.req2}
                  </li>
                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.req3
                      : language?.english?.membershipPG?.req3}
                  </li>

                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.req4
                      : language?.english?.membershipPG?.req4}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.req5
                      : language?.english?.membershipPG?.req5}
                  </li>
                </ul>
              </div>
            </div>
            <div className="cardM">
              <img src={gold} alt="" />
              <div className="cardM__wrap">
                <h3 className="cardM__wrap__title">
                  {" "}
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.membershipPG?.golden?.golden
                    : language?.english?.membershipPG?.golden?.golden}
                </h3>
                <ul className="cardM__wrap__ul">
                  <h4 className="ul__title">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.requirement
                      : language?.english?.membershipPG?.requirement}
                  </h4>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.golden?.req1
                      : language?.english?.membershipPG?.golden?.req1}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.golden?.req2
                      : language?.english?.membershipPG?.golden?.req2}
                  </li>

                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.golden?.req3
                      : language?.english?.membershipPG?.golden?.req3}
                  </li>
                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.golden?.req4
                      : language?.english?.membershipPG?.golden?.req4}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.golden?.req5
                      : language?.english?.membershipPG?.golden?.req5}
                  </li>
                </ul>
              </div>
            </div>
            <div className="cardM">
              <img src={silver} alt="" />
              <div className="cardM__wrap">
                <h3 className="cardM__wrap__title">
                  {" "}
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.membershipPG?.silver?.silver
                    : language?.english?.membershipPG?.silver?.silver}
                </h3>
                <ul className="cardM__wrap__ul">
                  <h4 className="ul__title">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.requirement
                      : language?.english?.membershipPG?.requirement}
                  </h4>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.silver?.req1
                      : language?.english?.membershipPG?.silver?.req1}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.silver?.req2
                      : language?.english?.membershipPG?.silver?.req2}
                  </li>

                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.silver?.req3
                      : language?.english?.membershipPG?.silver?.req3}
                  </li>
                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.silver?.req4
                      : language?.english?.membershipPG?.silver?.req4}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.silver?.req5
                      : language?.english?.membershipPG?.silver?.req5}
                  </li>
                </ul>
              </div>
            </div>
            <div className="cardM">
              <img src={bronze} alt="" />
              <div className="cardM__wrap">
                <h3 className="cardM__wrap__title">
                  {" "}
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.membershipPG?.bronze?.bronze
                    : language?.english?.membershipPG?.bronze?.bronze}
                </h3>
                <ul className="cardM__wrap__ul">
                  <h4 className="ul__title">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.requirement
                      : language?.english?.membershipPG?.requirement}
                  </h4>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.bronze?.req1
                      : language?.english?.membershipPG?.bronze?.req1}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.bronze?.req2
                      : language?.english?.membershipPG?.bronze?.req2}
                  </li>

                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.bronze?.req3
                      : language?.english?.membershipPG?.bronze?.req3}
                  </li>
                  <li className="ul__liC">
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.bronze?.req4
                      : language?.english?.membershipPG?.bronze?.req4}
                  </li>
                  <li className="ul__liC">
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.membershipPG?.bronze?.req5
                      : language?.english?.membershipPG?.bronze?.req5}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
