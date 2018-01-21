import React from 'react';
import '../css/main.css';
import Card from "./card";
class DashCont extends React.Component {


    render(){
        return(
            <div id={"padding-all"}>

                <div className={"row justify-content-md-center"}>
                        <Card cardTitle={"Add Sites"} srcImg={"add.png"} linkURL={"/dashboard/add_site"} Imgheight={"75"}/>
                        <Card cardTitle={"View Sites"} srcImg={"view.png"} linkURL={"/dashboard/view_site"} Imgheight={"75"}/>
                        <Card cardTitle={"Drill Down"} srcImg={"drill.png"} linkURL={"/dashboard/drill_down"} Imgheight={"75"}/>
                        <Card cardTitle={"Pages"} srcImg={"pages.png"} linkURL={"/dashboard/page_status"} Imgheight={"75"}/>
                        <Card cardTitle={"Test Dashboard"} srcImg={"test_dash.png"} linkURL={"/dashboard/test_dash"} Imgheight={"75"}/>
                        <Card cardTitle={"Test Scripts"} srcImg={"scrips.png"} linkURL={"/dashboard/test_scrips"} Imgheight={"75"}/>
                        <Card cardTitle={"Defect Management"} srcImg={"bug.png"} linkURL={"/dashboard/defects"} Imgheight={"75"}/>
                </div>
            </div>
        );
    }
}

export default DashCont;