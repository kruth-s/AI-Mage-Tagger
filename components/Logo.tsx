import React from 'react';

export const Logo: React.FC<{className?: string}> = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <linearGradient id="cosmic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" /> 
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
        </defs>
        
        {/* Galaxy Swirls */}
        <path 
            d="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
            fill="none"
            stroke="url(#cosmic-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            transform="rotate(45 50 50)"
        >
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="45 50 50"
                to="405 50 50"
                dur="10s"
                repeatCount="indefinite"
            />
        </path>
         <path 
            d="M 50,50 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0"
            fill="none"
            stroke="url(#cosmic-gradient)"
            strokeWidth="3"
            strokeOpacity="0.7"
            strokeLinecap="round"
            transform="rotate(-30 50 50)"
        >
             <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="-30 50 50"
                to="330 50 50"
                dur="8s"
                repeatCount="indefinite"
            />
        </path>

        {/* Stars */}
        <circle cx="25" cy="25" r="3" fill="white" />
        <circle cx="78" cy="40" r="2" fill="white" />
        <circle cx="30" cy="75" r="2.5" fill="white" />
        <circle cx="65" cy="80" r="1.5" fill="white" />

        {/* Central "Mage" element */}
        <circle cx="50" cy="50" r="10" fill="url(#cosmic-gradient)" stroke="white" strokeWidth="1.5"/>
    </svg>
);