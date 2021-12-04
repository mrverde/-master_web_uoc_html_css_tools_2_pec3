import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

import "./NavLinks.scss"

const NavLinks = props => {
    const { pages, isHeader } = props;

    const classGen = isHeader ? "" : "";

    let location = useLocation();

    const generateNavElements = () => {
        return Object.keys(pages).map((key, idx) => {
            const currentKey = pages[key];

            if (isHeader && currentKey["href"] === "/") {
                return <div key="nav-home"></div>
            }

            return <li key={`nav-${idx}-${key}`}
                className={currentKey["href"] === location.pathname ? `active` : ``}>
                <Link
                    to={currentKey["href"]}>
                    {currentKey["label"]}
                </Link>
            </li >

        }
        )
    };

    return <div >
        <ul >
            {generateNavElements()}
        </ul >
    </div>

}

export default NavLinks;