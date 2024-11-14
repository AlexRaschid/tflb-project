import './board.css'
import React  from 'react'
import Table from 'react-bootstrap/Table';

function TemplateTableOne(){}

export default function board(){
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
                    <td>Otto</td>
                    <td>Ruby</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>+1</td>
                    <td>Thornton</td>
                    <td>Diamond II</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>-1</td>
                    <td>Larry the Bird</td>
                    <td>Platinum III</td>
                </tr>
            </tbody>
        </Table>
    )
}