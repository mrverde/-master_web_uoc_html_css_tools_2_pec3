import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

const NavLinks = props => {
    const { pages, isHeader } = props;

    const widthFooter = !isHeader ? "flex md:w-full mxmd:w-3/4 mxmd:justify-center" : ``;

    const mqHeaderHidden = isHeader ? "mxlg:hidden" : ``;

    let location = useLocation();

    const generateNavElements = () => {
        return Object.keys(pages).map((key, idx) => {
            const currentKey = pages[key];

            if (isHeader && currentKey["href"] === "/") {
                return <div key="nav-home"></div>
            }
            const activeTab = currentKey["href"] === location.pathname && !isHeader ? `bg-secondary` : ``

            return <li key={`nav-${idx}-${key}`}
                className={`h-full px-4 py-6 lg:text-2xl secondary whitespace-nowrap  ${activeTab}`}>
                <Link
                    to={currentKey["href"]} className="text-white hover:text-hoverColor">
                    {currentKey["label"]}
                </Link>
            </li >

        }
        )
    };

    return <div className={`${widthFooter} ${mqHeaderHidden}`}>
        <ul className="flex items-stretch pl-0 my-0 flex-nowrap ">
            {generateNavElements()}
        </ul >
    </div>

}

export default NavLinks;