import React from 'react';
import io from "socket.io-client";
import './App.css';

const socket = io.connect("http://192.168.0.247:3233");

class App extends React.Component {
  state = {
    enter: "Place the card/QR code",
    background: "#282c34"
  }
  componentDidMount(){
    socket.on("verification", data => {
      this.setState({ enter: data.open ? "Welcome" : data.error, background: data.open ? "#a6b401" : "#d50102" });
      setTimeout(() => {
        this.setState({ enter: "Place the card/QR code", background: "#282c34" })
      }, 2000)
    });
  }
  render(){
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: this.state.background}}>
        <img src="output-onlinepngtools(1).png" className="App-logo" alt="logo" />
        <p style={{fontSize: "1.6em"}}>
          {this.state.enter}
        </p>
      </header>
    </div>
  );
  }
}

export default App;
