import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

const SocialNetworksLinks = () => {

    return <div className="flex justify-end w-1/4 m-auto">
        <div className="flex m-4 text-5xl text-white">
            <a href="http://twitter.com" target="_blank" className="mx-4 hover:text-hoverColor">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://facebook.com" target="_blank" className="mx-4 hover:text-hoverColor">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="http://instagram.com" target="_blank" className="mx-4 hover:text-hoverColor">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="http://tiktok.com" target="_blank" className="mx-4 hover:text-hoverColor">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
        </div>
    </div>
}

export default SocialNetworksLinks;

