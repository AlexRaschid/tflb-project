import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Board from './components/Board.jsx'

const queryClient = new QueryClient();

function App() {

  return (
    //style padding cheap fix, use .css later
    <QueryClientProvider client = {queryClient}>
      <Container>
            <Row>
              <Col>
                <Board></Board>
              </Col>
            </Row>
      </Container> 
    </QueryClientProvider> 
  )
}

export default App
