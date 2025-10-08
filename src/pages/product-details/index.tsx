import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
import { toast } from "sonner";

import { useCart } from "../../context/cart-context";

import { GET_PRODUCT_DETAILS } from "../../graphql/product-graphql";

import type { Attribute } from "../../types/attribute-types";
import type { Product } from "../../types/product-types";

import { ProductGalleryCarousel } from "../../components/product/pdp/carousel/gallery-carousel";
import { ProductDetailSkeleton } from "../../components/skeletons/pdp-skeleton";
import { AddToCartBtn } from "../../components/product/pdp/add-to-cart-btn";
import { ProductPrice } from "../../components/product/pdp/product-price";
import { ProductAttributes } from "../../components/attributes";
import { NotFound } from "../../components/errors/not-found";
import { SomethingWentWrong } from "../../components/errors/something-went-wrong";

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const cart = useCart();

  const { loading, error, data } = useQuery<{ product: Product }>(
    GET_PRODUCT_DETAILS,
    {
      variables: {
        id: productId,
      },
    },
  );

  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<
      string,
      {
        type: string;
        attribute: Attribute;
      }
    >
  >({});
  const [isAddToCartActive, setAddToCartStatus] = useState<boolean>(false);

  useEffect(() => {
    if (data && data.product) {
      const addToCartBtnStatus =
        data.product.inStock &&
        Object.entries(selectedAttributes).length ===
          data.product.attributes.length;

      setAddToCartStatus(!!addToCartBtnStatus);
    }
  }, [selectedAttributes, data]);

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <SomethingWentWrong />;
  if (!data?.product) return <NotFound />;

  const handleAttributeSelect = (
    attributeSetId: string,
    attributeSetTye: string,
    attribute: Attribute,
  ) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeSetId]: {
        type: attributeSetTye,
        attribute,
      },
    }));
  };

  const handleAddToCart = () => {
    if (isAddToCartActive) {
      toast.success("Item was added to the cart");
      cart.addItem({
        product: data!.product,
        id: data!.product.id,
        name: data!.product.name,
        imageUrl: data!.product.gallery[0].url || "",
        price: data!.product.prices[0].amount,
        quantity: 1,
        attributes: selectedAttributes,
      });
      cart.changeCartStatus(true);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ProductGalleryCarousel gallery={data!.product.gallery} />
      </div>
      <div>
        <h1 className="mb-8 text-3xl font-bold">{data?.product.name}</h1>
        <ProductAttributes
          attributes={data!.product.attributes}
          selectedAttributes={selectedAttributes}
          onAttributeSelect={handleAttributeSelect}
        />
        <ProductPrice price={data!.product.prices[0]} />

        <AddToCartBtn
          handleAddToCart={handleAddToCart}
          isActive={isAddToCartActive}
        />

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
