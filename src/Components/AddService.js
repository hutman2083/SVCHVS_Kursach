import React, { Component } from 'react'

class AddService extends Component {
    servAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            price:"",
            trainernames:""
        }
    }
  render() {
    return (
      <form ref={(el) => this.myForm = el}>
        <input placeholder="Имя" onChange={(e) => this.setState({firstname: e.target.value})}/>
        <input placeholder="Фамилия" onChange={(e) => this.setState({lastname: e.target.value})}/>
        <input placeholder="Цена" onChange={(e) => this.setState({price: e.target.value})}/>
        <input placeholder="Тренер" onChange={(e) => this.setState({trainernames: e.target.value})}/>
        <button type='button' onClick={() => {
            this.myForm.reset()
            this.servAdd ={
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                price: this.state.price,
                trainernames: this.state.trainernames,
            }
            if(this.props.serviece)
                this.servAdd.id = this.props.serviece.id
            this.props.onAdd(this.servAdd)
        }
        }>Добавить</button>
      </form>
    )
  }
}
export default AddService