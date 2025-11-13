import React from 'react';

const Dot: React.FC = () => <span className="w-2 h-2 bg-red-500 rounded-full ml-2"></span>

export const ToolSelector: React.FC = () => {
    const tools = [
        { name: 'Image Describer', active: false },
        { name: 'Bulk Image Describer', active: false, hasDot: true },
        { name: 'Chat With Image AI', active: false },
        { name: 'Image to Tag', active: true },
    ];

    return (
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 my-8">
            {tools.map(tool => (
                <button 
                    key={tool.name}
                    className={`
                        px-5 py-2.5 text-sm font-medium rounded-lg flex items-center
                        transition-colors duration-200
                        ${tool.active 
                            ? 'bg-brand-primary text-white shadow' 
                            : 'bg-base-100 text-content-200 border border-base-300 hover:bg-base-200'
                        }
                    `}
                >
                    {tool.name}
                    {tool.hasDot && <Dot />}
                </button>
            ))}
        </div>
    );
}
