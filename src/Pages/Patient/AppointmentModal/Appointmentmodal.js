import axios from 'axios';
import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Appointmentmodal = ({ doctorslot }) => {
    const { dcid, dname, slot, day } = doctorslot;
const [appointment, setAppointment] = useState({
        dcid:'', dname:'', patientid:'', patientname:'', slot:'', day:'',date:'', errors: []
    });
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const [user, setUser] = useState([]);
    const patientid = parseInt(localStorage.getItem('id'));
    const patientname = localStorage.getItem('username');
    const pemail = localStorage.getItem('email');



    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newaptdata = { ...appointment };
        newaptdata[feild] = value;
        setAppointment(newaptdata);




    }
    const handleaddservice = e => {
        const data = {
            ...appointment, dcid, dname, patientid, patientname, slot, day,pemail
        }
        axios.post(`http://localhost:8000/api/Patient/Appointmentsubmit`, data)
            .then(res => {
                if (res.data.validation_errors){
                    setAppointment({ ...appointment, errors: res.data.validation_errors });
                    swal("Warning", "Appointment Failed!", "error");
                }
                else {

                    swal("Success", res.data.success, "success");
                   

                }
            }
            
           )

     



        e.preventDefault();

    }

    return (
        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Book Appointment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleaddservice}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                    <input type="text" name='name' className="form-control"
                                        value={patientname} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="text" name='email' className="form-control"
                                        value={pemail} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Day</label>
                                    <input type="text" name='day' className="form-control"

                                        value={day} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">SId</label>
                                    <input type="text" name='slot'
                                        className="form-control"
                                        value={slot} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">date</label>
                                    <input type="date" name='date'
                                        onBlur={handleOnChange} className="form-control"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary"  >Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointmentmodal;