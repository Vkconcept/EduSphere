import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-gray-100 p-10">
      <div>
        <span className="footer-title text-white">Academics</span>
        <a className="link link-hover">Programs</a>
        <a className="link link-hover">Admissions</a>
        <a className="link link-hover">Departments</a>
        <a className="link link-hover">Research</a>
      </div>
      <div>
        <span className="footer-title text-white">University</span>
            <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Campus Life</a>
        <a className="link link-hover">News & Events</a>
      </div>
      <div>
        <span className="footer-title text-white">Legal</span>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </div>
      <div>
        <span className="footer-title text-white">Follow Us</span>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="link link-hover">Facebook</a>
          <a href="#" className="link link-hover">Twitter</a>
          <a href="#" className="link link-hover">Instagram</a>
          <a href="#" className="link link-hover">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
