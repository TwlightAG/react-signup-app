import React from 'react';
import '../css/main.css';

class AddSite extends React.Component {


    render(){
        return(
            <div className={"container"}>
                <br/>
                <br/>
                <br/>
                <br/>
                <div id={"signup"} className={"row justify-content-md-center"}>
                    <div id={"padding-all"} className={"col-7"}>

                        <div id={"padding-all"} className={"card rounded bg-dark"}>

                            <div className={"card card-body rounded bg-dark"} align="center" >
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control bg-dark text-light border  border-top-0 border-left-0 border-right-0  rounded-0" id="basic-url" placeholder={"Enter The URL"} aria-describedby="basic-addon3"/>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-outline-primary" type="button">Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
                );
    }
}

export default AddSite;