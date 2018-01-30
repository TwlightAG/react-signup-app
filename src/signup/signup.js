import React from 'react';
import SignupForm from './signupForm';
import Redirect from "react-router-dom/es/Redirect";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/fontawesome-free-solid";



class SignupPage extends React.Component {

    render(){
        if(sessionStorage.getItem('user') !== ""){
            return <Redirect push to="/dashboard" />;
        }
        return(
            <div>
                <br/>
                <br/>
                <div className='row justify-content-md-center'>
                    <div id='signup' className='col-6'>
                        <div className="card bg-dark text-light">
                            <h5 className="card-header text-center"><FontAwesomeIcon icon={faSignInAlt} /> Login</h5>
                            <div className="card-body">
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default SignupPage;
