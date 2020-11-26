import React, { Component } from 'react';

import Applicant from '../Applicant/Applicant';
import './ApplicantSublist.css'; 

class ApplicantSublist extends Component {
    
    renderApplicants = () => {
        return this.props.applicants.map(applicant => 
            <li className="ListItem">
                <Applicant 
                    initials={applicant.lastName.split(/(\s+)/)[0] === 'Von' ?
                    applicant.firstName.charAt(0) + applicant.lastName.split(/(\s+)/)[2].charAt(0) :
                    applicant.firstName.charAt(0) + applicant.lastName.replace(/-/g, "").charAt(0)
                    }
                    name={applicant.lastName.charAt(0) === '-' ? 
                    `${applicant.firstName}${applicant.lastName}` :
                    `${applicant.firstName} ${applicant.lastName}`
                    }
                    phone={applicant.phone}
                    email={applicant.email}
                    info={applicant.appointment || applicant.viewed}
                    bid={applicant.bid}
                />
            </li>);
    }

    render() {
        return(
            <React.Fragment>
                <div className="Status">{this.props.status} ({this.props.count})</div>
                <ul className="ApplicantSublist">
                {this.renderApplicants()}
                </ul>
            </React.Fragment>
        );
    }
}

export default ApplicantSublist;
