import React, { useEffect, useState } from 'react'
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import './topbar.scss'
import { FaSearch } from 'react-icons/fa'
import newLogo from '../../assets/images/carlogo.png'

import { MdEmail } from 'react-icons/md'
import { MdAccessTimeFilled } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Topbar = () => {
  // const [dateState, setDateState] = useState()

  // useEffect(() => {
  //   setInterval(() => {
  //     const date = new Date()
  //     setDateState(date.toLocaleTimeString())
  //   }, 1000)
  // }, [])

  return (
    <>
      <div className='navbarWrapper'>
        <div className='topBar'>
          <div className='colOne'>
            <div className='location'>
              <MdEmail className='icon' />
              <a href='mailto: xplorev3@gmail.com'>xplorev3@gmail.com</a>
            </div>
          </div>
          <div className='colTwo'>
            <BsFillTelephoneFill className='icon' />
            <a href='tel:8319979800'>831-997-9800</a>
          </div>
        </div>
        <Navbar collapseOnSelect expand='lg' className='navBar'>
          <Container className='navBarContainer'>
            <Navbar.Brand className='firstDiv'>
              <Link className='link' to='/'>
                <div className='logo'>
                  <img src={newLogo} alt='XplorEV' />
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse className='midDiv' id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='#quickBites'>Quick Bites</Nav.Link>
                <NavDropdown title='Electric Vehicles' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#electriccars'>
                    Electric Cars
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#electricbikes'>
                    Electric Bikes
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title='News' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#latestnews'>
                    Latest News
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='trendingnews'>
                    Trending News
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#videos'>Videos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Knowledge Hub' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#freecourses'>
                    Free Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#knowev'>Know EV</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/gov_ev_policies'>
                    Government EV Policies
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <NavbarCollapse className='searchBar lastDiv'>
              <Nav>
                <Nav.Link as={Link} to='/charging_stations'>
                  <div className='searchDiv'>
                    <FaSearch className='searchIcon' />
                    <span> Find Charging Stations</span>
                  </div>
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Topbar
