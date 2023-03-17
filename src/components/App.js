import React  from 'react';
import { v4 as uuid } from "uuid";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState , useEffect } from 'react';
 
function App() {
  // const contacts = [
  //  {
  //   id: '1',
  //   name:'Deepak',
  //   email: 'dverma@atlassoftweb.com'
  //  },
  //  {
  //   id: '2',
  //   name:'Rahul',
  //   email: 'rahul@atlassoftweb.com'
  //  },
  //  {
  //   id: '3',
  //   name:'Digvijay',
  //   email: 'digvijay@atlassoftweb.com'
  //  }
  // ]
 const Local_storage_key = 'contacts';  
const [contacts, setContacts] = useState([]);
const AddContactHandler = (contact) =>{
  console.log(contact);
  setContacts([...contacts, { id : uuid(), ...contact }]); 

}

const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });

  setContacts(newContactList);
};

useEffect(() => {
  const RetriveContact = JSON.parse(localStorage.getItem(Local_storage_key));
  if (RetriveContact) setContacts(RetriveContact);
 
}, []);

useEffect(() => {
   localStorage.setItem(Local_storage_key, JSON.stringify(contacts));

}, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact AddContactHandler = { AddContactHandler }/>
      <ContactList contacts= { contacts }  getContactId = {removeContactHandler}  />
      
    
    </div>
  );
}

export default App;
