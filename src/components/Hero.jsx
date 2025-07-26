// import React from 'react';
// import heroImage from '../assets/images/gallary1.jpg';

// const Hero = () => {
//   return (
//     <section id="home" className="relative bg-primary text-white">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <img src={heroImage} alt="Modern window blinds" className="w-full h-full object-cover absolute" />
//       <div className="container mx-auto px-4 py-32 relative z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//             Premium Window Blinds for Modern Homes
//           </h1>
//           <p className="text-xl mb-8">
//             High-quality, durable, and stylish window blinds that enhance your living space with perfect light control.
//           </p>
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <a 
//               href="#products" 
//               className="bg-accent hover:bg-yellow-500 text-dark font-bold py-3 px-6 rounded-lg text-center transition duration-300"
//             >
//               View Products
//             </a>
//             <a 
//               href="#contact" 
//               className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
//             >
//               Get a Quote
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React from 'react';
// import heroVideo from '../assets/videos/hero-video.mp4';
// import heroFallbackImage from '../assets/images/vertical-blinds.jpg';
// import ParticlesBackground from './ParticlesBackground';

// const Hero = () => {
//   return (
//     <section id="home" className="relative h-screen min-h-[800px] overflow-hidden">
//       {/* Video Background with Fallback */}
//       <div className="absolute inset-0 bg-black/30 z-10">
//       {/* <ParticlesBackground /> */}
//       </div>
//       <video 
//         autoPlay 
//         loop 
//         muted 
//         playsInline 
//         poster={heroFallbackImage}
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src={heroVideo} type="video/mp4" />
//         <img src={heroFallbackImage} alt="Modern window blinds" className="w-full h-full object-cover" />
//       </video>

//       {/* Content */}
//       <div className="container mx-auto px-4 h-full flex items-center relative z-20">
//         <div className="max-w-2xl">
//           {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
//             <span className="text-accent">Elevate</span> Your Spaces With <br />
//             <span className="text-accent">Premium</span> Window Blinds
//           </h1> */}

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
//   <span className="inline-block overflow-hidden">
//     <span className="animate-fadeInUp block">Elevate Your Spaces With</span>
//   </span>
//   <span className="inline-block overflow-hidden">
//     <span className="animate-fadeInUp block delay-100">Premium Window Blinds</span>
//   </span>
// </h1>
          
//           <p className="text-xl mb-8 text-white/90 max-w-lg drop-shadow-md">
//             Experience perfect light control with our handcrafted, high-quality blinds that combine functionality with stunning aesthetics.
//           </p>
          
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <a 
//               href="#products" 
//               className="bg-accent hover:bg-yellow-500 text-dark font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               Explore Collections
//             </a>
//             <a 
//               href="#contact" 
//               className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               Book Free Consultation
//             </a>
//           </div>

//           {/* Floating decorative elements */}
//           <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-accent/20 blur-xl z-0"></div>
//           <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-xl z-0"></div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
//         <div className="w-8 h-14 rounded-3xl border-2 border-white flex justify-center p-1">
//           <div className="w-2 h-2 bg-white rounded-full animate-scroll"></div>
//         </div>
//       </div>
//     </section>
//   );
// };




// export default Hero;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiArrowRight, FiStar, FiAward, FiTrendingUp, FiCheck } from 'react-icons/fi';
import heroVideo from '../assets/videos/hero-video.mp4';
import heroFallbackImage from '../assets/images/vertical-blinds.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroTexts = [
    {
      title: "Transform Your Space",
      subtitle: "With Premium Window Blinds",
      description: "Experience the perfect blend of elegance and functionality with our handcrafted, smart window solutions.",
      accent: "Transform"
    },
    {
      title: "Smart Home Integration",
      subtitle: "Automated Blind Solutions",
      description: "Control your blinds with voice commands, smartphone apps, or set automatic schedules for ultimate convenience.",
      accent: "Smart"
    },
    {
      title: "Luxury Meets Innovation",
      subtitle: "Designer Collections",
      description: "Discover our exclusive range of premium blinds designed by industry experts for the modern lifestyle.",
      accent: "Luxury"
    }
  ];

  const stats = [
    { icon: FiStar, value: "15K+", label: "Happy Customers" },
    { icon: FiAward, value: "99%", label: "Satisfaction Rate" },
    { icon: FiTrendingUp, value: "50+", label: "Cities Served" }
  ];

  const features = [
    "✨ Premium Quality Materials",
    "🚀 Smart Home Integration", 
    "🎨 Custom Design Options",
    "🔧 Professional Installation"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      

      {/* Animated Background with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster={heroFallbackImage}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          >
            <source src={heroVideo} type="video/mp4" />
            <img src={heroFallbackImage} alt="Modern window blinds" className="w-full h-full object-cover" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating Particles Effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, -100, null],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 h-screen flex items-center relative z-20"
>
      

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            
            {/* Badge */}
            {/* <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FiAward className="text-yellow-400 mr-2" />
              <span className="text-white/90 font-medium">India's #1 Premium Blinds Brand</span>
            </motion.div> */}

            {/* Dynamic Title */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    {heroTexts[currentSlide].title.replace(heroTexts[currentSlide].accent, '')}
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                    {heroTexts[currentSlide].accent}
                  </span>
                  <span className="text-white/90 block text-3xl md:text-4xl lg:text-5xl font-light mt-2">
                    {heroTexts[currentSlide].subtitle}
                  </span>
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {heroTexts[currentSlide].description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-lg">{feature.split(' ')[0]}</span>
                  <span className="font-medium">{feature.substring(feature.indexOf(' ') + 1)}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#products" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-white overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative z-10 flex items-center justify-center">
                  <span className="mr-3">Explore Premium Collections</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-8 skew-x-12"
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.a>

              <motion.button 
                onClick={() => setIsVideoPlaying(true)}
                className="group flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="mr-3 p-2 bg-white/20 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiPlay />
                </motion.div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-xl border border-white/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <stat.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 1.2 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Elements */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            
            
            <div className="relative w-full h-96">
              
              
              {/* <motion.div
                className="absolute top-0 right-0 w-80 h-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Smart Control</h3>
                    <p className="text-white/80">Voice & app-controlled blinds for modern homes</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">₹15,000</div>
                      <div className="text-white/60 line-through">₹18,000</div>
                    </div>
                  </div>
                </div>
              </motion.div> */}

              {/* Secondary Card */}
              <motion.div
                className="absolute bottom-0 left-0 w-72 h-48 bg-gradient-to-br from-purple/10 to-pink/5 backdrop-blur-xl rounded-3xl border border-purple/20 p-6 shadow-2xl"
                animate={{ 
                  y: [0, 15, 0],
                  rotateY: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ scale: 1.05, rotateY: -10 }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Premium Materials</h4>
                    <p className="text-white/80 text-sm">Handcrafted with finest quality materials</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/80 text-sm">4.9/5 Rating</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FiCheck className="text-white text-2xl" />
              </motion.div>

              <motion.div
                className="absolute bottom-32 right-8 w-12 h-12 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiTrendingUp className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {heroTexts.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className="w-8 h-16 rounded-3xl border-2 border-white/40 flex justify-center p-2 cursor-pointer group hover:border-white/80 transition-colors"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="text-white/60 text-sm mt-2 text-center">Scroll</div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full aspect-video bg-black rounded-2xl overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                autoPlay 
                controls
                className="w-full h-full"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <motion.button
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsVideoPlaying(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/10 to-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default Hero;