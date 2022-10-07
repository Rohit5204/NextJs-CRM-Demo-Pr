import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const postData = () => {
        console.log({
            firstName: firstName, lastName: lastName, email: email
        })
        axios.post(`http://35.89.6.16:4002/api/userMasterUpsert`, {
            id: 0,
            firstName: firstName,
            lastName: lastName,
            email: email,
            createdBy: 1
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
        // navigate('/userMaster');
    };

    return (
        <div className='pl-5 pr-5'>
            <div className="page">
                User Master Page
            </div>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control  onChange={(e) => setFirstName(e.target.value)} type="fname" placeholder="Enter First Name" />
                        </Form.Group>
                     </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => setLastName(e.target.value)} type="lname" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter the Email" />
                    </Form.Group>
                </Row>
                <div className="col-md-12 text-center">
                    <Link href="/userMaster">
                        <Button onClick={handleSubmit} variant="primary" type="submit" className='btn btn-primary mb-2'>
                            Submit
                        </Button>
                    </Link>&nbsp;
                    <Link href="/userMaster">
                        <Button variant="error" type="cancel" className='btn btn-primary mb-2'>
                            Cancel
                        </Button>
                    </Link>
                </div>
            </Form>
            {/* <div>
                <h5>Added Leads in Table</h5>
                <BasicTable />
            </div> */}
        </div>
    );
}

export default BasicExample;