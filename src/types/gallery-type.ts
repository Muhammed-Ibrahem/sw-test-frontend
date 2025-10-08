export type Gallery = {
  id: number;
  url: string;
  productId: string;
};

export type GalleryCarouselProps = {
  gallery: Gallery[];
};
