import React from 'react';
import img1 from './../../../images/ambulance.png';
import img2 from './../../../images/doctor.png';
import img3 from './../../../images/blood-tube.png';
import './Banner.css';
const Banner = () => {
  return (
    
	<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleCaptions">
		<div class="carousel-inner">
			<div class="carousel-item active bg-1">
				<div class="carousel-caption">
					<h5>Healty <span class="text-warning">Habits</span></h5>
					<p>Are Your Heart's Desire</p><button class=" banner-button" >Make An Appointment</button >
				</div>
			</div>
			<div class="carousel-item bg-2">
				<div class="carousel-caption">

					<div class="banner2">
            <div class="">
            <img src={img1} alt=""/>
            <p>Emergency Service</p>
            </div>
            <div class="">
            <img src={img2} alt=""/>
            <p>Outdoor Checkup</p>
            </div>
            <div class="">
            <img src={img3} alt=""/>
            <p>Diagonstic</p>
            </div>
           
          </div>
				</div>
			</div>
			<div class="carousel-item bg-3">
				<div class="carousel-caption  third-slide ">
          <div class="">
          <p>We Give You The Best</p>
					<h3>We Have Top Level Best <br/> Heart Doctor </h3>
          <button class=" banner-button3 me-3" >Learn More</button >
          <button class=" banner-button" >Make An Appointment</button >
          </div>
					
				</div>
			</div>
		 </div>
   
    {/* <!--thumbnails--> */}
		 <div class="carousel-indicators">
			<button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions" type="button"></button>
      </div> 
	</div>
    

  );
};

export default Banner;