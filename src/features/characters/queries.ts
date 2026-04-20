import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query GetCharacters ($page: Int){
        characters (page: $page){
            results {
                id
                name
                status
                image
            },
            info {
                next
                pages
                prev
            }
        }
    }
`

export const GET_CHARACTER = gql`
    query GetCharacter ($characterId: ID!){
        character (id: $characterId){
            name
            species
            status
            origin {
                dimension
                name
            }
        }
    }
`