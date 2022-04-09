import React from 'react';

const Appointmentmodal = ({updateStudent}) => {
    return (
        <div>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="http://localhost:8000/api/student/edit" method='POST'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                <input type="text" name='name' className="form-control" value={updateStudent?.dname} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" defaultValue={updateStudent?.slot}  />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="text" name='id' className="form-control" defaultValue={updateStudent?.day} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">SId</label>
                                <input type="text" name='sid' className="form-control" defaultValue={updateStudent?.dcid}  />
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