import React, { useState } from 'react';

function Portfolio() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const projectsCol1 = [
    {
      name: 'Day Scheduler',
      link: 'https://nchow18.github.io/work-day-scheduler/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/scheduler.png',
      github: 'https://github.com/nchow18/work-day-scheduler',
      label: 'day-schedule',
      details: 'This App allows users to store their current day scheduling, with colour coordinated past, present and future schedules will be displayed based on urgency',
      tech: 'LocalStorage, API',
      year: '2021'
    },
    {
      name: 'Tech Blog',
      link: 'https://tech-blog-2021.herokuapp.com/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/tech.png',
      github: 'https://github.com/nchow18/tech-blog',
      label: 'tech-port',
      details: 'A Tech Blog where users can share, create and update comments to users and forums and discuss about various matters',
      tech: 'Express-Handlebars, MySQL2, Sequelize, Bcrypt, Dotenv',
      year: '2021'
    },
    {
      name: 'Mortgages',
      link: 'https://nchow18.github.io/mortgages/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/mortgage.png',
      github: 'https://github.com/nchow18/mortgages',
      label: 'mortgages-port',
      details: 'A Basic mortgage website that displays mortgage information and allows users to sign-up for updates',
      tech: 'Html, CSS',
      year: '2021'
    },
    {
      name: 'Screen Genius',
      link: 'https://screen-genius.github.io/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/screen.png',
      github: 'https://screen-genius.github.io/',
      label: 'screen-port',
      details: 'A web based API that allows any user to add, remove and search for movie titles based on genres and ratings',
      tech: 'LocalStorage, Web API',
      year: '2021'
    }
  ]

  const projectsCol2 = [
    {
      name: 'Google Book Search',
      link: 'https://book-search-google-2021.herokuapp.com',
      img: '',
      github: 'https://github.com/nchow18/book-search',
      label: 'book-search',
      details: 'This is an app that works with REACT to show how elements are shown with using useState and it is also connected to server side GraphQL database. This displays the uses of Mutations and Queries between client/server and production/development stages. This site allows you to create users, log in, search for books, save and delete books in your profile.',
      tech: 'React, GraphQL Database',
      year: '2021'
    },
    {
      name: 'Travel Expense Tracker',
      link: 'https://travel-expense-2021.herokuapp.com',
      img: '',
      github: 'https://github.com/nchow18/travel-expense-tracker',
      label: 'expense-tracker',
      details: 'This is an app with the use of indexedDB and service workers, to help increase app functionality with or without internet on your mobile device for tracking your travel expenses.',
      tech: 'IndexedDB, Service Workers',
      year: '2021'
    },
    {
      name: 'Progressive Web Food App',
      link: 'https://nchow18.github.io/progressive-web-app/',
      img: '',
      github: 'https://github.com/nchow18/progressive-web-app/tree/develop',
      label: 'progressive-app',
      details: 'An App that is stored on your device as an App, that can be easily accessible without loading a browser independently',
      tech: 'Progressive Web Development, Service Worker',
      year: '2021'
    }
  ]

  const projectsCol3 = [
    {
      name: 'Task Master',
      link: 'https://nchow18.github.io/taskmaster-pro/',
      img: '',
      github: 'https://github.com/nchow18/taskmaster-pro',
      label: 'task-master',
      details: 'Web Application to help users locally store their tasks on a device',
      tech: 'LocalStorage',
      year: '2021'
    },
    {
      name: 'Note Taker',
      link: 'https://hidden-ravine-62234.herokuapp.com',
      img: '',
      github: 'https://github.com/nchow18/Note-Taker',
      label: 'note-taker',
      details: 'A Web Application to help store and display your current and past notes',
      tech: 'Express.js',
      year: '2021'
    },
    {
      name: 'Weather Dashboard',
      link: 'https://nchow18.github.io/weather-dashboard/',
      img: '',
      github: 'https://github.com/nchow18/weather-dashboard',
      label: 'weather-dashboard',
      details: 'A Web Application that searches and displays the 5 day weather forecast for the desired location',
      tech: 'Server Side API',
      year: '2021'
    },
    {
      name: 'Pizza App',
      link: '',
      img: '',
      github: 'https://github.com/nchow18/pizza-hunt',
      label: 'pizza-app',
      details: 'A web application that helps a pizza business store, create and share pizza orders for purchasing',
      tech: 'MySQL Database',
      year: '2021'
    }
    // {
    //   name: '',
    //   link: '',
    //   img: '',
    //   github: '',
    //   label: '',
    //   details: '',
    //   tech: '',
    // }
  ]

  function SlideCard(position) {

    const cardWidth = 325;
    const cardStd = 650;

    var card = document.getElementsByClassName('portfolio-card');

    if (position === 0) {

      for ( var i = 0; i < card.length; i++) {

        card[i].style.transform = 'scale(1)';
        card[i].style.transitionDuration = '1s'

        if (currentSlide > position) {
          card[i].style.left = cardStd + 'px';
        } else {
          card[i].style.left = cardStd + 'px';
          card[i].style.animationDuration = '1s';
        }
      }

      setCurrentSlide(0);

    } else if (position === 1) {

      for ( var r = 0; r < card.length; r++) {

        if (r >= position) {
          card[r].style.transform = 'scale(1)';
          card[r].style.transitionDuration = '1s'
          card[r].style.zindex = '2';
        } else {
          card[r].style.transform = 'scale(.8)';
          card[r].style.transitionDuration = '1s'
          card[r].style.zindex = '1';

        }

        if (currentSlide > position) {
          card[r].style.left = (cardStd - (cardWidth * position)) + 'px';
        } else {
          card[r].style.left = (cardStd - (cardWidth * position)) + 'px';
        }
      }

      card[0].style.left = (cardStd - (100)) + 'px';

      setCurrentSlide(1);

    } else if (position === 2) {

      for ( var x = 0; x < card.length; x++) {

        if (x >= position) {
          card[x].style.transform = 'scale(1)';
          card[x].style.transitionDuration = '1s';
          card[x].style.zindex = '2';
        } else {
          card[x].style.transform = 'scale(.8)';
          card[x].style.transitionDuration = '1s'
          card[x].style.zindex = '1';
        }

        if (currentSlide > position) {
          card[x].style.left = (cardStd - (cardWidth * position)) + 'px';
        } else {
          card[x].style.left = (cardStd - (cardWidth * position)) + 'px';
        }
      }

      card[0].style.left = (cardStd - (200)) + 'px';
      card[0].style.transform = 'scale(0.7)';
      card[1].style.left = (cardStd - (450)) + 'px';
      card[1].style.transform = 'scale(0.8)';

      setCurrentSlide(2);

    } else if (position === 3) {

      for ( var c = 0; c < card.length; c++) {
        if (c >= position) {
          card[c].style.transform = 'scale(1)';
          card[c].style.transitionDuration = '1s';
          card[c].style.zindex = '2';
        } else {
          card[c].style.transform = 'scale(.8)';
          card[c].style.transitionDuration = '1s';
          card[c].style.zindex = '1';
        }

        if (currentSlide > position) {
          card[c].style.left = (cardStd - (cardWidth * position)) + 'px';
        } else {
          card[c].style.left = (cardStd - (cardWidth * position)) + 'px';
        }
      } 

      card[0].style.left = (cardStd - (175)) + 'px';
      card[0].style.transform = 'scale(0.6)';
      card[1].style.left = (cardStd - (450)) + 'px';
      card[1].style.transform = 'scale(0.7)';
      card[2].style.left = (cardStd - (725)) + 'px';
      card[2].style.transform = 'scale(0.8)';
      card[3].style.width = 225 + 'px';
      card[4].style.width = 600 + 'px';
      card[4].style.height = 'auto';

      setCurrentSlide(3);

    } else if (position === 4) {

      for ( var t = 0; t < card.length; t++) {
        if (t >= position) {
          card[t].style.transform = 'scale(1)';
          card[t].style.transitionDuration = '1s'
        } else {
          card[t].style.transform = 'scale(.8)';
          card[t].style.transitionDuration = '1s'
        }

        if (currentSlide > position) {
          card[t].style.left = (cardStd - (cardWidth * position)) + 'px';
        } else {
          card[t].style.left = (cardStd - (cardWidth * position)) + 'px';
        }
      }
      setCurrentSlide(4);
    }
  }

  function openLink(link) {
    window.open(link);
  }

  return (
    <div className="portfolio-container">

      <div className="portfolio-card" onClick={() => {SlideCard(0)}}>
        <div className="portfolio-card-img">
          IMG
        </div>
        <div className="porfolio-card-details">
          <span>
            DETAILS
          </span>
          <div className="portfolio-card-links">
            <i className="fab fa-github"></i>
            <i className="far fa-folder-open"></i>
          </div>
        </div>
      </div>

      <div className="portfolio-card" onClick={() => {SlideCard(1)}}>
        <div className="portfolio-card-img">
          IMG
        </div>
        <div className="porfolio-card-details">
          <span>
            DETAILS
          </span>
          <div className="portfolio-card-links">
            <i className="fab fa-github"></i>
            <i className="far fa-folder-open"></i>
          </div>
        </div>
      </div> 
      
      <div className="portfolio-card" onClick={() => {SlideCard(2)}}>
        <div className="portfolio-card-img">
          IMG
        </div>
        <div className="porfolio-card-details">
          <span>
            DETAILS
          </span>
          <div className="portfolio-card-links">
            <i className="fab fa-github"></i>
            <i className="far fa-folder-open"></i>
          </div>
        </div>
      </div>

      <div className="portfolio-card" onClick={() => {SlideCard(3)}}>
        <div className="other-projects">
          <span>Other awesome projects<i className="fas fa-arrow-circle-right"></i></span>
        </div>
      </div>

      <div className="portfolio-card" onClick={() => {SlideCard(4)}}>
        <div className="projects-container">
          <div className="project-column">
            {projectsCol1.map((proj) => (
              <div key={proj.name} className="project-item">
                <div className="project-hover">
                <i onClick={() => {openLink(proj.github)}} className="fab fa-github"></i>
                  <i onClick={() => {openLink(proj.link)}} className="far fa-folder-open"></i>
                </div>                
                <div className="project-content">
                  <span>{proj.name}</span>
                  <span>{proj.details}</span>
                  <span>{proj.tech}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="project-column">
            {projectsCol2.map((proj) => (
              <div key={proj.name} className="project-item">
                <div className="project-hover">
                <i onClick={() => {openLink(proj.github)}} className="fab fa-github"></i>
                  <i onClick={() => {openLink(proj.link)}} className="far fa-folder-open"></i>
                </div>                
                <div className="project-content">
                  <span>{proj.name}</span>
                  <span>{proj.details}</span>
                  <span>{proj.tech}</span>
                </div>              
              </div>
            ))}            
          </div>
          <div className="project-column">
            {projectsCol3.map((proj) => (
              <div key={proj.name} className="project-item">
                <div className="project-hover">
                  <i onClick={() => {openLink(proj.github)}} className="fab fa-github"></i>
                  <i onClick={() => {openLink(proj.link)}} className="far fa-folder-open"></i>
                </div>                
                <div className="project-content">
                  <span>{proj.name}</span>
                  <span>{proj.details}</span>
                  <span>{proj.tech}</span>
                </div>               
              </div>
            ))}            
          </div>          
        </div>
      </div>      

    </div>
  )
}

export default Portfolio;