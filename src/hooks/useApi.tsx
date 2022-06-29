import { gql, useQuery } from "@apollo/client";



const GET_POKEMONS = gql`

    query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export const useApi = () => {


 // const nextPages = useRef('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
  const gqlVariables = {
    limit: 80,
    offset: 0,
  };

  const { data: { pokemons = [] } = {}, loading } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });


  const pokemonsList = pokemons.results;




  return {pokemonsList, loading };

};
