import React from 'react';

const Tip: React.FC<{ title: string; description: string; color: string }> = ({ title, description, color }) => (
    <div className="flex items-start">
        <span className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full" style={{ backgroundColor: color }}></span>
        <div className="ml-4">
            <h4 className="font-semibold text-content-100">{title}</h4>
            <p className="text-content-300 text-sm">{description}</p>
        </div>
    </div>
);


export const ProTips: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-5xl mx-auto p-8 md:p-12 bg-base-200 rounded-2xl">
                <h2 className="text-2xl font-bold text-content-100 text-center mb-8">Pro Tips for Better Image to Tag Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <Tip
                        title="High-Quality Images"
                        description="Use clear, well-lit images for better tag accuracy. Our image tag generator works best with high-resolution photos."
                        color="#4f46e5"
                    />
                    <Tip
                        title="Custom Instructions"
                        description="Add specific requirements in custom instructions to get more targeted image keywords and tags."
                        color="#22c55e"
                    />
                    <Tip
                        title="Keyword Settings"
                        description="Adjust keyword quantity and format based on your needs - perfect for stock photo metadata or SEO optimization."
                        color="#a855f7"
                    />
                    <Tip
                        title="Multiple Languages"
                        description="Generate image tags in different languages to reach global audiences and improve international SEO."
                        color="#f97316"
                    />
                </div>
            </div>
        </section>
    );
};
