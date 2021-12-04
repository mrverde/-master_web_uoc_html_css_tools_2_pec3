import React from "react";
import CardCharacter from "../../components/CardCharacter"

import characters from "../../config/characters";

const PageCharacters = () => {
    const characterList = characters;

    return <>
        <div>
            {characterList.map((char, idx) => (
                <CardCharacter
                    key={`${char}-${idx}`}
                    img={char.img}
                    imgAlt={char.imgAlt}
                    characterName={char.characterName}
                    actorName={char.actorName}
                    chBack={char.chBack} />
            ))}
        </div>
    </>
}

export default PageCharacters;