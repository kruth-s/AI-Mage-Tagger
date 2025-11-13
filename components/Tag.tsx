import React from 'react';

interface TagProps {
  text: string;
  score: number;
}

export const Tag: React.FC<TagProps> = ({ text, score }) => {
  const getBackgroundColor = (score: number) => {
    if (score > 0.9) return 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30';
    if (score > 0.75) return 'bg-sky-400/20 text-sky-300 border-sky-400/30';
    return 'bg-amber-400/20 text-amber-300 border-amber-400/30';
  }

  return (
    <div className={`flex items-center text-sm font-medium px-3 py-1 rounded-full border ${getBackgroundColor(score)}`}>
      <span>{text}</span>
      <span className="ml-2 text-xs opacity-70 font-mono">
        {score.toFixed(2)}
      </span>
    </div>
  );
};