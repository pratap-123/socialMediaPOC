import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './custom/footer';
import Header from './custom/header';
import Routee from './App';
import Mapping from './main'; 




ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routee/>
    
    <Footer/>
    
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
