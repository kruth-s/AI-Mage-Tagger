import React from 'react';
import { ImageAnalysisResult } from '../types';
import { Tag } from './Tag';
import { CopyToClipboardButton } from './CopyToClipboardButton';

interface ResultsDisplayProps {
  result: ImageAnalysisResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const tagsAsString = result.tags.join(', ');

  return (
    <div className="w-full h-full animate-fade-in text-left">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold text-content-200">Generated Caption</h3>
            <CopyToClipboardButton textToCopy={result.caption} />
        </div>
        <p className="bg-base-100 p-4 rounded-lg text-content-200 italic border border-base-300">
          "{result.caption}"
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-content-200">Visually Relevant Tags</h3>
            <CopyToClipboardButton textToCopy={tagsAsString} />
        </div>
        <div className="flex flex-wrap gap-2">
          {result.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};