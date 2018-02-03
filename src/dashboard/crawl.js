import React from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faFolderOpen, faLink, faList} from "@fortawesome/fontawesome-free-solid/index.es";

class Crawl extends React.Component {
    render() {
        return (
            <div>
                <li className="media list-group-item list-group-item-action bg-dark text-light rounded-0 border border-secondary border-right-0 border-left-0 border-top-0">
                    <div className="media-body">
                        <div className={"row"}>
                            <div className={"mr-3 col-1"}>
                                <FontAwesomeIcon icon={faFolderOpen} size={"3x"} />
                            </div>
                           <div className={"col-9"}>
                               <h5 className="mt-0 mb-1">Project name: {this.props.crawl.Project}</h5>
                               <FontAwesomeIcon icon={faList} /> Description: {this.props.crawl.Description}<br/>
                               <small><a href={`https://${this.props.crawl.URL}`} className="mt-0 mb-1 card-link text-help"> <FontAwesomeIcon icon={faLink} /> {this.props.crawl.URL}</a></small>
                           </div>
                           <div className={"col-2"}>

                           </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Crawl;