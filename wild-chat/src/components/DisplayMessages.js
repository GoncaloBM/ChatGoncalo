import React, { Component } from "react";
import "./DisplayMessages.css";

class DisplayMessages extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let props = this.props;
    return (
      <div
        className="display"
        style={{ display: props.loginShow ? "none" : "" }}
      >
        <div className="my-name">{this.props.user}</div>
        <div className="messages">
          {props.messages.map((message, index) => {
            return (
              <div className="message-line">
                <div className="user">{props.messages[index].user} : </div>
                <div className="messageDisplayed">
                  {props.messages[index].message}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayMessages;
