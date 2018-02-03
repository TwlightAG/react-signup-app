import React from 'react';
import Crawl from "./crawl";

class ViewSite extends React.Component {

    state = {
        data:JSON.parse(localStorage.getItem('personal'))
    };
    render() {

        return (
            <div className={"container"}>
            <div id={"padding1"} className={"row justify-content-md-center"}>
                <div id={"padding-all"} className={"card col-10 bg-dark text-white"}>
                    <div className={"card-body"}>
                        <h5 className="card-title">List of Projects<hr className={"border-secondary"}/></h5>
                        <ul className="list-unstyled">
                            {this.state.data.project.map((crawl)=>{
                                return <Crawl crawl={crawl} key={crawl.Project} />
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