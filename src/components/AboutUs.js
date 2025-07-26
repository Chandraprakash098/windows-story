// import React, { useState, useEffect } from "react";
// import {
//   Award,
//   Users,
//   Heart,
//   Target,
//   Star,
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   CheckCircle,
//   TrendingUp,
//   Shield,
//   Zap,
//   Globe,
//   ArrowRight,
//   Quote,
// } from "lucide-react";

// const AboutUs = () => {
//   const [activeTab, setActiveTab] = useState("story");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const stats = [
//     {
//       icon: Users,
//       number: "50,000+",
//       label: "Happy Customers",
//       color: "text-blue-600",
//     },
//     {
//       icon: Award,
//       number: "15+",
//       label: "Years Experience",
//       color: "text-green-600",
//     },
//     {
//       icon: Star,
//       number: "4.9",
//       label: "Average Rating",
//       color: "text-yellow-600",
//     },
//     {
//       icon: Globe,
//       number: "100+",
//       label: "Cities Served",
//       color: "text-purple-600",
//     },
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: "Customer First",
//       description:
//         "We prioritize customer satisfaction above everything else, ensuring every interaction exceeds expectations.",
//       color: "bg-red-100 text-red-600",
//     },
//     {
//       icon: Shield,
//       title: "Quality Assurance",
//       description:
//         "Premium materials and rigorous quality checks ensure our products stand the test of time.",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: Zap,
//       title: "Innovation",
//       description:
//         "We continuously innovate to bring you the latest in window treatment technology and design.",
//       color: "bg-yellow-100 text-yellow-600",
//     },
//     {
//       icon: CheckCircle,
//       title: "Reliability",
//       description:
//         "From consultation to installation, we deliver on our promises with professional excellence.",
//       color: "bg-green-100 text-green-600",
//     },
//   ];

//   const team = [
//     {
//       name: "Rajesh Kumar",
//       role: "Founder & CEO",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
//       bio: "15+ years in home decor industry",
//       linkedin: "#",
//     },
//     {
//       name: "Priya Sharma",
//       role: "Head of Design",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&q=80",
//       bio: "Interior design expert with creative vision",
//       linkedin: "#",
//     },
//     {
//       name: "Amit Patel",
//       role: "Technical Director",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
//       bio: "Smart home technology specialist",
//       linkedin: "#",
//     },
//     {
//       name: "Sunita Gupta",
//       role: "Customer Success Manager",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
//       bio: "Dedicated to customer satisfaction",
//       linkedin: "#",
//     },
//   ];

//   const milestones = [
//     {
//       year: "2009",
//       event: "Company Founded",
//       description: "Started with a vision to transform Indian homes",
//     },
//     {
//       year: "2012",
//       event: "First 1000 Customers",
//       description: "Reached our first major milestone",
//     },
//     {
//       year: "2015",
//       event: "Smart Blinds Launch",
//       description: "Introduced automated window solutions",
//     },
//     {
//       year: "2018",
//       event: "Pan-India Expansion",
//       description: "Extended services to 50+ cities",
//     },
//     {
//       year: "2020",
//       event: "Digital Transformation",
//       description: "Launched online platform and virtual consultations",
//     },
//     {
//       year: "2023",
//       event: "50,000+ Happy Homes",
//       description: "Celebrating our growing customer family",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Meera Shah",
//       location: "Mumbai",
//       rating: 5,
//       text: "Exceptional quality and service! The team was professional and the installation was flawless.",
//       image:
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
//     },
//     {
//       name: "Vikram Singh",
//       location: "Delhi",
//       rating: 5,
//       text: "Smart blinds have transformed our home. Great technology and excellent customer support.",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
//     },
//     {
//       name: "Anjali Reddy",
//       location: "Bangalore",
//       rating: 5,
//       text: "Beautiful designs and prompt delivery. Highly recommend for anyone looking for quality blinds.",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=100&q=80",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div
//             className={`text-center transition-all duration-1000 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               About <span className="text-blue-600">Premium Blinds</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
//               Transforming homes across India with premium window treatments
//               since 2009. We combine traditional craftsmanship with modern
//               technology to create the perfect ambiance for your space.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
//                 Our Story
//               </button>
//               <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} className="text-center">
//                   <div
//                     className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}
//                   >
//                     <IconComponent className="w-8 h-8" />
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900 mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Tabbed Content Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Tab Navigation */}
//           <div className="flex flex-col sm:flex-row justify-center mb-12 bg-white rounded-lg p-2 shadow-sm max-w-2xl mx-auto">
//             {[
//               { id: "story", label: "Our Story" },
//               { id: "mission", label: "Mission & Vision" },
//               { id: "values", label: "Our Values" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-1 px-6 py-3 rounded-md font-medium transition-colors ${
//                   activeTab === tab.id
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="max-w-4xl mx-auto">
//             {activeTab === "story" && (
//               <div className="bg-white rounded-xl p-8 shadow-sm">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                   Our Journey
//                 </h2>
//                 <div className="prose max-w-none text-gray-600 leading-relaxed">
//                   <p className="text-lg mb-6">
//                     Founded in 2009 by Rajesh Kumar, Premium Blinds began as a
//                     small family business with a simple mission: to bring
//                     high-quality, affordable window treatments to Indian homes.
//                     What started in a modest workshop in Mumbai has grown into
//                     one of India's most trusted names in window coverings.
//                   </p>
//                   <p className="mb-6">
//                     Over the years, we've witnessed the evolution of home decor
//                     trends and have consistently adapted our offerings to meet
//                     changing customer needs. From traditional roller blinds to
//                     smart, app-controlled window treatments, we've always stayed
//                     ahead of the curve.
//                   </p>
//                   <p>
//                     Today, we're proud to serve customers across 100+ cities in
//                     India, with a team of skilled craftsmen, designers, and
//                     customer service professionals who share our passion for
//                     excellence.
//                   </p>
//                 </div>
//               </div>
//             )}

//             {activeTab === "mission" && (
//               <div className="bg-white rounded-xl p-8 shadow-sm">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <div className="flex items-center mb-4">
//                       <Target className="w-8 h-8 text-blue-600 mr-3" />
//                       <h3 className="text-2xl font-bold text-gray-900">
//                         Our Mission
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       To transform every window into a perfect blend of
//                       functionality and aesthetics, making homes more
//                       comfortable, energy-efficient, and beautiful across India.
//                     </p>
//                   </div>
//                   <div>
//                     <div className="flex items-center mb-4">
//                       <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
//                       <h3 className="text-2xl font-bold text-gray-900">
//                         Our Vision
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       To be India's leading provider of innovative window
//                       solutions, setting new standards for quality, design, and
//                       customer service in the home decor industry.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "values" && (
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {values.map((value, index) => {
//                   const IconComponent = value.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl p-6 shadow-sm"
//                     >
//                       <div
//                         className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${value.color}`}
//                       >
//                         <IconComponent className="w-6 h-6" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-3">
//                         {value.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         {value.description}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Our Journey
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Key milestones that shaped our company and strengthened our
//               commitment to excellence
//             </p>
//           </div>

//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-200"></div>

//             {milestones.map((milestone, index) => (
//               <div
//                 key={index}
//                 className={`relative flex items-center mb-8 ${
//                   index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                 }`}
//               >
//                 <div
//                   className={`w-1/2 ${
//                     index % 2 === 0 ? "pr-8 text-right" : "pl-8"
//                   }`}
//                 >
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="text-2xl font-bold text-blue-600 mb-2">
//                       {milestone.year}
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                       {milestone.event}
//                     </h3>
//                     <p className="text-gray-600">{milestone.description}</p>
//                   </div>
//                 </div>

//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Meet Our Team
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               The passionate professionals behind Premium Blinds, dedicated to
//               bringing you the best window solutions
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
//               >
//                 <div className="aspect-square overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-600 font-medium mb-2">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-600 text-sm">{member.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;




import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Users, 
  Heart, 
  Target, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Quote,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
    
    
    
//     return () => clearInterval(interval);
//   }, []);

  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Customers', color: 'text-blue-600' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'text-yellow-600' },
    { icon: Globe, number: '100+', label: 'Cities Served', color: 'text-purple-600' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above everything else, ensuring every interaction exceeds expectations.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Premium materials and rigorous quality checks ensure our products stand the test of time.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously innovate to bring you the latest in window treatment technology and design.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'From consultation to installation, we deliver on our promises with professional excellence.',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const team = [
    {
      name: 'xyz',
      role: 'Founder & CEO',
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: '15+ years in home decor industry',
      linkedin: '#'
    },
    {
      name: 'xyz',
      role: 'co-founder & CEO',
    //   image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&q=80',
      bio: 'Interior design expert with creative vision',
      linkedin: '#'
    },
    {
      name: 'xyz',
      role: 'Co-founder & CTO',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Smart home technology specialist',
      linkedin: '#'
    },
    
  ];

  const milestones = [
    { year: '2009', event: 'Company Founded', description: 'Started with a vision to transform Indian homes' },
    { year: '2012', event: 'First 1000 Customers', description: 'Reached our first major milestone' },
    { year: '2015', event: 'Smart Blinds Launch', description: 'Introduced automated window solutions' },
    { year: '2018', event: 'Pan-India Expansion', description: 'Extended services to 50+ cities' },
    { year: '2020', event: 'Digital Transformation', description: 'Launched online platform and virtual consultations' },
    { year: '2023', event: '50,000+ Happy Homes', description: 'Celebrating our growing customer family' }
  ];

  
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Premium Blinds</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming homes across India with premium window treatments since 2009. 
              We combine traditional craftsmanship with modern technology to create the perfect ambiance for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-lg hover:shadow-blue-500/30"
              >
                Our Story
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium shadow-sm hover:shadow-gray-400/20"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 ${stat.color} shadow-md`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center mb-12 bg-white rounded-xl p-1 shadow-sm max-w-2xl mx-auto"
          >
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'mission', label: 'Mission & Vision' },
              { id: 'values', label: 'Our Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'story' && (
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                    <div className="prose max-w-none text-gray-600 leading-relaxed">
                      <p className="text-lg mb-6">
                        Founded in 2009 by Rajesh Kumar, Premium Blinds began as a small family business with a simple mission: 
                        to bring high-quality, affordable window treatments to Indian homes. What started in a modest workshop 
                        in Mumbai has grown into one of India's most trusted names in window coverings.
                      </p>
                      <p className="mb-6">
                        Over the years, we've witnessed the evolution of home decor trends and have consistently adapted our 
                        offerings to meet changing customer needs. From traditional roller blinds to smart, app-controlled 
                        window treatments, we've always stayed ahead of the curve.
                      </p>
                      <p>
                        Today, we're proud to serve customers across 100+ cities in India, with a team of skilled craftsmen, 
                        designers, and customer service professionals who share our passion for excellence.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'mission' && (
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl"
                      >
                        <div className="flex items-center mb-4">
                          <Target className="w-8 h-8 text-blue-600 mr-3" />
                          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          To transform every window into a perfect blend of functionality and aesthetics, 
                          making homes more comfortable, energy-efficient, and beautiful across India.
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl"
                      >
                        <div className="flex items-center mb-4">
                          <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
                          <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          To be India's leading provider of innovative window solutions, setting new standards 
                          for quality, design, and customer service in the home decor industry.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {values.map((value, index) => {
                      const IconComponent = value.icon;
                      return (
                        <motion.div 
                          key={index} 
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${value.color} shadow-sm`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our company and strengthened our commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-200 to-purple-200 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mb-4 md:mb-0`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow hidden md:block"></div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <div className="text-4xl font-bold text-gray-200 md:hidden">{milestone.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind Premium Blinds, dedicated to bringing you the best window solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden relative group">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm md:hidden">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Windows?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule a free consultation with our design experts today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-white/20 transition-all"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;