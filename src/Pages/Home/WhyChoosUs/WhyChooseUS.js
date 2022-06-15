import React from 'react';
import img from '../../../images/choose1.jpg'
import img2 from '../../../images/single-img-24.jpg'
import './WhyChooseUS.css'
const WhyChooseUS = () => {
    return (
        <div class="container">
            <div class="row chooseuse-main">
                <div class="col-sm-12 col-md-6">
                    <div class="left-site">
                        <img src={img} alt="" />
                    </div>

                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="right-site">
                        <h6>WHY CHOOSE US</h6>
                        <h2>Heart Surgery Specialist Expert Doctors</h2>
                        <p>Chest pain is the most common warning sign of a heart attack. But there can be other symptoms, too, like lightheadedness</p>


                        <div class="row">
                            <div class="col-sm-12 col-md-6 heart-surgery">
                                <div className="">
                                    <p class="click"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                                    </svg></p>
                                   
                                </div>
                                <div class="heart-details">

                                    <h3>Heart Transplante</h3>
                                    <p>Heart symptoms call us for immediate.</p>
                                </div>

                            </div>
                            <div class=" col-sm-12 col-md-6 heart-surgery">

                                <div class=" ">
                                    <div class="click">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                                    </svg>
                                    </div>
                                </div>
                                <div class="heart-details">
                                    <h3>Heart Surgery</h3>
                                    <p>Heart symptoms call us for immediate</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="Cardiology">
                            <div class="cardiology-left">
                                <img src={img2} alt="Cardiology"/>
                            </div>
                            <div class="cardiology-right">
                                <h4>Our Cardiology Hospital Services Manufacture Found In 1996</h4>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
           

        </div>


    );
};

export default WhyChooseUS;