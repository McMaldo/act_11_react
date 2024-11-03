import { useState, useEffect } from 'react';
import s from './Act_10_p2.module.css';

export default function Act_10_p2() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  const DB_ENDPOINT = `https://dragonball-api.com/api/characters?limit=10&page=${page}`;
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
    fetchData(DB_ENDPOINT);
  }, [DB_ENDPOINT]);

  const handlePage = (newPage) => {
    setPage(newPage);
    document.querySelector("."+s.heading).scrollIntoView({behavior: 'smooth'})
  }
  const NavButtons = () => {
    const nav = [1,2,3,4,5,6];
    return (<nav className={s.navigator}>
      {nav.map((n,nKey)=>(
        <button
          key={nKey}
          onClick={() => handlePage(n)}>
          {n}
        </button>
      ))}</nav>
    )
 }

  return (
    <>
      <section className={s.heading}>
        <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" alt="" />
        <div className={s.desc}>
          <span>Base: <a href="https://web.dragonball-api.com/">https://web.dragonball-api.com/</a></span>
        </div>
      </section>
      <section className={s.card_list}>
        {loading ? <img src='https://raw.githubusercontent.com/McMaldo/act_11_react/acdd214bfdeae61643a1101f93a65f931d97bcdc/loading.svg'/> :
        data.items ? data.items.map((item, itemKey)=>(
          <article key={itemKey}>
            <div className={s.img_container}>
              <img src={item.image} alt="" />
            </div>
            <div className={s.data}>
              <h2>{item.name}</h2>
              <p>{item.race} - {item.gender}</p>
            </div>
            <div className={s.data_more}>
              <div className={s.data_stat}>
                <p>Base KI:</p>
                <span>{item.ki}</span>
              </div>
              <div className={s.data_stat}>
                <p>Total KI:</p>
                <span>{item.maxKi}</span>
              </div>
              <div className={s.data_stat}>
                <p>Afilliation:</p>
                <span>{item.affiliation}</span>
              </div>
            </div>
          </article>
        )) : "Sin Datos"}
      </section>
      <NavButtons/>
    </>
  )
}