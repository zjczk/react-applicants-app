import React, { Component } from 'react';
import './App.css';

import ApplicantList from './ApplicantList/ApplicantList'; 

class App extends Component {
  state = { pageLoaded: false };

  render() {

    const applicants = {
      Appointment_Set: [  
        {
          firstName: "Friedrich",
          lastName: "Heinrich",
          phone: "+49 146 344 23811",
          email: "Friedrich.heinrich@gmail.com",
          appointment: "Appointment 22 July 14:00"
        },
        {
          firstName: "Hans",
          lastName: "-Ulrich", 
          phone: "+49 146 344 23811",
          email: "Hans-Ulrich@gmail.com",
          appointment: "Appointment 22 July 14:00"
        },
        {
          firstName: "Karlheinz",
          lastName: "Brandenburg",
          phone: "+49 146 344 23811",
          email: "karlheinzbrandenburg@gmail.com",
          appointment: "Appointment 22 July 14:00"
        }
      ],
      Property_Viewed: [ 
        {
          firstName: "Maxmillian",
          lastName: "Von Mustermann", 
          phone: "+49 146 344 23811",
          email: "max.mustermann@gmail.com",
          viewed: "Viewed 11 June 19:00", 
          bid: "250.000€"
        },
          {
            firstName: "Bernhard",
            lastName: "Weiß",
            phone: "+49 146 344 23811",
            email: "bernhard.weiß@gmail.com",
            viewed: "Viewed 11 June 19:00",
            bid: "250.000€"
          },
          {
            firstName: "Hansjörg",
            lastName: "Felmy",
            phone: "+49 146 344 23811",
            email: "Hansjörg.felmy@gmail.com",
            viewed: "Viewed 11 June 19:00",
            bid: "250.000€"
          },
          {
            firstName: "Gottschalk",
            lastName: "Godeslack",
            phone: "+49 146 344 23811",
            email: "gottschalk.godeslack@gmail.com",
            viewed: "Viewed 11 June 19:00",
            bid: "250.000€"
          }
      ],
      Interested: [
        {
          firstName: "Friedrich",
          lastName: "Heinrich",
          phone: "+49 146 344 23811",
          email: "Friedrich.heinrich@gmail.com"
          },
          {
            firstName: "Friedrich",
            lastName: "Heinrich",
            phone: "+49 146 344 23811",
            email: "Friedrich.heinrich@gmail.com"
          },
          {
            firstName: "Friedrich",
            lastName: "Heinrich",
            phone: "+49 146 344 23811",
            email: "Friedrich.heinrich@gmail.com"
          }
      ],
      Offer_Accepted: [
        {
          firstName: "Friedrich",
          lastName: "Heinrich",
          phone: "+49 146 344 23811",
          email: "Friedrich.heinrich@gmail.com"
          },
          {
            firstName: "Friedrich",
            lastName: "Heinrich",
            phone: "+49 146 344 23811",
            email: "Friedrich.heinrich@gmail.com"
          },
          {
            firstName: "Friedrich",
            lastName: "Heinrich",
            phone: "+49 146 344 23811",
            email: "Friedrich.heinrich@gmail.com"
          }
      ]
    }

    return (
      <div className="App">
        {!this.state.pageLoaded && 
        <div>
        <ApplicantList applicants={applicants} />
        </div>
        }
      </div>
    );
  }
}

export default App;
