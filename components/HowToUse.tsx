import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string, color: string }> = ({ number, title, description, color }) => (
    <div className="text-center">
        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`} style={{backgroundColor: color}}>
            {number}
        </div>
        <h3 className="text-xl font-semibold text-content-100 mb-2">{title}</h3>
        <p className="text-content-300">{description}</p>
    </div>
);

export const HowToUse: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-base-100">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-content-100">How to Use Our Image to Tag Generator</h2>
                <p className="mt-4 text-lg text-content-200">
                    Convert your images to tags in just 3 simple steps. Our AI image tag generator makes it easy to create relevant keywords and metadata for your photos.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <Step 
                    number={1} 
                    title="Upload Your Image"
                    description="Upload any image using our drag-and-drop interface, paste from clipboard, or select from your device. Our image to tag tool supports JPG, PNG, and WebP formats."
                    color="#4f46e5"
                />
                <Step 
                    number={2} 
                    title="Configure Settings (Optional)"
                    description="Customize your image tag generator experience. Set keyword quantity, choose output language, define title formatting, and add custom instructions for better results."
                    color="#22c55e"
                />
                <Step 
                    number={3} 
                    title="Generate Tags & Copy"
                    description="Click 'Image to Tag' and watch our AI analyze your photo. Get instant results with relevant tags, optimized titles, and detailed descriptions. Copy with one click!"
                    color="#a855f7"
                />
            </div>
        </section>
    );
};
