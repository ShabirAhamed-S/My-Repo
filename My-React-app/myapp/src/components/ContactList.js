import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  // Get id for Delete
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  // Card Contacts
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2 >
        Contact List
        <Link to="/add" >
        <button class="ui right floated button blue">Add Contact</button>
        </Link>
      </h2>
      <div className='ui search icon'>
      <div className='ui input icon'>
        <input
        ref={inputEl}
        type='text'
        placeholder="Search Contacts"
        className="prompt"
         />
         <i className='search icon'></i>

      </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;