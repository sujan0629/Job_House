import React from 'react';
import logo from '../../assets/logo.png';
import fb from '../../assets/fb.webp';
import ig from '../../assets/ig.png';
import twitter from '../../assets/twitter.png';

import pay from '../../assets/pay.png';
import appStore from '../../assets/app-store.png';
import playStore from '../../assets/app-store.png';

const Footer = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">

          {/* Footer Column 1 */}
          <div className="footer-col-1 mb-8 md:mb-0 w-full md:w-1/4 text-left">
            <a href="/" className="mb-4 block">
              <img src={logo} alt="Logo" className="w-36" />
            </a>
            <h3 className="text-lg font-semibold mb-2">Download our App</h3>
            <p className="text-sm text-gray-600 mb-4">Download the app for Android and iOS mobile phones</p>
            <div className="app-logo flex space-x-4">
              <img src={playStore} alt="Google Play" className="w-24" />
              <img src={appStore} alt="App Store" className="w-24" />
            </div>
            <p className="text-sm text-gray-600 mt-4">Secured Payment Gateway</p>
            <img src={pay} alt="Payment Methods" className="w-32 mt-4" />
          </div>

          {/* Footer Column 2 */}
          <div className="footer-col-3 mb-8 md:mb-0 w-full md:w-1/4 text-left">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="footer-ul space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#096bea]">About Us</a></li>
              <li><a href="#" className="hover:text-[#096bea]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#096bea]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#096bea]">Contact Us</a></li>
            </ul>
          </div>

          {/* Footer Column 3 - Contact and Location */}
          <div className="footer-col-5 mb-8 md:mb-0 w-full md:w-1/4 text-left">
            <h3 className="text-lg font-semibold mb-4">Contact & Location</h3>
            <div className="text-sm text-gray-600">
              <p className="mb-2">Location: Dhangadhi, Kailali</p>
              <p className="mb-2">Phone: +977 9858423099</p>
            </div>
          </div>

          {/* Footer Column 4 - Follow Us with Logos */}
          <div className="footer-col-4 mb-8 md:mb-0 w-full md:w-1/4 text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center">
                <a href="#" className="text-center">
                  <img src={fb} alt="Facebook" className="w-8 h-8 mb-2" />
                  <span className="text-sm text-gray-600">Facebook</span>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a href="#" className="text-center">
                  <img src={ig} alt="Instagram" className="w-8 h-8 mb-2" />
                  <span className="text-sm text-gray-600 ">Instagram</span>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a href="#" className="text-center">
                  <img src={twitter} alt="Twitter" className="w-8 h-8 mb-2" />
                  <span className="text-sm text-gray-600">Twitter</span>
                </a>
              </div>
            </div>
          </div>

        </div>
        
        <hr className="my-6 border-t border-gray-300" />
        <p className="text-left text-sm text-gray-600">
          © Copyright 2024 - <a href="#" className="font-semibold hover:text-[#096bea]">The Lits</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
