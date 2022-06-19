import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
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
    const slotdelete= id=>{

        const confirm = window.confirm("Are you sure to delete this Slot");
        if (confirm) {
            axios.post(`http://localhost:8000/api/deletedoctorallslot/${id}`)
                .then(res => {
                    if (res) {
                        swal("Success", res.data.success, "success");
                    }
                    else {
                        swal("Warning", res.data.msg, "error");
                    }
                })
        }
    }


    return (
        <div class="modal fade" id="allslotModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" style={{color:"#1C70F9", }}>{name}All Slot</h5>
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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               { doctorallslot.map(slot=>
                               <tr>
                               <th scope="row">{slot.name}</th>
                               <td>{slot.userId}</td>
                               <td>{slot.day}</td>
                               <td>{slot.time}</td>
                               <td><button onClick={()=>{slotdelete(slot.userId)}} className='btn btn-danger'>Delete</button></td>
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