import React from 'react';
import './Applicant.css'; 

const applicant = (props) => {
    return (
        <div className="Applicant">
            <p>{props.initials}</p>
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <p>{props.info}</p>
            {props.bid && <p>BID: {props.bid}</p>}
        </div>
    )
};

export default applicant;
