import './Board.css'
import React  from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

//https://github.com/leonlarsson/the-finals-api
//https://api.the-finals-leaderboard.com/#tag/leaderboards
//example: https://api.the-finals-leaderboard.com/v1/leaderboard/s4/crossplay
const fetchLeaderboard = async () => {
    const response = await axios.get('https://api.the-finals-leaderboard.com/v1/leaderboard/s4/crossplay'); // Replace hardcoded crossplay with interchangable variable later
    console.log("API response: ", response.data); //  debugging
    return response.data;
};

//const BASE_URL = "https://api.the-finals-leaderboard.com";
//const S4_LB = "/v1/leaderboard/s4/";//crossplay 


export default function Board(){

    const { data, isLoading, error } = useQuery({
        queryKey: ['leaderboard'], 
        queryFn: fetchLeaderboard
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) {
        console.error("Error fetching leaderboard:", error); // Log the error for debugging
        return <div>Error loading leaderboard data.</div>;
    }

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
                {data && data.data.slice(0,25).map((player, index) => (
                    <tr key={index}>
                        <td>{player.rank}</td>
                        <td>{player.change}</td>
                        <td>
                            <div>{player.name}</div>
                            {player.steamName && <div><i class="fa-brands fa-steam"/> {player.steamName}</div>}
                            {player.psnName && <div><i class="fa-brands fa-playstation"/> {player.psnName}</div>}
                            {player.xboxName && <div><i class="fa-brands fa-xbox"/> {player.xboxName}</div>}
                        </td>
                        <td>
                            <div>{player.league}</div>
                            <div>{player.rankScore.toLocaleString()}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}