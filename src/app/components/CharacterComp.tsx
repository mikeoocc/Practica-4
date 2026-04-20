'use client'

import { useRouter } from "next/navigation"
import "./CharacterComp.css"


type Character = {
    id?: string|null,
    name?: string|null,
    status?: string|null,
    image?: string|null
}

type Props = {
    character: Character
}

const CharacterComp = ({character}: Props) => {

    const router = useRouter()

    return (
        <div className="cardPersonaje">
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            {character.image && <img src={character.image} onClick={() => router.push(`character/${character.id}`)}></img>}
        </div>
    )
}

export default CharacterComp