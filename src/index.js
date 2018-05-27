import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <h1>Hello world123!!</h1>
    );
  }
}
console.log(<Hello/>);
ReactDOM.render(<Hello/>,document.getElementById("root"));
