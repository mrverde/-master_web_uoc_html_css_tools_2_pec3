import React from "react";

const CardCharacter = props => {
    const { img, imgAlt, characterName, actorName, chBack } = props;

    return <div className="relative flex flex-col max-w-lg min-w-0 m-8 bg-white rounded shadow-md bg-clip-border">
        <div className="inline-block">
            <img className="w-full align-middle" src={img} alt={imgAlt} />
        </div>
        <div className="p-5">
            <p className="px-2 mt-0 text-2xl font-bold">{characterName}</p>
            <p className="px-2 py-0 mt-0 mb-4 font-bold">{actorName}</p>
            <p className="px-2 italic">{chBack}</p>
        </div>
    </div>
}

export default CardCharacter;
