import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [APIData, setAPIData] = useState([]);
  const [masterName, setMasterName] = useState("");
//   useEffect(() => {
//     axios
//       .get(`http://35.89.6.16:4002/api/getMasterData?masterName=platformmaster`)
//       .then((response) => {
//         setAPIData(response.data.data);
//       });
//   }, []);
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = useState("");

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  /** Different arrays for different dropdowns */
  const algorithm = [
    "Searching Algorithm",
    "Sorting Algorithm",
    "Graph Algorithm",
  ];
  const language = ["C++", "Java", "Python", "C#"];
  const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Platform") {
    //type = algorithm;
    axios
      .get(`http://35.89.6.16:4002/api/getMasterData?masterName=platformmaster`)
      .then((response) => {
        setAPIData(response.data.data);
      });
  } else if (selected === "Label") {
    //type = language;
    axios
      .get(`http://35.89.6.16:4002/api/getMasterData?masterName=labelmaster`)
      .then((response) => {
        setAPIData(response.data.data);
      });
  } else if (selected === "Assign") {
    //type = dataStructure;
    axios
    .get(`http://35.89.6.16:4002/api/getMasterData?masterName=assignmaster`)
    .then((response) => {
      setAPIData(response.data.data);
    });
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <div>
        {/** Bind changeSelectOptionHandler to onChange method of select.
         * This method will trigger every time different
         * option is selected.
         */}
        {/* onChange={(e) => setMasterName(e.target.value)}
                value={masterName} */}
        <label> System Master </label>
        <select onChange={changeSelectOptionHandler}>
          <option>Choose...</option>
          <option>Platform</option>
          <option>Label</option>
          <option>Assign</option>
        </select>
      </div>
      <div>
        <select>
          {
            /** This is where we have used our options variable */
            options
          }
        </select>
      </div>
      <form>
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
                        // onClick={(event) => updateData(event, i)}
                        className="btn btn-info"
                      >
                        Update{" "}
                      </button>
                      {/* <button onClick={updateData} className="btn btn-info">Update </button> */}
                      <button
                        // onClick={(event) => deleteData(event, i)}
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
      </form>
    </div>
  );
};

export default App;
