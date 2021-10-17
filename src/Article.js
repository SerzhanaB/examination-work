import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";

class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0  };
    //this.handleClick =handleClick.bind(this)
  }
  //state = { isOpen: true };

  componentWillMount() {
    //console.log("component will mount");
  }
/*
  componentWillReceiveProps(nextProps) {
   // console.log("will receive props");

    if (nextProps.defaultOpen !== this.props.defaultOpen)
      this.setState({
        isOpen: nextProps.defaultOpen,
      });
  }
*/
  componentWillUpdate() {
    console.log("will update");
  }

 
  render() {
    const { article,isOpen, onButtonClick } = this.props;
    const body = isOpen && (

      
      <section className="card-text"> <p>Текст задания:</p><div>{article.task}</div> <br/> <p> Ответ:</p> <div>{article.text}</div> </section>
  
    );
    return (
      <div className="card mx-auto" style={{ width: "99%" }}>
        <div className="card-header">
          <h2>
            {article.title}
            <button
              onClick={onButtonClick}
              className="btn btn-secondary btn-sm float-right"
            >
              {isOpen ? "Close" : "Open"}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            creation date:{new Date(article.date).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    );
  }
}

export default Article;
