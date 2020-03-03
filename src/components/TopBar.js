import React from 'react'
import { Link, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const TopBar = () => {
  return (
    <>
      <Switch>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <Link to="/">MovieDB</Link>
          </Navbar.Brand>
          <Nav.Item><Link to="/top-rated">Top Rated</Link></Nav.Item>
          <Nav.Item><Link to="/popular">Popular</Link></Nav.Item>
          <Nav.Item><Link to="/upcoming">Upcoming</Link></Nav.Item>
        </Navbar>
      </Switch>
    </>
  )
}

export default TopBar