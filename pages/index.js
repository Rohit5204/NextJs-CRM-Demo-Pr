import React, { useState, useEffect } from 'react';

export default function Home() {
    return (
        <div>
            <div className="overflow-x-scroll">
                <table className="table-auto shadow-md mt-10 w-full w-lg">
                    <thead className="bg-gray-800">
                        <tr className="text-white">
                            <th className="w-1/5 py-2">Sr</th>
                            <th className="w-1/5 py-2">Platform Name</th>
                            <th className="w-1/5 py-2">Count</th>
                            <th className="w-1/5 py-2">Total Count</th>
                        </tr>
                    </thead>
                    {/* <tbody className="bg-white">
                        {clients.map((client) => (
                            <Client
                                key={client.id}
                                data={client}
                                clients={clients}
                                setClients={setClients}
                            />
                        ))}
                    </tbody>  */}
                </table>
            </div>
        </div>
    );
}
