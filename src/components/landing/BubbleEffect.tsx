'use client';
import { useEffect } from 'react';

const BubbleEffect = () => {
  useEffect(() => {
    const bubbleContainer = document.getElementById('bubble-container');
    if (!bubbleContainer) return;

    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * (3 - 0.5) + 0.5; // 0.5px to 3px
      const left = Math.random() * 100;
      const animationDuration = Math.random() * (8 - 6) + 6; // 6s to 8s

      bubble.classList.add('bubble');
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}vw`;
      bubble.style.animationDuration = `${animationDuration}s`;
      bubble.style.animationName = 'bubbleAnimation';

      bubbleContainer.appendChild(bubble);

      setTimeout(() => bubble.remove(), animationDuration * 1000);
    };

    const intervalId = setInterval(createBubble, 300);

    return () => clearInterval(intervalId);
    
  }, []);
console.log("Bubble created");

  return null;
};

export default BubbleEffect;
