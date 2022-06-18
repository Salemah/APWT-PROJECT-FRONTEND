import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const DoctorAllSlot = ({ doctorslot }) => {
    const { name, userId } = doctorslot;
    const [doctorallslot, setDoctorallslot] = useState([]);
    useEffect(function () {
        axios.get(`http://localhost:8000/api/singledoctorallslot/${userId}`)
            .then(function (rsp) {
                setDoctorallslot(rsp.data);
            }, function (err) {

            });
    }, [doctorallslot]);


    return (
        <div class="modal fade" id="allslotModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Slot</th>
                                </tr>
                            </thead>
                            <tbody>
                               { doctorallslot.map(slot=>
                               <tr>
                               <th scope="row">{slot.name}</th>
                               <td>{slot.userId}</td>
                               <td>{slot.day}</td>
                               <td>{slot.time}</td>
                           </tr>)
                                 
                               }


                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAllSlot;