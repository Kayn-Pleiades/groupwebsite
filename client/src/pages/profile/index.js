import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from 'react-router-dom';
import ProfileOverview from "../../components/profileOverview";
import API from "../../utils/API";
import '../profile/style.css';

function Profile() {
    const [members, setMembers] = useState([]);
    const [thisMember, setMember] = useState({});
    let { id } = useParams();

    useEffect(() => {
        loadMembers();
    });

    function loadMembers() {
        API.getMembers()
            .then(res => setMembers(res.data))
            .catch(err => console.log(err));
        findMember();
    };

    function findMember() {
        for(var i = 0; i < members.length; i++) {
            var obj = members[i];
            if(obj.url === id){
              setMember(obj);
            } 
          }
    };

    return(
        <div className="container-fluid">
            <div className="row d-flex text-center justify-content-center">
                <div className="col pt-5">
                    <p className="memberName">{thisMember.name}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-7">
                    <ProfileOverview
                        image={thisMember.image2}
                        color={thisMember.color1}
                        debut={moment.utc(thisMember.debut).format('MMMM Do YYYY')}
                        birthday={moment.utc(thisMember.birthday).format('MMMM Do')}
                        pronouns={thisMember.pronouns}
                        content={thisMember.content}
                        artist={thisMember.artist}
                        rig={thisMember.rig}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;