import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'

import Card from './components/SWCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starPeople, updatePeople] = useState([])
  const [currentPage, updatePage] = useState(1)

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${currentPage}`)
      .then(res => {
        updatePeople(res.data.results)
      })
  }, [currentPage])

  const fwdPage = () => {

  }

  const backPage = () => {

  }
  
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <Container>
        {starPeople.map(starPerson => 
          <Row>
            <Col xs='3'></Col>
            <Col x2='6'>
              <Card starPerson={ starPerson }/>
            </Col>
            <Col x2='3'></Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;