import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`glass-panel rounded-xl p-6 ${className}`}
    >
      {children}
    </MotionDiv>
  );
};