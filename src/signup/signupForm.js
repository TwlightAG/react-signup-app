import React from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import {Redirect} from "react-router";
import UserProfile from "../actions/userprofile";


class SignupForm extends React.Component {

    state = {
        data: {
            email:"",
            password:""
        },
        loading:false,
        redirect:false,
        errors:{}
    };

    onChange = e =>
        this.setState({
            data:{...this.state.data, [e.target.name] : e.target.value}
        });

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            UserProfile.setName("Dinesh");
            this.setState({redirect: true});
        }

    };

    validate = (data) => {
        const errors = {};

        if(!data.password && !data.email){
            errors.email = "It can't be blank";
            errors.password = "It can't be blank";
        }
        else if(!validator.isEmail(data.email)) {
            errors.email = "Invalid Email";
        }
        else if (data.email === "dineshbalaji@gmail.com" && data.password === "mudita"){

            errors.email = "";
            errors.password = "";

        }
        return errors;
    };

    render(){
        const { data,errors } = this.state;

        if (this.state.redirect || UserProfile.getName() !== "") {
            return <Redirect push to="/dashboard" />;
        }
        return(
            <form onSubmit={this.onSubmit} >

                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"
                           onChange={this.onChange}
                           value ={data.email}
                           autoFocus />
                    {errors.email && <small className="help-block text-danger">{errors.email}</small>}
                </div>

                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" name="password"
                            value ={data.password}
                           onChange={ this.onChange}
                           autoFocus />
                    {errors.password && <small className="help-block text-danger">{errors.password}</small>}

                </div>

                <button className="btn btn-primary">Login</button>

            </form>
        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;