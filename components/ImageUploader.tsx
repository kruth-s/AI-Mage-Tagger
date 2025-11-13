import React, { useRef, useState, useCallback, useEffect } from 'react';
import { InlineData } from '../types';

interface ImageUploaderProps {
  onImageReady: (imageData: InlineData) => void;
  setImagePreview: (url: string | null) => void;
  isLoading: boolean;
  onReset: () => void;
  imagePreview: string | null;
}

const fileToInlineData = (file: File): Promise<InlineData> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result !== 'string') {
        return reject(new Error('Failed to read file as data URL.'));
      }
      const base64Data = reader.result.split(',')[1];
      if (!base64Data) {
        return reject(new Error('Failed to extract base64 data from file.'));
      }
      resolve({
        mimeType: file.type,
        data: base64Data,
      });
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageReady, setImagePreview, isLoading, onReset, imagePreview }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFile = useCallback(async (file: File | null) => {
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert("Invalid file type. Please select an image.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit like in example
        alert("File is too large. Please select an image under 5MB.");
        return;
      }
      onReset();
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      try {
        const imageData = await fileToInlineData(file);
        onImageReady(imageData);
      } catch(e) {
        alert("Could not process file. Please try another image.");
        onReset();
      }
    }
  }, [onImageReady, setImagePreview, onReset]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0] || null);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleInternalReset = () => {
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
    onReset();
  }

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isLoading && !imagePreview) setIsDragging(true);
    };
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (isLoading || imagePreview) return;
      const file = e.dataTransfer?.files[0];
      handleFile(file || null);
    };
    
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);
    
    return () => {
      window.removeEventListener('dragover', handleDragOver);
      // Fix: Corrected typo from `handleLeave` to `handleDragLeave`.
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, [handleFile, isLoading, imagePreview]);

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
        if (isLoading || imagePreview) return;
        const file = e.clipboardData?.files[0];
        handleFile(file || null);
    };

    window.addEventListener('paste', handlePaste);

    return () => {
        window.removeEventListener('paste', handlePaste);
    };
  }, [handleFile, isLoading, imagePreview]);

  const UploadIcon = () => (
    <svg className="mx-auto h-12 w-12 text-brand-secondary" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="flex flex-col h-full min-h-[450px]">
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-content-100">Upload Image</h2>
           {imagePreview && (
              <button 
                onClick={handleInternalReset}
                disabled={isLoading}
                className="text-sm font-medium text-red-400 hover:text-red-300 disabled:opacity-50"
              >
                Remove
              </button>
            )}
      </div>

      <div 
        onClick={imagePreview ? undefined : handleUploadClick}
        className={`flex-grow border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-4 transition-colors duration-300 ${isDragging ? 'border-brand-primary bg-brand-primary/10' : 'border-base-300'} ${!imagePreview && 'cursor-pointer hover:border-brand-secondary'}`}
      >
        {imagePreview ? (
          <div className="relative w-full h-full max-h-[400px]">
            <img src={imagePreview} alt="Preview" className="w-full h-full object-contain rounded-lg"/>
          </div>
        ) : (
          <div className="text-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/png, image/jpeg, image/webp, image/gif"
              disabled={isLoading}
            />
             <div className='flex flex-col items-center justify-center space-y-2'>
                <UploadIcon />
                <p className="text-base font-medium text-content-200">
                    Click to upload or <span className="text-brand-primary">drag and drop</span>
                </p>
                <p className="mt-1 text-sm text-content-300">Support JPG, PNG, WebP, GIF files up to 5MB.</p>
                <p className="text-sm text-content-300">You can also paste images with Ctrl+V</p>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};
