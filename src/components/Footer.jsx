import React from "react";
import './Footer.scss';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <div className="footer--inner">
        <h1 className="footer--title">Contact</h1>
        <div className="icons--container">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
        <p className="footer--copyright">Copyright © 2023 by GMF</p>
      </div>
    </footer>
  )
}