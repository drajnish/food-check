import React from 'react';
import { Link } from 'react-router-dom';
import FoodLogo from '../assets/img/logo.png';
import { FaHeart } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-8 bg-slate-900 text-cyan-50 shadow-lg py-8">
      <img src={FoodLogo} alt="logo" className="w-12" />
      <div className="text-center">
        <span>&#169; 2023 Good Food</span>
        <br />
        <span>
          Made With{' '}
          <FaHeart className="inline-block mx-1 animate-[heart_1s_ease-in-out_infinite] fill-rose-500" />{' '}
          by Rajnish Deshmukh
        </span>
      </div>

      <div className="basis-28">
        <ul className="flex justify-between">
          <li>
            <Link to="https://www.linkedin.com/in/rajnish-deshmukh-12745a149/">
              <FaLinkedin size={24} />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/drajnish">
              <FaGithub size={24} />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/DeshmukhRajnish">
              <FaTwitter size={24} className="hover:size-[48]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
