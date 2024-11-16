import React from "react";
import { Dropdown, Stack } from "react-bootstrap";


export default function BoardPaginationRows(props){
    return(
        <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
            <span># of rows</span>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">{props.playersPerPage}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.handleRowSizeChange(10)}>10</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleRowSizeChange(25)}>25</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleRowSizeChange(50)}>50</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleRowSizeChange(100)}>100</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Stack>
    );
}