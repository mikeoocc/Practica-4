'use client'

import { GET_CHARACTER } from "@/features/characters/queries";
import { GetCharacterQuery, GetCharacterQueryVariables } from "@/gql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams, useRouter } from "next/navigation"
import "./page.css"

const CharacterPorId = () => {

    const { id } = useParams()

    const router = useRouter()

    const {data, loading, error} = useQuery<GetCharacterQuery,GetCharacterQueryVariables>(GET_CHARACTER,{
        variables: {characterId: String(id)},}
    );

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    const character = data?.character

    return (
        <div className="contenedorP">
            <div className="contenedorDetalle">
                <h1>Basic Info.</h1>
                <h2>Name: {character?.name}</h2>
                <h2>Species: {character?.species}</h2>
                <h2>Status: {character?.status}</h2>
                <h2>Origin: {character?.origin?.name}</h2>
                <button onClick={() => router.back()}>VOLVER</button>
            </div>
        </div>
    )
}

export default CharacterPorId;