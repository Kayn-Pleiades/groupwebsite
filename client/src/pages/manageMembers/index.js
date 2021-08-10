import React, { useEffect, useState } from "react";
import { Input, Label } from "../../components/form";
import API from "../../utils/API";
import '../manageMembers/style.css';

function ManageMembers() {
    const [members, setMembers] = useState([]);
    const [memberForm, setMemberForm] = useState(false);
    const [addMemberBtn, setAddMemberButton] = useState(true);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadMembers()
    });

    function newMember(){
        setMemberForm(true);
        setAddMemberButton(false);
    };

    function loadMembers() {
        API.getMembers()
            .then(res => setMembers(res.data))
            .catch(err => console.log(err));
    };

    function deleteMember(id) {
        API.deleteMember(id)
            .then(res => loadMembers())
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex text-center justify-content-center">
                <div className="col pt-5">
                    <h1>Manage Members</h1>
                </div>
            </div>
            {memberForm && (
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <form>
                            <div className="row mb-3">
                                <Label className="col-sm-2"> 
                                    Name (Nickname)
                                </Label>
                                <div className="col-sm-10">
                                    <Input 
                                        onChange={handleInputChange}
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <Label className="col-sm-2"> 
                                    Full Name
                                </Label>
                                <div className="col-sm-10">
                                    <Input 
                                        onChange={handleInputChange}
                                        name="fullname"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <Label className="col-sm-2"> 
                                    Username
                                </Label>
                                <div className="col-sm-10">
                                    <Input 
                                        onChange={handleInputChange}
                                        name="url"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    {members.length ? (
                        <div className="list-overflow-container">
                            <ul className="list-group">
                                {members.map(member => (
                                    <li class="list-group-item d-flex align-items-center">
                                        <div className="image-parent me-auto p-2">
                                            <img src={member.image1} className="img-fluid thumbimg" alt="quixote" />
                                        </div>
                                        <h3 className="me-auto p-2">{member.name}</h3>
                                        <button type="button" className="btn btn-success">Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteMember(member._id)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <h3>No Members</h3>
                    )}
                </div>
            </div>
            {addMemberBtn && (
                <div className="row d-flex text-center justify-content-center">
                    <div className="col-8">
                            <div class="d-grid gap-2">
                            <button class="btn btn-success" type="button" onClick={() => newMember()}>Add Member</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManageMembers;