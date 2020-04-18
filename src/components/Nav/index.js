// == Import : npm
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// == Import : local
import "./styles.css";

// == Composant
const NavBar = ({ allPages, currentPage, changeCurrentPage }) => {
  return (
    <ul className="nav justify-content-center nav-pills mb-3">
      {allPages.map((page) => (
        <li className="nav-item" key={page.name}>
          <Link
            to={page.href}
            className={
              page.name === currentPage.name
                ? "nav-link active bg-info"
                : "nav-link text-info"
            }
            href={page.href}
            onClick={() => {
              changeCurrentPage(page);
            }}
          >
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

NavBar.propTypes = {
  allPages: PropTypes.array.isRequired,
  currentPage: PropTypes.object.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
};

// == Export
export default NavBar;
