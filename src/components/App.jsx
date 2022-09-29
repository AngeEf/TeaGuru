import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Navigationbar from './Navigationbar';
import RegistrationPage from './RegistrationPage';
import AuthPage from './AuthPage';
import MapComponent from './MapComponent';

export default function App({ user }) {
  const [currUser, setCurrUser] = useState(user || {});
  const logOutHandler = () => {
    fetch('/api/auth/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <Container>
      <Navigationbar
        currUser={currUser}
        logOutHandler={logOutHandler}
      />
      <Routes>
        <Route path="/" element={<MainPage currUser={currUser} />} />
        <Route path="/user/registration" element={<RegistrationPage setCurrUser={setCurrUser} />} />
        <Route path="/user/authorization" element={<AuthPage setCurrUser={setCurrUser} />} />
      </Routes>
    </Container>
  );
}
