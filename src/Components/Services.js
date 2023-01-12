import React, { Component } from 'react'
import Serviece from './Serviece'
import '../styles/Services.css'

class Services extends Component {
  render() {
    if(this.props.services.length > 0)
    return (
      <div>
        {this.props.services.map((el) => (
            <Serviece onEdit={this.props.onEdit}onDelete={this.props.onDelete} key={el.id} serviece = {el} />
        ))}
      </div>
    )
    else
    return (
        <div className='service'>
          <h3>Нет записей</h3>
        </div>
      )
  }
}
export default Services