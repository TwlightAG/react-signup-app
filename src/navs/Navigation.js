import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBug, faSignOutAlt, faUserCircle} from "@fortawesome/fontawesome-free-solid";
import {faBell, faTh, faUser} from "@fortawesome/fontawesome-free-solid/index.es";


class Navigation extends React.Component{

    render(){
        return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <Link to={'/'} className="navbar-brand mb-0 h1" >
                    <FontAwesomeIcon icon={faBug}/> Mudita Crawlers</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Icon</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {sessionStorage.getItem('user')!=="" &&
                            <li className="nav-item active">
                            <Link to={'/dashboard'} className="nav-link" href="">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                        }

                    </ul>
                    {sessionStorage.getItem('user') ==="" &&
                    <form className="form-inline my-2 my-lg-0">
                        <Link to='/signin' role='button'  className="btn btn-outline-success my-2 my-sm-0" >Sign In</Link>
                    </form>}

                    {(sessionStorage.getItem('user')!=="" ) &&
                        <div className={"row"}>
                        <ul className="navbar-nav mr-auto">
                            <li className={"nav-item"}>
                                <a className="nav-link text-light" href={""} id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faTh}/></a>
                            </li>
                            <li className={"nav-item"}>
                            <a className="nav-link text-light" href={""} id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faBell}/></a>
                            </li>
                            <li className="nav-item dropdown  ">
                                <a className="nav-link dropdown-toggle" href={""} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faUserCircle} /> {sessionStorage.getItem('user')}
                                </a>
                                <div className="dropdown-menu bg-secondary text-light" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/profile' className="dropdown-item bg-secondary text-light" href=""><FontAwesomeIcon icon={faUser}/> profile</Link>
                                    <Link to='/logout' className="dropdown-item bg-secondary text-light" href=""><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
                                </div>
                            </li>
                        </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
        );
    }
}

export default Navigation;