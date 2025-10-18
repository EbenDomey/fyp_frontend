import React from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { PropTypes } from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row mt-24">
        <SideBar />
        <main className="ml-[20%]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
};
