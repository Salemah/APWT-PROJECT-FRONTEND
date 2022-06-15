import React from 'react';
import './Footer.css'
import { FcAddDatabase } from "react-icons/fc";
const Footer = () => {
    return (
        <footer class="footer-section">
      <div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-3">
        <div class="">
        <a href="#" class="footer-site-logo d-block mb-4"><FcAddDatabase /></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.</p>
        </div>
        
        
        </div>
    <div class="col-sm-12 col-md-3">

    <ul class="list-unstyled nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
    </div>
    <div class="col-sm-12 col-md-3">

    <ul class="list-unstyled nav-links">
              <li><a href="#">Clients</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
    </div>
    <div class="col-sm-12 col-md-3">
        <ul class="social list-unstyled">
              <li><a href="#"><span class="icon-instagram icon-color"></span></a></li>
              <li><a href="#"><span class="icon-twitter icon-color"></span></a></li>
              <li><a href="#"><span class="icon-facebook icon-color "></span></a></li>
              <li><a href="#"><span class="icon-pinterest icon-color"></span></a></li>
              <li><a href="#"><span class="icon-dribbble icon-color"></span></a></li>
            </ul>
            <p class=""><a href="#" class="btn btn-tertiary">Contact Us</a></p>
            </div>
  </div>
  
</div>
      </footer>
    );
};

export default Footer;