import {StyledContacts} from "./ContactsStyleed"

export const ContactsList  = ({contacts})=>{
   const contactsListItems = contacts.map(contact=>(
      <li key={contact.id} >{contact.name}</li>
   ))
   return(
      <StyledContacts>
   {contactsListItems}
    </StyledContacts>
   ) 
}

 