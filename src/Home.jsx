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
                    <Link to='/Lectures' className='fourcatBox'>
                            <div className='fourcatText'>Lectures
                            </div>

                            <div className='fourcatImage' style={{backgroundImage: "url('https://images.unsplash.com/photo-1703680968885-22659eb00165?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlY3R1cmUlMjBoYWxsfGVufDB8fDB8fHww')"}}></div>
                    </Link>

                    <Link to='/Papers' className='fourcatBox'>
                            <h1 className='fourcatText'>
                                Papers
                            </h1>
                            <div className='fourcatImage' style={{backgroundImage:"url('https://www.sofo.org.uk/wp-content/uploads/2017/02/research.jpg')", filter: 'brightness(1.1) grayscale(.5)'}}></div>
                    </Link>

                    <Link to='/Projects' className='fourcatBox'>
                        <h1 className='fourcatText'>
                            Projects
                        </h1>
                        <div className='fourcatImage' style={{backgroundImage:"url('https://dataconomy.com/wp-content/uploads/2022/03/server-computer.jpg')"}}></div>
                    </Link>

                    <Link to='/Courses' className='fourcatBox'>
                        <h1 className='fourcatText'>
                            Courses
                        </h1>
                        <div className='fourcatImage' style={{backgroundImage:"url('https://pbs.twimg.com/media/F0o3nS9WIAEsAia.jpg')"}}></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home