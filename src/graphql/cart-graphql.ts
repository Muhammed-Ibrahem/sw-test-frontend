import { gql } from "@apollo/client";

export const PLACE_ORDER_MUTATION = gql`
  mutation Mutation($orderItems: [OrderItemInput!]!) {
    placeOrder(orderItems: $orderItems)
  }
`;
