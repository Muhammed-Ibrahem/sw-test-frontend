import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const GET_CATEGORY_PRODUCTS = gql`
  query Category($name: String!) {
    category(name: $name) {
      id
      name
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
  }
`;
