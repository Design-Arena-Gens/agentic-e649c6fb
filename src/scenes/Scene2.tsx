import React from 'react';
import { AbsoluteFill, interpolate, random } from 'remotion';

interface Scene2Props {
  frame: number;
}

export const Scene2: React.FC<Scene2Props> = ({ frame }) => {
  // Fast zoom effect
  const zoom = interpolate(frame, [0, 60], [1, 3.5], {
    extrapolateRight: 'clamp',
  });

  const rotation = interpolate(frame, [0, 60], [0, 15], {
    extrapolateRight: 'clamp',
  });

  // Chaotic elements
  const elements = [
    { icon: '🌐', text: 'Animations', x: 20, y: 15, delay: 0 },
    { icon: '🎨', text: '3D Graphics', x: 75, y: 20, delay: 5 },
    { icon: '📅', text: 'Booking', x: 15, y: 45, delay: 10 },
    { icon: '💳', text: 'Payments', x: 70, y: 50, delay: 15 },
    { icon: '📱', text: 'Mobile App', x: 40, y: 30, delay: 8 },
    { icon: '🔔', text: 'Notifications', x: 50, y: 70, delay: 12 },
    { icon: '🤖', text: 'AI Chatbot', x: 25, y: 75, delay: 18 },
    { icon: '🔒', text: 'Security', x: 65, y: 35, delay: 7 },
  ];

  const codeLines = [
    'npm install everything',
    'const stress = true;',
    'while(true) { code++; }',
    'git commit -m "help"',
    '404 sanity not found',
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FF6B6B',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `scale(${zoom}) rotate(${rotation}deg)`,
        }}
      >
        {/* Chaotic stacked elements */}
        {elements.map((el, i) => {
          const show = frame > el.delay;
          const opacity = interpolate(frame, [el.delay, el.delay + 5], [0, 1], {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
          });

          const shake = Math.sin(frame * 0.5 + i) * 5;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${el.x}%`,
                top: `${el.y}%`,
                transform: `translate(-50%, -50%) translateX(${shake}px) rotate(${shake * 2}deg)`,
                opacity: show ? opacity : 0,
                backgroundColor: '#ffffff',
                padding: '20px 30px',
                borderRadius: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <span style={{ fontSize: '50px' }}>{el.icon}</span>
              <span
                style={{
                  fontSize: '35px',
                  fontWeight: 'bold',
                  color: '#333',
                  fontFamily: 'Arial, sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                {el.text}
              </span>
            </div>
          );
        })}

        {/* Flying code lines */}
        {codeLines.map((line, i) => {
          const offset = (frame * (i + 3)) % 120;
          const opacity = interpolate(offset, [0, 20, 100, 120], [0, 1, 1, 0]);

          return (
            <div
              key={`code-${i}`}
              style={{
                position: 'absolute',
                left: '50%',
                top: `${(offset * 1.5) % 120}%`,
                transform: 'translateX(-50%)',
                opacity,
                backgroundColor: '#2C3E50',
                padding: '15px 30px',
                borderRadius: '10px',
                fontFamily: 'monospace',
                fontSize: '30px',
                color: '#00FF00',
              }}
            >
              {line}
            </div>
          );
        })}

        {/* Main text overlay */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: '50px 70px',
            borderRadius: '30px',
            maxWidth: '850px',
            zIndex: 100,
          }}
        >
          <p
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.4,
            }}
          >
            Also client:
            <br />
            <span style={{ color: '#FFD93D' }}>
              Add animations, 3D, booking, payment, app... everything.
            </span>
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
