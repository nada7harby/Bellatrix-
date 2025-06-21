import { useState, useEffect, useRef } from 'react';
import { Button, Typography, Box, IconButton } from '@mui/material';
import { PlayCircle, ArrowRight, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const videoRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: "Strategic Business Transformation",
      subtitle: "Oracle NetSuite Consultancy",
      description: "Streamline operations and drive growth with our comprehensive NetSuite solutions.",
      video: "/video1.mp4",
      cta: "Explore Services"
    },
    {
      title: "Digital Optimization Experts",
      subtitle: "Cloud Solutions Specialists",
      description: "Enhance productivity with our tailored implementation and consulting services.",
      video: "/video2.mp4",
      cta: "View Case Studies"
    },
    {
      title: "Data-Driven Decision Making",
      subtitle: "Business Intelligence Partners",
      description: "Leverage real-time analytics to transform your operations.",
      video: "/video3.mp4",
      cta: "Request Consultation"
    }
  ];

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(true);
  };

  return (
    <Box sx={{
      position: 'relative',
      height: '100vh',
      minHeight: '800px',
      overflow: 'hidden',
      backgroundColor: '#f8fafc', // Light gray background fallback
    }}>
      {/* Video Background */}
      <Box
        component="video"
        ref={videoRef}
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.7)'
        }}
      >
        <source src={slides[currentSlide].video} type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(248, 250, 252, 0.3) 0%, rgba(248, 250, 252, 0.3) 100%)',
        zIndex: 1
      }} />

      {/* Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 4, md: 8 },
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient top border - matches navbar */}
            <Box sx={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(to right, #059669, #0d9488)',
              mb: 3,
              borderRadius: '2px'
            }} />

            <Typography variant="overline" sx={{
              display: 'block',
              color: '#059669', // Emerald 600
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '2px',
              mb: 2
            }}>
              {slides[currentSlide].subtitle}
            </Typography>

            <Typography variant="h1" sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 3,
              color: '#1e293b', // Gray 800
              maxWidth: '800px'
            }}>
              {slides[currentSlide].title}
            </Typography>

            <Typography variant="body1" sx={{
              fontSize: '1.2rem',
              color: '#475569', // Gray 600
              maxWidth: '600px',
              mb: 4
            }}>
              {slides[currentSlide].description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  background: 'linear-gradient(to right, #059669, #0d9488)', // Emerald to teal
                  '&:hover': {
                    background: 'linear-gradient(to right, #047857, #0f766e)', // Darker emerald to teal
                    boxShadow: '0 4px 6px -1px rgba(5, 150, 105, 0.3)'
                  }
                }}
              >
                {slides[currentSlide].cta}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircle />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  borderColor: '#94a3b8', // Gray 400
                  color: '#334155', // Gray 700
                  '&:hover': {
                    borderColor: '#64748b', // Gray 500
                    backgroundColor: 'rgba(241, 245, 249, 0.5)' // Gray 50 with opacity
                  }
                }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? 'Pause Video' : 'Play Video'}
              </Button>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <Box sx={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          <IconButton
            onClick={prevSlide}
            sx={{
              bgcolor: 'white',
              boxShadow: 1,
              border: '1px solid #e2e8f0', // Gray 200
              '&:hover': {
                bgcolor: '#f1f5f9' // Gray 50
              }
            }}
          >
            <ChevronLeft sx={{ color: '#334155' }} /> {/* Gray 700 */}
          </IconButton>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {slides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: index === currentSlide ? '24px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  bgcolor: index === currentSlide ? '#059669' : '#cbd5e1', // Emerald 600 or Gray 300
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={nextSlide}
            sx={{
              bgcolor: 'white',
              boxShadow: 1,
              border: '1px solid #e2e8f0', // Gray 200
              '&:hover': {
                bgcolor: '#f1f5f9' // Gray 50
              }
            }}
          >
            <ChevronRight sx={{ color: '#334155' }} /> {/* Gray 700 */}
          </IconButton>
        </Box>

        {/* Stats */}
        <Box sx={{
          position: 'absolute',
          bottom: '5%',
          right: { xs: '50%', md: '5%' },
          transform: { xs: 'translateX(50%)', md: 'none' },
          display: 'flex',
          gap: 4,
          bgcolor: 'white',
          px: 4,
          py: 2,
          borderRadius: '12px',
          boxShadow: 3,
          border: '1px solid #e2e8f0' // Gray 200
        }}>
          {[
            { value: '200+', label: 'Projects' },
            { value: '98%', label: 'Satisfaction' },
            { value: '15+', label: 'Years' }
          ].map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#059669' }}> {/* Emerald 600 */}
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}> {/* Gray 500 */}
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;