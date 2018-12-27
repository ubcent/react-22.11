import './FotoBlock.css';
import React from 'react';
import img from 'components/FotoBlock/Foto/women.jpg';

export default function FotoBlock() {
  return (
    <div className="fotoBlock">
    <img src = {img} />
    </div>
  );
};
