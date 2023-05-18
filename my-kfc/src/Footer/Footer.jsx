import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Footer.module.css'
import {MdEditLocation} from 'react-icons/md'
import { FooterHome } from "./FooterHome";
const Footer = () => {
  const navigate = useNavigate();
 
  return (
    <>

   
    <div className={styles.main}>

        <img
        
          src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
          alt=""
        />
          <ul >
              <li >KFC Food</li>
              <li >Menu</li>
              <li >Order Lookup</li>
              <li >Gift Card</li>
            </ul>
        
            <ul >
              <li >Support</li>
              <li  >Get Help</li>
              <li  >Contact Us</li>
              <li >KFC Feedback</li>
            </ul>
       
            <ul >
              <li >Legal</li>
              <li >Terms and Conditions</li>
              <li >Privacy Policy</li>
              <li >Disclaimer</li>
              <li >Caution Notice</li>
            </ul>
         
            <ul >
              <li >KFC India</li>
              <li >About KFC</li>
              <li >KFC Care</li>
              <li >Careers</li>
              <li >Our Golden Past</li>
            </ul>
         
        
            <ul className={styles.location }>
               <li>  <MdEditLocation/></li>
                <li>Find KFC</li>
            </ul>

            <ul className={styles.StoreImage}>
                <li><img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt=""/></li>
                <li><img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt=""/></li>
            </ul>
              </div>
            
</>
  );
};

export default Footer;