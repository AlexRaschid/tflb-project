// LeaderboardTable.jsx
import './BoardTable.css'
import React from 'react';
import Table from 'react-bootstrap/Table';
import PlayerRow from './PlayerRow';

export default function BoardTable({ players }) {
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
                    <th className="rank-col">Rank</th>
                    <th className="change-col">24h</th>
                    <th className="name-col">Name</th>
                    <th className="league-col">League</th>
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