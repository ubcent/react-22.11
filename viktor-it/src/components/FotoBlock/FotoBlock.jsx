import './FotoBlock.css';
import React, {Component} from 'react';


export default class FotoBlock extends Component {
  render() {
    return (
      <div class="fotoBlock">
      <img src={this.props.img} />
      </div>
    );
  };
};
