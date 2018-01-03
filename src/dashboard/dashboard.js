import React from 'react';
import UserProfile from '../actions/userprofile';
import {Redirect} from "react-router";
import '../css/main.css';

class Dashboard extends React.Component {
    render(){
        if (UserProfile.getName() === "") {
        return <Redirect push to="/signin"/>;
    }
        return(
            <div id={"signup"} >
                <div  className="jumbotron ">
                    <h1 className="text-primary">Dashboard</h1>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-8">
                        <div className="media">
                            <img className="mr-2" src={require("../images/download.png")} alt="Generic placeholder image"/>
                            <div className="media-body">
                                <h5 className="card-title">Learn More about the Crawler We building</h5>
                                <p className="card-text">We are building a strongest ever website testing software. To power your Enterprise more that you cannot imagine !!</p>
                                <a href="#" className="btn btn-primary">Go Crawl</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;