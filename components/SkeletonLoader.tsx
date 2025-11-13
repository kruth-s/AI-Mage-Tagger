import React from 'react';

export const SkeletonLoader: React.FC = () => {
  const ShimmerDiv: React.FC<{className: string}> = ({ className }) => (
    <div className={`${className} bg-base-300/50 animate-shimmer bg-gradient-to-r from-base-300/50 via-base-200/50 to-base-300/50`} style={{ backgroundSize: '200% 100%' }}></div>
  );

  return (
    <div className="w-full h-full text-left">
        {/* Caption Skeletons */}
        <div className="mb-4">
            <ShimmerDiv className="h-4 w-1/3 rounded-md mb-2" />
            <ShimmerDiv className="h-10 w-full rounded-lg" />
        </div>
        <div className="mb-6">
            <ShimmerDiv className="h-4 w-1/3 rounded-md mb-2" />
            <ShimmerDiv className="h-12 w-full rounded-lg" />
        </div>

        {/* Tags Skeleton */}
        <div>
            <ShimmerDiv className="h-4 w-1/2 rounded-md mb-4" />
            <div className="flex flex-wrap gap-2">
                {[...Array(7)].map((_, i) => (
                    <ShimmerDiv key={i} className="h-8 w-24 rounded-full" />
                ))}
            </div>
        </div>
    </div>
  );
};