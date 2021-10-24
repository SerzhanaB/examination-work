import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
import IssueList from "./IssueList";

class Issues extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      error: "",
      reverted: false,
    };
  }

  getIssues=()=>{
    fetch("https://api.github.com/repos/SerzhanaB/exam/issues?state=all")
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        issues: result,
      });
      console.log(this.state.issues);
    });

  }
  componentDidMount() {
   this.getIssues();
  }

  componentDidUpdate() {
    this.getIssues();

  }



  render() {
    const articles = this.state.issues.slice();
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6">Обращения</h1>
          <button className="btn btn-secondary btn-sm float-right"><a href="/newIssue">+</a></button>{" "}
          &nbsp;
          <button
            className="btn btn-secondary btn-sm float-right"
            onClick={this.revert}
          >
            Обратный порядок
          </button>
        </div>
        <IssueList
          articles={this.state.reverted ? articles.slice().reverse() : articles}
        />
      </div>
    );
  }

  revert = () => {
    this.setState({ reverted: !this.state.reverted });
  };
}

export default Issues;
