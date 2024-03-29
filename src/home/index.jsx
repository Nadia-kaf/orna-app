
import React from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
import styles from "../home/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Screenshot2 from "../asset/Screenshot2.png";
import pic from "../asset/pic.png";
import pic1 from "../asset/pic1.png";
import pic5 from "../asset/pic5.png";
import golden from "../asset/golden.jpg"

import Banner from "../components/banner";



export default function Home(){
return(
    <div>
        <Header/>
        <Banner/>
        <section>
            <h3>Featured Products</h3>
            <p>Eget Est Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
<div className="grid grid-cols-5 grid-rows-5 gap-10">
    <div >
        <img src='' alt="" />
    </div>
    <div >
    <img src={golden}    alt="" />
    </div>
    <div >
    <img src=''alt="" />
    </div>
    <div >
    <img src="" alt="" />
    </div>
</div>
    
        </section>
        <section>
            <h4>Our Blogs</h4>
            <p>Read our blogs and be abbreast with trends</p>
            <div>
                <div></div>
                <div></div>
            </div>
        </section>

        <section className={styles.itemInsta}>
            <h4 className={styles.words}>Instagram Feed</h4>
            <p className={styles.words}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className={styles.instapics}>
                <img src={pic} alt="necklace" />
                <img src={pic1} alt="earing " />
                <img src={pic5} alt="anklet" />
            </div>
            <button>FOLLOW US @INSTAGRAM</button>
        </section>

        <section className={styles.tcollection}>
            <div className={styles.tcollection1}>
                <h4>Looking for the Latest</h4>
                <h3>Trending Collections</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt quisquam possimus modi voluptatum hic nobis, earum fugit nihil? Sapiente exercitationem in odit velit necessitatibus! Omnis quam est tempore voluptatum.</p>

                <button className={styles.btn}>SHOP NOW</button>

            </div>
            <div>
              <img className={styles.section1} src={Screenshot2} alt="A model with earing and"/>
            </div>
        </section>
<div className={styles.option}>
    <div>
    <FontAwesomeIcon icon={faTruck} size="2xl" />
        <h3>EXPRESS DELIVERY</h3>
        <p>Worldwide free delivery</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faRotateLeft} size="2xl" />
        <h3>FREE RETURNS</h3>
        <p>30 days free return</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faCreditCard} size="2xl" />
        <h3>CASHLESS PAYMENT</h3>
        <p>Safe and secure online payment</p>
    </div>
</div>
        <Footer/>
    </div>
);
}