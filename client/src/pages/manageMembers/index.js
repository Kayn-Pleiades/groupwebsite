import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../../components/form";
import API from "../../utils/API";
import './style.css';

function ManageMembers() {
    const [members, setMembers] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadMembers()
    });

    function loadMembers() {
        API.getMembers()
            .then(res => setMembers(res.data))
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name) {
            API.saveMember({
                name: formObject.name,
                fullname: formObject.fullname,
                url: formObject.url,
                image1: formObject.image1,
                image2: formObject.image2,
                color1: formObject.color1,
                color2: formObject.color2,
                debut: formObject.debut,
                birthday: formObject.birthday,
                pronouns: formObject.pronouns,
                content: formObject.content,
                artist: formObject.artist,
                rig: formObject.rig
            })
                .then(res => loadMembers())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container-fluid">
            <div className="row d-flex text-center justify-content-center">
                <div className="col pt-5">
                    <h1>Add Member</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-7">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Member Color</th>
                                    <th scope="col">Pronouns</th>
                                    <th scope="col">Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    <tr>
                                        <th scope="row">{member.fullname}</th>
                                        <td>{member.color1}</td>
                                        <td>{member.pronouns}</td>
                                        <td>{member.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row d-flex text-center justify-content-center">
                <div className="col-7">
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Name"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="fullname"
                            placeholder="Full Name"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="url"
                            placeholder="url"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="image1"
                            placeholder="image 1"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="image2"
                            placeholder="image 2"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="color1"
                            placeholder="color 1"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="color2"
                            placeholder="color 2"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="debut"
                            placeholder="debut"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="birthday"
                            placeholder="birthday"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="pronouns"
                            placeholder="pronouns"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="content"
                            placeholder="content"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="artist"
                            placeholder="artist"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="rig"
                            placeholder="model rigger"
                        />
                        <FormBtn
                            disabled={!(formObject.name)}
                            onClick={handleFormSubmit}
                        >
                            Submit Member
                        </FormBtn>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManageMembers;