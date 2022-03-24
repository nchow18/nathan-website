import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Calorie from './pages/Calorie';
import './css/main.css';

function App() {

  const  [currentPage, setPage] = useState(1)

  const webLinks = [
    'CONTACT',
    'HOME',
    'ABOUT ME',
    'PORFTOLIO'
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
          <div className="hire-me">
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
            <Route exact path='/calorie' render={() => <Calorie />} />
          </Switch>
        </div>
        <div className="social-icons">
          <i className="fab fa-instagram" onClick={() => {window.open('https://www.instagram.com/_nathan_chow.json/')}}></i>
          <i className="fab fa-linkedin-in" onClick={() => {window.open('https://www.linkedin.com/in/nathan-chow-1999701b9/')}}></i>
          <i className="fab fa-github" onClick={() => {window.open('https://github.com/nchow18')}}></i>
          <i className="far fa-file-alt" href={process.env.PUBLIC_URL + './Resume-Oct2021.pdf'}></i>
        </div>
        <div className="bottom-links-container">
          <div className="bottom-links">
            {webLinks.map((link, index) => (
              <div key={index} className={`bottom-link ${currentPage === index && `link-active`}`} onClick={() => {setPage(index)}}>
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
