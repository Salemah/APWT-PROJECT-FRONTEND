import React from 'react';
import surgeryroom from '../../../images/surgery-room.png';
import pharmacy from '../../../images/pharmacy.png';
import ambulance from '../../../images/ambulance.png';
import Services from './Services';
import './Services.css'
const Service = () => {
    const Service = [
        {
            id: 1,
            name: "Pharmacy Support",
            description: "We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.",
            img: pharmacy
        },
        {
            id: 2,
            name: "Health Check",
            description: "We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.",
            img: surgeryroom
        },
        {
            id: 3,
            name: "Emergency Service",
            description: "We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.",
            img: ambulance
        },
        {
            id: 4,
            name: "Emergency Service",
            description: "We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.",
            img: ambulance
        },
        {
            id: 5,
            name: "Emergency Service",
            description: "We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.",
            img: ambulance
        },
        {
            id: 6,
            name: "Emergency Service",
            description: "We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.",
            img: ambulance
        },
    ]
    return (
       <div class="our-service">
         <div class="container my-5 ">
            <div class="row ">
                <div class="my-4">
                <h5>OUR SERVICES</h5>
                <h2>We Care Our Patients.</h2>
                </div>
                {
                    Service.map(service =>
                        <Services
                            key={service.id}
                            service={service}>

                        </Services>
                    )
                }
            </div>

        </div>
       </div>
    );
};

export default Service;