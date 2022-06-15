import React from 'react';
import './OurDoctor.css'

const OurDoctor = ({ doctor }) => {
    const { name, img, department } = doctor;
    return (

        <div class="col-sm-6 col-md-3">
        <div class="doctor-section">
        <img src={img} alt=""/>
           <div class="doctor-details">
           <h4>{name}</h4>
           <p>{department}</p>
           </div>
        </div>

        </div>



    );
};

export default OurDoctor;