import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Navigationbar from './Navigationbar';
import RegistrationPage from './RegistrationPage';
import AuthPage from './AuthPage';
import MapComponent from './MapComponent';
import CardPage from './CardPage'

export default function App({ user }) {
  const [currUser, setCurrUser] = useState(user || {});
  const [items, setItems] = useState([])
  const logOutHandler = () => {
    fetch('/api/auth/logout')
      .then(() => setCurrUser({}));
  };
  
  useEffect(() => {
    fetch('api/cardlist')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  
  return (
    <Container>
      <Navigationbar
        currUser={currUser}
        logOutHandler={logOutHandler}
      />
      <Routes>
        <Route path="/" element={<MainPage currUser={currUser} items={items} setItems={setItems}/>} />
        <Route path="/user/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/user/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />
        {/* <Route path="/user/cardpage/:id" element={<CardPage currUser={currUser} items={items}/>} /> */}
      </Routes>
    </Container>
  );
}
