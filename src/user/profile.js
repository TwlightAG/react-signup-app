import React from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faEdit, faEnvelope, faKey, faUserCircle} from "@fortawesome/fontawesome-free-solid/index.es";
import Loader from "../dashboard/loader/loader";
import {Link} from "react-router-dom";

class Profile extends React.Component {

    state = {
        data: "",
        fetchJson:"",
        redirect:false,
        errors:{}
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
        this.setState({data:user});
    }

    // onChange = e =>
    //     this.setState({
    //         data:{...this.state.data, [e.target.name] : e.target.value}
    //     });
    //
    // async myCall(){
    //
    //     const response = await fetch(`/admin`, {
    //         method:'PUT',
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }).catch(err => console.log(err));
    //     // const response = request
    //     //     .get(`/customer/search/findByUserName`)
    //     //     .query({username:this.state.data.username})
    //     //     .set('Accept', 'application/json');
    //
    //     const data  = await response.json();
    //     this.setState({fetchJson:data});
    // }
    //
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({isLoading:true});
    //     const errors = this.validate(this.state.data);
    //     if(Object.keys(errors).length === 0){
    //         this.myCall();
    //     }else{
    //         this.setState({errors});
    //     }
    //
    // };
    //
    // validate = (data) => {
    //     const errors = {};
    //     if(!data.username && !data.email){
    //         errors.username = "It can't be blank";
    //         errors.email = "It can't be blank";
    //     }
    //     return errors;
    // };

    render() {
        const { data,isLoading } = this.state;
        return (
            <form onSubmit={this.onSubmit} align="center">
                {isLoading && <Loader/>}
                <div className="input-group mb-4 border border-dark">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faUserCircle} /></span>
                    </div>
                    <input type="text" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" placeholder="Enter email" name="username"
                           value ={data.username}
                           readOnly="readonly"
                    />
                </div>

                <div className="input-group mb-4 border border-dark">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-dark text-light border border-dark" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <input type="email" className="form-control bg-dark text-light rounded-0 border  border-top-0 border-left-0 border-right-0"  placeholder="email" name="email"
                           value ={data.email}
                           readOnly="readonly"
                    />
                </div>
                <div className="input-group mb-4 border border-dark">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-dark text-light border border-dark" id="basic-addon1"><FontAwesomeIcon icon={faKey} /></span>
                    </div>
                    <input type="password" className="form-control bg-dark text-light rounded-0 border  border-top-0 border-left-0 border-right-0"  placeholder="Password" name="password"
                           value ="Password illa"
                           readOnly="readonly"
                    />
                    <div className="input-group-append">
                        <span data-toggle="tooltip" data-placement="bottom" title="Change Password" className="input-group-text bg-dark text-light border-0"> <Link to={"/profile/change_pass"} className={"card-link text-primary"} ><FontAwesomeIcon icon={faEdit}/> Change</Link></span>
                    </div>

                </div>

            </form>
        );
    }
}

export default Profile;