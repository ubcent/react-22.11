import React, { PureComponent } from 'react';
import { resolve } from 'q';



const FetchDataUrl = (urlString) => {
  let comments = [1];
  let functionComments = [];
  const result = fetch(urlString)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let comments2 = [];
      comments = comments2.concat(data);

      /*   return comments; */
    });

  return comments;

}



export default FetchDataUrl;