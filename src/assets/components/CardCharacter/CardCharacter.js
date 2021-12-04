import React from "react";

const CardCharacter = props => {
    const { img, imgAlt, characterName, actorName, chBack } = props;

    return <div>
        <div>
            <img src={img} alt={imgAlt} />
        </div>
        <div>
            <p>{characterName}</p>
            <p>{actorName}</p>
            <p>{chBack}</p>
        </div>
    </div>
}

export default CardCharacter;
