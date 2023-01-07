import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import '../pages/Main'

export default class Login extends Component {
  render() {
    
    
    return (
      <div>
        <h1><form className='loginForm' >
              <h2>Авторизация</h2>
              <div><input className = "loginFormInput" type="text" placeholder="Имя пользователя" required/></div>
              <div><input className = "loginFormInput" type="password" placeholder='Пароль' required/></div>
              <div>
                <Link to='/'>
                <button className = "blackBtn" type="submit" href='/' >Войти</button>
              </Link>
              </div>
          </form></h1>

      </div>
    )
  }
}
