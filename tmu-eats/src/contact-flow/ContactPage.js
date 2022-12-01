import "./Contact.css";
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate} from "react-router-dom";


const ContactPage = () => {
    const navigate = useNavigate();


    return(
        <div>
        <div class="headerWrapper">
          <img src="../TMU-logo.png" alt="TMU Logo" width="250" height="100" />
          <h1 class="contact">Contact Us</h1>
        </div>
        <div class="text">
            <p>Phone: 416-979-5000</p>
            <p>Address:  350 Victoria St, Toronto</p>
            <p>Instagram: TMUEats</p>

        </div>
        <button id ='homeBtn2' type="button" onClick={() => navigate('/home')}>Return Home</button>







        </div>
    );

};

export default ContactPage;