import React from "react";
import "./contact.css";
import contact from "../../assets/images/contact.webp";
import { language } from "../../lang/index.jsx";
import phone from "../../assets/images/phone.png";
import instagram from "../../assets/images/instagram.avif";
import telegram from "../../assets/images/telegram.png";
import email from "../../assets/images/email.png";
export const Contact = () => {
  return (
    <>
      <section>
        <div className="container membership contact">
          <h1 className="about_title">
            {localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.header?.contact
              : language?.english?.header?.contact}
          </h1>
          <div className="cardC">
            <ul className="contact_ul">
              <li className="contact_ul_li">
                <a href="tel:+13474356183">
                  {" "}
                  <img src={phone} className="phone" alt="" />
                  +1 347 435 6183
                </a>
              </li>
              <li className="contact_ul_li">
                <a href="">
                  <img src={instagram} className="instagram" alt="" /> Instagram
                </a>
              </li>
              <li className="contact_ul_li">
                <a href="">
                  <img src={telegram} className="telegram" width={150} alt="" />{" "}
                  Telegram
                </a>
              </li>
              <li className="contact_ul_li">
                <a href="">
                  <img src={email} className="email" alt="" />
                  Email
                </a>
              </li>
            </ul>
            <img className="img" src={contact} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
