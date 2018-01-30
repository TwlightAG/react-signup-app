import React from 'react';

class ViewSite extends React.Component {
    render() {

        return (
            <div className={"container"}>
            <div id={"padding1"} className={"row justify-content-md-center"}>
                <div id={"padding-all"} className={"card col-10 bg-dark text-white"}>
                    <div className={"card-body"}>
                        <h5 class="card-title">List of Projects</h5><br/>
                        <ul className="list-unstyled">
                            <li className="media">
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1">List-based media object</h5>
                                    <a href={""} className="mt-0 mb-1 card-link">List-based media object</a>
                                    <br/>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ViewSite;