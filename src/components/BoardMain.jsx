import './BoardMain.css'
import React  from 'react'

import useLeaderboardData from '../hooks/useLeaderboardData.jsx'; //custom hook]
import { useState } from 'react';


import BoardHeader from './BoardHeader.jsx';
import BoardPagination from './BoardPagination.jsx';
import BoardTable from './BoardTable.jsx';




export default function Board(){ 

    const { data, isLoading, error } = useLeaderboardData();
    const [pageNumber, setPageNumber] = useState(1);
    const [playersPerPage, setPlayersPerPage] = useState(10);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading leaderboard data.</div>;

    const players = data?.data || [];
    const pagesVisited = (pageNumber - 1) * playersPerPage;

    const displayedPlayers = players.slice(pagesVisited, pagesVisited + playersPerPage);

    const handlePrevious = () => setPageNumber((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setPageNumber((prev) => prev + 1);
    const handlePageSizeChange = (size) => setPlayersPerPage(size);

    return (
        <div>
            <BoardHeader />
            <BoardPagination
                onPrevious={handlePrevious}
                onNext={handleNext}
                onPageSizeChange={handlePageSizeChange}
            />
            <BoardTable players={displayedPlayers} />
        </div>
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