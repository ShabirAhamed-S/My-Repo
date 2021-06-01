import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";

import "./App.css";
import api from "../api/server";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import LoginForm from "./LoginForm";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const [searchText, setSearchText] = useState('')

  const [searchResults, setSearchResults] = useState([])

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    console.log(contacts)
    return response.data;
  };

  // Add Contacts
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      data: contacts.Data,
      json: contacts.json,
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  // Update Contacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id,
    } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // Remove Contacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // Search Contact 
  const searchHandler = (searchText) => {
    setSearchText(searchText)
    if (searchText !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(' ').toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      })
      setSearchResults(newContactList)
    }
    else {
      setSearchResults(contacts)
    }
  }

  useEffect(() => {

    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, []);

  // Login
  const handleSubmit = data => {
    contacts.Data = data;
    const json = JSON.stringify(data, null, 4);
    console.clear();
    contacts.json = json
    console.log(json)
    console.log(contacts.data);
  };

  useEffect(() => {

    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  }, [contacts]);

  return (
    <div className="container">
      <Router>
        <Header />

        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <LoginForm
                onSubmit={handleSubmit}
              />
            )}
          />
          <Route
            path="/contactlist"
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchText.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchText}
                searchKeyword={searchHandler}
              />
            )}
          />

          <Route
            path="/add"
            render={(props) => (
              <AddContact
                {...props}
                addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;