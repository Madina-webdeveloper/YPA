import React from "react";
import "./members.css";
import { language } from "../../lang/index.jsx";

export const Members = () => {
  return (
    <>
      <section>
        <div className="container about members">
          <h1 className="about_title">
            {" "}
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.members?.title
              : language?.english?.members?.title}
          </h1>

          <div className="box">
            <div className="box_wrap">
              <h3 className="box_wrap_title"> Aliana Berdaliyeva</h3>
              <ul className="box_wrap_ul">
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.president
                      : language?.english?.members?.president}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.platinum
                      : language?.english?.members?.platinum}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.provide
                      : language?.english?.members?.provide}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.represent
                      : language?.english?.members?.represent}
                  </i>
                </li>
              </ul>
            </div>
            <div className="box_wrap">
              <h3 className="box_wrap_title"> Khushnud Khasanov</h3>
              <ul className="box_wrap_ul">
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.vice
                      : language?.english?.members?.vice}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.support
                      : language?.english?.members?.support}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.absence
                      : language?.english?.members?.absence}
                  </i>
                </li>
              </ul>
            </div>
            <div className="box_wrap">
              <h3 className="box_wrap_title"> Nodirbek Tagayev</h3>
              <ul className="box_wrap_ul">
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.secretary
                      : language?.english?.members?.secretary}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.communiation
                      : language?.english?.members?.communiation}
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    {localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.members?.meeting
                      : language?.english?.members?.meeting}
                  </i>
                </li>
              </ul>
            </div>
            <div className="box_wrap">
              <h3 className="box_wrap_title">
                {" "}
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.members?.member
                  : language?.english?.members?.member}
              </h3>
              <ul className="box_wrap_ul">
                <li className="box_wrap_ul_li">Sardor Kenjayev</li>
                <li className="box_wrap_ul_li">Umid Kazakov</li>
                <li className="box_wrap_ul_li">Nazira Burieva</li>
                <li className="box_wrap_ul_li">Usman Tursunmuratov</li>
                <li className="box_wrap_ul_li">Gavhar Khadjieva</li>
                <li className="box_wrap_ul_li">Ivan Tsotkin</li>
                <li className="box_wrap_ul_li">Khurshed Aminov</li>
                <li className="box_wrap_ul_li">Isakov Ikhtiyor</li>
                <li className="box_wrap_ul_li">Akhmadullo Isaev</li>
                <li className="box_wrap_ul_li">Valeriya Nazarova</li>
                <li className="box_wrap_ul_li">Kristina Perkih</li>
              </ul>
            </div>

            <div className="box_wrap">
              <h3 className="box_wrap_title">
                {" "}
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.members?.leadership
                  : language?.english?.members?.leadership}
              </h3>
              <ul className="box_wrap_ul">
                <li>Salima Majidova</li>
              </ul>
            </div>
            <div className="box_wrap">
              <h3 className="box_wrap_title">
                {" "}
                {localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.members?.summit
                  : language?.english?.members?.summit}{" "}
              </h3>
              <ul className="box_wrap_ul">
                <li>Bobur Khakimov</li>
                <li>Won Youngje</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
