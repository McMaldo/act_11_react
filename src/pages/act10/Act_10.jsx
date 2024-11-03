import React, { useEffect, useState } from 'react';
import s from './Act_10.module.css';


export default function Act_10() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const HandleSearch = ({target}) => {
    setSearch(target.value.toLowerCase());
  }

  useEffect(()=>{
    const fetchData = async (pkm) =>{
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`);
        const results = await data.json();
        setData(results);
      } finally {
        setLoading(false);
      }
    };
    if(search)
		  fetchData(search)
	},[search]);

	return (
		<div className={s.card_list}>
      <input type='search' id='search' name='pokemon' onChange={HandleSearch} defaultValue="" placeholder='Search a Pokemon'/>
		  {loading || Object.keys(data).length === 0 ? <img src='https://raw.githubusercontent.com/McMaldo/act_11_react/acdd214bfdeae61643a1101f93a65f931d97bcdc/loading.svg'/> : 
      <article className={s.pkm}>
				<div className={s.pkm_desc}>
					<span>
						<h3>{data.id}</h3>
						<h3 className={s.pkmName}>{data.name}</h3>
					</span>
					<img src={data.sprites.other.dream_world.front_default}/>
					<div className={s.stats}>
						{data.stats.map((stat,statKey) => (
							<span key={statKey}>
								<div>{stat.stat.name}:</div>
								<div>{stat.base_stat}</div>
							</span>
						))}
					</div>
				</div>
			</article>}
		</div>
	)
}