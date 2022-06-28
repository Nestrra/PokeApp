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

export const usePaginate = () => {


  const gqlVariables = {
    limit: 40,
    offset: 0,
  };

  const { data: { pokemons = [] } = {}, loading } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });


  const pokemonsList = pokemons.results;
  //const nextPage = useRef('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');

  return { pokemonsList, loading };

};
