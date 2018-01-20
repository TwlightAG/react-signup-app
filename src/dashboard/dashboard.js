import React from 'react';
import UserProfile from '../actions/userprofile';
import {Redirect} from "react-router";
import '../css/main.css';
import DashCont from "./dash_content";

class Dashboard extends React.Component {
    render(){
        if (UserProfile.getName() !== "") {
        return <Redirect push to="/signin"/>;
    }
        return(
            <div id={"padding1"} className={"container "}>
            <div className={"row card"}>
                <div id={"padding-all"} className={"col-12"}>
                    <DashCont />
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;