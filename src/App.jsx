import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

//Reminder to rename board.jsx with a capital B, 
// keeping the lowercase b, even though the file has a damn "B" in it,
//keeps vscode annoying red error from showing up.
import Board from './components/board.jsx';//Board.jsx

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



{/*
    TODO: reorganize code into components:
    FetchLeaderboard - makes main leaderboard api calls, returns data
    PlayerBoardEntry - responsible for each row and cells of players from the api key
        PlayerLeagueCurrent - handles the image, rank text, and rank number positioning in league category
        PlayerName - name col

        
    TODO Features:
        -Search Bar
        -Show Select amt of player entries (10,25,50,100), and hide the rest
            -Arrows to navigate pages of entries
    
    TODO: Design:
        -Replace stacked usernames under name, with inline icons of the platforms,
            reveal names w/ hover or something.

        -Colors for 24h change?




*/}
