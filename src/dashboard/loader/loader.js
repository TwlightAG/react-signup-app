import React from 'react';
import './loading.css';
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "#1abc9c",
        "0.25": "#3498db",
        "0.5": "#e67e22",
        "0.75": "#e74c3c",
        "1.0": "#8e44ad",
    },
    shadowBlur: 5,
});
class Loader extends React.Component {


    render(){
        return(
            <TopBarProgress />
        );
    }
}

export default Loader;