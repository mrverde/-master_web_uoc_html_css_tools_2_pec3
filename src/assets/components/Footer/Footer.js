import React from "react";
import NavLinks from "../NavLinks"
import SocialNetworksLinks from "../SocialNetworksLinks";

import pages from "../../config/pages";

const Footer = () => {
    const pagesList = pages;

    const classes = {
        containerClass: "",
        subcontainerClass: ""
    }

    return <footer className="fixed bottom-0 left-0 z-10 flex items-center justify-between w-full bg-primary mxlg:flex-col">
        <NavLinks pages={pagesList} />
        <SocialNetworksLinks classes={classes} />
    </footer>
}

export default Footer;