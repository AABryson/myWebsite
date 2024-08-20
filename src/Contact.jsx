import React from 'react';
import { Link } from 'react-router-dom';
import  './Contact.css';


function Contact () {

    return (
        <div className='contactContainer'>
            <div className='contactnavbar'>
                <div className='contactbartextContainer'>
                    <h5 className='contactnavItem'>
                        <Link to='/' className='contactnavItem'>Home</Link>
                        <Link to='/Lectures' className='contactnavItem'>Lectures</Link>
                        <Link to='/Papers' className='contactnavItem'>Papers</Link>
                        <Link to='/Projects' className='contactnavItem'>Projects</Link>
                        <Link to='/Courses' className='contactnavItem'>Courses</Link>
                        <Link to='/Contact' className='contactnavItem'>Contact</Link>
                    </h5>
                </div>
            </div>
            <div className='contactDetails'>
                <h1 className='contactH1'>Contact Details</h1>
                <h5 className='contactH5'>Email: anthonyalanbryson@gmail.com</h5>
                <h5 className='contactH5'>Phone: 602-699-7735</h5>
            </div>

        </div>
    )

}

export default Contact;