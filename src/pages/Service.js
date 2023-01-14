import React, { Component } from 'react'
import Services from 'Components/Services'
import '../styles/Services.css'
import AddService from 'Components/AddService'




class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
        services: [
          
        ]
   }
   this.addService = this.addService.bind(this)
   this.deleteService = this.deleteService.bind(this)
   this.editService = this.editService.bind(this)
}
  render() {
    
    return <><div>
      <main>
        <Services services ={this.state.services} onEdit = {this.editService}onDelete = {this.deleteService}/>
      </main>
      <aside>
        <AddService onAdd={this.addService}/>
      </aside>
    </div>
    
    </>
    }

  addService(serviece) {
    const id = this.state.services.length + 1;
    this.setState({services: [...this.state.services, {id, ...serviece}]})
  }

  deleteService(id) {
    this.setState({
      services: this.state.services.filter((el) => el.id !== id)
    })
  }

  editService(serviece){
    let allServices = this.state.services
    allServices[serviece.id - 1] = serviece

    this.setState({services: []}, () => {
        this.setState({services: [...allServices]})
    })
  }
}

export default Service;