import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardTitle : props.cardTitle,
            srcImg : props.srcImg,
            linkURL : props.linkURL,
            Imgheight: props.Imgheight
        }

    }

    render(){
        const { cardTitle,linkURL,srcImg,Imgheight } = this.state;
        return(
            <div id={"padding-all"} className={"col-lg-3 "}>
            <div  className="card text-secondary bg-light mb-3 border-0" >
                <div className="card-body" align="center">
                    <h5 className="card-title">{cardTitle}</h5>
                    <Link to={linkURL}>
                        <img id={"padding-all"} height={Imgheight} src={require(`../images/${srcImg}`)} alt={"Something"}/>
                    </Link>
                </div>
            </div>
            </div>
        );
    }
}

export default Card;