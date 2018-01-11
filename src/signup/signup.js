import React from 'react';
import SignupForm from './signupForm';

class SignupPage extends React.Component {


    render(){
        return(
            <div id={"signup"} className='row justify-content-md-center'>
                <div id='signup' className='col-6'>
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default SignupPage;