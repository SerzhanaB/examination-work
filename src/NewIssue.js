import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

let newTitle = [];
let description = [];
const myToken = atob(
  "Z2hwX21OWWFNdmhybnFmd3NpTWhKdlN0N3d5MUV1bnRFbzIyUnN0aQ=="
);
class NewIssue extends Component {
  handleClick() {
    const body = { title: newTitle, body: description };
    fetch("https://api.github.com/repos/SerzhanaB/exam/issues", {
      body: JSON.stringify(body),
      headers: {
        Authorization: "token " + myToken,
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("save", result);
      });
    /*
      const prevIssueNum = this.issues.length;
      while (prevIssueNum === this.issues.length) {
        await sleep(5000);
        this.getIssues();
      }
      console.log(response);
*/
  }
  handlerTitle(e) {
    newTitle = e.target.value;
    console.log(newTitle);
    return newTitle;
  }
  handlerDescr(e) {
    description = e.target.value;
    console.log(description);
    return description;
  }

  render() {
    return (
      <div>
        <section className="card-text">
          <label>Название обращения:</label>
          <br />
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              this.handlerTitle(e);
            }}
          />
          <br />
          <label>Описание обращения:</label>
          <br />
          <input
            type="text"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => {
              this.handlerDescr(e);
            }}
          />
          <br />
          <button
            className="btn btn-secondary btn-sm float-right"
            onClick={this.handleClick}
          >
            {" "}
            <a href="/Issues">Cохранить</a>
          </button>
          <button className="btn btn-secondary btn-sm float-right">
            <a href="/Issues">Отмена</a>
          </button>
        </section>
      </div>
    );
  }
}

export default NewIssue;
