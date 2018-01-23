import React from 'react';
import '../css/main.css';

class AddSite extends React.Component {


    render(){
        return(
            <div className={"container"}>
                <div id={"signup"} className={"row justify-content-md-center"}>
                    <div id={"padding-all"} className={"col-7"}>

                        <div id={"padding-all"} className={"card"}>

                            <div className={"card card-body rounded"}>
                                <label for="basic-url">Enter The URL</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">https://</span>
                                    </div>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary" type="button">Go</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                );
    }
}

export default AddSite;