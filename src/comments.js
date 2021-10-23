import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
import CommentList from "./commentList";


class Comments extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
         comments: [],
         error: "",
         reverted: false,
    }
}

componentDidMount(props) {
    fetch("https://api.github.com/repos/SerzhanaB/exam/issues/"+this.props.id+"/comments")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          comments: result,
        });
        // Проверяем, что получили
        console.log(this.state.comments);
      },
    )
}
  render() {
     const articles = this.state.comments.slice();
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6">
           Комментарии 
          </h1>
            <button className="btn btn-secondary btn-sm float-right" onClick={this.revert}>Обратный порядок</button>
            &nbsp;
            
        </div>
        <CommentList
          articles={this.state.reverted ? articles.slice().reverse() : articles} id={this.props.id}
        />
      </div>
    );
  }

  revert = () => {    this.setState({reverted: !this.state.reverted,});
  };
}




export default Comments;
