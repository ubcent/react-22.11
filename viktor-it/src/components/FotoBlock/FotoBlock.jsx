import './FotoBlock.css';
import React, {Component} from 'react';
import img from 'components/FotoBlock/Foto/women.jpg';


export default class FotoBlock extends Component {
  render() {
    return (
      <div class="fotoBlock">
      <img src = {img} />
      </div>
    );
  };
};
