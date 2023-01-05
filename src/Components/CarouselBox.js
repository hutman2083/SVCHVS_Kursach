import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Homeimage from '../images/Home.png';
import Gymimage from '../images/Gym.jpg';
import Trainersimage from '../images/Trainers.jpeg';
import Exercisesimage from '../images/Exercises.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                height="870"
                src={Homeimage}
                alt='Home'
            />
            <Carousel.Caption>
                <h1> Добро пожаловать на сайт BillyGym</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                height="870"
                src={Gymimage}
                alt='Gym'
            />
            <Carousel.Caption>
                <h1> Площадь тренажерного зала составляет 1440 кв.м</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                height="870"
                src={Trainersimage}
                alt='Trainers'
            />
            <Carousel.Caption>
                <h1> Топовые тренера со всего мира</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                height="870"
                src={Exercisesimage}
                alt='Exercises'
            />
            <Carousel.Caption>
                <h1> Лучшие упражнения</h1>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
