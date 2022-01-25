import React, { useState, useEffect } from 'react';

function Portfolio() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDot, setCurrentDot] = useState(0);
  const [cardWidth, setWidth] = useState();
  const [currentProj, setCurrentProj] = useState()
  const [cardStd, setStd] = useState();
  const [isModal, setModal] = useState(false);

  console.log(currentProj);

  useEffect(() => {

    if (window.innerWidth < 600) {

      setWidth(200);
      setStd(650);

      console.log('less than 600px');

    } else {

      setWidth(325);
      setStd(650)

      console.log('greater than 600px');
    }
  },[])

  const topProjects = [
    {
      name: 'King Seafood',
      link: 'https://king-seafood-2021-1.herokuapp.com/products',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/king.png',
      github: 'https://github.com/nchow18/king-seafood',
      label: 'king-port',
      details: 'A freshly designed web application for the company Kings Seafood 18, who required a seafood website that can allow customers to view, search and purchase their products, with options of either logging in or as a gueset for storing their items in a shopping cart',
      year: '2021'
    },
    {
      name: 'Woof',
      link: 'https://woof-2021.herokuapp.com',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/woof.png',
      github: 'https://github.com/woof-board/woof',
      label: 'woof-port',
      details: 'A React App that is up to date with the latest trend of e-commerce product delivery.  Consumers can request for a dog walker to walk their dog, and in turn, a registered Dog Walker will be chosen based on their availibility and rating.  The top feature is live tracking of the Dog Walker using Mobile GPS',
      tech: 'test',
      year: '2021'
    },    
    {
      name: 'Envoy',
      link: 'https://envoy-guide.herokuapp.com/',
      img: 'https://raw.githubusercontent.com/nchow18/profile-app/feature/new/src/assets/img/envoy.png',
      github: 'https://github.com/Envoy-products',
      label: 'envoy-port',
      details: 'A web application that allows users to add and comment on environmental products in the market',
      year: '2021'
    }
  ]

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

        if (i === position) {
          card[i].style.filter = 'brightness(200%) blur(0px)';
          card[i].style.boxShadow = '5px 5px 10px rgb(0,0,0,0.7)';
        } else {
          card[i].style.boxShadow = 'none';
          card[i].style.filter = 'brightness(100%)';
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

        if (r === position) {
          card[r].style.filter = 'brightness(200%) blur(0px)';
          card[r].style.boxShadow = '5px 5px 10px rgb(0,0,0,0.7)';
        } else {
          card[r].style.boxShadow = 'none';
          card[r].style.filter = 'brightness(100%)';
        }
      }

      card[0].style.left = (cardStd - (100)) + 'px';
      card[0].style.filter = 'blur(1px)';

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

        if (window.innerWidth < 600) {

          if (currentSlide > position) {
            card[x].style.left = (cardStd - (cardWidth * 2.25)) + 'px';
          } else {
            card[x].style.left = (cardStd - (cardWidth * 2.25)) + 'px';
          }

        } else {
    
          if (currentSlide > position) {
            card[x].style.left = (cardStd - (cardWidth * position)) + 'px';
          } else {
            card[x].style.left = (cardStd - (cardWidth * position)) + 'px';
          }

        }

        if (x === position) {
          card[x].style.filter = 'brightness(200%) blur(0px)';
          card[x].style.boxShadow = '5px 5px 10px rgb(0,0,0,0.7)';
        } else {
          card[x].style.boxShadow = 'none';
          card[x].style.filter = 'brightness(100%)';
        }
      }

      card[0].style.left = (cardStd - (200)) + 'px';
      card[0].style.transform = 'scale(0.7)';
      card[1].style.filter = 'blur(1px)';
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

        if (window.innerWidth < 600) {
          if (currentSlide > position) {
            card[c].style.left = (cardStd - (cardWidth * 3.25)) + 'px';
          } else {
            card[c].style.left = (cardStd - (cardWidth * 3.25)) + 'px';
          }
        } else {
          if (currentSlide > position) {
            card[c].style.left = (cardStd - (cardWidth * position)) + 'px';
          } else {
            card[c].style.left = (cardStd - (cardWidth * position)) + 'px';
          }
        }

        // if (currentSlide > position) {
        //   card[c].style.left = (cardStd - (cardWidth * position)) + 'px';
        // } else {
        //   card[c].style.left = (cardStd - (cardWidth * position)) + 'px';
        // }
      } 

      card[0].style.left = (cardStd - (175)) + 'px';
      card[0].style.transform = 'scale(0.6)';
      card[1].style.left = (cardStd - (450)) + 'px';
      card[1].style.transform = 'scale(0.7)';
      card[2].style.left = (cardStd - (725)) + 'px';
      card[2].style.transform = 'scale(0.8)';
      card[2].style.filter = 'blur(1px)';
      card[3].style.filter = 'blur(0px)';
      card[3].style.width = 225 + 'px';
      card[4].style.width = 600 + 'px';
      card[4].style.height = 'auto';

      setCurrentSlide(3);

      if (currentSlide < position) {
        setTimeout(setPosition, 2000)
      }


    } else if (position === 4) {

      for ( var t = 0; t < card.length; t++) {
        if (t >= position) {
          card[t].style.transform = 'scale(1)';
          card[t].style.transitionDuration = '1s'
        } else {
          card[t].style.transform = 'scale(.8)';
          card[t].style.transitionDuration = '1s'
        }

        if (window.innerWidth < 600) {
          if (currentSlide > position) {
            card[t].style.left = (cardStd - (cardWidth * 5.60)) + 'px';
          } else {
            card[t].style.left = (cardStd - (cardWidth * 5.60)) + 'px';
          }
        } else {
          if (currentSlide > position) {
            card[t].style.left = (cardStd - (cardWidth * position)) + 'px';
          } else {
            card[t].style.left = (cardStd - (cardWidth * position)) + 'px';
          }
        }

        // if (currentSlide > position) {
        //   card[t].style.left = (cardStd - (cardWidth * position)) + 'px';
        // } else {
        //   card[t].style.left = (cardStd - (cardWidth * position)) + 'px';
        // }
      }
      setCurrentSlide(4);
    }
  }

  function openLink(link) {
    window.open(link);
  }

  function setPosition(index) {
    SlideCard(4)
    setCurrentDot(4)
  }

  return (
    <div className="portfolio-container">

      <div className="card-container">
        <div className="portfolio-card" onClick={() => {SlideCard(0); setCurrentDot(0)}}>
          <div className="portfolio-card-img">
            <img alt="king" src={process.env.PUBLIC_URL + `/images/projects/kingseafood.jpg`}/>
          </div>
          <div className="portfolio-card-details">
            <span>
              A freshly designed web application for the company Kings Seafood 18, who required a seafood website that can allow customers to view, search and purchase their products, with options of either logging in or as a gueset for storing their items in a shopping cart
            </span>
            <div className="portfolio-card-links">
              <i className="fab fa-github" onClick={() => {openLink(topProjects[0].github)}}></i>
              <i className="far fa-folder-open" onClick={() => {openLink(topProjects[0].link)}}></i>
            </div>
          </div>
        </div>
        <div className="portfolio-card" onClick={() => {SlideCard(1); setCurrentDot(1)}}>
          <div className="portfolio-card-img">
          <img alt="woof" src={process.env.PUBLIC_URL + `/images/projects/woof.jpg`}/>
          </div>
          <div className="portfolio-card-details">
            <span>
              A React App that is up to date with the latest trend of e-commerce product delivery. Consumers can request for a dog walker to walk their dog, and in turn, a registered Dog Walker will be chosen based on their availibility and rating. The top feature is live tracking of the Dog Walker using Mobile GPS
            </span>
            <div className="portfolio-card-links">
              <i className="fab fa-github" onClick={() => {openLink(topProjects[1].github)}}></i>
              <i className="far fa-folder-open" onClick={() => {openLink(topProjects[1].link)}}></i>
            </div>
          </div>
        </div>
        
        <div className="portfolio-card" onClick={() => {SlideCard(2); setCurrentDot(2)}}>
          <div className="portfolio-card-img">
          <img alt="envoy" src={process.env.PUBLIC_URL + `/images/projects/envoy.jpg`}/>
          </div>
          <div className="portfolio-card-details">
            <span>
              A web application that allows users to add and comment on environmental products in the market
            </span>
            <div className="portfolio-card-links">
              <i className="fab fa-github" onClick={() => {openLink(topProjects[2].github)}}></i>
              <i className="far fa-folder-open" onClick={() => {openLink(topProjects[2].link)}}></i>
            </div>
          </div>
        </div>
        <div className="portfolio-card" onClick={() => {SlideCard(3); setCurrentDot(3)}}>
          <div className="other-projects">
            <span>Other Awesome Projects<i className="fas fa-arrow-circle-right"></i></span>
          </div>
        </div>
        <div className="portfolio-card" onClick={() => {SlideCard(4); setCurrentDot(4)}}>
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
          <div className="projects-container-mobile">
            {isModal === false && (
              <div className="projects-column-mobile">
                {projectsCol1.map((proj) => (
                  <div key={proj.name} className="project-item-mobile">
                    <div onClick={() => {setCurrentProj(proj); setModal(true) }} className="project-content-mobile">
                      <span>{proj.name}</span>
                    </div>
                    <div className="project-social">
                      <i onClick={() => {openLink(proj.github)}} className="fab fa-github"></i>
                      <i onClick={() => {openLink(proj.link)}} className="far fa-folder-open"></i>
                    </div>
                  </div>
                ))}
                {projectsCol2.map((proj) => (
                  <div key={proj.name} className="project-item-mobile">
                    <div onClick={() => {setCurrentProj(proj); setModal(true) }} className="project-content-mobile">
                      <span>{proj.name}</span>
                    </div>
                    <div className="project-social">
                      <i onClick={() => {openLink(proj.github)}} className="fab fa-github"></i>
                      <i onClick={() => {openLink(proj.link)}} className="far fa-folder-open"></i>
                    </div>
                  </div>
                ))}
                {projectsCol3.map((proj) => (
                  <div key={proj.name} className="project-item-mobile">
                    <div onClick={() => {setCurrentProj(proj); setModal(true) }} className="project-content-mobile">
                      <span>{proj.name}</span>
                    </div>
                    <div className="project-social">
                      <i onClick={() => {openLink(proj.github)}} className="fab fa-github"></i>
                      <i onClick={() => {openLink(proj.link)}} className="far fa-folder-open"></i>
                    </div>
                  </div>
                ))}                            
              </div>              
            )}

          </div>
          {isModal === true && (
            <div className="projects-modal-container">
              <i onClick={() => {setModal(false)}}className="fas fa-times"></i>
              <div className="project-modal-card">
                <span>{currentProj.name}</span>
                <span>{currentProj.details}</span>
                <span>{currentProj.tech}</span>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className="card-dots">
        <i className={`far fa-circle card-dot ${currentDot === 0 && `active-dot`}`} onClick={() => {SlideCard(0); setCurrentDot(0)}}></i>
        <i className={`far fa-circle card-dot ${currentDot === 1 && `active-dot`}`} onClick={() => {SlideCard(1); setCurrentDot(1)}}></i>
        <i className={`far fa-circle card-dot ${currentDot === 2 && `active-dot`}`} onClick={() => {SlideCard(2); setCurrentDot(2)}}></i>
        <i className={`far fa-circle card-dot ${currentDot === 3 && `active-dot`}`} onClick={() => {SlideCard(3); setCurrentDot(3)}}></i>
        <i className={`far fa-circle card-dot ${currentDot === 4 && `active-dot`}`} onClick={() => {SlideCard(4); setCurrentDot(4)}}></i>
      </div>    

    </div>
  )
}

export default Portfolio;