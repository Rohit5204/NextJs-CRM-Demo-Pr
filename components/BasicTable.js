import React, { useState, useEffect } from 'react';
import axios from "axios";


const BasicTable = props => {

    const deleteData = (e, i) => {
        i.status = 0
        console.log(e);
        console.log(i);
        axios.post('http://35.89.6.16:4002/api/mastersUpsert' + i.id, i).then((response) =>
                response.data
            );
    }
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://35.89.6.16:4002/api/getMasterData?masterName=platformmaster`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Platform Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {APIData.map((i) => {
                        return (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.platformName}</td>
                                <td>
                                    <button className="btn btn-info">Update </button>
                                    <button onClick={event => deleteData(event, i)} style={{ marginLeft: "10px" }} className="btn btn-danger">Delete </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BasicTable;
