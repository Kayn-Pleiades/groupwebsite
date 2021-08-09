import React from "react";
import Hero from "../../components/hero";
import "./style.css";

function Home() {
    return (
        <div className="container-fluid">
            <Hero />
            <div className="row d-flex justify-content-center pt-4">
                <div className="col-8">
                    <card className="card">
                        <row className="row g-0 align-items-center">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Apply for DREAM☆E </h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="btn btn-primary">Find out more!</div>
                                </div>
                            </div>
                        </row>
                    </card>
                </div>
            </div>
        </div>
    );
}

export default Home;