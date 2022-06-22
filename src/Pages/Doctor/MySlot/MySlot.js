import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MySlot = () => {
    const [mySlot, setMySlot] = useState([]);
    const DoctorName = localStorage.getItem('name');
    const userId = parseInt(localStorage.getItem('id'));
    useEffect(function () {
        axios.get(`http://localhost:8000/api/singledoctorallslot/${userId}`)
            .then(function (rsp) {
                setMySlot(rsp.data);
            }, function (err) {

            });
    }, [mySlot]);

    return (
        <div>
            <div class="card" style={{width: "100%"}}>
                <div class="card-header">
                    <h3 className='text-center'>{DoctorName} Slot</h3>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Id</th>
                                <th scope="col">Day</th>
                                <th scope="col">Slot</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mySlot.map(slot =>
                                <tr>
                                    <th scope="row">{slot.name}</th>
                                    <td>{slot.userId}</td>
                                    <td>{slot.day}</td>
                                    <td>{slot.time}</td>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                </tr>)

                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MySlot;