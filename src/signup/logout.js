
import React from  "react";
import {Redirect} from "react-router";

class Logout extends React.Component {
    render() {
        sessionStorage.setItem('user',"");
        localStorage.setItem('personal','');
        return <Redirect push to="/"/>;
    }
}

export default Logout;