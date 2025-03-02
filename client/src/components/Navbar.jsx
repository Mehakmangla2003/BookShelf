//import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import PropTypes from 'prop-types';

const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>Book Shelf</Link>
        </div>
        <div className='navbar-right'>
          <Link to="/books" className='navbar-link'>Books</Link>
          {role === "admin" && <>
          <Link to="/addbook" className='navbar-link'>Add Book</Link>
          <Link to="/addstudent" className='navbar-link'>Add Student</Link>
          <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
          </>
          }
          {role === "" ?
          <Link to="/login" className='navbar-link'>Login</Link>
          : <Link to="/logout" className='navbar-link'>Logout</Link> 
          }
          
        </div>
    </nav>
  )
}

Navbar.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Navbar
