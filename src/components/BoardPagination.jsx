import './BoardPagination.css'
import React from 'react';
import { Stack, Button, Dropdown } from 'react-bootstrap';

export default function BoardPagination(props){
    const totalPages = Math.ceil(props.totalPlayers / props.playersPerPage);


    // Pagination functions
    const handleFirstPage = () => props.setPageNumber(1);

    const handleLastPage = () => props.setPageNumber(totalPages);

    const handlePreviousPage = () => props.setPageNumber(Math.max(1, props.pageNumber - 1));

    const handleNextPage = () => props.setPageNumber(Math.min(totalPages, props.pageNumber + 1));


    function handleRowSizeChange(newPageSize) {
        props.setPlayersPerPage(newPageSize);
        props.setPageNumber(1); // Reset to the first page to avoid out-of-range pages
    }
    
    return(
        <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
            <Button variant="secondary" onClick={handleFirstPage}>{"<<"}</Button>
            <Button variant="secondary" onClick={handlePreviousPage}>{"<"}</Button>
                <span>Page {props.pageNumber} of {totalPages}</span>
            <Button variant="secondary" onClick={handleNextPage}>{">"}</Button>
            <Button variant="secondary" onClick={handleLastPage}>{">>"}</Button>

            <div className="vr" />

                <span># of rows</span>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">{props.playersPerPage}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleRowSizeChange(10)}>10</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRowSizeChange(25)}>25</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRowSizeChange(50)}>50</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRowSizeChange(100)}>100</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Stack>
    );
}

{/*
<Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">10</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item onClick={() => handlePageSizeChange(10)}>10</Dropdown.Item>
        <Dropdown.Item onClick={() => handlePageSizeChange(25)}>25</Dropdown.Item>
        <Dropdown.Item onClick={() => handlePageSizeChange(50)}>50</Dropdown.Item>
        <Dropdown.Item onClick={() => handlePageSizeChange(100)}>100</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
*/}