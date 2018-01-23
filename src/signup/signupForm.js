import React from 'react';
import {Redirect} from 'react-router';
import Loader from "../dashboard/loader/loader";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faUserCircle,faLock} from "@fortawesome/fontawesome-free-solid";

class SignupForm extends React.Component {

    state = {
        data: {
            username:"",
            password:""
        },
        fetchJson:{
            userName:"",
            passWord:""
        },
        redirect:false,
        errors:{}
    };

    onChange = e =>
        this.setState({
            data:{...this.state.data, [e.target.name] : e.target.value}
        });

    async myCall(){
        const response = await fetch(`http://mongodbrestapi.herokuapp.com/customer/search/findByUserName?username=${this.state.data.username}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        });

        const data  = await response.json();
        this.setState({fetchJson:data,isLoading:false});
        console.log(this.state.fetchJson.userName);

        if(this.state.fetchJson.userName === this.state.data.username && this.state.fetchJson.passWord === this.state.data.password){
            sessionStorage.setItem('user', this.state.data.username);
            this.setState({isLoading:false});
            this.setState({redirect:true});
            console.log('Set Username: '+this.state.data.username);
            console.log(sessionStorage.getItem('user'));
        }else{
            this.setState({isLoading:false});
            console.log("Nothing is set !");
            this.state.errors.username = "Wrong Username or Password";
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading:true});
        const errors = this.validate(this.state.data);
        if(Object.keys(errors).length === 0){
            this.myCall();
        }else{
            this.setState({errors});
        }

    };

    validate = (data) => {
        const errors = {};

        if(!data.password && !data.username){
            errors.username = "It can't be blank";
            errors.password = "It can't be blank";
        }
        return errors;
    };

    render(){
        const { data,errors,isLoading,redirect } = this.state;

        if(redirect){
            return(
                <Redirect to={"/dashboard"}/>
            );
        }
        return(
            <form onSubmit={this.onSubmit} align="center">
                {isLoading && <Loader/>}
                <div className="input-group mb-4 border border-dark">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faUserCircle} /></span>
                    </div>
                    <input type="text" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" placeholder="Enter email" name="username"
                           onChange={this.onChange}
                           value ={data.username}
                           autoFocus
                    />
                    {errors.username && <small className="help-block text-danger">{errors.username}</small>}
                </div>

                <div className="input-group mb-4 border border-dark">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-dark text-light border border-dark" id="basic-addon1"><FontAwesomeIcon icon={faLock} /></span>
                    </div>
                    <input type="password" className="form-control bg-dark text-light rounded-0 border  border-top-0 border-left-0 border-right-0"  placeholder="Password" name="password"
                            value ={data.password}
                           onChange={this.onChange}
                            />
                    {errors.password && <small className="help-block text-danger">{errors.password}</small>}

                </div>

                <button className="btn btn-outline-primary pull-right">Login</button>

            </form>
        );
    }
}

export default SignupForm;