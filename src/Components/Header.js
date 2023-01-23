import React, { Component } from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'
import Logo from '../images/Logo.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Exercises from '../pages/Exercises'
import Trainers from '../pages/Trainers'
import "../styles/Header.css"
import Service from 'pages/Service'
import Photos from 'pages/Photos'



export default class Header extends Component {
  render() {
    return (
        <>
        <Navbar className='navbar'>
            <Container className="cont" style={{marginLeft:0,marginRight:0,paddingBottom:0,paddingLeft:0} }>
                <Navbar.Brand className ="brand" href="/">
                    <img 
                        src={Logo}
                        height="100"
                        width="574"
                        className="d-inline-block align-top"
                        alt = "logo"
                        
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav"/>
                    <Nav className="mr-auto">
                        <Nav.Link href = "/" >Главное</Nav.Link>
                        <Nav.Link href = "/services" >Запись</Nav.Link>
                        <Nav.Link href = "/photos" >Фотоальбом</Nav.Link>
                        <Nav.Link href = "/trainers" className='train'>Наши тренера</Nav.Link>
                        <Nav.Link href = "/exercises" >Упражнения</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path = "/" element = {<Main/>} />
            <Route path = "/services" element = {<Service/>} />
            <Route path = "/photos" element = {<Photos/>} />
            <Route path = "/trainers" element = {<Trainers/>} />
            <Route path = "/exercises" element = {<Exercises/>} />
          </Routes>
        </Router>
      </>
    )
  }
}
