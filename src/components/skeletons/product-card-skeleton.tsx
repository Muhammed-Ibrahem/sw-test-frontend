export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Image skeleton */}
      <div className="mb-4 aspect-square bg-gray-200" />

      {/* Product name skeleton */}
      <div className="mb-2 h-4 w-3/4 bg-gray-200" />

      {/* Price skeleton */}
      <div className="h-4 w-1/4 bg-gray-200" />
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
