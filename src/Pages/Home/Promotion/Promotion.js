import './Promotion.css';
import Safety from '../../../images/safe.png';
import ecg from '../../../images/ecg.png';
import doctor from '../../../images/doctor.png';
const Promotion = () => {
    return (
        <div>
            <div class="container">
                <div class="row my-5 promotion">
                    <div class="col-sm-12 col-md-4 ">
                        <div class="section">
                            <img src={Safety} alt=""/>
                        <h3>Qualtity & Safety</h3>
                        <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts</p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 ">
                    <div class=" section">
                    <img src={ecg} alt=""/>
                        <h3>Qualtity & Safety</h3>
                        <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts</p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 ">
                    <div class=" section">
                    <img src={doctor} alt=""/>
                        <h3>Qualtity & Safety</h3>
                        <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts</p>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
               
            </div>
        </div>
    );
};

export default Promotion;