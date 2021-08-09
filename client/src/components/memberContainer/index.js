import React, { useEffect, useState } from "react";
import ProfileCard from "../profileCard";
import API from "../../utils/API";

function MemberContainer() {
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
        <div className="row row-cols-4 g-4">
            {members.map(member => (
                <div className="col">
                    <ProfileCard
                        image={member.image1}
                        name={member.name}
                        color={member.color1}
                        url={member.url}
                    />
                </div>
            ))}
        </div>
    )
}

export default MemberContainer;