import { Component } from 'react';
import { FormElement } from './form';
import { ContactsList } from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {


    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
   
      };
    });
  };
  render() {
    return (
      <div
        style={{
               display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
                color: '#010101',

        }}
      >
        <h1>Phonebook</h1>
        <FormElement onAdd={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
