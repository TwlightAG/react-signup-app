import React from 'react';
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "#2980b9",
        "0.25": "#3498db",
        "0.5": "#ecf0f1",
        "0.75": "#9b59b6",
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