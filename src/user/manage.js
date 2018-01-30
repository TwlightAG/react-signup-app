import React from 'react';
import {faUserCircle} from "@fortawesome/fontawesome-free-solid/index.es";
import Profile from "./profile";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Manage extends React.Component {
    render() {
        return (
            <div className={"container"}>
            <br/>
            <br/>
            <div className='row justify-content-md-center'>
                <div id='signup' className='col-6'>
                    <div className="card bg-dark text-light">
                        <h5 className="card-header text-center"><FontAwesomeIcon icon={faUserCircle} size={"3x"} /> <br/>Profile</h5>
                        <div className="card-body">
                            <Profile/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
        );
    }
}

export default Manage;