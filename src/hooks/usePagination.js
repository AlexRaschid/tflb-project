import { useState, useMemo } from 'react';

// Custom hook for pagination logic
export default function usePagination(players, playersPerPage) {
    const [pageNumber, setPageNumber] = useState(1);
    const [rowsPerPage, setPlayersPerPage] = useState(playersPerPage);

    // Calculate displayed players based on current page and sorted data
    const displayedPlayers = useMemo(() => {
        const pagesVisited = (pageNumber - 1) * rowsPerPage;
        return players.slice(pagesVisited, pagesVisited + rowsPerPage);
    }, [players, pageNumber, rowsPerPage]);

    // Handler for changing number of rows per page
    const handleRowSizeChange = (newPageSize) => {
        setPlayersPerPage(newPageSize);
        setPageNumber(prevPageNumber => {
            const newTotalPages = Math.ceil(players.length / newPageSize);
            return Math.min(prevPageNumber, newTotalPages);
        });
    };

    // Return pagination state and functions
    return {
        pageNumber,
        setPageNumber,
        rowsPerPage,
        handleRowSizeChange,
        displayedPlayers,
    };
}
