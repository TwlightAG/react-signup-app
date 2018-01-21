import React from 'react';
import {Redirect} from "react-router";
import '../css/main.css';
import DashCont from "./dash_content";
import Route from "react-router/es/Route";
import AddSite from "./add_site";

class Dashboard extends React.Component {
    render(){
        if (sessionStorage.getItem('user') === "") {
        return <Redirect push to="/signin"/>;
    }
        return(
            <div id={"padding1"} className={"container "}>
            <div className={"row card border border-top-0 border-bottom-0 border-light bg-light" }>
                <div id={"padding-all"} className={"col-12"}>
                    <h2 className={"card-body "}>Dashboard
                        <hr/></h2>
                    <Route exact path={"/dashboard"} component={DashCont}  />
                    <Route path={"/dashboard/add_site"} component={AddSite}  />
                </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;