import React, { useEffect, useState } from 'react';
import s from './Act_7_p2.module.css';

const PKM = "rayquaza";
const PKM_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/${PKM}`;

export default function Act_7_p2() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchData = async () =>{
		try {
			const data = await fetch(PKM_ENDPOINT);
			const results = await data.json();
			setData(results);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
  useEffect(()=>{
		fetchData()
	},[PKM_ENDPOINT]);

	return (
		<div className={s.card_list}>
		  	{loading ? <img src='/loading.svg'/> : 
			data ? <article className={s.pkm}>
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
			</article> : "Sin Datos"}
		</div>
	)
}