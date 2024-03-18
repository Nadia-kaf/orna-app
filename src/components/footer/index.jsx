import React from "react";
import styles from "../footer/index.module.css";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook, faCcVisa} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
return(
   <div className={styles.foot}>
    <div className={styles.gridOne}>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus ipsa ullam culpa, explicabo quos expedita, voluptates modi aliquid possimus nobis tenetur, eveniet nostrum totam rerum vitae molestias eos quam!</p>

       <h3>Payment Methods:</h3>
       <FontAwesomeIcon icon={faCcVisa} size="xl" />
    </div>
    <div className={styles.gridTwo}>
      <div>
      <h3>Follow Us:</h3>
       <p>< FontAwesomeIcon icon={faXTwitter} size="lg"/> <span></span> Twitter</p>
       <p><FontAwesomeIcon icon={faInstagram} size="lg"/> <span></span>Instagram</p>
       <p><FontAwesomeIcon icon={faSquareFacebook} size="lg"/> <span></span>Facebook</p>
    </div>
      
      <div>
      <h3> Help</h3>
      <p>Shipping</p>
      <p>Returns</p>
      <p>FAQ</p>
      </div>

      <div>
      <h3>Information</h3>
      <p>Advanced Search</p>
      <p>Order and Return</p>
      <p>Store Location</p>
      </div>
      
      <div>
      <h3>Support</h3>
      <p>E-mail support</p>
      <p>Terms of Delivery</p>
      <p>Privacy Policy</p>
      <p>Return and Refund</p>
      </div>

      <div>
      <h3>Contact Us</h3>
      <address>
         <p>Address</p>
         <p>email</p>
         <p>Mobile Number</p>
         <p>MON-SAT</p>
         <p>9am to 5pm</p>
      </address>
      </div>
    </div>
   
   </div>
);
}