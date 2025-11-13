import React from 'react';

const Icon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 0 .707.293h3.172a1 1 0 0 0 .707-.293l2.414-2.414a1 1 0 0 1 .707-.293H20" />
    </svg>
);

// Fix: Add `children` to the props type for the BulletPoint component.
const BulletPoint: React.FC<{color: 'blue' | 'green'; children: React.ReactNode}> = ({ color, children }) => {
    const colorClass = color === 'blue' ? 'bg-blue-500' : 'bg-green-500';
    return (
        <li className="flex items-start">
            <span className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${colorClass}`}></span>
            <div className="ml-3">
                {children}
            </div>
        </li>
    )
}

export const InitialResultsMessage: React.FC = () => {
    return (
        <div className="text-center text-content-300 p-4 w-full max-w-md mx-auto">
            <Icon />
            <h3 className="mt-4 text-xl font-semibold text-content-100">No results yet</h3>
            <p className="mt-1 text-base">
                Upload an image to automatically generate tags, keywords, title, and description for your photos
            </p>
            <ul className="mt-6 text-left space-y-4">
                <BulletPoint color="blue">
                    <h4 className="font-semibold text-content-100">AI Image Tag Generator</h4>
                    <p className="text-sm">Automatically convert images to relevant tags and keywords using AI technology</p>
                </BulletPoint>
                 <BulletPoint color="green">
                    <h4 className="font-semibold text-content-100">Image Keyword Generator</h4>
                    <p className="text-sm">Generate descriptive titles and captions with custom formatting options</p>
                </BulletPoint>
            </ul>
        </div>
    );
};