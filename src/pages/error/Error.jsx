import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <h2>Error 404, url inválida</h2>
      <Link to="/">Volver al Inicio</Link>
    </>
  )
}