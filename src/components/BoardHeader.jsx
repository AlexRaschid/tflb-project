import { Stack, Form, Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

export default function BoardHeader(){
    return(
        <Stack direction="horizontal" gap={2} className="align-items-center justify-content-center">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                s4 (current)
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">s3 (TODO)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">s2 (TODO)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            <Form.Control className="me-auto" placeholder="Search player names..." />
            <Button variant="primary">Search</Button>
        </Stack>
    );
}