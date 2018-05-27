import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  componentDidMount(){
    this.tid=setInterval(()=>{this.tick()},1000)
  }
  componentWillUnmount(){
      clearInterval(tid);
  }
  tick(){
    this.setState({date:new Date()});
  }
  render() {
    return (
      <h1>Hello world123!!{this.state.date.toLocaleString()}</h1>
    );
  }
}

ReactDOM.render(<Hello/>,document.getElementById("root"));
