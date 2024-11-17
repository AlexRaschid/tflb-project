import React, { useMemo, useState } from 'react';
import useLeaderboardData from '../hooks/useLeaderboardData';
import usePagination from '../hooks/usePagination';
import useSearch from '../hooks/useSearch';
import useSort from '../hooks/useSort';
import { Stack } from 'react-bootstrap';
import BoardSearch from './BoardSearch';
import BoardPagination from './BoardPagination';
import BoardTable from './BoardTable';
import BoardRowsPerPage from './BoardRowsPerPage';

export default function BoardLogic() {
    const { data, isLoading, error } = useLeaderboardData();

    // Memoize players array from data response
    const players = useMemo(() => (data && data.data ? data.data : []), [data]);

    // Initialize custom hooks for search, pagination, and sorting
    const { searchQuery, 
        handleSearchChange, 
        filteredPlayers 
    } = useSearch(players);
    
    const { sortedData: sortedPlayers, sortConfig, handleSort } = useSort(filteredPlayers);

    const {
        pageNumber,
        setPageNumber,
        rowsPerPage,
        handleRowSizeChange,
        displayedPlayers
    } = usePagination(sortedPlayers, 10);

    // Pass sorted and paginated players to BoardTable
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading leaderboard data.</div>;

    return (
        <div>
            <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
                <BoardSearch handleSearchChange={handleSearchChange} />
                <BoardRowsPerPage handleRowSizeChange={handleRowSizeChange} playersPerPage={rowsPerPage} />
            </Stack>

            <BoardPagination
                playersPerPage={rowsPerPage}
                totalPlayers={sortedPlayers.length}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                setPlayersPerPage={handleRowSizeChange}
            />

            <div className="table-container">
                <BoardTable players={displayedPlayers} onSort={handleSort} sortConfig={sortConfig} />
            </div>
        </div>
    );
}


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