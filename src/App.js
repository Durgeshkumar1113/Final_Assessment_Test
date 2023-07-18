import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import PersonDetails from './PersonDetails';
import PictureForm from './PictureForm';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handlePictureSubmit = pictureLink => {
    console.log('Submitted picture link:', pictureLink);
  }

  return (<BrowserRouter>
    <Navbar expand='lg' bg="black" data-bs-theme="dark" className="my-navbar fixed-top ">
    <Container>
      <Navbar.Brand as={Link} to ='/'><h1 id='logo'>Gallery</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/" id='ram'>  PersonDetails</Nav.Link>
        <PictureForm onSubmit={handlePictureSubmit} />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <div className='content'>
    <Routes>
      <Route path='/' element={<PersonDetails/>}/>
    </Routes>
  </div>
  <Footer/>
  </BrowserRouter>
   
  );
}

export default App;
