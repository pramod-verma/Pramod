import './Header.scss';
import React from 'react'
import { motion } from "framer-motion";
import logoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

    const slideIn = (direction, type, delay, duration) => ({
        hidden: {
          x: direction === "left" ? "-40px" : direction === "right" ? "100%" : 0,
          y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
          opacity : 0
        },
        show: {
          x: 0,
          y: 0,
          opacity :1,
          transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
          },
        },
      });
  return (
    
    <motion.div 
    variants={slideIn("left", "spring", 0.4, 1.9)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className='nav-bar'>
      <a className="logo" href='/'>
        <img src={logoS} alt="logo" />
      </a>

      <nav>
        <a href='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </a>
        <a  className='about-link' href='#portfolio'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </a>
        <a  className='contact-link' href='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </a>
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/reallyimpramod/" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
    
        </li>
        <li>
          <a href="https://github.com/pramod-verma" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
          
        </li>
        <li>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
          </a>
          
        </li>
        <li>
          <a href="https://twitter.com/" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
          </a>
          
        </li>
      </ul>


    </motion.div>
  )
}
