// import React from 'react';
// import { FiSun, FiShield, FiAward, FiSettings } from 'react-icons/fi';

// const Features = () => {
//   const features = [
//     {
//       icon: <FiSun size={48} className="text-accent" />,
//       title: "Light Control",
//       description: "Adjustable blinds for perfect light filtration and privacy"
//     },
//     {
//       icon: <FiShield size={48} className="text-accent" />,
//       title: "UV Protection",
//       description: "Protect your furniture from harmful UV rays"
//     },
//     {
//       icon: <FiAward size={48} className="text-accent" />,
//       title: "Premium Quality",
//       description: "Made with high-grade materials for long-lasting durability"
//     },
//     {
//       icon: <FiSettings size={48} className="text-accent" />,
//       title: "Easy Maintenance",
//       description: "Simple to clean and maintain for years of use"
//     }
//   ];

//   return (
//     <section id="features" className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             We provide the best window blind solutions with exceptional quality and service.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
//               <div className="flex justify-center mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;




import React from 'react';
import { FiSun, FiShield, FiAward, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <FiSun className="w-12 h-12" />,
      title: "Light Control",
      description: "Adjustable blinds for perfect light filtration and privacy. Our precision-engineered slats allow you to control sunlight with millimeter accuracy.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "UV Protection",
      description: "Protect your furniture from harmful UV rays. Our special coatings block up to 99% of UV radiation while maintaining visibility.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: <FiAward className="w-12 h-12" />,
      title: "Premium Quality",
      description: "Made with high-grade materials for long-lasting durability. Each blind undergoes 25 quality checks before installation.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500"
    },
    {
      icon: <FiSettings className="w-12 h-12" />,
      title: "Easy Maintenance",
      description: "Simple to clean and maintain for years of use. Our patented dust-repellent fabric keeps blinds cleaner for longer.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 -top-20 h-20 bg-gradient-to-r from-orange-100 via-blue-100 to-purple-100 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Superior Window <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with timeless design to create window treatments that elevate your space.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative group overflow-hidden rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${feature.bgColor}`}
            >
              {/* Animated background element */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${feature.iconColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-white shadow-md ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
                
                {/* Learn more link */}
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-sm font-medium group">
                    <span className={`${feature.iconColor}`}>Learn more</span>
                    <svg className={`ml-1 w-4 h-4 ${feature.iconColor} transition-transform group-hover:translate-x-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section below features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-white rounded-2xl shadow-sm p-8 sm:p-10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Cities Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;