import React from 'react';
import {
    faCheck,
    faEnvelope, faExclamationTriangle, faKey, faLock, faTicketAlt,
    faUserCircle
} from "@fortawesome/fontawesome-free-solid/index.es";
import Loader from "../dashboard/loader/loader";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import AlertNotify from "../dashboard/alert";
import request from "superagent";

class ChangePassword extends React.Component {

    state = {
        data: {
            old_pass:"",
            pass:"",
            again_pass:""
        },
        fetchJson:"",
        Json:"",
        redirect:false,
        errors:{
            title:"",
            message:"",
            type:"",
            icon:""
        }
    };

    componentWillMount(){

        // const response = await fetch(`/admin/${sessionStorage.getItem('user')}`, {
        //     headers : {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        //
        // });
        // const self = this;
        // request
        //     .get(`/admin/${sessionStorage.getItem('user')}`)
        //     .set('Accept', 'application/json')
        //     .then(function(res) {
        //         self.setState({data:res.body});
        //     }).catch(function (err) {
        //         console.log(err.message);
        // });
        // console.log(this.state.data);
        // const dataJson  = await response.json();
        // this.setState({
        //     data:response
        // });
        // console.log(this.state.data);
        const user = JSON.parse(localStorage.getItem('personal'));
        this.setState({fetchJson:user});
    }

    onChange = e =>
        this.setState({
            data:{...this.state.data, [e.target.name] : e.target.value}
        });

    async myCall(){

        const change = JSON.parse(localStorage.getItem('personal'));
        change.password = this.state.data.pass;
        request.put(`/admin`)
            .set('Content-Type', 'application/json')
            .send(change)
            .catch( (err) =>{
                console.log(err.message);
            });
        this.setState({
            errors: {
                title: "Yeah!!",
                message: "Password is Changed Successfully !!",
                type: "success",
                icon: faCheck
            }
        });
        localStorage.setItem('personal',JSON.stringify(change));
        this.setState({fetchJson:change});
        this.setState({isLoading:false});
        // const response = request
        //     .get(`/customer/search/findByUserName`)
        //     .query({username:this.state.data.username})
        //     .set('Accept', 'application/json');


    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('personal'));
        this.setState({fetchJson:user});
        this.setState({isLoading:true});
        if (this.state.data.old_pass === this.state.fetchJson.password) {
            if (this.state.data.pass !== this.state.data.again_pass) {
                this.setState({
                    errors: {
                        title: "Oops!!",
                        message: "Both Passwords does not match !!",
                        type: "danger",
                        icon: faExclamationTriangle
                    },
                    isLoading:false
                });
            } else {

                this.myCall();
            }
        } else {
            this.setState({
                errors: {
                    title: "Oops!!",
                    message: "Old Password does not match !!",
                    type: "danger",
                    icon: faExclamationTriangle
                },
                isLoading:false
            });
        }

    };


    render() {

        const { data,errors,isLoading } = this.state;
        return (
            <div className={"container"}>
                <br/>
                <br/>
                <div className='row justify-content-md-center'>
                    <div id='signup' className='col-6'>
                        <div className="card bg-dark text-light">
                            <h5 className="card-header text-center"><FontAwesomeIcon icon={faKey} /> Change Password</h5>
                            <div className="card-body">
                                <div>
                                    {errors.title !== "" && <AlertNotify icon={errors.icon} title={errors.title} type={errors.type} message={errors.message} />}
                                    <form onSubmit={this.onSubmit} align="center">
                                        {isLoading && <Loader/>}
                                        <p className={"text-center text-light"}>Old Password</p>
                                        <hr/>
                                        <div className="input-group mb-4 border border-dark">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faLock} /></span>
                                            </div>
                                            <input type="password" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" placeholder="Old Password" name="old_pass"
                                                   value ={data.old_pass}
                                                   onChange={this.onChange}
                                                   required
                                                   autoFocus
                                            />
                                        </div>
                                        <hr/>
                                        <p className={"text-center text-light"}>New Password</p>
                                        <hr/>

                                        <div className="input-group mb-4 border border-dark">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-dark text-light border border-dark" id="basic-addon1"><FontAwesomeIcon icon={faKey} /></span>
                                            </div>
                                            <input type="password" className="form-control bg-dark text-light rounded-0 border  border-top-0 border-left-0 border-right-0"  placeholder="Password" name="pass"
                                                   value ={data.pass}
                                                   onChange={this.onChange}
                                                   required
                                            />
                                        </div>
                                        <div className="input-group mb-4 border border-dark">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-dark text-light border border-dark" id="basic-addon1"><FontAwesomeIcon icon={faKey} /></span>
                                            </div>
                                            <input type="password" className="form-control bg-dark text-light rounded-0 border  border-top-0 border-left-0 border-right-0"  placeholder="Confirm Password" name="again_pass"
                                                   value ={data.again_pass}
                                                   onChange={this.onChange}
                                                   required
                                            />
                                        </div>
                                        <button className="btn btn-outline-primary pull-right">Change</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>

        );
    }
}

export default ChangePassword;