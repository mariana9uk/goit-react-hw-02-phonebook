import { Component } from "react"
import { FormElement } from "./form";
import { ContactsList } from "./ContactsList";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  addContact=newContact=>{
    console.log(newContact)
    this.setState(prevState=>{
      return{
        contacts: prevState.contacts.push(newContact)
      }
    })
  }
  render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
  <FormElement onAdd={this.addContact}/>
  <ContactsList/>
    </div>
  );}
};
