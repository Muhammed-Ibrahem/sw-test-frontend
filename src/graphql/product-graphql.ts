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

export const GET_PRODUCT_DETAILS = gql`
  query Product($id: ID!) {
    product(id: $id) {
      id
      name
      description
      gallery {
        id
        url
        productId
      }
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
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
