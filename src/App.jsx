import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/board'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    //style padding cheap fix, use .css later
    <Container fluid style={{ padding: 0 }}>
      <Row>
        <Col sm={2}>
          <Button>Test</Button>
        </Col>
        <Col>
          <Board></Board>
        </Col>
      </Row>
    </Container>  
  )
}

export default App
