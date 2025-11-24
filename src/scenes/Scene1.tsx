import React from 'react';
import { AbsoluteFill, interpolate, spring, useVideoConfig } from 'remotion';

interface Scene1Props {
  frame: number;
}

export const Scene1: React.FC<Scene1Props> = ({ frame }) => {
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    from: 0.8,
    to: 1,
    config: {
      damping: 10,
      stiffness: 100,
    },
  });

  const opacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFF4E6',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Client character */}
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Cheerful client emoji */}
        <div
          style={{
            fontSize: '250px',
            lineHeight: 1,
          }}
        >
          😊
        </div>

        {/* Speech bubble */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '40px 60px',
            borderRadius: '50px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            position: 'relative',
            maxWidth: '700px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '30px solid transparent',
              borderRight: '30px solid transparent',
              borderBottom: '30px solid #ffffff',
            }}
          />
          <p
            style={{
              fontSize: '55px',
              fontWeight: 'bold',
              color: '#333',
              margin: 0,
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            I want a simple website!
          </p>
        </div>

        {/* "Client:" label */}
        <div
          style={{
            backgroundColor: '#FFB84D',
            padding: '20px 50px',
            borderRadius: '30px',
            marginTop: '20px',
          }}
        >
          <p
            style={{
              fontSize: '50px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Client:
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
