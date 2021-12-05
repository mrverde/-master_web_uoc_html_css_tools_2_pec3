import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

const NavLinks = props => {
    const { pages, isHeader } = props;

    const widthFooter = !isHeader && "w-3/4"

    let location = useLocation();

    const generateNavElements = () => {
        return Object.keys(pages).map((key, idx) => {
            const currentKey = pages[key];

            if (isHeader && currentKey["href"] === "/") {
                return <div key="nav-home"></div>
            }
            const activeTab = currentKey["href"] === location.pathname && !isHeader ? `bg-secondary` : ``

            return <li key={`nav-${idx}-${key}`}
                className={`h-full px-4 py-6 text-2xl secondary  ${activeTab}`}>
                <Link
                    to={currentKey["href"]} className="text-white hover:text-hoverColor">
                    {currentKey["label"]}
                </Link>
            </li >

        }
        )
    };

    return <div className={widthFooter}>
        <ul className="flex items-stretch pl-0 my-0 flex-nowrap ">
            {generateNavElements()}
        </ul >
    </div>

}

export default NavLinks;