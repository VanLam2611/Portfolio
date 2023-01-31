import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";

const Page =({ children }) => {
    const {pathName} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        clearAllBodyScrollLocks();
    },[pathName]);

    return(
        <div>
            
        </div>
    )
}