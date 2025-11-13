import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { WelcomeMessage } from './components/WelcomeMessage';
import { ToolSelector } from './components/ToolSelector';
import { ImageUploader } from './components/ImageUploader';
import { ResultsDisplay } from './components/ResultsDisplay';
import { SkeletonLoader } from './components/SkeletonLoader';
import { ErrorMessage } from './components/ErrorMessage';
import { InitialResultsMessage } from './components/InitialResultsMessage';
import { KeyFeatures } from './components/KeyFeatures';
import { HowToUse } from './components/HowToUse';
import { ProTips } from './components/ProTips';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { generateImageTags } from './services/geminiService';
import { ImageAnalysisResult, InlineData } from './types';

const App: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<ImageAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageAnalysis = useCallback(async (imageData: InlineData) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await generateImageTags(imageData);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = () => {
    setImagePreview(null);
    setAnalysisResult(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 w-full">
        <WelcomeMessage />
        <ToolSelector />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-7xl mx-auto">
          <div className="bg-base-200 p-6 rounded-xl shadow-sm border border-base-300">
            <ImageUploader 
              onImageReady={handleImageAnalysis} 
              setImagePreview={setImagePreview}
              isLoading={isLoading}
              onReset={handleReset}
              imagePreview={imagePreview}
            />
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow-sm border border-base-300 flex flex-col min-h-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-content-100 pb-2">Results</h2>
            <div className="flex-grow flex items-center justify-center">
              {isLoading && <SkeletonLoader />}
              {error && <ErrorMessage message={error} />}
              {!isLoading && !error && !analysisResult && <InitialResultsMessage />}
              {!isLoading && !error && analysisResult && <ResultsDisplay result={analysisResult} />}
            </div>
          </div>
        </div>
        
        <KeyFeatures />
        <HowToUse />
        <ProTips />
        <CallToAction />

      </main>
      <Footer />
    </div>
  );
};

export default App;