import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ResultsDisplay } from './components/ResultsDisplay';
import { SkeletonLoader } from './components/SkeletonLoader';
import { ErrorMessage } from './components/ErrorMessage';
import { generateImageAnalysis } from './services/geminiService';
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
      const result = await generateImageAnalysis(imageData);
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
  
  const hasContent = isLoading || error || analysisResult;

  return (
    <div className="min-h-screen flex flex-col bg-base-100 font-sans text-content-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center container mx-auto p-4 md:p-8 w-full">
        <div className={`w-full max-w-7xl mx-auto transition-all duration-500 ${hasContent ? ' ' : 'max-w-3xl'}`}>
          <div className={`grid grid-cols-1 gap-8 ${hasContent ? 'lg:grid-cols-2' : ''}`}>
            <div className="bg-base-200/50 p-6 rounded-xl shadow-lg border border-base-300">
              <ImageUploader 
                onImageReady={handleImageAnalysis} 
                setImagePreview={setImagePreview}
                isLoading={isLoading}
                onReset={handleReset}
                imagePreview={imagePreview}
              />
            </div>
            
            {hasContent && (
              <div className="bg-base-200/50 p-6 rounded-xl shadow-lg border border-base-300 flex flex-col min-h-[500px]">
                <h2 className="text-xl font-semibold mb-4 text-content-100 pb-2 border-b border-base-300">Results</h2>
                <div className="flex-grow flex items-center justify-center animate-fade-in">
                  {isLoading && <SkeletonLoader />}
                  {error && <ErrorMessage message={error} />}
                  {!isLoading && !error && analysisResult && <ResultsDisplay result={analysisResult} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;