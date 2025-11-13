import React from 'react';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full h-full animate-fade-in text-left">
        <div className="mb-6">
            <div className="h-5 w-1/3 bg-base-300 rounded-md mb-3 animate-shimmer bg-gradient-to-r from-base-300 via-base-200 to-base-300" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-16 w-full bg-base-100 rounded-lg animate-shimmer bg-gradient-to-r from-base-100 via-base-200 to-base-100" style={{ backgroundSize: '200% 100%' }}></div>
        </div>

        <div>
            <div className="h-5 w-1/2 bg-base-300 rounded-md mb-4 animate-shimmer bg-gradient-to-r from-base-300 via-base-200 to-base-300" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-8 w-24 bg-base-300 rounded-full animate-shimmer bg-gradient-to-r from-base-300 via-base-200 to-base-300" style={{ backgroundSize: '200% 100%' }}></div>
                ))}
            </div>
        </div>
    </div>
  );
};