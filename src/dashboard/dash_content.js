import React from 'react';
import '../css/main.css';
import Card from "./card";
import {faBug,faCodeBranch, faEye, faFileAlt, faFileCode, faPlus, faThList} from "@fortawesome/fontawesome-free-solid";
class DashCont extends React.Component {


    render(){
        return(
            <div id={"padding-all"}>

                <div className={"row justify-content-md-center"}>
                        <Card cardTitle={"Add Sites"} srcImg={faPlus} linkURL={"/dashboard/add_site"} Imgheight={"3x"}/>
                        <Card cardTitle={"View Sites"} srcImg={faEye} linkURL={"/dashboard/view_site"} Imgheight={"3x"}/>
                        <Card cardTitle={"Drill Down"} srcImg={faCodeBranch} linkURL={"/dashboard/drill_down"} Imgheight={"3x"}/>
                        <Card cardTitle={"Pages"} srcImg={faFileAlt} linkURL={"/dashboard/page_status"} Imgheight={"3x"}/>
                        <Card cardTitle={"Test Dashboard"} srcImg={faThList} linkURL={"/dashboard/test_dash"} Imgheight={"3x"}/>
                        <Card cardTitle={"Test Scripts"} srcImg={faFileCode} linkURL={"/dashboard/test_scrips"} Imgheight={"3x"}/>
                        <Card cardTitle={"Defect Management"} srcImg={faBug} linkURL={"/dashboard/defects"} Imgheight={"3x"}/>
                </div>
            </div>
        );
    }
}

export default DashCont;