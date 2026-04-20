'use client';

import { GET_CHARACTERS } from "@/features/characters/queries";
import { GetCharactersQuery, GetCharactersQueryVariables } from "@/gql/graphql";
import { useQuery } from "@apollo/client/react";
import CharacterComp from "./components/CharacterComp";
import Paginacion from "./components/Paginacion";
import { useState } from "react";
import "./page.css"

export default function Home() {

  const [page, setPage] = useState<number>(1)

  const {data, loading, error} = useQuery<GetCharactersQuery,GetCharactersQueryVariables>(GET_CHARACTERS, {
    variables: {page: page}
  });

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  return (
    <div className="contenedorP">
          <h1 className="titulo">PERSONAJES DE RICK Y MORTY</h1>
          <div className="contenedorCharacters">
            {data?.characters?.results?.map((c) => c ? <CharacterComp key={c?.id} character={c}/> : null)}
          </div>
          <Paginacion page={page} setPage={setPage} pages={data?.characters?.info?.pages ?? 1} next={data?.characters?.info?.next} prev={data?.characters?.info?.prev}/>
    </div>
  );
}