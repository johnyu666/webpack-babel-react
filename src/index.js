import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
class App extends React.Component {
    constructor(props){
        super(props);
        this.currentBook=null;
        this.state={books:[],showUpdate:'unshow'};
    }
    componentDidMount(){
        let opt={type:"GET",url:"http://localhost:8080/books"}
        $.ajax(opt).done((books)=>{
            this.setState({books:books});
        });
    }
    deleteBook(e,book){

        let opt={type:"DELETE",url:"http://localhost:8080/books/"+book.id,contentType:'application/json'};
        opt.data=JSON.stringify(book);
        $.ajax(opt)
            .done((b)=>{
            let index=this.state.books.indexOf(book);
            this.state.books.splice(index,1);
            this.setState({"books":this.state.books});}
        )

    }
    addBook(event){
        let book={bname:this.bname.value,price:this.price.value};
        let opt={type:"POST",url:"http://localhost:8080/books",contentType:'application/json'};
        opt.data=JSON.stringify(book);
        $.ajax(opt)
            .done((bk)=>{
                this.state.books.push(bk);
                this.setState({"books":this.state.books});
            });


        event.preventDefault();
    }
    toUpdateBook(event,book){
        this.setState({bname:book.bname,price:book.price,showUpdate:'show'});
        this.currentBook=book;
    }
    updateBook(event){

        this.currentBook.bname=this.state.bname;
        this.currentBook.price=this.state.price;

        let opt={type:"PUT",url:"http://localhost:8080/books/"+this.currentBook.id,contentType:'application/json'};
        opt.data=JSON.stringify(this.currentBook);
        $.ajax(opt)
            .done((bk)=>{
                this.currentBook=bk;
                this.setState({"books":this.state.books,showUpdate:'unshow'});

            });




        event.preventDefault();
    }
    handleChange(e){

        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(<div>
            <form action="#" onSubmit={(e)=>{this.addBook(e)}}>
                <input type="text" ref={(bname)=>this.bname=bname}/>
                <input type="decimal" ref={(price)=>this.price=price}/>
                <input type="submit"/>
            </form>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>名字</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.books.map((book)=>{
                            return (
                                <tr key={book.id} onDoubleClick={(event)=>this.toUpdateBook(event,book)}>
                                    <td>{book.id}</td>
                                    <td>{book.bname}</td>
                                    <td>{book.price}</td>
                                    <td>
                                        <button onClick={(e)=>this.deleteBook(e,book)}>删除</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div id="updateBook" onSubmit={(event)=>this.updateBook(event,this.stateCurrent)} className={this.state.showUpdate}>
                <form action="">
                    <input type="text" name="bname" value={this.state.bname} onChange={(e)=>this.handleChange(e)}/>
                    <input type="decimal" name="price" value={this.state.price} onChange={(e)=>this.handleChange(e)}/>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <form action=""><input type="text" defaultValue="dfdf"/></form>
            </div>

        </div>)
    }

}
ReactDOM.render(<App/>,document.getElementById("root"));
