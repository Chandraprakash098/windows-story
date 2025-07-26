// import React from 'react';
// import { FiStar } from 'react-icons/fi';
// import testimonial1 from '../assets/images/feature-customization.jpg';
// import testimonial2 from '../assets/images/feature-durability.png';
// import testimonial3 from '../assets/images/feature-easy-maintenance.jpg';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Rahul Sharma",
//       role: "Homeowner, Mumbai",
//       content: "The blinds we got from HighTech have completely transformed our living room. The quality is exceptional and the service was outstanding.",
//       rating: 5,
//       image: testimonial1
//     },
//     {
//       id: 2,
//       name: "Priya Patel",
//       role: "Interior Designer, Delhi",
//       content: "I regularly recommend HighTech Window Blinds to my clients. Their products are stylish, durable, and offer excellent value for money.",
//       rating: 5,
//       image: testimonial2
//     },
//     {
//       id: 3,
//       name: "Vikram Mehta",
//       role: "Office Manager, Bangalore",
//       content: "We installed HighTech blinds in our entire office building. They look professional, function perfectly, and were installed on time.",
//       rating: 4,
//       image: testimonial3
//     }
//   ];

//   return (
//     <section id="testimonials" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Don't just take our word for it - hear from our satisfied customers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <FiStar 
//                     key={i} 
//                     className={`${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'} w-5 h-5`} 
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
//               <div className="flex items-center">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name} 
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-bold text-primary">{testimonial.name}</h4>
//                   <p className="text-gray-500 text-sm">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React, { useState, useEffect } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import testimonial1 from '../assets/images/feature-customization.jpg';
import testimonial2 from '../assets/images/feature-durability.png';
import testimonial3 from '../assets/images/feature-easy-maintenance.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chandra Prakash",
      role: "Sitamarhi Bihar",
      content: "The blinds we got from HighTech have completely transformed our living room. The quality is exceptional and the service was outstanding. The installation team was professional and completed the work ahead of schedule.",
      rating: 5,
      image: testimonial1
    },
    {
      id: 2,
      name: "Abhishek Kumar",
      role: "Aurangabad Bihar",
      content: "I regularly recommend HighTech Window Blinds to my clients. Their products are stylish, durable, and offer excellent value for money. The customization options allow me to create the perfect look for any space.",
      rating: 5,
      image: testimonial2
    },
    {
      id: 3,
      name: "Abhishek Charan",
      role: "Jaipur Rajasthan",
      content: "We installed HighTech blinds in our entire office building. They look professional, function perfectly, and were installed on time. The energy savings from the thermal insulation have been noticeable on our electricity bills.",
      rating: 4,
      image: testimonial3
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-200 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
            Customer Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from homeowners, designers, and businesses who've transformed their spaces with our products.
          </p>
        </motion.div>

        {/* Desktop Grid View (3 columns) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} w-5 h-5`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} w-5 h-5`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{testimonials[currentIndex].content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;