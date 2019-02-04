import './News.css';

import React from 'react';
import {Link} from 'react-router-dom';

export default function News(props) {
  const {news, showTextButton, state} = props;
  return (
    <div className="News">
      {news.map((item, idx) => <div key={idx} className="newsBlock"><h3>{item.title}</h3>
        <img className="newsBlockImg" src={require(`./${item.picFilename}`)} alt=""/><p>{item.smallText}</p>
        <div className="twoArticleButtons">
          <button className="showMoreBtn" name={'text' + (idx + 1)} onClick={showTextButton}>читать далее</button>
          <div>
            <Link className="comments" to="/comments">комментарии</Link>
          </div>
        </div>
        <p>{state['text' + (idx + 1)] && item.largeText}</p></div>)}
    </div>
  )
}