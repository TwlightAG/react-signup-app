import React from 'react';
import {Redirect} from 'react-router';
import Loader from "../dashboard/loader/loader";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faUserCircle} from "@fortawesome/fontawesome-free-solid";
import {faCheck, faExclamationTriangle, faKey, faTicketAlt} from "@fortawesome/fontawesome-free-solid/index.es";
import AlertNotify from "../dashboard/alert";

class SignupForm extends React.Component {

    state = {
        data: {
            id:"",
            username:"",
            password:""
        },
        fetchJson:"",
        redirect:false,
        errors:{
            title:"",
            message:"",
            type:"",
            icon:""
        }
    };


    onChange = e =>
        this.setState({
            data:{...this.state.data, [e.target.name] : e.target.value}
        });

    async myCall(){
        const response = await fetch(`/admin/${this.state.data.username}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).catch( (err) =>{
            console.log(err.message);
        });
        // const response = request
        //     .get(`/customer/search/findByUserName`)
        //     .query({username:this.state.data.username})
        //     .set('Accept', 'application/json');

        try {
            const data = await response.json();
            this.setState({fetchJson: data});
            localStorage.setItem('personal', JSON.stringify(this.state.fetchJson));
        } catch (e) {
            this.setState({
                errors:{
                    title:"Login Failed",
                    message:"Username or Password Wrong !!",
                    type:"danger",
                    icon:faExclamationTriangle
                }
            });
        }

        if(this.state.fetchJson.username === this.state.data.username && this.state.fetchJson.password === this.state.data.password){
            sessionStorage.setItem('user', this.state.data.username);
            sessionStorage.setItem('user-id', this.state.fetchJson.id);
            this.setState({isLoading:false});
            this.setState({
                errors:{
                    title:"Success",
                    message:"Login Successful !!",
                    type:"success",
                    icon:faCheck
                }
            });
            this.setState({redirect:true});
        }else{
            this.setState({isLoading:false});
            this.setState({
                errors:{
                    title:"Login Failed",
                    message:"Username or Password Wrong !!",
                    type:"danger",
                    icon:faExclamationTriangle
                }
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            errors:{
                title:"",
                message:"",
                type:""
            }
        });
        this.setState({isLoading:true});
        this.myCall();

    };

    render(){
        const { data,isLoading,errors,redirect } = this.state;

        if(redirect){
            return(
                <Redirect to={"/dashboard"}/>
            );
        }
        return(
            <div>
                {errors.title !== "" && <AlertNotify icon={errors.icon} title={errors.title} type={errors.type} message={errors.message} />}
                <form onSubmit={this.onSubmit} align="center">
                    {isLoading && <Loader/>}
                    <div className="input-group mb-4 border border-dark">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faUserCircle} /></span>
                        </div>
                        <input type="text" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" placeholder="Enter Username" name="username"
                               onChange={this.onChange}
                               value ={data.username}
                               autoFocus required
                        />
                    </div>

                    <div className="input-group mb-4 border border-dark">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-dark text-light border border-dark" id="basic-addon1"><FontAwesomeIcon icon={faKey} /></span>
                        </div>
                        <input type="password" className="form-control bg-dark text-light rounded-0 border  border-top-0 border-left-0 border-right-0"  placeholder="Password" name="password"
                                value ={data.password}
                               onChange={this.onChange}
                               required
                                />

                    </div>

                    <button className="btn btn-outline-primary pull-right">Login</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;