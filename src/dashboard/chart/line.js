import React from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends React.Component {

    constructor(props){
        super(props);
        this.state = {chartData : props.chartData}

    }
    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    };
    render(){
        return(
            <div id={"padding-all"} className={"col-7"}>
                <div id={"padding-all"} className={"chart card"}>
                    <div className={"card card-body rounded"}>
                        <Line
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:this.props.displayTitle,
                                    text:'Salary Graph',
                                    fontSize:25
                                },
                                legend:{
                                    display:this.props.displayLegend,
                                    position:this.props.legendPosition
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default LineChart;