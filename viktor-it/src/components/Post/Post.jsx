import './Post.css';
import React, {PureComponent} from 'react';

export default class Post extends PureComponent {
  render(){
  	const {posts, onLoadMore, loading} = this.props; 
    return(
	  <div className="Post">
	    <ul>
        {posts.map((posts, idx) => <li key = {idx}>Заголовок: {posts.title}<br />Содержание: {posts.body}</li>)}
      </ul>
      <button disabled = {loading} onClick = {onLoadMore}>Посмотреть новости</button>
	  </div>
    );
  };
};
