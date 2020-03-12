import React, { Component } from "react";
import "./App.css";
import DisplayMessages from "./components/DisplayMessages";
import MyMessage from "./components/MyMessage";
import LoginUser from "./components/LoginUser";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginShow: true,
      messages: []
    };
  }

  submitUser = user => {
    this.setState({
      ...this.state,
      user: user,
      loginShow: !this.state.loginShow
    });
  };

  submitMessage = message => {
    let newMessage = { user: this.state.user, message: message };

    //this.state.myArray.concat('new value');

    let messagesInDisplay = this.state.messages.concat(newMessage);

    this.setState({
      ...this.state,
      messages: messagesInDisplay
    });
  };

  render() {
    return (
      <div className="App">
        <LoginUser
          submitUser={this.submitUser}
          loginShow={this.state.loginShow}
        />
        <div
          className="messages-display"
          style={{
            display: this.state.loginShow ? "none" : ""
          }}
        >
          <DisplayMessages
            user={this.state.user}
            messages={this.state.messages}
          />
          <MyMessage
            user={this.state.user}
            submitMessage={this.submitMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
