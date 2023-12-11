import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { lang, language, setSelectionsLang } from "../lang/index.jsx";
import logo from "../assets/images/logo.png";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <img src={logo} className="logo" alt="" />
            </Link>

            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/membership">
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.membership
                    : language?.english?.header?.membership}
                </NavLink>
              </li>
              <li>
                <NavLink to="/members">  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.members
                    : language?.english?.header?.members}</NavLink>
              </li>
              <li>
                <NavLink to="/news">
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.news
                    : language?.english?.header?.news}
                </NavLink>
              </li>
              <li>
                <NavLink to="/policy">
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.policy
                    : language?.english?.header?.policy}
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/contact">
                  {localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.contact
                    : language?.english?.header?.contact}
                </NavLink>
              </li>

              <select
                className="nav__select"
                onChange={(e) => setSelectionsLang(e.target.value)}
              >
                <option
                  value={
                    localStorage.getItem("lang") === lang.uzbek
                      ? lang.uzbek
                      : lang.english
                  }
                >
                  {localStorage.getItem("lang") === lang.uzbek
                      ? lang.uzbek
                      : lang.english}
                </option>
                <option
                  value={
                    localStorage.getItem("lang") !== lang.uzbek
                      ? lang.uzbek
                      : lang.english
                  }
                >
                  {localStorage.getItem("lang") !== lang.uzbek
                    ? lang.uzbek
                    : lang.english}
                </option>
              </select>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
