import React from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="bg-base-100/80 backdrop-blur-sm border-b border-base-300 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center space-x-3">
            <Logo className="w-8 h-8"/>
            <h1 className="text-xl font-semibold text-content-100 tracking-wider">
              AI MAGETAGGER
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};