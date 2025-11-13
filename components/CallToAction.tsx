import React from 'react';

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
    </svg>
);


export const CallToAction: React.FC = () => {
    return (
        <section className="py-16 md:py-20 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-content-100 max-w-2xl mx-auto">
                Ready to try our image to tag generator? Start converting your images to relevant tags and keywords today!
            </h2>
            <div className="mt-8">
                <button className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    Try Image to Tag Generator Now
                    <ArrowRightIcon />
                </button>
            </div>
        </section>
    );
};
