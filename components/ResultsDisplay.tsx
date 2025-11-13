import React from 'react';
import { ImageAnalysisResult } from '../types';
import { Tag } from './Tag';
import { CopyToClipboardButton } from './CopyToClipboardButton';

interface ResultsDisplayProps {
  result: ImageAnalysisResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const finalTagsAsString = result.final_tags.map(t => t.tag).join(', ');
  const extractedTagsAsString = result.tags_extracted.join(', ');

  return (
    <div className="w-full h-full text-left overflow-y-auto pr-2">
      {/* Short Caption */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold text-content-200">Short Caption</h3>
            <CopyToClipboardButton textToCopy={result.short_caption} />
        </div>
        <p className="bg-base-100 p-3 rounded-lg text-content-200 italic border border-base-300 text-sm">
          "{result.short_caption}"
        </p>
      </div>
      
      {/* Detailed Caption */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold text-content-200">Detailed Caption</h3>
            <CopyToClipboardButton textToCopy={result.caption} />
        </div>
        <p className="bg-base-100 p-3 rounded-lg text-content-200 italic border border-base-300 text-sm">
          "{result.caption}"
        </p>
      </div>

      {/* Visually Relevant Tags */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-content-200">Visually Relevant Tags (Filtered)</h3>
            <CopyToClipboardButton textToCopy={finalTagsAsString} />
        </div>
        <div className="flex flex-wrap gap-2">
          {result.final_tags.map((item) => (
            <Tag key={item.tag} text={item.tag} score={item.score} />
          ))}
        </div>
      </div>

      {/* Extracted Tags */}
      <div>
        <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-content-200">All Extracted Tags</h3>
             <CopyToClipboardButton textToCopy={extractedTagsAsString} />
        </div>
        <p className="text-sm text-content-300 leading-6">
          {extractedTagsAsString}
        </p>
      </div>
    </div>
  );
};