import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(localContacts);
  }, []);
  
  useEffect(() => {
    // initial renderda çalışmakta, contacts'ın default değerlerini locale basıyor
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact contacts={contacts} setContacts={setContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
