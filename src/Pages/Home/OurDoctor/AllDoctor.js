import React from 'react';
import img1 from '../../../images/team-1.jpg';
import img2 from '../../../images/team-2.jpg';
import img3 from '../../../images/team-3.jpg';
import img4 from '../../../images/team-4.jpg';
import OurDoctor from './OurDoctor';

const AllDoctor = () => {
    const Doctors = [
        {
            id: 1,
            name: "Dr.Anwar",
            department: "senior Dr. at Delmont",
            img: img1
        },
        {
            id: 2,
            name: "Dr.Risala",
            department: "senior Dr. at Delmonts.",
            img: img2
        },
        {
            id: 3,
            name: "Dr.Habib",
            department: "senior Dr. at Delmont",
            img: img3
        },
        {
            id: 4,
            name: "Dr. Tonni",
            department: "senior Dr. at Delmont",
            img: img4
        }

    ]
    return (
        <div class="container">
            <div class="row my-5">
                <h1 className='my-5'>Our Sepecilaized Doctor</h1>
               {
               Doctors.map(doctor =>
                        <OurDoctor
                        key={doctor.id}
                        doctor={doctor}>

                        </OurDoctor>)

                    }

            


            </div>

        </div>
    );
};

export default AllDoctor;