import React from 'react';

interface TagProps {
  text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full border border-blue-200">
      {text}
    </div>
  );
};