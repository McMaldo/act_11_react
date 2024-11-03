import { React, useState, useEffect } from 'react';
import s from './act_8.module.css';

export default function Act_8() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const RM_ENDPOINT = `https://rickandmortyapi.com/api/character`;
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("error: "+err)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(RM_ENDPOINT);
  }, [RM_ENDPOINT]);

  return (
    <>
      <div className={s.heading}></div>
      <div className={s.card_list}>
        {loading ? <img src='/loading.svg'/> :
        data ? data.results.map((e, eKey) => (
            <article id={e.id} className={s.card} key={eKey}>
              <h3>{e.name}</h3>
              <div className={s.container}>
                <div className={s.img_container}>
                  <img src={e.image} alt="" />
                </div>
                <div className={s.info}>
                  <span><div>Especie:</div><div>{e.species}</div></span>
                  <span><div>Origen:</div><div>{e.origin.name.split(" ")[0]}</div></span>
                  <span><div>Dimension:</div><div>{e.origin.name.split(" ")[1]?e.origin.name.split(" ")[1].substring(1,e.origin.name.split(" ")[1].length-1):"unknown"}</div></span>
                </div>
                <div className={s.others}>
                  <span className={s.ep}>Apariciones:</span>
                  <span className={s.epList}>{e.episode.map((elem,elemKey)=>(<div key={elemKey}>{elem.split("/")[5]}</div>))}</span>
                  <span><div>Cargado:</div><div>{e.created.split("T")[0]}</div></span>
                </div>
              </div>
            </article>
          )
        ) : "Sin Datos"}
      </div>
    </>
  )
}