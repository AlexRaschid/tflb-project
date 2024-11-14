import './Board.css'
import React  from 'react'
import Table from 'react-bootstrap/Table';


export default function Board(){
    return(
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
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>
                        <div>Otto#1111</div>
                        <div>0tt0</div>
                        <div>TottO</div>
                    </td>
                    <td>
                        <div>Ruby</div>
                        <div>80,000</div>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>+1</td>
                    <td>
                        <div>Thornton#2222</div>
                        <div>thornz</div>
                    </td>
                    <td>
                        <div>Diamond 2</div>
                        <div>50,000</div>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>-1</td>
                    <td>
                        <div>Larry the Bird#4242</div>
                        <div>larryB</div>
                        <div>BigLarry</div>
                    </td>
                    <td>
                        <div>Platinum 3</div>
                        <div>40,000</div>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}