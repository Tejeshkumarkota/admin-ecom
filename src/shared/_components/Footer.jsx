import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 1.0.0
        </div>
        <strong>
          Copyright © 2024-2025 <Link to="https://adminlte.io">e-commerce.com</Link>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </>
  );
}
