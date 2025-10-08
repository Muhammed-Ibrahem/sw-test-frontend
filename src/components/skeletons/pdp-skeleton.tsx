import type { JSX } from "react";

export const ProductDetailSkeleton = (): JSX.Element => {
  return (
    <div className="grid animate-pulse gap-12 lg:grid-cols-2">
      {/* Left side - Images skeleton */}
      <div className="flex gap-4">
        {/* Thumbnail column skeleton */}
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-20 w-20 bg-gray-200" />
          ))}
        </div>

        {/* Main image skeleton */}
        <div className="h-[600px] flex-1 bg-gray-200" />
      </div>

      {/* Right side - Product info skeleton */}
      <div>
        {/* Title skeleton */}
        <div className="mb-8 h-10 w-3/4 bg-gray-200" />

        {/* Size attribute skeleton */}
        <div className="mb-6">
          <div className="mb-3 h-4 w-16 bg-gray-200" />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-11 w-16 bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Color attribute skeleton */}
        <div className="mb-8">
          <div className="mb-3 h-4 w-16 bg-gray-200" />
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-9 w-9 bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Price skeleton */}
        <div className="mb-8">
          <div className="mb-2 h-4 w-12 bg-gray-200" />
          <div className="h-9 w-24 bg-gray-200" />
        </div>

        {/* Button skeleton */}
        <div className="mb-8 h-12 w-full bg-gray-200" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200" />
          <div className="h-4 w-full bg-gray-200" />
          <div className="h-4 w-3/4 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};
