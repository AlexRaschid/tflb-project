import './App.css'
//import './components/board.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

import Board from './components/Board.jsx'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    //style padding cheap fix, use .css later
    <Container>
      <Row>
        <Col>
          <Board></Board>
        </Col>
      </Row>
    </Container>  
  )
}

export default App
