import React from "react";
import NavLinks from "../NavLinks";
import Logo from "../Logo";
import { Link } from "react-router-dom";

import pages from "../../config/pages";

const Header = () => {
    const pagesList = pages;

    return <header>
        <Link to="/"><Logo /></Link>
        <NavLinks pages={pagesList} isHeader={true} />
    </header>

}

export default Header;