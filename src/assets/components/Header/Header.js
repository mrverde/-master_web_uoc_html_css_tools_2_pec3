import React from "react";
import NavLinks from "../NavLinks";
import Logo from "../Logo";
import { Link } from "react-router-dom";

import pages from "../../config/pages";

const Header = () => {
    const pagesList = pages;

    return <header className="flex flex-row items-center justify-center h-16 lg:justify-between bg-primary">
        <Link to="/"><Logo /></Link>
        <NavLinks pages={pagesList} isHeader={true} />
    </header>

}

export default Header;