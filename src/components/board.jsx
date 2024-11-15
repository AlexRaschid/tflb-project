import './Board.css'
import React  from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useQuery } from '@tanstack/react-query';

import useLeaderboardData from '../hooks/useLeaderboardData.jsx'; //custom hook



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
                    <tr key={index}>
                        <td>{player.rank}</td>
                        <td>{player.change}</td>
                        <td>
                            <div>{player.name}</div>
                            {player.steamName && <div><i className="fa-brands fa-steam"/> {player.steamName}</div>}
                            {player.psnName && <div><i className="fa-brands fa-playstation"/> {player.psnName}</div>}
                            {player.xboxName && <div><i className="fa-brands fa-xbox"/> {player.xboxName}</div>}
                        </td>
                        <td>
                            <div>
                                <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                                    {player.league && (
                                        <div className="leagueImageDiv">
                                            <Image 
                                                fluid
                                                className="leagueImage"
                                                src={`../../Images/leagues/${player.league.toLowerCase().replace(/ /g, '-')}.png`}
                                            /> 
                                        </div>
                                    )}
                                    <div className="leagueTextDiv">
                                        <Stack direction="vertical" className="align-items-center">
                                            <div>{player.league}</div>
                                            <div>{player.rankScore.toLocaleString()}</div>
                                        </Stack>
                                    </div>
                                </Stack>
                            </div>
                        </td>
                    </tr>
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