import React from 'react';
import SignupForm from './signupForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import login from '../actions/auth';

class SignupPage extends React.Component {

    submit = data => this.props.login(data).then(()=> this.props.history.push("/"));

    render(){
        return(
            <div id={"signup"} className='row justify-content-md-center'>
                <div id='signup' className='col-6'>
                    <SignupForm submit={this.submit} />
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
      push: PropTypes.func.isRequired
  }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null,{login})(SignupPage);