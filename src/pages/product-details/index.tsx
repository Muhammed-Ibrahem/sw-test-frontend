import { useParams } from "react-router";
import { ProductAttributes } from "../../components/attributes";
import { useQuery } from "@apollo/client/react";
import { GET_PRODUCT_DETAILS } from "../../graphql/product-graphql";
import { Loading } from "../../components/loader/loading";
import { NotFound } from "../../components/errors/not-found";
import type { Product } from "../../types/product-types";
import { ProductPrice } from "../../components/product/pdp/product-price";
import { AddToCartBtn } from "../../components/product/pdp/add-to-cart-btn";
import parse from "html-react-parser";
import { ProductGalleryCarousel } from "../../components/product/pdp/carousel/gallery-carousel";
import { useState } from "react";
import type { Attribute } from "../../types/attribute-types";

export const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, Attribute>
  >({});

  const { loading, error, data } = useQuery<{ product: Product }>(
    GET_PRODUCT_DETAILS,
    {
      variables: {
        id: productId,
      },
    },
  );

  if (loading) return <Loading />;
  if (error) return <NotFound />;

  const handleAttributeSelect = (
    attributeSetId: string,
    attribute: Attribute,
  ) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeSetId]: attribute,
    }));
  };

  const handleAddToCart = () => {
    console.log({
      product: data?.product,
      selectedAttributes,
    });
  };

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="col-span-2">
        <ProductGalleryCarousel gallery={data!.product.gallery} />
      </div>
      <div className="">
        <h1 className="mb-8 text-3xl font-bold">{data?.product.name}</h1>
        <ProductAttributes
          attributes={data!.product.attributes}
          selectedAttributes={selectedAttributes}
          onAttributeSelect={handleAttributeSelect}
        />
        <ProductPrice price={data!.product.prices[0]} />
        <AddToCartBtn handleAddToCart={handleAddToCart} />

        <article
          data-testid="product-description"
          className="prose prose-base lg:prose-lg"
        >
          {parse(String(data!.product.description))}
        </article>
      </div>
    </div>
  );
};
