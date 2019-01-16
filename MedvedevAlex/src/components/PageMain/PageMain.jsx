import './PageMain.css';

import React from 'react';
import LeftContentBlock from 'components/LeftContentBlock'
import RightContentBlock from 'components/RightContentBlock'

export default function PageMain() {
  return (
    <div className="MainPage">
      <LeftContentBlock/>
      <RightContentBlock/>
    </div>
  )
}
