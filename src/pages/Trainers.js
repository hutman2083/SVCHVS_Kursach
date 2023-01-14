import React, { Component } from 'react'

import Trainer1 from "../images/train1.png"
import Trainer2 from "../images/train2.png"
import Trainer3 from "../images/train3.png"
import Trainer4 from "../images/train4.png"
import Trainer5 from "../images/train5.png"
import "../styles/Trainers.css"

export default class Trainers extends Component {
  render() {
    return (
      <>
        
        <p className='trainers' >Тренера</p>
        <hr className='hrTrain' />
        <img 
        src={Trainer1}
        className = "img-responsive"
        alt='trainer1'/>
        <p className='p1' >Среди клиенток Петерсона в сети можно увидеть и семью Кардашьян, и Джей Ло, Сиару и многих других. В средствах массовой информации Соединенных Штатов он получил звание самого популярного тренера. Помимо программы тренировок тренер разрабатывал тренажеры и ряд гаджетов для получения клиентами хороших результатов.</p>
        <hr className='hrTrain' />
        <img 
        src={Trainer2}
        className = "img-responsive"
        alt='trainer1'/>
        <p className='p1' >Девушка известна как йога-мама из инстаграм с более чем двумя миллионами подписчиков. Рэйчел не была звездным тренером, она стала просто выкладывать свои видео-уроки в сеть и получила армию поклонников. По мнению Форбс – она одна из самых высокооплачиваем онлайн-тренеров, зарабатывающих за пост в инстаграм от 25000 долларов.</p>
        <hr className='hrTrain' />
        <img 
        src={Trainer3}
        className = "img-responsive"
        alt='trainer1'/>
        <p className='p1' >Список звезд, тренирующихся у Харли, ослепляет и это неспроста. Результатами его труда могут похвастаться Меган Фокс и Леди Гага, Майли Сайрус и многие другие. Харли – магистр в области физиологии и эксперт в области питания Его тренировки занимают всего полчаса, но их количество в неделю составляет не менее пяти. Тренер советует клиентам питаться пять раз в день, включая перекусы.</p>
        <hr className='hrTrain' />
        <img 
        src={Trainer4}
        className = "img-responsive"
        alt='trainer1'/>
        <p className='p1' >В инстаграме профессионального атлета более трех миллионов подписчиков. Симеон панда является фитнес моделью, персональным тренеров и автором блога о фитнесе. Помимо этого тренер пишет книги о фитнесе и выпускает спортивную одежду и аксессуары.</p>
        <hr className='hrTrain' />
        <img 
        src={Trainer5}
        className = "img-responsive"
        alt='trainer1'/>
        <p className='p1' >Ernest Khalimov известный ещё по прозвищу GigaChad. Создаёт собственную музыку и ремиксы под разные песни. Ныне руководит Gym. Его известные ремиксы всегда подписаны как GigaChad. Самый известный GigaChad-Can you feel my heart. </p>
        
      </>
      
    )
  }
}
