import { useState, useMemo } from 'react';

// Custom hook for sorting players
export default function useSort(data) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    // Sorting logic for players based on sortConfig
    const sortedData = useMemo(() => {
        if (sortConfig.key === null) return data;

        return [...data].sort((a, b) => {
            let firstValue = a[sortConfig.key];
            let secondValue = b[sortConfig.key];

            if (sortConfig.key === 'league') {
                firstValue = Number(a.rank);
                secondValue = Number(b.rank);
            }

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
    }, [data, sortConfig]);

    // Handler for changing the sort order
    const handleSort = (columnKey) => {
        console.log(columnKey);
        setSortConfig(prevConfig => {
            const newDirection = getNextSortState(
                prevConfig.key === columnKey ? prevConfig.direction : null
            );
            return {
                key: newDirection === null ? null : columnKey,
                direction: newDirection
            };
        });
    };

    // Return sorted data and sorting functions/state
    return {
        sortedData,
        sortConfig,
        handleSort,
    };
}

// Helper function to cycle through sort states
const getNextSortState = (currentState) => {
    if (currentState === null) return 'desc';
    if (currentState === 'desc') return 'asc';
    return null;
};
