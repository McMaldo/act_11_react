import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className='error'>
      <span className='card'>
        <h2>Error <span className='nro'>404</span>, url inválida</h2>
        <Link to="/">Volver al Inicio</Link>
      </span>
    </div>
  )
}