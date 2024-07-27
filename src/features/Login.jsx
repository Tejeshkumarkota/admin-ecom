import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const goToDashboard = () => {
    nav("/dashboard");
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/">
            <b>e-Commerce</b> Admin
          </Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button
                    onClick={goToDashboard}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <p className="mb-1">
              <Link to="forgot-password.html">I forgot my password</Link>
            </p>
            <p className="mb-0">
              <Link to="register.html" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}
