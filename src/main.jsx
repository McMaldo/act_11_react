import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/index.css';
import App from './App.jsx';
import Act_6 from './pages/act6/Act_6.jsx';
import Act_7 from './pages/act7/Act_7.jsx';
import Act_7_p2 from './pages/act7/Act_7_p2.jsx';
import Act_8 from './pages/act8/Act_8.jsx';
import Act_9 from './pages/act9/Act_9.jsx';
import Act_10 from './pages/act10/Act_10.jsx';
import Act_10_p2 from './pages/act10/Act_10_p2.jsx';
import Error from './pages/error/Error.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/act_11_react" element={<Act_6/>}/>
        <Route path="/act_11_react/act6" element={<Act_6/>}/>
        <Route path="/act_11_react/act7" element={<Act_7/>}/>
        <Route path="/act_11_react/act7_p2" element={<Act_7_p2/>}/>
        <Route path="/act_11_react/act8" element={<Act_8/>}/>
        <Route path="/act_11_react/act9" element={<Act_9/>}/>
        <Route path="/act_11_react/act10" element={<Act_10/>}/>
        <Route path="/act_11_react/act10_p2" element={<Act_10_p2/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
)
