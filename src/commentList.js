import React, { PureComponent } from "react";
import "./App.css";
import Comment from "./Comment";

const myToken = atob(
  "Z2hwX21OWWFNdmhybnFmd3NpTWhKdlN0N3d5MUV1bnRFbzIyUnN0aQ=="
);
let newComment = [];
class CommentList extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = { openArticleID: null };

  handlerNewComment(e) {
    newComment = e.target.value;
    console.log(newComment);
    return newComment;
  }
  handleClickSave(props) {
    const bod = { body: newComment };
    console.log("сохранить коммент", this.props.id);
    fetch(
      "https://api.github.com/repos/SerzhanaB/exam/issues/" +
        this.props.id +
        "/comments",
      {
        body: JSON.stringify(bod),
        headers: {
          Authorization: "token " + myToken,
        },
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("коммент", result);
      });
  }

  handleClick = (openArticleID) =>
    this.setState({
      openArticleID:
        this.state.openArticleID === openArticleID ? null : openArticleID,
    });

  render() {
    console.log("---2 лист");
    const articleElements = this.props.articles.map((article, index) => (
      <li key={article.id} className="article-list_li">
        <Comment
          article={article}
          isOpen={this.state.openArticleID === article.id}
          onButtonClick={this.handleClick.bind(this, article.id)}
        />
      </li>
    ));

    return (
      <div>
        <ul>{articleElements}</ul>
        <input
          type="text"
          class="form-control"
          onChange={(e) => {
            this.handlerNewComment(e);
          }}
        />
        <button
          className="btn btn-secondary btn-sm float-right"
          onClick={() => this.handleClickSave(this.props)}
        >
          <img
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/save-file-option_icon-icons.com_73423.png"
            width="20px"
            height="20px"
          />{" "}
          &nbsp; Cохранить коммент
        </button>
      </div>
    );
  }
}
export default CommentList;
