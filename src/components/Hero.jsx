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
      video: "https://assets.mixkit.co/videos/preview/mixkit-team-meeting-in-a-modern-office-space-12346-large.mp4",
      cta: "View Case Studies"
    },
    {
      title: "Data-Driven Decision Making",
      subtitle: "Business Intelligence Partners",
      description: "Leverage real-time analytics to transform your operations.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-analyzing-data-on-her-laptop-12347-large.mp4",
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
      bgcolor: 'background.default',
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
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 0%, rgba(255,255,255,0.2) 100%)',
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
            <Typography variant="overline" sx={{
              display: 'block',
              color: 'primary.main',
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
              color: 'text.primary',
              maxWidth: '800px'
            }}>
              {slides[currentSlide].title}
            </Typography>

            <Typography variant="body1" sx={{
              fontSize: '1.2rem',
              color: 'text.secondary',
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
                  boxShadow: 2
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
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
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
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                bgcolor: 'action.hover'
              }
            }}
          >
            <ChevronLeft />
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
                  bgcolor: index === currentSlide ? 'primary.main' : 'action.disabled',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={nextSlide}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                bgcolor: 'action.hover'
              }
            }}
          >
            <ChevronRight />
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
          bgcolor: 'background.paper',
          px: 4,
          py: 2,
          borderRadius: '12px',
          boxShadow: 3
        }}>
          {[
            { value: '200+', label: 'Projects' },
            { value: '98%', label: 'Satisfaction' },
            { value: '15+', label: 'Years' }
          ].map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
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