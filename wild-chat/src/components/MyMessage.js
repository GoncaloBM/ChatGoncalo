import React, { Component } from "react";
import "./MyMessage.css";

class MyMessage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  message = e => {
    this.setState({
      ...this.state,
      message: e.target.value
    });
  };

  resetMessage = () => {
    this.setState({
      ...this.state,
      message: ""
    });
  };

  render() {
    let props = this.props;
    return (
      <div className="my-message-line">
        <input className="my-message" onChange={this.message}></input>
        <button
          onClick={() => {
            props.submitMessage(this.state.message);
            this.resetMessage();
          }}
        >
          Send
        </button>
      </div>
    );
  }
}

export default MyMessage;
