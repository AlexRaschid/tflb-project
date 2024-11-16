import './BoardTable.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import PlayerRow from './PlayerRow';

// Column configuration array
// Centralizes column definitions for easier maintenance
const columns = [
    { key: 'rank', label: 'Rank', className: 'rank-col' },
    { key: 'change', label: '24h', className: 'change-col' },
    { key: 'name', label: 'Name', className: 'name-col' },
    { key: 'league', label: 'League', className: 'league-col' }
];

// BoardTable is now a purely presentational component
// It receives pre-sorted data and handlers from parent
export default function BoardTable({ players, onSort, sortConfig }) {
    return (
        <Table 
            striped 
            bordered 
            hover 
            responsive="md" 
            className="leaderboard-table"
        >
            <thead>
                <tr>
                    {columns.map(column => (
                        <th 
                            key={column.key}
                            className={`${column.className} cursor-pointer`}
                            onClick={() => onSort(column.key)}
                        >
                            <div className="d-flex align-items-center">
                                {column.label}
                                {getSortIcon(sortConfig.key === column.key ? sortConfig.direction : null)}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => (
                    <PlayerRow key={index} player={player} />
                ))}
            </tbody>
        </Table>
    );
}

// Helper function to determine which sort icon to display
function getSortIcon(sortState) {
    switch (sortState) {
        case 'asc':
            return <i className="fa-solid fa-sort-up ms-1"/>;
        case 'desc':
            return <i className="fa-solid fa-sort-down ms-1"/>;
        default:
            return <i className="fa-solid fa-sort ms-1 text-gray-400"/>;
    }
}