import React from 'react';
import Loading from '../dashboard/loader/loader';
import {Redirect} from 'react-router';

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
        this.setState({isLoading:true});
        const response = await fetch(`/customer/search/findByUserName?username=${this.state.data.username}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        });
            const data  = await response.json();
            this.setState({fetchJson:data,isLoading:false});
        //console.log(data);
        console.log(this.state.fetchJson.userName);
        if(this.state.fetchJson.userName === this.state.data.username && this.state.fetchJson.passWord === this.state.data.password){
            sessionStorage.setItem('user', this.state.data.username);
            this.setState({isLoading:false});
            this.setState({redirect:true});
            console.log('submitted successfully');
        }else{
            console.log("nope");
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({errors});
            this.myCall();
            //this.setState({isLoading:true});
            // const headers = new Headers();
            // headers.append("Content-Type",'application/json');
            //
            // const option = {
            //     method : 'GET',
            //     headers
            // };
            //
            // const request = new Request(`/customer/search/findByUserName?username=${this.state.data.username}`,option);
            // fetch(request).then(response => response.json())
            //     .then(data => console.log(data.userName))
            //     .then((data) => {
            //         if(data.userName === this.state.username && data.passWord === this.state.password){
            //             sessionStorage.setItem('user', this.state.username);
            //             this.setState({isLoading:false});
            //             this.setState({redirect:true});
            //             console.log('submitted successfully');
            //             console.log(this.state.username);
            //         }
            //     });
            // //this.setState({fetchJson: response._embedded});
            // console.log(this.state.fetchJson);
            // if (response.statusText === 'OK'){
            //
            // }

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
        if(isLoading){
            return(
                <Loading />
            );
        }
        if(redirect){
            return(
                <Redirect to={"/dashboard"}/>
            );
        }
        return(
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label >Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="username"
                           onChange={this.onChange}
                           value ={data.username}
                           autoFocus />
                    {errors.username && <small className="help-block text-danger">{errors.username}</small>}
                </div>

                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" name="password"
                            value ={data.password}
                           onChange={this.onChange}
                            />
                    {errors.password && <small className="help-block text-danger">{errors.password}</small>}

                </div>

                <button className="btn btn-primary">Login</button>

            </form>
        );
    }
}

export default SignupForm;