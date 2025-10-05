import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      inStock
      gallery {
        id
        url
        productId
      }
      prices {
        id
        amount
        currency {
          id
          label
          symbol
        }
      }
    }
  }
`;
