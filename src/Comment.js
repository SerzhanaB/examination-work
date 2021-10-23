import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
let newComment = [];
class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
      error: "",
      count: 0,
    };
  }

  componentWillMount() {}
  componentWillUpdate() {console.log("will update");}

  render() {
    const { article, isOpen, onButtonClick } = this.props;
      
    return (
      <div className="card mx-auto" style={{ width: "99%" }}> 
        <div className="card-body"> {article.body}
          <h6 className="card-subtitle text-muted">Дата создания: {article.created_at}</h6> 
        </div>
      </div>
    );
  }
}

export default Comment;
