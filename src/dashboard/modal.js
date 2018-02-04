import React from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faFolder, faLink, faList, faPlusCircle} from "@fortawesome/fontawesome-free-solid/index.es";
import Loader from "./loader/loader";
import Redirect from "react-router-dom/es/Redirect";
import request from "superagent";

class Modal extends React.Component {

    state = {
        data:JSON.parse(localStorage.getItem('personal')),
        pageData:{
            Project:"",
            URL:"",
            Description:""
        },
        redirect:false
    };


    onChange = e =>
        this.setState({
            pageData:{...this.state.pageData, [e.target.name] : e.target.value}
        });

    myCall(){
        this.state.data.project.push(this.state.pageData);
        localStorage.setItem('personal',JSON.stringify(this.state.data));
        request.post(`/admin/${sessionStorage.getItem('user-id')}`)
            .set('Content-Type', 'application/json')
            .send(this.state.data)
            .catch( (err) =>{
            console.log(err.message);
        });

        this.setState({redirect:true});
        this.setState({isLoading:false});
        // // const response = request
        // //     .get(`/customer/search/findByUserName`)
        // //     .query({username:this.state.data.username})
        // //     .set('Accept', 'application/json');
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading:true});
        this.myCall();
    };

    render() {
        const { pageData,isLoading,redirect } = this.state;

        if(redirect){
            return(
                <Redirect to={"/dashboard/view_site"}/>
            );
        }

        return (
            <div className={"container"}>
                <div className='row justify-content-md-center'>
                    {isLoading && <Loader/>}
                    <div id='signup-card' className='col-7'>
                        <div className="card bg-dark text-light">
                            <h3 className="card-header lead  text-center border-0"><FontAwesomeIcon icon={faPlusCircle} /> Add Project</h3>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit} className={"container"}>
                                    <div className="input-group mb-4 border border-dark">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faFolder} /></span>
                                        </div>
                                        <input type="text" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" placeholder="Project Name" name="Project"
                                               onChange={this.onChange}
                                               value ={pageData.Project}
                                               autoFocus required
                                        />
                                    </div>
                                    <div className="input-group mb-4 border border-dark">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faLink} /></span>
                                        </div>
                                        <input type="text" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" placeholder="URL" name="URL"
                                               onChange={this.onChange}
                                               value ={pageData.URL}
                                               required
                                        />
                                    </div>
                                    <div className="input-group mb-4 border border-dark">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-dark text-light border  border-dark" id="basic-addon1"><FontAwesomeIcon icon={faList} /></span>
                                        </div>
                                        <textarea className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" id="exampleFormControlTextarea1" name={"Description"} rows="3" placeholder={"Description"}
                                                  onChange={this.onChange}
                                                  value={pageData.Description}
                                                  required
                                        />
                                    </div>
                                    <button className="btn btn-success float-right">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;