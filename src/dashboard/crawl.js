import React from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faEdit, faFolderOpen, faLink, faList, faTimes} from "@fortawesome/fontawesome-free-solid/index.es";

class Crawl extends React.Component {

    state = {
        data: "",
        fetchJson:"",
        redirect:false,
        errors:{}
    };


    // onClick = (e) => {
    //     let i = 0;
    //     const user = JSON.parse(localStorage.getItem('personal'));
    //     user.project.forEach(function(element) {
    //         if(element.Project === e.target.value){
    //             user.project.splice(i,1);
    //             console.log(user);
    //             localStorage.setItem('personal', JSON.stringify(user));
    //         }
    //         i++;
    //     });
    // };

    render() {

        return (
            <div>
                <li className="media list-group-item list-group-item-action bg-dark text-light rounded-0 border border-secondary border-right-0 border-left-0 border-top-0">
                    <div className="media-body">
                        <div className={"row"}>
                            <div className={"col-1"}>
                                <FontAwesomeIcon icon={faFolderOpen} size={"3x"} />
                            </div>
                           <div className={"col-9"}>
                               <h5 className="mt-0 mb-1">Project name: {this.props.crawl.Project}</h5>
                               <FontAwesomeIcon icon={faList} /> Description: {this.props.crawl.Description}<br/>
                               <small><a href={`https://${this.props.crawl.URL}`} className="mt-0 mb-1 card-link text-help"> <FontAwesomeIcon icon={faLink} /> {this.props.crawl.URL}</a></small>
                           </div>
                           <div className={"col-1"}>
                                <button onClick={this.props.onUserInputChange} value={this.props.crawl.Project} className={"btn btn-sm btn-outline-danger btn-block"}><FontAwesomeIcon icon={faTimes}/></button>
                                <button className={"btn btn-sm btn-outline-info btn-block"}><FontAwesomeIcon icon={faEdit}/></button>
                           </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Crawl;