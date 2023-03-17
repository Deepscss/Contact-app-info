import React from "react";
import CardContact from './ContactCard';

const ContactList = (props) => {
    console.log(props);
   
   const deleteContactHandler  = (id) => {
    props.getContactId(id);
  };

 
    const rendercontactlist = props.contacts.map((contact) => {
       return(
       <CardContact contact={contact} clickHandler={ deleteContactHandler } key={contact.id}></CardContact>
       );
    });

   return(
    <div className="ui link items">
        {rendercontactlist}
    </div>
   )

}

export default ContactList;