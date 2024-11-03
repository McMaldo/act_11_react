import { React, useState, useEffect } from 'react';
import s from './act_9.module.css';

export default function Act_9() {
  const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const ubic = ["Cordoba","Neuquen","jujuy","Tokyo","Kyoto","Okita","Rusia","China","Okinawa","Taiwan","Roma","Paris"];
  useEffect(() => {
		const fetchData = async (link) => {
			try {
				const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1c42b119414945569fd210633241206&q=${link}&aqi=no`);
				const results = await response.json();
				return results;
			} catch (err) {
				console.error(err);
			}
		}
		const fetchAllData = async () => {
			/*let result = ubic.map(async (place) => {
				await fetchData(place);
			})
			setData(result);
			console.log(data)*/
			setData([
				await fetchData("Cordoba"),
				await fetchData("Neuquen"),
				await fetchData("jujuy"),
				await fetchData("Tokyo"),
				await fetchData("Rusia"),
				await fetchData("China"),
				await fetchData("Taiwan"),
				await fetchData("Kyoto"),
				await fetchData("Roma"),
				await fetchData("Paris"),
				await fetchData("Okita"),
				await fetchData("Okinawa")
			])
			setLoading(false);
		}
		fetchAllData();
  }, []);

  return (
    <div className={s.card_list}>
      {loading ? <img src='/loading.svg'/> :
			!data? "Sin Datos" : 
			data.map((e,eKey) => (
				<article className={s.card} key={eKey}>
					<div className={s.img_container}>
						<img src={e.current.condition.icon} alt="" />
						<h2>{e.current.temp_c}°C</h2>
						<h5>{e.location.country+", "+e.location.name}</h5>
					</div>
					<div className={s.desc}>
						<div className={s.element}>
							<div className={s.value}>
								<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ffffff"><path d="M80-146v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-280q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-174.5q-21-10.5-41-19t-49-8.5q-28 0-48.5 8.5t-41 19Q570-164 544.5-155t-64.5 9q-39 0-64.5-9t-46-19.5Q349-185 329-193.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-164 143.5-155T80-146Zm0-178v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-458q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-352.5q-21-10.5-41-19t-49-8.5q-29 0-49.5 8.5t-41 19Q569-342 544-333t-64 9q-39 0-64.5-9t-46-19.5Q349-363 329-371.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-342 143.5-333T80-324Zm0-178v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-636q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-530.5q-21-10.5-41-19t-49-8.5q-28 0-48.5 8.5t-41 19Q570-520 544.5-511t-64.5 9q-39 0-64.5-9t-46-19.5Q349-541 329-549.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-520 143.5-511T80-502Zm0-178v-78q29 0 49.5-9t41.5-19.5q21-10.5 46.5-19T280-814q38 0 62.5 8.5t45.5 19q21 10.5 42 19.5t50 9q29 0 50-9t42-19.5q21-10.5 46-19t62-8.5q38 0 63 8.5t46 19q21 10.5 42 19.5t49 9v78q-38 0-63.5-9T770-708.5q-21-10.5-41-19t-49-8.5q-28 0-48.5 8.5t-41 19Q570-698 544.5-689t-64.5 9q-39 0-64.5-9t-46-19.5Q349-719 329-727.5t-49-8.5q-28 0-48.5 8.5t-41.5 19Q169-698 143.5-689T80-680Z"/></svg>
								<p>{e.current.humidity}%</p>
							</div>
							<h6 className={s.desc_name}>Humidity</h6>
						</div>
						<div className={s.element}>
							<div className={s.value}>
								<span className={s.icon}>air</span>
								{e.current.wind_kph} km/h
							</div>
							<h6 className={s.desc_name}>Wind Speed</h6>
						</div>
					</div>
				</article>
      ))}
    </div>
  )
}