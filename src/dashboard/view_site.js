import React from 'react';
import Crawl from "./crawl";
import request from "superagent";
import Loader from "./loader/loader";

class ViewSite extends React.Component {

    state = {
        data:JSON.parse(localStorage.getItem('personal'))
    };
    handleUserInputChange = (e)=>{
        let i = 0;
        this.setState({isLoading:true});
        const user = JSON.parse(localStorage.getItem('personal'));
        user.project.forEach(function(element) {
            if(element.Project === e.target.value){
                user.project.splice(i,1);
                request.put(`/admin`)
                    .set('Content-Type', 'application/json')
                    .send(user)
                    .catch( (err) =>{
                        console.log(err.message);
                    });
                localStorage.setItem('personal', JSON.stringify(user));
            }
            i++;
        });
        this.setState({data:JSON.parse(localStorage.getItem('personal'))});
        this.setState({isLoading:false});
    };
    render() {
        const {data,isLoading} = this.state;
        return (
            <div className={"container"}>
                {isLoading && <Loader/>}
            <div id={"padding1"} className={"row justify-content-md-center"}>
                <div id={"padding-all"} className={"card col-10 bg-dark text-white"}>
                    <div className={"card-body"}>
                        <h5 className="card-title">List of Projects<hr className={"border-secondary"}/></h5>
                        <ul className="list-unstyled">
                            {data.project.map((crawl)=>{
                                return <Crawl crawl={crawl} key={crawl.Project} onUserInputChange={this.handleUserInputChange} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ViewSite;