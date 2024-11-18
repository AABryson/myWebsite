import {Link} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => 
  <div className='homenavbar'>
    <h5 className='navtextContainer'>
      <Link to='/' className='navItem'>Home</Link>
      <Link to='/Lectures' className='navItem'>Lectures</Link>
      <Link to='/Papers' className='navItem'>Papers</Link>
      <Link to='/Projects' className='navItem'>Projects</Link>
      <Link to='/Courses' className='navItem'>Courses</Link>
      <Link to='/Contact' className='navItem'>Contact</Link>
    </h5>
  </div>
