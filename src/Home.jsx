import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Home.css'


function Home () {



    return (
        <div className='container'>
            
            <div id='leftSideOfPage'>

            </div>

            <div id='rightSideOfPage'>

            </div>
            
            <div className='contentContainer'>

                <div className='banner'>
                    <h1 className='name'>Anthony Bryson</h1>
                </div>

                <div className='introduction'>
                    <p className='introductionText'>Welcome to my website, which has been built from scratch.  I was a philosophy professor for 17 years, at the end of which I was burnt out.  So I decided to do the next logical thing - become a software developer.  Below you can find a selection from my past philosophy lectures, a handful of my papers, links to a few of my coding projects, and content from some of my courses.</p>
                </div>
                
                <div className='philosophyBox'>
                    <Link to='/Lectures' className='lecturesBox'>
                            <div className='lecturesText'>Lectures
                            </div>

                            <div className='lecturesImage'></div>
                    </Link>

                    <Link to='/Papers' className='papersBox'>
                            <h1 className='papersText'>
                                Papers
                            </h1>
                            <div className='papersImage'></div>
                    </Link>

                    <Link to='/Projects' className='projectsBox'>
                        <h1 className='projectsText'>
                            Projects
                        </h1>
                        <div className='projectsImage'></div>
                    </Link>

                    <Link to='/Courses' className='coursesBox'>
                        <h1 className='coursesText'>
                            Courses
                        </h1>
                        <div className='coursesImage'></div>
                     
                    </Link>
                </div>

            </div>
        </div>


    )


}

export default Home