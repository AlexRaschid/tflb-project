import React  from 'react'
import LeagueBadge from './LeagueBadge.jsx';

export default function PlayerRow({player, keyIndex}){
    return(
        <tr key={keyIndex}>
            <td>{player.rank}</td>
            <td>{player.change}</td>
            <td>
                <div>{player.name}</div>
                {player.steamName && <div><i className="fa-brands fa-steam"/> {player.steamName}</div>}
                {player.psnName && <div><i className="fa-brands fa-playstation"/> {player.psnName}</div>}
                {player.xboxName && <div><i className="fa-brands fa-xbox"/> {player.xboxName}</div>}
            </td>
            <td>
                <div>
                    <LeagueBadge
                        league={player.league}
                        rankScore={player.rankScore}/>
                </div>
            </td>
        </tr>
    );
}