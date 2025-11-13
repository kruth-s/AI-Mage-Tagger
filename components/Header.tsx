import React from 'react';
import { Logo } from './Logo';

const ChevronDownIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-base-100 border-b border-base-300 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Logo className="w-8 h-8"/>
            <h1 className="text-xl font-semibold text-content-100 tracking-wider">
              AI MAGETAGGER
            </h1>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-content-200 hover:text-brand-primary transition-colors">Home</a>
            <a href="#" className="text-content-200 hover:text-brand-primary transition-colors">Pricing</a>
            <a href="#" className="text-content-200 hover:text-brand-primary transition-colors">Blog</a>
            <a href="#" className="flex items-center text-content-200 hover:text-brand-primary transition-colors">
              All Tools <ChevronDownIcon />
            </a>
            <a href="#" className="text-content-200 hover:text-brand-primary transition-colors">API Docs</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-content-200 hover:text-brand-primary transition-colors text-sm font-medium">Sign in</a>
             <div className="flex items-center space-x-2 text-content-200 text-sm">
                <img src="https://flagcdn.com/us.svg" width="20" alt="USA Flag" />
                <span>English</span>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};