import React from 'react';
import './Services.css'
const Services = ({ service }) => {

    const { name, description, img } = service;
    return (

        <div class="col-sm-6 col-md-4 ">
            <div class="services">
               <div class="service">
               <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
               </div>
            </div>
        </div>

    );
};

export default Services;