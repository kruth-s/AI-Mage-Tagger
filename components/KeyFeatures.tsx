import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-300 transition-shadow hover:shadow-lg">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-brand-primary mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-content-100 mb-2">{title}</h3>
        <p className="text-content-300 text-sm leading-6">{description}</p>
    </div>
);

const featureData = [
    {
        icon: <Icon1 />,
        title: 'AI Image Tag Generator',
        description: 'Automatically convert images to tags with our advanced AI image tag generator. Perfect for creating relevant keywords and metadata for your photos'
    },
    {
        icon: <Icon2 />,
        title: 'Image Keyword Generator',
        description: 'Generate compelling titles and captions with our image keyword tool. Create SEO-optimized descriptions for better discoverability'
    },
    {
        icon: <Icon3 />,
        title: 'Stock Image Metadata Generator',
        description: 'Create comprehensive metadata for stock photos. Our free image tagger helps generate detailed descriptions and keywords for photo collections'
    },
    {
        icon: <Icon4 />,
        title: 'Image to Keywords Tool',
        description: 'Customize your image to tag conversion with advanced settings. Control keyword quantity, format, and language options'
    },
    {
        icon: <Icon5 />,
        title: 'Multi-Language Image Tagger',
        description: 'Generate image tags in multiple languages. Perfect for international content creators and global photo libraries'
    },
    {
        icon: <Icon6 />,
        title: 'Free Photo Tag Generator',
        description: 'Easy-to-use image to tag tool with drag-and-drop interface. Start converting images to tags instantly - no registration required'
    }
];

export const KeyFeatures: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-base-100">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-content-100">Key Features</h2>
                <p className="mt-4 text-lg text-content-200">
                    Discover what makes our image to tag generator the best choice for creating accurate tags and metadata for your photos.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {featureData.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    )
}

// Dummy Icons for visual representation
function Icon1() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>; }
function Icon2() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>; }
function Icon3() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>; }
function Icon4() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992m0 0h-4.992m4.992 0-3.181-3.183a8.25 8.25 0 0 0-11.667 0l-3.181 3.183" /></svg>; }
function Icon5() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.5-2.456a48.358 48.358 0 0 1-2.666.257m0 0a48.297 48.297 0 0 1-2.666.257m0 0v2.456" /></svg>; }
function Icon6() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>; }
