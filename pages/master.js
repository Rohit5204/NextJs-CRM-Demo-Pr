import BasicTable from '../components/BasicTable';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BasicExample() {
    return (
        <div>
            {/* <Card>
                <Card.Title className='pl-12'>This is some text within a card body.</Card.Title>
            </Card> */}
            <Form>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Paltform Name </Form.Label>
                        <Form.Control type="platform" placeholder="Enter Paltform Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Total Count</Form.Label>
                        <Form.Control type="email" placeholder="Enter the Count Of Platform" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className='btn btn-primary mb-2'>
                    Submit
                </Button>

            </Form>
            <div>
                <h5>Added Leads in Table</h5>
                <BasicTable />
            </div>
        </div>
    );
}

export default BasicExample;