import React from 'react';
import './Projects.css';

export const Projects = () => 
  <div className='containerProjects'>
    <header className='projectsTopHalf'>
      <h1 className='projectsTitleText'>Projects</h1>
    </header>

    <section className='projectsBottomHalf'>
      <div className='projectBox'>
        <h1 className='projectTitle'>Glorious Books</h1>
        <p className='projectsBody'>
          <i>Objective:</i> Create a database driven website powered by an external API.
        </p>
        <p className='projectsBody'>
          <i>Tools:</i> HTML, CSS, JavaScript, React, NodeJS, OAuth2.0, Axios
        </p>


        <p className='projectsBody'>
          <i>Outcome:</i> Created a website for searching the Google Books API by either title, author, or subject.  Each book returned from a search was shown on a web page along with a summary of the book, book images, average rating, and links to purchase the book, preview the book, and add the book to Google bookshelves.  Users could login to the Google authorization server, receive a token, access their collection of books on the website, and update those collections.
        </p>
        <p className='projectsBody'>
          <i>GitHub: </i><a href="https://github.com/AABryson/GloriousBooksRevised">https://github.com/AABryson/GloriousBooksRevised</a>
        </p>
        <p className='projectsBody'>
          <i>URL: </i> 
          <a href="https://gloriousbooks.netlify.app">https://gloriousbooks.netlify.app</a>
        </p>
      </div>

      <div className='projectsLine'></div>
      <div className='projectBox'>
        <h1 className='projectTitle'>The Cocktail Encyclopedia</h1>
        <p className='projectsBody'>
          <i>Objective:</i> Create a database driven website powered by an external API.
        </p>
        <p className='projectsBody'>
          <i>Tools:</i> Python, Flask, SQLAlchemy, PostgreSQL, Jinja, WTForms, Cocktails API, Axios
        </p>

        <p className='projectsBody'>
          <i>Outcome:</i> Created a website for searching cocktails via the Cocktails DB API.  Users could search for cocktails through names or ingredients, find cocktail recipes, add drinks to their favorites, and write reviews.  Information about users, their reviews and favorites were stored in a SQL database.
        </p>
        <p className='projectsBody'>
          <i>GitHub: </i>
          <a href="hhttps://github.com/AABryson/CapstoneoneStyledDeployed.git">https://github.com/AABryson/CapstoneoneStyledDeployed.git</a>
        </p>
        <p className='projectsBody'>
          <a href="https://capstoneonestyleddeployed.onrender.com">
            <i>URL: </i>https://capstoneonestyleddeployed.onrender.com</a>
        </p>

      </div>


    </section>
  </div>
