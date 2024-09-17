"use client";
import anime from "animejs";
import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  useEffect(() => {
    anime({
      targets: ".footer-item",
      translateY: [-20, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: anime.stagger(200), // stagger animation for each item
    });
  }, []);

  return (
    <footer className='bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white py-10 px-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Footer Columns */}
        <div className='footer-item'>
          <h3 className='text-lg font-semibold mb-2'>Company</h3>
          <ul>
            <li className='mb-1'>
              <a href='#' className='hover:underline'>
                About Us
              </a>
            </li>
            <li className='mb-1'>
              <a href='#' className='hover:underline'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3 className='text-lg font-semibold mb-2'>Services</h3>
          <ul>
            <li className='mb-1'>
              <a href='#' className='hover:underline'>
                Web Development
              </a>
            </li>
            <li className='mb-1'>
              <a href='#' className='hover:underline'>
                App Development
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                SEO Services
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3 className='text-lg font-semibold mb-2'>Support</h3>
          <ul>
            <li className='mb-1'>
              <a href='#' className='hover:underline'>
                FAQs
              </a>
            </li>
            <li className='mb-1'>
              <a href='#' className='hover:underline'>
                Help Center
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href='#' className='hover:opacity-75'>
              <FaFacebook size={24} />
            </a>
            <a href='#' className='hover:opacity-75'>
              <FaTwitter size={24} />
            </a>
            <a href='#' className='hover:opacity-75'>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Designed and Developed By Section */}
      <div className='text-center mt-8 text-slate-900 dark:text-gray-50'>
        <p>
          Designed and Developed By:{" "}
          <span className='font-semibold'>Sarwar Hossain</span>
        </p>
        <p>© Copyright: {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
