import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";

const myToken = atob(
  "Z2hwX1RRcjhEV3V5aWJIaEJCcXVLWVJLT25MQ1VsQ094UzBTdUo1Qg=="
);
//const value={this.props.body};
let newValue = [];
class IssueEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMode: false,
    };
  }

  handleClickEdit() {
    this.setState({ showMode: !this.state.showMode });
  }

  handleClickSave(id) {
    const body = { body: newValue };
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
    this.setState({ showMode: !this.state.showMode });
  }
  handlerTitle(e) {
    newValue = e.target.value;
    console.log(newValue);
    return newValue;
  }

  render() {
    let  value={this.props.body};
    return (
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png"
          width="20px"
          height="20px"
          onClick={() => {
            this.handleClickEdit();
          }}
        />
        {this.state.showMode === true && (
          <div>
            <textarea
              
              class="form-control"
              value={this.props.body}
              onChange={(e) => {
                this.handlerTitle(e);
              }}
            />
            <button
              className="btn btn-secondary btn-sm float-right"
              onClick={() => {
                this.handleClickSave(this.props.id);
              }}
            >
              <img
                src="https://cdn.icon-icons.com/icons2/936/PNG/512/save-file-option_icon-icons.com_73423.png"
                width="20px"
                height="20px"
              />
              &nbsp;Cохранить обращение
            </button>
          </div>
        )}
      </span>
    );
  }
}

export default IssueEdit;
