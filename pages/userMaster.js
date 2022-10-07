import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default Index;

function Index() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get(`http://35.89.6.16:4002/api/getMasterData?masterName=usermaster`)
      .then((response) => {
        setUsers(response.data.data);
      });
  }, []);

  function deleteUser(id) {
    console.log(id);
    axios
      .delete(
        "http://35.89.6.16:4002/api/userMasterUpsert?masterName=usermaster",
        id
      )
      .then(() => useEffect);
  }

  return (
    <div className="pl-5 pr-5">
      <div className="page">User Master Page</div>
      <Row className="mb-3">
        {/* <Col>
          <Form.Control type="search" placeholder="Search Box" />
        </Col> */}
        <Col>
          <Link href="/users/addUser">
            <button className="btn btn-sm btn-success mb-2">Add User</button>
          </Link>
        </Col>
      </Row>
      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>ID</th>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "30%" }}>Email</th>
            <th style={{ width: "10%" }}>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users &&
            users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  {/* to="/edit" */}
                  {/* href={{ to: "/users/editUser", query: user }} */}
                  <Link href={{ pathname: "/users/editUser/", query: user }}>
                    <button
                      className="btn btn-sm btn-primary mr-1"
                      // onClick={() => handleEdit(user.userId)}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteUser(user.userId)}
                    className="btn btn-sm btn-danger btn-delete-user"
                    disabled={user.isDeleting}
                  >
                    {user.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
