//利用ref方式，强制刷新子组件

import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Sub extends React.Component{
    constructor(props){
        super(props);
        this.state={bname:"john"};
    }
    render(){
        return (<div>
            <form>
                <input type="text" value={this.state.bname}/>
            </form>
        </div>);
    }
    changeBname(){
        this.setState({bname:"tom"});
    }

}
class App extends React.Component {
    constructor(props){
        super(props);
        this.myRef=React.createRef();
    }

    render(){
        return(<div>
           <button onClick={()=>this.myRef.current.changeBname()}>change bname</button>
            <Sub ref={this.myRef}/>
        </div>)
    }

}
ReactDOM.render(<App/>,document.getElementById("root"));
