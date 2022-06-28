
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';




export const client = new ApolloClient({

    uri: 'https://graphql-pokeapi.graphcdn.app/',
    cache: new InMemoryCache(),

});

export const GET_POKEMONS = gql`

    query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      results {
        url
        name
        image
      }
    }
  }
`;


