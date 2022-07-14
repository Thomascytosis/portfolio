import React from "react";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container"

function App() {
  return (
    <Container>
      <Header />
      <Navigation />
      <Footer />
    </Container>
  );
}

export default App;
