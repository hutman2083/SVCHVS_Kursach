import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import photo1 from "../images/photo1.jpg"
import photo2 from '../images/photo2.jpeg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.jpeg'
import photo6 from '../images/photo6.jpg'
import photo7 from '../images/photo7.jpg'
import photo8 from '../images/photo8.jpeg'
import photo9 from '../images/photo9.jpeg'
import photo10 from '../images/photo10.jpg'
import '../styles/Photos.css'
export default class Photos extends Component {
  render() {
    return (
      <>
        <Container className='phcont'>
          <img src={photo1} className= "ph1" alt='photo1'/>
          <img src={photo2} className= "ph1" alt='photo2'/>
          <img src={photo3} className= "ph1" alt='photo3'/>
          <img src={photo4} className= "ph1" alt='photo4'/>
          <img src={photo5} className= "ph1" alt='photo5'/>
          <img src={photo6} className= "ph1" alt='photo6'/>
          <img src={photo7} className= "ph1" alt='photo7'/>
          <img src={photo8} className= "ph1" alt='photo8'/>
          <img src={photo9} className= "ph1" alt='photo9'/>
          <img src={photo10} className= "ph1" alt='photo10'/>
        </Container>
      <footer >BillyGym.2023</footer>
      </>
    )
  }
}
