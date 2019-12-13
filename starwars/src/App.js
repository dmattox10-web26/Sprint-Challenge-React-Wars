import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Button } from 'reactstrap'

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

  const nextPage = () => {
    updatePage(page => page += 1)
  }

  const backPage = () => {
    if(currentPage > 1)
    updatePage(page => page -= 1)
  }
  
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <Container>
      <Row>
        <Col xs='4'></Col>
        <Col xs='2'><Button onClick={() => backPage()}>Prev</Button></Col>
        <Col xs='2'><Button onClick={() => nextPage()}>Next</Button></Col>
        <Col xs='4'></Col>
      </Row>
        {starPeople.map((starPerson, index) => 
          <Row key={index}>
            <Col xs='4'></Col>
            <Col x2='4'>
              <Card starPerson={ starPerson }/>
            </Col>
            <Col x2='4'></Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;