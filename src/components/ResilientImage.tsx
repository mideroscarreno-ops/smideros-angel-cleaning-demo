import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectClassName?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  width,
  height,
  className = '',
  aspectClassName = '',
  fallbackTitle,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#E7EFF3] via-[#FAF8F3] to-[#C7A878]/20 text-[#1C2B43] p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-full border border-[#C7A878]/60 flex items-center justify-center mb-3 bg-white/70">
          <Sparkles className="w-4 h-4 text-[#1C2B43]" aria-hidden="true" />
        </div>
        <p className="font-serif text-lg font-medium text-[#1C2B43]">
          {fallbackTitle || 'Angel Cleaning LLC'}
        </p>
        <p className="text-xs text-[#343B43]/70 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E7EFF3]/50 ${aspectClassName}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
}
