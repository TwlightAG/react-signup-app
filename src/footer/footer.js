import React from 'react';
import '../css/main.css';


class Footer extends React.Component {
    render(){
        return(
            <footer className="my-5 pt-5 text-dark text-center text-small">
                <hr/>
                <br/>
                <p className="mb-1">&copy; 2017-2018 Mudita Development</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a className={"card-link text-dark"} href="../signin">Login</a></li>
                    <li className="list-inline-item"><a className={"card-link text-dark"} href="../signin">Sign Up</a></li>
                    <li className="list-inline-item"><a className={"card-link text-dark"} href="../signin">Settings</a></li>
                </ul>
                <p className="mb-1"><a className={"text-dark card-link"} href={"https://github.com/Dinesh-Balaji-Saravanan/react-signup-app"}><img src={require("../images/git.png")} height={35} alt={"git"} /> GitHub</a></p>
            </footer>
        );
    }
}

export default Footer;