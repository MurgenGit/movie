import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import './Components.css'

const TopBar = () => {
  return (
    <Navbar bg="light" variant="light" className="nav-container">
      <Navbar.Brand>
        <Link to="/">MovieDB</Link>
      </Navbar.Brand>
      <Nav.Item className={'nav-item-el'}><Link to="/top-rated">Top Rated</Link></Nav.Item>
      <Nav.Item className="nav-item-el"><Link to="/popular">Popular</Link></Nav.Item>
      <Nav.Item className="nav-item-el"><Link to="/upcoming">Upcoming</Link></Nav.Item>
    </Navbar>
  )
}

export default TopBar