import React from "react";

const AuthForm = ({ user, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="first-name-input"
                        value={user.firstName}
                        onChange={onChange}
                        name="firstName"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="last-name-input"
                        value={user.lastName}
                        onChange={onChange}
                        name="lastName"
                        required
                    />
                </div>{" "}
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
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;