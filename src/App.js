import logo from './logo.svg';
import './App.css';
import React from 'react'
import ContactCard from './contactCard.jsx'
import IncreaseDecrease from './increaseDecrease.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactCard name="Taylor" email = "taylor@domain" phone = {12222} workphone = {12345} />
        <ContactCard name="roberto" email = "roberto@domain" phone = {11111} />
        <ContactCard name="dave" email = "dave@domain" phone = {13333} />
        <IncreaseDecrease num = {3} />
      </header>
    </div>
  );
}
export default App;
