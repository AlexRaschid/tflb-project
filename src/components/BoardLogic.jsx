import React, { useState, useMemo } from 'react';
import useLeaderboardData from '../hooks/useLeaderboardData';
import { Stack } from 'react-bootstrap';
import BoardHeader from './BoardSearch';
import BoardPagination from './BoardPagination';
import BoardTable from './BoardTable';
import BoardRowsPerPage from './BoardRowsPerPage';

export default function BoardLogic() {
    // Custom hook to fetch leaderboard data
    const { data, isLoading, error } = useLeaderboardData();

    // Pagination state
    const [pageNumber, setPageNumber] = useState(1);
    const [playersPerPage, setPlayersPerPage] = useState(10);

    // Sorting state
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: null
    });
    console.log(sortConfig);

    // Extract and memoize players array from data response
    const players = useMemo(() => {
        if (data && data.data) {
            return data.data;
        }
        return [];
    }, [data]);

    // Sorting logic (same for both rank and league)
    const sortedPlayers = useMemo(() => {
        if (sortConfig.key === null) {
            return players; // Return original order when neutral
        }
    
        return [...players].sort((firstPlayer, secondPlayer) => {
            let firstValue = firstPlayer[sortConfig.key];
            let secondValue = secondPlayer[sortConfig.key];
    
            // Use rank for sorting when league is selected
            if (sortConfig.key === 'league') {
                firstValue = Number(firstPlayer.rank);
                secondValue = Number(secondPlayer.rank);
            }
    
            // Handle rank (as a numeric value)
            if (sortConfig.key === 'rank') {
                firstValue = Number(firstValue);
                secondValue = Number(secondValue);
            }
    
            if (firstValue < secondValue) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (firstValue > secondValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [players, sortConfig]);

    // Calculate displayed players based on current page and sorted data
    const displayedPlayers = useMemo(() => {
        const pagesVisited = (pageNumber - 1) * playersPerPage;
        return sortedPlayers.slice(pagesVisited, pagesVisited + playersPerPage);
    }, [sortedPlayers, pageNumber, playersPerPage]);

    // Handler for column sort requests
    const handleSort = (columnKey) => {
        setSortConfig(prevConfig => {
            const newDirection = getNextSortState(
                prevConfig.key === columnKey ? prevConfig.direction : null
            );
            return {
                key: newDirection === null ? null : columnKey,
                direction: newDirection
            };
        });
        setPageNumber(1);
    };

    // Handler for changing number of rows per page
    const handleRowSizeChange = (newPageSize) => {
        setPlayersPerPage(newPageSize);
        setPageNumber(prevPageNumber => {
            const newTotalPages = Math.ceil(players.length / newPageSize);
            return Math.min(prevPageNumber, newTotalPages);
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading leaderboard data.</div>;

    return (
        <div>
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                <BoardHeader />
                <div className="vr" />
                <BoardRowsPerPage
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
                <BoardTable 
                    players={displayedPlayers}
                    onSort={handleSort}
                    sortConfig={sortConfig}
                />
            </div>
        </div>
    );
}

// Utility function to determine next sort state
const getNextSortState = (currentState) => {
    if (currentState === null) return 'desc';
    if (currentState === 'desc') return 'asc';
    return null;
};


{/*
    
    // Handler for column sort requests
    const handleSort = (columnKey) => {
        setSortConfig(prevConfig => {
            const newDirection = getNextSortState(
                prevConfig.key === columnKey ? prevConfig.direction : null
            );
            return {
                key: newDirection === null ? null : columnKey,
                direction: newDirection
            };
        });
        setPageNumber(1);
    };

    */}