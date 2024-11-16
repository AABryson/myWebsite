import {Link} from 'react-router-dom';

export const Navbar = () => 
  <div className='homenavbar'>
    <h5 className='homenavItem'>
      <Link to='/' className='homenavItem'>Home</Link>
      <Link to='/Lectures' className='homenavItem'>Lectures</Link>
      <Link to='/Papers' className='homenavItem'>Papers</Link>
      <Link to='/Projects' className='homenavItem'>Projects</Link>
      <Link to='/Courses' className='homenavItem'>Courses</Link>
      <Link to='/Contact' className='homenavItem'>Contact</Link>
    </h5>
  </div>
