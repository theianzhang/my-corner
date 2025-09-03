declare module 'react-split-flap-effect' {
  import React from 'react';

  interface FlapDisplayProps {
    chars?: string;
    length: number;
    value: string;
    className?: string;
    style?: React.CSSProperties;
    timing?: number;
    hinge?: boolean;
    render?: (children: React.ReactNode) => React.ReactNode;
    padChar?: string;
    padMode?: 'auto' | 'start' | 'end';
  }

  export const FlapDisplay: React.FC<FlapDisplayProps>;

  export const Presets: {
    ALPHANUM: string;
    NUM: string;
  };
} 