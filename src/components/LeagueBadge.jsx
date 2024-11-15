import React  from 'react'
import { Stack, Image } from "react-bootstrap";
import './LeagueBadge.css'

export default function LeagueBadge({ league, rankScore }) {
    return (
        <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
            {league && (
                <div className="leagueImageDiv">
                    <Image 
                        fluid
                        className="leagueImage"
                        src={`../../Images/leagues/${league.toLowerCase().replace(/ /g, '-')}.png`}
                    /> 
                </div>
            )}
            <div className="leagueTextDiv">
                <Stack direction="vertical" className="align-items-center">
                    <div>{league}</div>
                    <div>{rankScore.toLocaleString()}</div>
                </Stack>
            </div>
        </Stack>
    );
}