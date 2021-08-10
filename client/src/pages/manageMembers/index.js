import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import './style.css';

function ManageMembers() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers()
    });

    function loadMembers() {
        API.getMembers()
            .then(res => setMembers(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex text-center justify-content-center">
                <div className="col pt-5">
                    <h1>Manage Members</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    {members.length ? (
                        <div className="list-overflow-container">
                            <ul className="list-group">
                                {members.map(member => (
                                    <li class="list-group-item d-flex align-items-center">
                                        <div className="image-parent me-auto p-2">
                                            <img src={member.image1} className="img-fluid" alt="quixote" />
                                        </div>
                                        <h3 className="me-auto p-2">{member.name}</h3>
                                        <button type="button" className="btn btn-success">Edit</button>
                                        <button type="button" className="btn btn-danger">Remove</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <h3>No Members</h3>
                    )}
                </div>
            </div>
            <div className="row d-flex text-center justify-content-center">
                <div className="col-8">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="button">Add Member</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageMembers;