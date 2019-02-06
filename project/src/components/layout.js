import React, { Children } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/globals/navbar/Navbar";
//import styled from "styled-components";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
