import './CommentsNew.css';

import React, { PureComponent } from 'react';
import FetchingData from 'containers/FetchingData';
import FetchDataUrl from 'containers/FetchDataUrl';


export default class CommentsNew extends PureComponent {
  static defaultProps = { commentsList: [] }
  constructor(props) {
    super(props)
  }



  findAuthor = (articleAuthorId) => {
    const { authorItems } = this.props;
    const foundAuthor = authorItems.find((item) => { return item.id == articleAuthorId });
    return foundAuthor;
  }

  render() {
    const { commentsList, loading } = this.props;

    return (
      <div>
        <h2>List of Comments</h2>

        <ul className="Comments">
          {commentsList.map((item, idx) => <li key={idx}>
            <h5>Name: {item.name}</h5>
            <p>Text:</p>
            <p>{item.body}</p>
          </li>)}
        </ul>

      </div>
    );
  }
}
