import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';

export const Video: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timings (in frames)
  const scene1Start = 0;
  const scene1End = 30; // 1 second
  const scene2Start = 30;
  const scene2End = 90; // 3 seconds
  const scene3Start = 90;
  const scene3End = 150; // 5 seconds total

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffffff' }}>
      {frame >= scene1Start && frame < scene1End && <Scene1 frame={frame - scene1Start} />}
      {frame >= scene2Start && frame < scene2End && <Scene2 frame={frame - scene2Start} />}
      {frame >= scene3Start && frame < scene3End && <Scene3 frame={frame - scene3Start} />}
    </AbsoluteFill>
  );
};
