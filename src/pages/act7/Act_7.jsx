import React, { useEffect, useState } from 'react';
import s from './act_7.module.css';

const MOVIE = "Fast & Furious";
const MV_ENDPOINT = `https://moviedatabase8.p.rapidapi.com/Search/${MOVIE}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a17982439cmsh4cce0a4bd65d8e8p1340a6jsnbffd28a6a9cc',
		'X-RapidAPI-Host': 'moviedatabase8.p.rapidapi.com'
	}
};

export default function Act_7() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchData = async () =>{
		try {
			const data = await fetch(MV_ENDPOINT, options);
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
	},[MV_ENDPOINT]);

  return (
    <div className={s.card_list}>
      {loading ? <img src='https://raw.githubusercontent.com/McMaldo/act_11_react/acdd214bfdeae61643a1101f93a65f931d97bcdc/loading.svg'/> :
			!data.message ? data.map((e,eKey) =>(
				<article key={eKey}>
					<div className={s.img_container}>
						{(e.primaryImage != null) ? (<img src={e.poster_path} />) : (<img src="/Image-not-found.png" className={s.img404}/>)}                 
					</div>
					<div className={s.desc_container}>
						<h3>{e.title}</h3>
						<div className={s.desc}>
							<p>Release Date {e.release_date}</p>
						</div>
					</div>
				</article>
      )) : data.message}
    </div>
  )
}