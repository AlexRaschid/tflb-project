import React from 'react';
import { Stack, Button, Dropdown } from 'react-bootstrap';

export default function BoardPagination({onPrevious, onNext, onPageSizeChange}){
    return(
        <Stack direction="horizontal" gap={1}>
            <Button variant="secondary" onClick={onPrevious}>{"<<"}</Button>
            <Button variant="secondary" onClick={onPrevious}>{"<"}</Button>
            <Button variant="secondary" onClick={onNext}>{">"}</Button>
            <Button variant="secondary" onClick={onNext}>{">>"}</Button>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    10
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onPageSizeChange(10)}>10</Dropdown.Item>
                    <Dropdown.Item onClick={() => onPageSizeChange(25)}>25</Dropdown.Item>
                    <Dropdown.Item onClick={() => onPageSizeChange(50)}>50</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Stack>
    );
}