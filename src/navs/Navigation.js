import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <Link to={'/'} className="navbar-brand" >Crawlers</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Icon</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link" href="">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/dashboard'} className="nav-link" href="">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    {sessionStorage.getItem('user')==="" &&
                    <form className="form-inline my-2 my-lg-0">
                        <Link to='/signin' role='button'  className="btn btn-outline-success my-2 my-sm-0" >Sign In</Link>
                    </form>}

                    {sessionStorage.getItem('user')!=="" &&
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {sessionStorage.getItem('user')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/logout' className="dropdown-item" href="#">Logout</Link>
                                </div>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>

);



}
