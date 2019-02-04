import './leftContentBlock.css';

import React from 'react';

import NewsContainer from 'containers/NewsContainer';
import NewsJson from 'components/LeftContentBlock/news.json'

export default function LeftContentBlock() {
  const news = NewsJson;
  return (
    <div className="leftContentBlock">
      <NewsContainer news={news}/>
    </div>
  )
}