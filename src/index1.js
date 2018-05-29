import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.handleDblclick=this.handleDblclick.bind(this);
    }
    handleDblclick(){
        this.props.callback();
    }
    render(){
        return (
            <table>
                <tbody>
                {
                    this.props.books.map((book)=>(
                        <tr key={book.id} onDoubleClick={this.handleDblclick}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                        </tr>)
                    )
                }
                </tbody>
            </table>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.books=[{id:1,name:'john'},{id:2,name:'tom'}];

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleDbl=this.handleDbl.bind(this);
        this.state={bname:'tom123',price:23.45,major:0,sex:true,cbook:{name:'unde'},temp:'lost'};

    }

    createTable(){
        let trs= this.books.map((book)=>(
            <tr><td>{book.id}</td><td>{book.name}</td></tr>
        ));
        return <table><tbody>{trs}</tbody></table>;
        }

    render() {
        return (
                <div id="addBook">
                    <button onClick={()=>{this.setState({cbook:{name:'new..'}})}}>test</button>
                    <form>
                        <input type="text" name="bname" value={this.state.bname} onFocus={this.handleFocus} onChange={this.handleChange}/>
                        <input type="decimal" name="price" value={this.state.price} onChange={this.handleChange}/>
                        <br/>

                        <input name="sex" checked={this.state.sex}  value={true} type="radio"
                               onChange={this.handleChange2}/>男
                        <input name="sex" value={false}  type="radio"
                               onChange={this.handleChange2}/>女
                        <br/>

                        <select value={this.state.major} onChange={this.handleChange1}>
                            <option value="0">计算机</option>
                            <option value="1">自动化</option>
                        </select>

                    </form>
                    <span>{this.state.bname}</span>
                    <span>{this.state.price}</span>
                    <span>{this.state.major}</span>
                    <span>{this.state.sex?'男':'女'}</span>
                    <BookList books={this.books} callback={this.handleDbl}/>

                    <form>
                        <input type="text" value={this.state.cbook.name} />
                    </form>
                    <div>{this.state.cbook.name}</div>

                </div>);
        }

    handleDbl(){

        this.setState({cbook:{name:'ehllo'}});
    }
    handleChange3(e){

    }
    handleChange2(e){
        this.setState({sex:e.target.value==="true"?true:false}.valueOf());
    }

    handleChange1(e){
        this.setState({major:e.target.value});
    }
    handleFocus(e){
        let temp={};

        temp[e.target.name]="";
        this.setState(temp);
    }

    handleChange(e) {
        //
        // let temp={};
        //
        // temp[e.target.name]=e.target.value;

        this.setState({[e.target.name]:e.target.value});
    }

}
ReactDOM.render(<App/>,document.getElementById("root"));
