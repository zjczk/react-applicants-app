import React, { Component } from 'react';

import ApplicantSubList from '../ApplicantSublist/ApplicantSublist';

class ApplicantList extends Component {

    render() {
        return(
            <div>
                {Object.keys(this.props.applicants).map((status, index) => (
                <ApplicantSubList
                    status={status.replace(/_/g, " ")}
                    count={this.props.applicants[status].length}
                    applicants={this.props.applicants[status]}
                    key={index}
                />
                ))}
            </div>
        );
    }
}

export default ApplicantList;
