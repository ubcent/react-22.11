import './Post.css';
import React, {PureComponent} from 'react';

export default class Post extends PureComponent {
  render(){
  	const {postsArr, onLoadMore, loading} = this.props; 
    return(
	  <div className="Post">
	    <ul>
        {postsArr.map((postsArr, idx) => <li key = {idx}>Заголовок: {postsArr.title}<br />Содержание: {postsArr.body}</li>)}
      </ul>
      <button disabled = {loading} onClick = {onLoadMore}>Посмотреть новости</button>
	  </div>
    );
  };
};
