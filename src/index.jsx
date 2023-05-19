import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {Header} from "./Header"
import { Dashboard } from './Dashboard';


const App = () => (
  <>
 <div className="container">

    <Header title="Chytrý dům"/>
    <Dashboard/>

 </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);