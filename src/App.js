import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import './css/main.css';

function App() {

  const  [currentPage, setPage] = useState(1)

  const webLinks = [
    'CONTACT',
    'HOME',
    'ABOUT ME',
    'PORFOLIO'
  ]

  function nextPage() {

    if (currentPage !== 3) {
      setPage(currentPage + 1);
    }
  }

  function prevPage() {

    if (currentPage !== 0) {
      setPage(currentPage - 1);
    }
  }

  return (
    <BrowserRouter>
      <img className="bg-image" alt='bg' src={process.env.PUBLIC_URL + `/images/bg.jpg`}/>
      <div className="page-container">
        <div className="page-arrow-left">
          <i className="fas fa-arrow-circle-left" onClick={() => {prevPage()}}></i>
        </div>
        <div className="page-arrow-right">
          <i className="fas fa-arrow-circle-right" onClick={() => {nextPage()}}></i>
        </div>
        <div className="header-container">
          <div>
            NC
          </div>
          <div>
            HIRE ME
          </div>
        </div>
        <div className="body-content">
          <Switch>
            <Route exact path='/' render={() => <Main 
              nextPage={nextPage} 
              prevPage={prevPage} 
              webLinks={webLinks}
              currentPage={currentPage}  />}/>
          </Switch>
        </div>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
          <i className="far fa-file-alt"></i>
        </div>
        <div className="bottom-links">
          {webLinks.map((link, index) => (
            <div key={index} className={`bottom-link ${currentPage === index && `link-active`}`} onClick={() => {setPage(index)}}>
              {link}
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
