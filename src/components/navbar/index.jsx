import React from "react";
import styles from "./index.module.css";
import logo from "./"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export default function Header(){
return(
    <nav className={styles.bar}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        <input  className={styles.searchContent} type="text" placeholder="Search" />
        <div>
            <video className={styles.video} src={logo}/>
        </div>
    <div>
        <ul className={styles.list}>
            <li>Home</li>
            <li>New Trends</li>
            <li>Collections</li>
            <li>Shop</li>
            <li>Pages</li>
        </ul>
    </div>
    </nav>
);
}