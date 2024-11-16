// LeaderboardTable.jsx
import './BoardTable.css'
import React from 'react';
import Table from 'react-bootstrap/Table';
import PlayerRow from './PlayerRow';

export default function BoardTable({ players }) {
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
                {players.map((player, index) => (
                    <PlayerRow key={index} player={player} />
                ))}
            </tbody>
        </Table>
    );
}