import React from 'react';
import { AbsoluteFill, interpolate, spring, useVideoConfig } from 'remotion';

interface Scene3Props {
  frame: number;
}

export const Scene3: React.FC<Scene3Props> = ({ frame }) => {
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const designerScale = spring({
    frame,
    fps,
    from: 0.8,
    to: 1,
    config: {
      damping: 12,
      stiffness: 80,
    },
  });

  const textDelay = 15;
  const textOpacity = interpolate(frame, [textDelay, textDelay + 10], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  const endCardDelay = 35;
  const endCardOpacity = interpolate(frame, [endCardDelay, endCardDelay + 10], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#E8F5E9',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeIn,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '50px',
          transform: `scale(${designerScale})`,
        }}
      >
        {/* Designer with coffee */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              fontSize: '280px',
              lineHeight: 1,
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            }}
          >
            🧑‍💻
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '-50px',
              fontSize: '120px',
            }}
          >
            ☕
          </div>
        </div>

        {/* Speech bubble with sarcastic text */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '45px 80px',
            borderRadius: '50px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            position: 'relative',
            opacity: textOpacity,
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
              fontSize: '70px',
              fontWeight: 'bold',
              color: '#333',
              margin: 0,
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Sure... <span style={{ fontStyle: 'italic' }}>simple</span>. 😏
          </p>
        </div>

        {/* Ending card */}
        <div
          style={{
            backgroundColor: '#4CAF50',
            padding: '40px 70px',
            borderRadius: '30px',
            marginTop: '30px',
            opacity: endCardOpacity,
            boxShadow: '0 8px 30px rgba(76,175,80,0.3)',
          }}
        >
          <p
            style={{
              fontSize: '45px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.5,
            }}
          >
            Web design studio life 😂
            <br />
            <span style={{ fontSize: '55px' }}>@six.solutions</span>
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
