import React,{PureComponent} from 'react';
import Article from "./Article";

import './App.css';

class ArticleList extends PureComponent {
 state={openArticleID: null}


 handleClick=openArticleID=> this.setState({
   openArticleID: this.state.openArticleID === openArticleID ? null: openArticleID })
 
render(){
  console.log("---2 лист")
  const articleElements = this.props.articles.map((article,index)=> 
  <li key= {article.id} className="article-list_li" >
         <Article article={article} 
         isOpen={this.state.openArticleID === article.id}
         onButtonClick={this.handleClick.bind(this, article.id)}
         />
  </li>)


  return <ul>{articleElements}</ul>
}
}
export default ArticleList;
