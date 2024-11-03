import React from 'react';
import { batalla, contarPorTipos, carrera, pokemons } from './data.js';
import s from './Act_6.module.css';

export default function Act_6() {
  contarPorTipos(pokemons);

  // Carrera Pokemon SetData
  let competitors = ['Caterpie', 'Bulbasaur', 'Charmander', 'Squirtle'];
  let places = carrera(pokemons, competitors);

  return (
    <>
      <h2 className={s.title}>Pokemons</h2>
      <section className={s.card_list}>
        {pokemons.map(({id,name:{english}},pokeKey) => (
            <article className={s.card} key={pokeKey}>
              <h4 className={s.id}>id: {id}</h4>
              <h4>{english}</h4>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
            </article>
        ))}
      </section>
      <h2 className={s.title}>Batalla Pokemon</h2>
      <section className={s.card_list}>
        {pokemons.map(({id,name:{english}},pokeKey) => {
          let result=batalla(pokemons,'Charizard','Caterpie');
          if(result[0]==english){
            return(
              <article className={s.card+" "+s.winner} key={pokeKey}>
                <h3 className={s.title}>Ganador:</h3>
                <h4>{english}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
              </article>
            )
          }else if(result[1]==english){
            return(
              <article className={s.card} key={pokeKey}>
                <h3 className={s.title}>Perdedor:</h3>
                <h4>{english}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
              </article>
            )
          }
        })}
      </section>
      <h2 className={s.title}>Carrera Pokemon</h2>
      <section className={s.card_list}>
        {places.map(({id,name:{english}}, pokeKey) => (
          <article className={s.card+" "+(pokeKey == 0 ? s.winner : "")} key={pokeKey}>
            <h3 className={s.title}>Lugar n°{pokeKey+1}:</h3>
            <h4>{english}</h4>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
          </article>
        ))}
      </section>
    </>
  )
}