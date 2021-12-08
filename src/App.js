import "./App.css";
import {useState} from 'react';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "umit",
      email: "umit.salman.mail@gmail.com",
    },

    {
      id: 2,
      name: "ali",
      email: "ali@veli.com",
    },
  ])

  return (
    <div className="App">
      <Header />
      <AddContact contacts={contacts} setContacts={setContacts}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
