import { useState, useMemo } from 'react';

// Custom hook for search logic
export default function useSearch(players) {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter players based on search query
    const filteredPlayers = useMemo(() => {
        if (!searchQuery) return players;
        return players.filter(player =>
            player.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [players, searchQuery]);

    // Handler for search query change
    const handleSearchChange = (event) => {
        const newSearchQuery = event.target.value;
        setSearchQuery(newSearchQuery);
    };

    // Return search state and functions
    return {
        searchQuery,
        setSearchQuery,
        filteredPlayers,
        handleSearchChange,
    };
}
