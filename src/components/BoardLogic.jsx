import React, { useState, useMemo } from 'react';
import useLeaderboardData from '../hooks/useLeaderboardData';
import { Stack } from 'react-bootstrap';
import BoardSearch from './BoardSearch';
import BoardPagination from './BoardPagination';
import BoardTable from './BoardTable';
import BoardRowsPerPage from './BoardRowsPerPage';

export default function BoardLogic() {
    // Custom hook to fetch leaderboard data
    const { data, isLoading, error } = useLeaderboardData();

    // Pagination state
    const [pageNumber, setPageNumber] = useState(1);
    const [playersPerPage, setPlayersPerPage] = useState(10);

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');

    // Table Sorting state
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: null
    });
    // console.log(sortConfig);

    // Extract and memoize players array from data response
    const players = useMemo(() => {
        if (data && data.data) {
            return data.data;
        }
        return [];
    }, [data]);

    // Filter players based on search query
    const filteredPlayers = useMemo(() => {
        if (!searchQuery) return players;
        return players.filter(player =>
            player.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [players, searchQuery]);

    // Table Sorting logic (same for both rank and league)
    const sortedPlayers = useMemo(() => {
        if (sortConfig.key === null) {
            return filteredPlayers; // Return original order when neutral
        }

        return [...filteredPlayers].sort((firstPlayer, secondPlayer) => {
            let firstValue = firstPlayer[sortConfig.key];
            let secondValue = secondPlayer[sortConfig.key];

            if (sortConfig.key === 'league') { // Use rank for sorting when league is selected
                firstValue = Number(firstPlayer.rank);
                secondValue = Number(secondPlayer.rank);
            }

            if (sortConfig.key === 'rank') { // Handle rank (as a numeric value)
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
    }, [filteredPlayers, sortConfig]);

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

    // Handler for search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading leaderboard data.</div>;

    return (
        <div>
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                <BoardSearch handleSearchChange={handleSearchChange} />
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