import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const inputEl = useRef('')

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

  // Search
  const getSearchText = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <div className="main">
      <h2 >
        Contact List
        <Link to="/add" >
          <button class="ui right floated button blue">Add Contact</button>
        </Link>
      </h2>
      <div className="search" >
        <div className="form-outline mb-3">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="form-control"
            value={props.term}
            onChange={getSearchText}
          />
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;