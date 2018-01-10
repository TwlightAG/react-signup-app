import React from 'react';
import '../css/main.css';
import BarChart from "./chart/bar";
import LineChart from "./chart/pie";
import PieChart from "./chart/line";

class DashCont extends React.Component {

    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }
    componentWillMount(){
        this.getChartData();
    }
    getChartData(){
        //ToDo: Making the Ajax Calls
        this.setState({
            chartData:{
                labels:['Dinesh','anandh','Anbu','Vinod'],
                datasets:[
                    {
                        label:'Salary',
                        data:[
                            80000,
                            60000,
                            70000,
                            100000,
                            0,
                            150000
                        ],
                        backgroundColor:[
                            'rgba(41, 128, 185,1.0)',
                            'rgba(22, 160, 133,1.0)',
                            'rgba(243, 156, 18,1.0)',
                            'rgba(231, 76, 60,1.0)'
                        ]
                    }
                ]
            }
        })
    }

    render(){
        return(
            <div>
                <h2 className={"card-body"}>Dashboard
                    <hr/></h2>
                <div  className={"card-body row"}>
                    <div id={"padding-all"} className={"col-7"}>
                    <div id={"padding-all"} className={"card"}>
                        <div className={"card card-body rounded"}>
                            <BarChart chartData={this.state.chartData} />
                        </div>
                    </div>
                    </div>
                    <div id={"padding-all"} className={"col-5"}>
                    <div id={"padding-all"} className={"chart card"}>
                        <div  className={" card card-body rounded"}>
                            <LineChart chartData={this.state.chartData} />
                        </div>
                    </div>
                    </div>
                    <div id={"padding-all"} className={"col-7"}>
                    <div id={"padding-all"} className={"chart card"}>
                        <div className={"card card-body rounded"}>
                            <PieChart chartData={this.state.chartData} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashCont;