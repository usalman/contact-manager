import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [mod, setMod] = useState("addContact");
  const [editContactId, setEditContactId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const LOCAL_STORAGE_KEY = "contacts";

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(localContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact
        contacts={contacts}
        setContacts={setContacts}
        mod={mod}
        setMod={setMod}
        nameRef={nameRef}
        emailRef={emailRef}
        editContactId={editContactId}
        setEditContactId={setEditContactId}
      />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        mod={mod}
        setMod={setMod}
        nameRef={nameRef}
        emailRef={emailRef}
        editContactId={editContactId}
        setEditContactId={setEditContactId}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </div>
  );
}

export default App;
