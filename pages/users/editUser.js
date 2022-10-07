import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default class Edit extends React.Component {
  constructor(prop) {
    super(prop);
    console.log(prop);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://35.89.6.16:4002/api/getMasterData?masterName=usermaster`)
      .then((response) => {
        setUsers(response.data.data);
      })
      .then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        });
      });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log(obj);
    axios.post(
      "http://35.89.6.16:4002/api/userMasterUpsert" +
        this.props.match.params.id,
      obj
    );
    // this.props.history.push('/userMaster');
  }

  render() {
    return (
      <div className="ml-2 mr-2">
        <div className="page">Update Master Page</div>
        <Form onSubmit={this.onSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  defaultValue={this.state.firstName}
                  onChange={this.onChangeFirstName}
                  placeholder="Enter First Name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  defaultValue={this.state.lastName}
                  onChange={this.onChangeLastName}
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                defaultValue={this.state.email}
                onChange={this.onChangeEmail}
                placeholder="Enter the Email"
              />
            </Form.Group>
          </Row>
          <div className="col-md-12 text-center">
            {/* <Link href="/userMaster"> */}
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary mb-2"
            >
              Update
            </Button>
            {/* </Link> */}
            &nbsp;
            <Link to="/">
              <Button
                variant="error"
                type="cancel"
                className="btn btn-primary mb-2"
              >
                Cancel
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}

// {
//   /* <form onSubmit={this.onSubmit}>
//                     <div>
//                         <label>First Name</label>
//                         <input type="text" defaultValue={this.state.firstName} onChange={this.onChangeFirstName} />
//                     </div>
//                     <div>
//                         <label>Last Name</label>
//                         <input type="text" defaultValue={this.state.lastName} onChange={this.onChangeLastName} />
//                     </div>
//                     <div>
//                         <label>Email</label>
//                         <input type="text" defaultValue={this.state.email} onChange={this.onChangeEmail} />
//                     </div>
//                     <div>
//                         <input type="submit" value="Update User" />
//                     </div>

//                 </form> */
// }
// import React from "react";
// import { Link } from "react-router-dom";
// function Edit({ editData }) {
//   return (
//     <div className="ml-2 mr-2">
//       <div className="page">Update Master Page</div>
//       <Form onSubmit={this.onSubmit}>
//         <Row className="mb-3">
//           <Col>
//             <Form.Group as={Col} controlId="formGridPassword">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 value={editData.firstName}
//                 onChange={this.onChangeFirstName}
//                 placeholder="Enter First Name"
//               />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group as={Col} controlId="formGridPassword">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 value={editData.lastName}
//                 onChange={this.onChangeLastName}
//                 placeholder="Enter Last Name"
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               value={editData.email}
//               onChange={this.onChangeEmail}
//               placeholder="Enter the Email"
//             />
//           </Form.Group>
//         </Row>
//         <div className="col-md-12 text-center">
//           <Link href="/userMaster">
//             <Button
//               variant="primary"
//               type="submit"
//               className="btn btn-primary mb-2"
//             >
//               Update
//             </Button>
//           </Link>
//           &nbsp;
//           <Link to="/">
//             <Button
//               variant="error"
//               type="cancel"
//               className="btn btn-primary mb-2"
//             >
//               Cancel
//             </Button>
//           </Link>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default Edit;
