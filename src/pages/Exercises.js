import React, { Component } from 'react'
import { Container,Card,Button,CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Ganteli from "../images/gan1.png"
import Ganteli2 from "../images/gan2.png"
import Ganteli3 from "../images/gan3.png"
import Ganteli4 from "../images/gan4.png"
import Ganteli5 from "../images/gan5.png"
import Ganteli6 from "../images/gan6.png"
import "../styles/Exercises.css"

export default class Exercises extends Component {
  render() {
    return (
    <>
    <div>
      <Link to ="/" className='home'>Home</Link> 
      <p className='exes'>Упражнения</p>
      <hr/>
    </div>
      <Container>
          <CardGroup >
            <Card className='me-5'>
              <Card.Img variant='top' src={Ganteli} alt='Gan' style={{width:421,height:475}}>
              </Card.Img>
              <Card.Body className='cardBody'>
                <Card.Title>
                  Поднятие гантели на прокачку предплечея 
                </Card.Title>
                <Button variant ="primary" href='https://bodybuilding-and-fitness.ru/myshcy/ruki/predplechya/uprazhneniya-na-predplechya-s-gantelyami.html'>Узнать больше об упражнении</Button>
              </Card.Body>
            </Card>
            <Card className='me-5'>
              <Card.Img variant='top' src={Ganteli2} alt='Gan' style={{width:421,height:475}}>
              </Card.Img>
              <Card.Body className='cardBody'>
                <Card.Title>
                Поднятие гантелей на прокачку бицепса

                </Card.Title>
                <Button variant ="primary" href='https://goodlooker.ru/uprazhnenia-na-biceps.html'>Узнать больше об упражнении</Button>
              </Card.Body>
            </Card>
            <Card className='me-5'>
              <Card.Img variant='top' src={Ganteli3} alt='Gan' style={{width:421,height:475}}>
              </Card.Img>
              <Card.Body className='cardBody'>
                <Card.Title>
                Совместные присидание
                </Card.Title>
                <Button variant ="primary" href='https://lifehacker.ru/8-squats/'>Узнать больше об упражнении</Button>
              </Card.Body>
            </Card>
            </CardGroup>
            <CardGroup className='cardgroup2'>
            <Card className='me-5'>
              <Card.Img variant='top' src={Ganteli4} alt='Gan' style={{width:421,height:475}}>
              </Card.Img>
              <Card.Body className='cardBody'>
                <Card.Title>
                Растяжка ног 
                </Card.Title>
                <Button variant ="primary" href='https://the-challenger.ru/sport-2/trenirovki-sport-2/10-uprazhnenij-na-rastyazhku-nog-kak-myshtsy-tyanutsya-na-samom-dele/#:~:text=%D0%A0%D0%B0%D1%81%D1%82%D1%8F%D0%B6%D0%BA%D0%B0%20%D1%81%20%D0%BE%D0%BF%D0%BE%D1%80%D0%BE%D0%B9%20%D0%BD%D0%B0%20%D1%81%D1%82%D0%B5%D0%BD%D1%83&text=%D0%A1%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D0%B5%D1%81%D1%8C%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%20%D1%81%D1%82%D0%B5%D0%BD%D0%BE%D0%B9%20%D0%B8%D0%BB%D0%B8,%D0%BA%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%2C%20%D0%B7%D0%B0%D1%82%D0%B5%D0%BC%20%D1%81%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D0%B5%20%D0%BD%D0%BE%D0%B3%D1%83.'>Узнать больше об упражнении</Button>
              </Card.Body>
            </Card>
            <Card className='me-5'>
              <Card.Img variant='top' src={Ganteli5} alt='Gan' style={{width:421,height:475}}>
              </Card.Img>
              <Card.Body className='cardBody'>
                <Card.Title>
                Растяжка спины
                </Card.Title>
                <Button variant ="primary" href='https://goodlooker.ru/rastyazhka-spiny.html'>Узнать больше об упражнении</Button>
              </Card.Body>
            </Card>
            <Card className='me-5'>
              <Card.Img variant='top' src={Ganteli6} alt='Gan' style={{width:421,height:475}}>
              </Card.Img>
              <Card.Body className='cardBody'>
                <Card.Title>
                Поднятие штанги
                </Card.Title>
                <Button variant ="primary" href='https://fitness-land.ru/uprazhnenie_podem_shtangi_na_bitseps_stoya/'>Узнать больше об упражнении</Button>
              </Card.Body>
            </Card>
            </CardGroup>
        </Container>
        
      
    </>
      
    )
  }
}
