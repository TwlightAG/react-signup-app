import React from 'react';
import '../css/main.css';
import Card from "./card/card";
class DashCont extends React.Component {


    render(){
        return(
            <div>

                <div className={"row justify-content-md-center"}>
                    <Card cardTitle={"Add Sites"} srcImg={"add.png"} linkURL={"/dashboard/add_site"} Imgheight={"75"}/>
                    <Card cardTitle={"View Sites"} srcImg={"view.png"} linkURL={"/dashboard/view_site"} Imgheight={"75"}/>
                    <Card cardTitle={"Drill Down"} srcImg={"drill.png"} linkURL={"/dashboard/drill_down"} Imgheight={"75"}/>
                    <Card cardTitle={"Pages"} srcImg={"pages.png"} linkURL={"/dashboard/page_status"} Imgheight={"75"}/>
                </div>
            </div>
        );
    }
}

export default DashCont;