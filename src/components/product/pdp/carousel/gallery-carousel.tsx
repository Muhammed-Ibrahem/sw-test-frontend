import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Gallery } from "../../../../types/gallery-type";
import { cn } from "../../../../utils/cn";

type Props = {
  gallery: Gallery[];
};

export const ProductGalleryCarousel = ({ gallery }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };
  return (
    <div data-testid="product-gallery" className="flex gap-4">
      <div className="flex flex-col gap-4">
        {gallery.map(({ id, url, productId }, index) => (
          <button
            key={id}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "h-20 w-20 overflow-hidden border-2 border-transparent transition-colors",
              {
                "border-gray-900": selectedImage === index,
              },
            )}
          >
            <img
              src={url || ""}
              alt={productId}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>

      <div className="relative flex-1">
        <div className="h-[600px] overflow-hidden bg-white">
          <img
            src={gallery[selectedImage].url || ""}
            alt="Product"
            className="max-h-full w-full object-contain"
          />
        </div>
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
