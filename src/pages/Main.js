import React from 'react';
import Contact from './Contact';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Home from './Home';

function Main(props) {

  const {
    nextPage,
    prevPage,
    webLinks,
    currentPage
  } = props

  return (
    <>
      {currentPage === 0 && (
        <Contact nextPage={nextPage} prevPage={prevPage} />
      )}
      {currentPage === 1 && (
        <Home nextPage={nextPage} prevPage={prevPage}  />
      )}
      {currentPage === 2 && (
        <AboutMe nextPage={nextPage} prevPage={prevPage}  />
      )}
      {currentPage === 3 && (
        <Portfolio nextPage={nextPage} prevPage={prevPage}  />
      )}
    </>
  )
}

export default Main;



