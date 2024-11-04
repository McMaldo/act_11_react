import React, { useEffect, useState } from 'react';
import s from './act_7.module.css';
import notFound from '/img/Image-not-found.png';

const MOVIE = "Pokemon";
const MV_ENDPOINT = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${MOVIE}?exact=false&titleType=movie`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e88a9b487msh01d6307eac1549dp1de4cfjsn3280cb953653',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

export default function Act_7() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = async () =>{
		try {
			const data = await fetch(MV_ENDPOINT, options);
			const results = await data.json();
			setData(results);
		} catch (err) {
			setError(err)
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
			!data.results ? "No data" :
			data.error ? data.error :
			error ? error :
			data.results.map((e,eKey) =>(
				<article key={eKey}>
					<div className={s.img_container}>
						{(e.primaryImage != null) ? (<img src={e.primaryImage.url} />) : (<img src={notFound} className={s.img404}/>)}                 
					</div>
					<div className={s.desc_container}>
						<h3>{e.titleText.text}</h3>
						<div className={s.desc}>
							<p>Release Date</p>
							<p>day: {(e.releaseDate != null ? e.releaseDate.day : '-')}</p>
							<p>month: {(e.releaseDate != null ? e.releaseDate.month : '-')}</p>
							<p>year: {(e.releaseDate != null ? e.releaseDate.year : '-')}</p>
						</div>
					</div>
				</article>
      ))}
    </div>
  )
}