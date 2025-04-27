import React from 'react';

export default function CustomLoversVisual() {
  // SVG path data for the two lines
  // These are hand-crafted for a poetic, minimalist effect
  return (
    <svg viewBox="0 0 600 180" width="340" height="140" style={{ display: 'block', margin: '0 auto' }}>
      {/* Left lover's path */}
      <path
        d="M 120 30
           Q 140 50, 180 60
           Q 220 70, 240 90
           Q 260 110, 300 90
           Q 340 70, 360 110
           Q 380 150, 420 120
           Q 460 90, 480 120"
        fill="none"
        stroke="#e66b6b"
        strokeWidth="3.5"
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 2px 8px #e66b6b33)' }}
      />
      {/* Right lover's path */}
      <path
        d="M 480 30
           Q 460 50, 420 60
           Q 380 70, 360 90
           Q 340 110, 300 90
           Q 260 70, 240 110
           Q 220 150, 180 120
           Q 140 90, 120 120"
        fill="none"
        stroke="#6b8be6"
        strokeWidth="3.5"
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 2px 8px #6b8be633)' }}
      />
      {/* End dots (the lovers) */}
      <circle cx="120" cy="120" r="7" fill="#e66b6b" />
      <circle cx="480" cy="120" r="7" fill="#6b8be6" />
      {/* Eyes (wistful look) */}
      <ellipse cx="125" cy="123" rx="1.5" ry="2" fill="#fff" opacity="0.7" />
      <ellipse cx="475" cy="123" rx="1.5" ry="2" fill="#fff" opacity="0.7" />
    </svg>
  );
} 