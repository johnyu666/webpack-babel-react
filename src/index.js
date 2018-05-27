import React from "react";
import ReactDOM from 'react-dom';

const comment={date:new Date(),text:'神评论666',author:{name:"tomli",url:'http://placekitten.com/g/64/64'}};

class Avatar extends  React.Component{
    render(){
     return (<img src={this.props.user.url} alt={this.props.user.name}/>);

    }
}
class UserInfo extends  React.Component{
  render(){
    return (
        <div className="user-info">
        <Avatar user={this.props.author}/>
          <div>{this.props.author.name}</div>
        </div>
    )
  }
}


class Comment extends  React.Component{
  render(){
    return (
      <div className="comment">
        <UserInfo author={this.props.comment.author}/>
        <div>{this.props.comment.text}</div>
        <div>{this.props.comment.date.toLocaleString()}</div>
      </div>
    )
  }

}

ReactDOM.render(<Comment comment={comment}/>,document.getElementById("root"));
