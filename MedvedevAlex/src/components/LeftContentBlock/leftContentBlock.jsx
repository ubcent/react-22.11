import './leftContentBlock.css';

import React, {PureComponent} from 'react';

import News from 'components/News';
import NewsJson from 'components/LeftContentBlock/news.json'

export default function LeftContentBlock() {
  const news = NewsJson;
  return (
    <div className="leftContentBlock">
      <News news={news}/>
    </div>
  )
}