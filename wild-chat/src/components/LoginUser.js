import React, { Component } from "react";
import "./LoginUser.css";

class LoginUser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  userName = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  render() {
    let props = this.props;
    return (
      <div
        className="login-display"
        style={{ display: props.loginShow ? "" : "none" }}
      >
        <p>Put your name here</p>
        <input className="user-name" onChange={this.userName}></input>
        <button
          className="submit-user"
          onClick={() => props.submitUser(this.state.name)}
        >Submit User</button>
      </div>
    );
  }
}

export default LoginUser;
