import React from 'react';
import SignupForm from './signupForm';
import Redirect from "react-router-dom/es/Redirect";


class SignupPage extends React.Component {


    render(){
        if(sessionStorage.getItem('user') !== ""){
            return <Redirect push to="/dashboard"/>;
        }
        return(
            <div>
                <div className='row justify-content-md-center'>
                    <div id='signup' className='col-6'>
                        <div className="card bg-dark text-light">
                            <h5 className="card-header">Login</h5>
                            <div className="card-body">
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;