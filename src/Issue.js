import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
import Comments from "./comments";
import IssueEdit from "./issueEdit";

let newValue = [];
const myToken = atob(
  "Z2hwX1RRcjhEV3V5aWJIaEJCcXVLWVJLT25MQ1VsQ094UzBTdUo1Qg=="
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Issue extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      error: "",
      count: 0,
      reverted: false,
    };
  }

  componentDidMount() {}
  componentWillUpdate() {
    console.log("will update");
  }

  handleCloseIssue(id) {
    const body = { state: "closed" };
    fetch("https://api.github.com/repos/SerzhanaB/exam/issues/" + id, {
      body: JSON.stringify(body),
      headers: {
        Authorization: "token " + myToken,
      },
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("closed", result);
      });
  }

  /*
  handleClickEdit() {
    const body = { body: newValue};
    fetch("https://api.github.com/repos/SerzhanaB/exam/issues/18/comments", {
      body: JSON.stringify(body),
      headers: {
        Authorization: 'token '+ myToken,
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  handlerTitle(e) {
    newValue = e.target.value;
    console.log(newValue);
    return newValue;
    
  }
*/

  render() {
    const { article, isOpen, onButtonClick } = this.props;
    let profile = "https://github.com/";
    const body = isOpen && (
      <section className="card-text">
        <p>
          Статус:&nbsp;
          {article.state === "open" ? (
            <span>Открыто</span>
          ) : (
            <span>Закрыто</span>
          )}
          &nbsp; Автор обращения:
          <a href={profile + article.user.login}>{article.user.login}</a>&nbsp;
          &nbsp;
          <a href={article.html_url}>
            <img
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s180-rw"
              width="30px"
              height="30px"
            />{" "}
          </a>
        </p>
        <p>
          Описание обращения:
          {article.state === "open" && <IssueEdit id={article.number} body={article.body} />}
          {article.body === "null" ? (
            <span></span>
          ) : (
            <span> {article.body}</span>
          )}
          &nbsp;
        </p>

        <div>Последнее обновление: {article.updated_at}</div>
        <Comments id={article.number} />
      </section>
    );

    return (
      <div className="card mx-auto" style={{ width: "99%" }}>
        <div className="card-header">
          <h2>
            №{article.number} {article.title} &nbsp;
            <button
              onClick={onButtonClick}
              className="btn btn-secondary btn-sm float-right"
            >
              {isOpen ? "Свернуть" : "Раскрыть"}
            </button>
            &nbsp;
            {article.state === "open" && (
              <button
                className="btn btn-secondary btn-sm float-right"
                onClick={() => {
                  this.handleCloseIssue(article.number);
                }}
              >
                Закрыть запрос
              </button>
            )}
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            Дата создания: {article.created_at}
          </h6>
          {body}
        </div>
      </div>
    );
  }
}

export default Issue;
