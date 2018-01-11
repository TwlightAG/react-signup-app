import React from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends React.Component {

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
                    <Pie
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
        );
    }
}

export default PieChart;