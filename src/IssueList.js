import React,{PureComponent} from 'react';
import Issue from "./Issue";

import './App.css';

class IssueList extends PureComponent {
 state={openArticleID: null}


 handleClick=openArticleID=> this.setState({
   openArticleID: this.state.openArticleID === openArticleID ? null: openArticleID })
 
render(){
  console.log("---2 лист")
  const articleElements = this.props.articles.map((article,index)=> 
  <li key= {article.id} className="article-list_li" >
         <Issue article={article} 
         isOpen={this.state.openArticleID === article.id}
         onButtonClick={this.handleClick.bind(this, article.id)}
         />
  </li>)


  return <ul>{articleElements}</ul>
}
}
export default IssueList;
