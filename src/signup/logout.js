
import React from  "react";
import {Redirect} from "react-router";

class Logout extends React.Component {
    render() {
        sessionStorage.setItem('user',"");
        return <Redirect push to="/signin"/>;
    }
}

export default Logout;