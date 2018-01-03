import UserProfile from '../actions/userprofile';
import React from  "react";
import {Redirect} from "react-router";

class Logout extends React.Component {
    render() {
        UserProfile.setName("");
        return <Redirect push to="/signin"/>;
    }
}

export default Logout;