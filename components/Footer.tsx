import React from 'react';
import { Logo } from './Logo';

const FeaturedBadge: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block border border-base-300 rounded-lg px-3 py-2 hover:bg-base-200 transition-colors">
        {children}
    </a>
);


export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Logo className="w-8 h-8" />
                        <span className="font-semibold text-lg text-content-100">AI Magetagger</span>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-content-200 tracking-wider uppercase">Support</h3>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Manage Subscription</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Chrome Extension</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Blog</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Changelog</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">About</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Email</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-semibold text-content-200 tracking-wider uppercase">Legal</h3>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Privacy Policy</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Terms & Conditions</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary">Payments & Refund Policy</a></li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold text-content-200 tracking-wider uppercase">Links</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="#" className="text-content-300 hover:text-brand-primary font-semibold">Dang ai</a></li>
                        <li><a href="#" className="text-content-300 hover:text-brand-primary font-bold text-xl">TOOLPILOT</a></li>
                        <li>
                            <FeaturedBadge href="#">
                                <span className="text-sm font-semibold">FEATURED ON <span className="font-bold text-red-500">Startup Fame</span></span>
                            </FeaturedBadge>
                        </li>
                         <li>
                            <FeaturedBadge href="#">
                                <span className="text-sm font-semibold">Featured on <span className="font-bold">Fazier</span></span>
                            </FeaturedBadge>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-base-300 text-center text-content-300 text-sm">
                <p>&copy; {new Date().getFullYear()} AI Magetagger™. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
};
