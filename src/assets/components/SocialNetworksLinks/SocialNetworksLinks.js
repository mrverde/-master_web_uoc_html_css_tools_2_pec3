import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

const SocialNetworksLinks = (props) => {
    const { classes } = props;

    return <div>
        <div>
            <a href="http://twitter.com" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="http://instagram.com" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="http://tiktok.com" target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
        </div>
    </div>
}

export default SocialNetworksLinks;

