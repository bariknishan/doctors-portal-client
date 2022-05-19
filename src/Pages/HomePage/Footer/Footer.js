import React from 'react';

const Footer = () => {
    return (
    
<footer className="p-10">
 <div className='footer  text-black'>

 <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
 </div>
<div className='text-center mt- 4'>
    <h1 className='mt-12 text-primary font-bold'> copyright&copy;reserved 2022 By Doctors Portal</h1>
     
     </div>
  
</footer>

    

    );
};

export default Footer;