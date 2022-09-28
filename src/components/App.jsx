import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
// import Heart from 'react-heart';
// import MyCardList from './MyCardList';
import MainPage from './MainPage';
import Navigationbar from './Navigationbar';

export default function App() {
  return (
    <Container>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Container>
  );
}
