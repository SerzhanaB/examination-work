import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
let newTitle = [];
let description = [];
const myToken = atob(
  "Z2hwX21OWWFNdmhybnFmd3NpTWhKdlN0N3d5MUV1bnRFbzIyUnN0aQ=="
);

class NewIssue extends Component {
  handleClick() {
    const bod = { title: newTitle, body: description };
    fetch("https://api.github.com/repos/SerzhanaB/exam/issues", {
      body: JSON.stringify(bod),
      headers: {
        Authorization:  "token " + myToken,
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  handlerTitle(e) {
    newTitle = e.target.value;
    console.log(newTitle);
    return newTitle;
  }
  /*
  handlerDescr(e){  description = e.target.value;
    console.log(description);
return description}
*/
  render() {
    return (
      <div>
        <section className="card-text">
          <label>комментарий:</label>
          <br />
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              this.handlerTitle(e);
            }}
          />
          <br />
          <br />
          <button
            className="btn btn-secondary btn-sm float-right"
            onClick={this.handleClick}
          >  <a href="/Issues">Cохранить</a>
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
