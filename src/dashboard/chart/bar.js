import React from 'react';
import {Bar} from 'react-chartjs-2';
import FontAwesome from '@fortawesome/react-fontawesome';
import {faTimesCircle,faSyncAlt,faPlusCircle } from '@fortawesome/fontawesome-free-solid';

class BarChart extends React.Component {

    state = {
        visibility:true
    };

    constructor(props){
        super(props);
        this.state = {chartData : props.chartData}

    }
    onClick = () => {
        if(this.state.visibility === true){
            this.setState({visibility:false});
            console.log('false');
        }else{
            this.setState({visibility:true});
            console.log('true');
        }
    };
static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right'
};
    render(){
        if (this.state.visibility === false){
            return(
                <div id={"padding-all"} className={"col-7"}>

                <div id={"padding-all"} className={"chart card"}>
                    <div className={"row col-3"}>
                        <div className={"col-1"}  onClick={this.onClick} >
                            <FontAwesome icon={faPlusCircle} />
                        </div>
                    </div>
                </div>
                </div>
            );
        }else{

        return(
            <div id={"padding-all"} className={"col-7"}>

                <div id={"padding-all"} className={"chart card"}>
                    <div className={"row col-3"}>
                        <div className={"col-1"} onClick={this.onClick} >
                            <FontAwesome icon={faTimesCircle} />
                        </div>
                        <div className={"col-1 float-left"} >
                            <FontAwesome icon={faSyncAlt} />
                        </div>
                    </div>
                    <div className={"card card-body rounded"}>
                        <Bar
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
}

export default BarChart;