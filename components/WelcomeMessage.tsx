import React from 'react';

export const WelcomeMessage: React.FC = () => {
  return (
    <div className="text-center my-8 md:my-12">
      <h1 className="text-4xl md:text-5xl font-bold text-content-100">
        Image to Tag - AI-Powered Image Tag Generator
      </h1>
      <p className="mt-4 text-lg text-content-200 max-w-3xl mx-auto">
        Transform your images to tags with our powerful AI image to tag generator. Create relevant
        keywords, titles, and descriptions for photos automatically. The best free image tag generator for
        content creators, photographers, and digital marketers.
      </p>
    </div>
  );
};
