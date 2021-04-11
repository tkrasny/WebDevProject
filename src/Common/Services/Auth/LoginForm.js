import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";


const LoginForm = ({ user, onChange, onSubmit }) => {
    const Register = <Link to="/register">Register now</Link>;

    return (
        <div className="authForm">
            <br />
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        value={user.email}
                        onChange={onChange}
                        name="email"
                        required
                    />
                </div>{" "}
                <div className="form-group">
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        id="password-input"
                        value={user.password}
                        onChange={onChange}
                        name="password"
                        min="0"
                        required
                    />
                </div>
                <br />
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
                        Login
                    </button>
                </div>
            </form>
            <h3>Don't have an account? {Register}</h3>
        </div>
    );
};

export default LoginForm;