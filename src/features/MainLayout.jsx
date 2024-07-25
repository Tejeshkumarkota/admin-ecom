import React from "react";
import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <>
      <div className="wrapper">
        <HeaderNav />
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        {props.children}
        {/* /.content-wrapper */}
        <Footer />
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    </>
  );
}
