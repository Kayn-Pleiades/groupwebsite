import React from "react";
import MemberContainer from "../../components/memberContainer";
import '../members/style.css';

function Members() {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col p-5">
                    <h1>Members</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center pt-3">
                <div className="col-7">
                    <MemberContainer />
                </div>
            </div>
        </div>
    );
}

export default Members;