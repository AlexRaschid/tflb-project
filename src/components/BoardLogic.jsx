import React  from 'react'

import useLeaderboardData from '../hooks/useLeaderboardData.jsx'; //custom hook]
import { useState } from 'react';

import { Stack } from 'react-bootstrap';


import BoardHeader from './BoardSearch.jsx';
import BoardPagination from './BoardPagination.jsx';
import BoardTable from './BoardTable.jsx';
import BoardPaginationRows from './BoardRowsPerPage.jsx';

export default function BoardLogic(){ 

    const { data, isLoading, error } = useLeaderboardData();
    const [pageNumber, setPageNumber] = useState(1);
    const [playersPerPage, setPlayersPerPage] = useState(10);// default 10 players per page

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading leaderboard data.</div>;

    // Calculate the players to display on the current page
    let players = [];
    if (data && data.data) {
        players = data.data;
    }
    const pagesVisited = (pageNumber - 1) * playersPerPage;
    const displayedPlayers = players.slice(pagesVisited, pagesVisited + playersPerPage);

    function handleRowSizeChange(newPageSize) {
        setPlayersPerPage(newPageSize);
        setPageNumber(1); // Reset to the first page to avoid out-of-range pages
    }

    return (
        <div>
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                <BoardHeader />
                <div className="vr" />
                <BoardPaginationRows
                    handleRowSizeChange={handleRowSizeChange}
                    playersPerPage={playersPerPage}
                />
            </Stack>
            
            <BoardPagination
                playersPerPage={playersPerPage}
                totalPlayers={players.length}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                setPlayersPerPage={setPlayersPerPage}
                handleRowSizeChange={handleRowSizeChange}
            />
            <div className="table-container">
                <BoardTable players={displayedPlayers} />
            </div>
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