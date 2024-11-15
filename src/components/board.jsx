import './Board.css'
import React  from 'react'
import Table from 'react-bootstrap/Table';

import useLeaderboardData from '../hooks/useLeaderboardData.jsx'; //custom hook]
import PlayerRow from './PlayerRow.jsx';


export default function Board(){ 

    const { data, isLoading, error } = useLeaderboardData();

    if (isLoading) return <div>Loading...</div>;
    if (error) {
        console.error("Error fetching leaderboard:", error); // Log the error for debugging
        return <div>Error loading leaderboard data.</div>;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>24h</th>
                    <th>Name</th>
                    <th>League</th>
                </tr>
            </thead>

            <tbody>
                {data && data.data.slice(0,1005).map((player, index) => (
                    <PlayerRow
                        player={player}
                        key={index}/>
                ))}
            </tbody>
        </Table>
    );
}

{
    
   /*





    Spare Code:



    <Container fluid style={{ padding: 0 }}>
        <Row>
            <Col>
                {player.league && (
                    <Image 
                        thumbnail 
                        fluid
                        className="leagueImage"
                        src={`../../public/Images/leagues/${player.league.toLowerCase().replace(/ /g, '-')}.png`}/>
                )}
            </Col>
            <Col>
                <div>{player.league}</div>
            </Col>
        </Row>
    </Container>

    <Container>
        <Row>
            <Col>
                <Card>
                    <Card.Img 
                        src={`../../public/Images/leagues/${player.league.toLowerCase().replace(/ /g, '-')}.png`} />
                    <Card.Body>
                        <Card.Title>{player.league}</Card.Title>
                        <Card.Text>{player.rankScore.toLocaleString()}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    
    
    <div>
        {player.league && (
            <Image 
                thumbnail 
                fluid
                className="leagueImage"
                src={`../../public/Images/leagues/${player.league.toLowerCase().replace(/ /g, '-')}.png`}/>
        )}
        <div>{player.league}</div>
    </div>
    <div>{player.rankScore.toLocaleString()}</div>
    
    
    
    <Stack direction="horizontal" gap={2} className="align-items-center">
    {player.league && (
        <div style={{ width: '50px', height: '50px', flexShrink: 0 }}>
        <Image 
            ** 
            fluid
            className="leagueImage"
            src={`../../public/Images/leagues/${player.league.toLowerCase().replace(/ /g, '-')}.png`}
        />
        </div>
    )}
    <div>
        <div>{player.league}</div>
        <div>{player.rankScore.toLocaleString()}</div>
    </div>
    </Stack>
    

    */
}