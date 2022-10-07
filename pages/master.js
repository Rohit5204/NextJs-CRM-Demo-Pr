// import BasicTable from '../components/BasicTable';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import axios from "axios";

function BasicExample() {
  const [masterName, setMasterName] = useState("");
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(null);

  //get data in the table

  const [APIData, setAPIData] = useState([]);
  const getMasterData = () => {
    
  }
  useEffect(() => {
    axios
      .get(`http://35.89.6.16:4002/api/getMasterData?masterName=platformmaster`)
      .then((response) => {
        setAPIData(response.data.data);
      });
  }, []);

  //add data in the table
  const postData = () => {
    console.log({
      masterName: masterName,
      inputText: inputText,
    });
    axios
      .post(`http://35.89.6.16:4002/api/mastersUpsert`, {
        id: 0,
        masterName: masterName,
        inputText: inputText,
        recodStatus: 1,
        addedBy: 1,
        updatedBy: 1,
      })
      .then(() => useEffect);
  };

  const deleteData = (e, i) => {
    console.log(i);
    axios.post("http://35.89.6.16:4002/api/mastersUpsert", {
      id: i.id,
      masterName: "platform",
      recodStatus: 0,
      addedBy: 1,
      updatedBy: 1,
    });
  };
  const Edit = (e) => {
    console.log({
      masterName: masterName,
      inputText: inputText,
    });
    e.preventDefault();
    axios
      .post(`http://35.89.6.16:4002/api/mastersUpsert`, {
        id: id,
        masterName: masterName,
        inputText: inputText,
        recodStatus: 1,
        addedBy: 1,
        updatedBy: 1,
      })
      .then(() => useEffect);
  };
  const updateData = (event, i) => {
    event.preventDefault();
    setId(i.id);
    setMasterName(masterName);
    setInputText(i.platformName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  return (
    <div className="pl-5 pr-5">
      <div className="page">System Master Page</div>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Master Name </Form.Label>
              <Form.Select
                onChange={(e) => setMasterName(e.target.value)}
                value={masterName}
                aria-label="Platform Name"
              >
                <option>Select From menu</option>
                <option value="platform">Platform</option>
                <option value="assign">Assign</option>
                <option value="label">Label</option>
                <option value="status">Status</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Platform</Form.Label>
              <Form.Control
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                placeholder="Enter the Platform"
              />
            </Form.Group>
          </Col>
        </Row>
        {/* <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select onChange={(e) => setStatus(e.target.value)} aria-label="Platform Name">
                            <option>Select any One</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </Form.Select>
                    </Form.Group>
                </Row> */}
        <div className="col-md-12 text-center">
          <Button
            onClick={handleSubmit}
            variant="primary"
            type="submit"
            className="btn btn-primary mb-2"
          >
            Submit
          </Button>
          &nbsp;
          <Button
            onClick={Edit}
            variant="primary"
            type="submit"
            className="btn btn-primary mb-2"
          >
            Update
          </Button>
        </div>
      </Form>
      <div>
        <h5>Platform Added in Table</h5>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Platform Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {APIData.map((i) => {
                return (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.platformName}</td>
                    <td>
                      <button
                        onClick={(event) => updateData(event, i)}
                        className="btn btn-info"
                      >
                        Update{" "}
                      </button>
                      {/* <button onClick={updateData} className="btn btn-info">Update </button> */}
                      <button
                        onClick={(event) => deleteData(event, i)}
                        style={{ marginLeft: "10px" }}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default BasicExample;
