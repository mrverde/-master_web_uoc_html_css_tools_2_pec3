import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";

import pages from "../../config/pages";
import "./Footer.scss";

const Footer = () => {
    const pagesList = pages;

    const classes = {
        containerClass: "",
        subcontainerClass: ""
    }

    return <footer>
        <NavLinks pages={pagesList} />
        <SocialNetworksLinks classes={classes} />
    </footer>
}

export default Footer;