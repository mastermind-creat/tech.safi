import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  bgImage?: string; // URL for the GIF/Image
  children?: React.ReactNode;
  align?: 'center' | 'left';
  overlayOpacity?: number;
}

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  bgImage, 
  children, 
  align = 'center',
  overlayOpacity = 0.7
}) => {
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;

  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background GIF/Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for readability */}
          <div 
            className="absolute inset-0 bg-[#020617]" 
            style={{ opacity: overlayOpacity }} 
          />
          {/* Gradient Overlay for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]" />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight"
          >
            {title}
          </MotionH1>
          
          <MotionP 
            className={`text-lg md:text-xl text-slate-300 mb-10 leading-relaxed ${align === 'center' ? 'mx-auto' : ''} max-w-3xl`}
          >
            {subtitle}
          </MotionP>
          
          {children && (
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
              {children}
            </div>
          )}
        </MotionDiv>
      </div>
    </div>
  );
};