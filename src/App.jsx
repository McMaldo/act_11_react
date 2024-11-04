import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import reactLogo from '/React-Dark.svg';
import viteLogo from '/Vite-Dark.svg';
import './css/App.css';

export default function App() {
  const [view, setView] = useState("act6");

  let initActiveLink = () => {
		const url = window.location.href;
		const elems = document.querySelectorAll("header nav a");
		elems.forEach(e => {
      if(url.includes(e.id)) {
        setView(e.id);
      }
    });
	}
  useEffect(()=>{
    setView("act6")
    initActiveLink();
  },[]);

  return (
    <>
      <header>
        <div className='title_container'>
          <h2>Maldonado Pablo</h2>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div className='nav_container'>
          <nav>
            <Link id='act6' to="act_11_react/act6" className={view == "act6" ? "active" : ""} onClick={() => setView("act6")}>Act_6</Link>
            <Link id='act7' to="act_11_react/act7" className={view == "act7" ? "active" : ""} onClick={() => setView("act7")}>Act_7</Link>
            <Link id='act7_p2' to="act_11_react/act7_p2" className={view == "act7_p2" ? "active" : ""} onClick={() => setView("act7_p2")}>Act_7.2</Link>
            <Link id='act8' to="act_11_react/act8" className={view == "act8" ? "active" : ""} onClick={() => setView("act8")}>Act_8</Link>
            <Link id='act9' to="act_11_react/act9" className={view == "act9" ? "active" : ""} onClick={() => setView("act9")}>Act_9</Link>
            <Link id='act10' to="act_11_react/act10" className={view == "act10" ? "active" : ""} onClick={() => setView("act10")}>Act_10</Link>
            <Link id='act10_p2' to="act_11_react/act10_p2" className={view == "act10_p2" ? "active" : ""} onClick={() => setView("act10_p2")}>Act_10.2</Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}