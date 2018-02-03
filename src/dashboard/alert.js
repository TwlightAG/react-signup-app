import React from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faExclamationTriangle, faTicketAlt} from "@fortawesome/fontawesome-free-solid/index.es";

class AlertNotify extends React.Component {
    render() {
        return (
            <div className={`alert alert-${this.props.type} alert-dismissible fade show`} role="alert">
                <strong><FontAwesomeIcon icon={this.props.icon}/> {this.props.title},</strong> {this.props.message}
            </div>
        );
    }
}

export default AlertNotify;