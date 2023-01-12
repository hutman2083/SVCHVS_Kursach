import React, { Component } from 'react'
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import '../styles/Services.css'
import AddService from './AddService'

class Serviece extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    serviece = this.props.serviece
    render() {
    return (
        <div className='service' >
        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.serviece.id)} className="delete-icon" />
        <IoHammerSharp onClick={() => {
            this.setState({
                editForm: !this.state.editForm
            })
        }} className="edit-icon"/>
        <h3>{this.serviece.firstname} {this.serviece.lastname}</h3>
        <p>Цена:{this.serviece.price}$</p>
        <p>Тренер:{this.serviece.trainernames}</p>

        {this.state.editForm && <AddService serviece = {this.serviece}onAdd={this.props.onEdit}/>}
    </div>
    )
  }
}

export default Serviece