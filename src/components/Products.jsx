// // import React from 'react';
// // import { FiArrowRight } from 'react-icons/fi';
// // import product1 from '../assets/images/vertical-blinds.jpg';
// // import product2 from '../assets/images/vertical-blinds.jpg';
// // import product3 from '../assets/images/vertical-blinds.jpg';
// // import product4 from '../assets/images/vertical-blinds.jpg';

// // const Products = () => {
// //   const products = [
// //     {
// //       id: 1,
// //       name: 'Roller Blinds',
// //       description: 'Sleek and modern roller blinds for perfect light control',
// //       image: product1,
// //     },
// //     {
// //       id: 2,
// //       name: 'Vertical Blinds',
// //       description: 'Elegant vertical blinds ideal for large windows and doors',
// //       image: product2,
// //     },
// //     {
// //       id: 3,
// //       name: 'Wooden Blinds',
// //       description: 'Classic wooden blinds for a warm and natural look',
// //       image: product3,
// //     },
// //     {
// //       id: 4,
// //       name: 'Day & Night Blinds',
// //       description: 'Innovative dual-layer blinds for adjustable privacy',
// //       image: product4,
// //     },
// //   ];

// //   return (
// //     <section id="products" className="py-16 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Premium Products</h2>
// //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //             Explore our wide range of high-quality window blinds designed to suit every style and need.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {products.map((product) => (
// //             <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
// //               <div className="h-48 overflow-hidden">
// //                 <img 
// //                   src={product.image} 
// //                   alt={product.name} 
// //                   className="w-full h-full object-cover hover:scale-105 transition duration-500"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
// //                 <p className="text-gray-600 mb-4">{product.description}</p>
// //                 <a 
// //                   href="#contact" 
// //                   className="inline-flex items-center text-accent font-medium hover:text-yellow-600 transition duration-300"
// //                 >
// //                   Get Quote <FiArrowRight className="ml-2" />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="text-center mt-12">
// //           <a 
// //             href="#contact" 
// //             className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
// //           >
// //             View All Products
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Products;





// import React, { useState } from 'react';
// import { FiArrowRight, FiHeart, FiShoppingCart, FiSearch, FiStar } from 'react-icons/fi';
// import { motion } from 'framer-motion';
// import product1 from '../assets/images/roman-blinds.jpg';
// import product2 from '../assets/images/vertical-blinds.jpg';
// import product3 from '../assets/images/wooden-blinds.jpg';
// import product4 from '../assets/images/gallary1.jpg';

// const Products = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (id) => {
//     if (favorites.includes(id)) {
//       setFavorites(favorites.filter(favId => favId !== id));
//     } else {
//       setFavorites([...favorites, id]);
//     }
//   };

//   const products = [
//     {
//       id: 1,
//       name: 'Roller Blinds',
//       description: 'Sleek and modern roller blinds for perfect light control with smooth operation',
//       image: product1,
//       price: '₹2,499',
//       oldPrice: '₹3,199',
//       rating: 4.8,
//       category: 'premium',
//       colors: ['#1a365d', '#718096', '#ecc94b'],
//       features: ['UV Protection', 'Light Filtering', 'Child Safe']
//     },
//     {
//       id: 2,
//       name: 'Vertical Blinds',
//       description: 'Elegant vertical blinds ideal for large windows and patio doors',
//       image: product2,
//       price: '₹3,299',
//       oldPrice: '₹4,199',
//       rating: 4.6,
//       category: 'classic',
//       colors: ['#ffffff', '#a0aec0', '#4a5568'],
//       features: ['Sound Dampening', 'Energy Efficient', 'Easy Maintenance']
//     },
//     {
//       id: 3,
//       name: 'Wooden Blinds',
//       description: 'Classic wooden blinds for a warm and natural aesthetic',
//       image: product3,
//       price: '₹4,899',
//       oldPrice: '₹5,999',
//       rating: 4.9,
//       category: 'premium',
//       colors: ['#5f370e', '#975a16', '#b7791f'],
//       features: ['Premium Materials', 'Timeless Design', 'Durable']
//     },
//     {
//       id: 4,
//       name: 'Day & Night Blinds',
//       description: 'Innovative dual-layer blinds for adjustable privacy and light',
//       image: product4,
//       price: '₹3,899',
//       oldPrice: '₹4,799',
//       rating: 4.7,
//       category: 'smart',
//       colors: ['#2d3748', '#4a5568', '#cbd5e0'],
//       features: ['Adjustable Light', 'Privacy Control', 'Modern Look']
//     },
//     {
//       id: 5,
//       name: 'Roman Blinds',
//       description: 'Luxurious fabric blinds that create elegant folds when raised',
//       image: product1,
//       price: '₹3,599',
//       oldPrice: '₹4,299',
//       rating: 4.5,
//       category: 'classic',
//       colors: ['#805ad5', '#d53f8c', '#f6ad55'],
//       features: ['Soft Fabric', 'Elegant Folds', 'Light Filtering']
//     },
//     {
//       id: 6,
//       name: 'Smart Motorized Blinds',
//       description: 'Automated blinds controlled via app or voice commands',
//       image: product2,
//       price: '₹8,999',
//       oldPrice: '₹10,499',
//       rating: 4.9,
//       category: 'smart',
//       colors: ['#1a365d', '#2d3748', '#4a5568'],
//       features: ['App Control', 'Voice Activated', 'Schedule Operation']
//     },
//     {
//       id: 7,
//       name: 'Blackout Blinds',
//       description: 'Complete light blocking for better sleep and media rooms',
//       image: product3,
//       price: '₹3,199',
//       oldPrice: '₹3,899',
//       rating: 4.7,
//       category: 'premium',
//       colors: ['#000000', '#1a202c', '#2d3748'],
//       features: ['100% Blackout', 'Energy Saving', 'Noise Reducing']
//     },
//     {
//       id: 8,
//       name: 'Sheer Blinds',
//       description: 'Delicate fabric that softly filters sunlight while maintaining privacy',
//       image: product4,
//       price: '₹2,799',
//       oldPrice: '₹3,299',
//       rating: 4.4,
//       category: 'classic',
//       colors: ['#f7fafc', '#edf2f7', '#e2e8f0'],
//       features: ['Soft Light', 'Elegant Look', 'UV Protection']
//     }
//   ];

//   const filteredProducts = activeTab === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeTab);

//   const categories = [
//     { id: 'all', name: 'All Products' },
//     { id: 'premium', name: 'Premium Collection' },
//     { id: 'classic', name: 'Classic Styles' },
//     { id: 'smart', name: 'Smart Blinds' }
//   ];

//   return (
//     <section id="products" className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <span className="inline-block bg-accent/20 text-accent font-medium py-1 px-3 rounded-full mb-3">
//             Our Collections
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
//             Premium <span className="text-accent">Window Blinds</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover our exquisite range of blinds designed to enhance your living spaces with style and functionality.
//           </p>
//         </motion.div>

//         {/* Category Tabs */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center mb-12 gap-2"
//         >
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setActiveTab(category.id)}
//               className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === category.id 
//                 ? 'bg-primary text-white shadow-lg' 
//                 : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredProducts.map((product) => (
//             <motion.div 
//               key={product.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//             >
//               {/* Product Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
                
//                 {/* Badges */}
//                 <div className="absolute top-4 left-4 flex gap-2">
//                   {product.oldPrice && (
//                     <span className="bg-accent text-dark font-bold text-xs px-2 py-1 rounded">
//                       SALE
//                     </span>
//                   )}
//                   {product.category === 'smart' && (
//                     <span className="bg-primary text-white font-bold text-xs px-2 py-1 rounded">
//                       SMART
//                     </span>
//                   )}
//                 </div>
                
//                 {/* Quick Actions */}
//                 <div className="absolute top-4 right-4 flex flex-col gap-2">
//                   <button 
//                     onClick={() => toggleFavorite(product.id)}
//                     className={`p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md transition-all ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}`}
//                   >
//                     <FiHeart className={`${favorites.includes(product.id) ? 'fill-current' : ''}`} />
//                   </button>
//                   <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-gray-700 hover:text-primary transition-all">
//                     <FiSearch />
//                   </button>
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-primary">{product.name}</h3>
//                   <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded">
//                     <FiStar className="fill-current mr-1" />
//                     <span className="font-medium">{product.rating}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 mb-4">{product.description}</p>
                
//                 {/* Color Options */}
//                 <div className="flex gap-2 mb-4">
//                   {product.colors.map((color, index) => (
//                     <div 
//                       key={index} 
//                       className="w-5 h-5 rounded-full border border-gray-200 cursor-pointer"
//                       style={{ backgroundColor: color }}
//                       title={`Color option ${index + 1}`}
//                     />
//                   ))}
//                 </div>
                
//                 {/* Features */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {product.features.map((feature, index) => (
//                     <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
                
//                 {/* Price and CTA */}
//                 <div className="flex justify-between items-center mt-4">
//                   <div>
//                     <span className="text-xl font-bold text-primary">{product.price}</span>
//                     {product.oldPrice && (
//                       <span className="text-sm text-gray-400 line-through ml-2">{product.oldPrice}</span>
//                     )}
//                   </div>
//                   <button className="bg-accent hover:bg-yellow-500 text-dark font-bold px-4 py-2 rounded-lg flex items-center transition-all group-hover:scale-105">
//                     <FiShoppingCart className="mr-2" />
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <a 
//             href="#contact" 
//             className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-xl hover:scale-105"
//           >
//             View All Collections
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Products;



// import React, { useState, useEffect } from 'react';
// import { Heart, ShoppingCart, Search, Star, Eye, Zap, Shield, Award, ArrowRight, Filter, Grid, List } from 'lucide-react';

// const Products = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [favorites, setFavorites] = useState([]);
//   const [viewMode, setViewMode] = useState('grid');
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const toggleFavorite = (id) => {
//     if (favorites.includes(id)) {
//       setFavorites(favorites.filter(favId => favId !== id));
//     } else {
//       setFavorites([...favorites, id]);
//     }
//   };

//   const products = [
//     {
//       id: 1,
//       name: 'Premium Roller Blinds',
//       description: 'Sleek and modern roller blinds for perfect light control with smooth operation and premium materials',
//       image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
//       price: '₹2,499',
//       oldPrice: '₹3,199',
//       rating: 4.8,
//       reviews: 124,
//       category: 'premium',
//       colors: ['#1a365d', '#718096', '#ecc94b'],
//       features: ['UV Protection', 'Light Filtering', 'Child Safe'],
//       badge: 'Best Seller',
//       discount: 22
//     },
    
//     {
//       id: 2,
//       name: 'Artisan Wooden Blinds',
//       description: 'Classic wooden blinds crafted for a warm and natural aesthetic with premium wood finish',
//       image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
//       price: '₹4,899',
//       oldPrice: '₹5,999',
//       rating: 4.9,
//       reviews: 156,
//       category: 'premium',
//       colors: ['#5f370e', '#975a16', '#b7791f'],
//       features: ['Premium Materials', 'Timeless Design', 'Durable'],
//       badge: 'Luxury',
//       discount: 18
//     },
    
//     {
//       id: 3,
//       name: 'Designer Roman Blinds',
//       description: 'Luxurious fabric blinds that create elegant folds when raised with premium materials',
//       image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
//       price: '₹3,599',
//       oldPrice: '₹4,299',
//       rating: 4.5,
//       reviews: 67,
//       category: 'classic',
//       colors: ['#805ad5', '#d53f8c', '#f6ad55'],
//       features: ['Soft Fabric', 'Elegant Folds', 'Light Filtering'],
//       badge: 'Designer',
//       discount: 16
//     },
    
//     {
//       id: 4,
//       name: 'Total Blackout Blinds',
//       description: 'Complete light blocking solution for better sleep and media rooms with advanced materials',
//       image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
//       price: '₹3,199',
//       oldPrice: '₹3,899',
//       rating: 4.7,
//       reviews: 143,
//       category: 'premium',
//       colors: ['#000000', '#1a202c', '#2d3748'],
//       features: ['100% Blackout', 'Energy Saving', 'Noise Reducing'],
//       badge: 'Pro Series',
//       discount: 18
//     }
//   ];

//   const filteredProducts = activeTab === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeTab);

//   const categories = [
//     { id: 'all', name: 'All Products', icon: Grid, count: products.length },
//     { id: 'premium', name: 'Premium Collection', icon: Award, count: products.filter(p => p.category === 'premium').length },
//     { id: 'classic', name: 'Classic Styles', icon: Shield, count: products.filter(p => p.category === 'classic').length },
//     { id: 'smart', name: 'Smart Blinds', icon: Zap, count: products.filter(p => p.category === 'smart').length }
//   ];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       <div className="relative container mx-auto px-4 py-20">
//         {/* Hero Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-sm border border-blue-200/50 text-blue-700 font-semibold py-2 px-6 rounded-full mb-6 shadow-lg">
//             <Award className="w-4 h-4 mr-2" />
//             Premium Collections 2024
//           </div>
          
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6 leading-tight">
//             Revolutionary
//             <br />
//             <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
//               Window Blinds
//             </span>
//           </h2>
          
//           <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
//             Experience the perfect fusion of cutting-edge technology and timeless elegance in our premium blind collection
//           </p>
//         </div>

//         {/* Advanced Filter Controls */}
//         <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
//             {/* Category Tabs */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-3">
//               {categories.map((category, index) => {
//                 const IconComponent = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setActiveTab(category.id)}
//                     className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
//                       activeTab === category.id 
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25' 
//                         : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border border-slate-200 shadow-lg hover:shadow-xl'
//                     }`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <IconComponent className="w-5 h-5" />
//                     <span>{category.name}</span>
//                     <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
//                       activeTab === category.id 
//                         ? 'bg-white/20 text-white' 
//                         : 'bg-blue-100 text-blue-600'
//                     }`}>
//                       {category.count}
//                     </span>
//                     {activeTab === category.id && (
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 -z-10"></div>
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* View Toggle */}
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-slate-200">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}
//               >
//                 <Grid className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setViewMode('list')}
//                 className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}
//               >
//                 <List className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 lg:grid-cols-2'} gap-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//           {filteredProducts.map((product, index) => (
//             <div 
//               key={product.id}
//               className="group relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Premium Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Image Container */}
//               <div className="relative h-64 lg:h-72 overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 {/* Dynamic Badges */}
//                 <div className="absolute top-4 left-4 flex flex-col gap-2">
//                   <span className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg">
//                     -{product.discount}%
//                   </span>
//                   <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg">
//                     {product.badge}
//                   </span>
//                 </div>
                
//                 {/* Interactive Action Buttons */}
//                 <div className="absolute top-4 right-4 flex flex-col gap-2">
//                   <button 
//                     onClick={() => toggleFavorite(product.id)}
//                     className={`p-3 rounded-full backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 ${
//                       favorites.includes(product.id) 
//                         ? 'bg-red-500 text-white' 
//                         : 'bg-white/90 text-slate-700 hover:bg-red-500 hover:text-white'
//                     }`}
//                   >
//                     <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
//                   </button>
//                   <button className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-slate-700 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110">
//                     <Eye className="w-4 h-4" />
//                   </button>
//                   <button className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-slate-700 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110">
//                     <Search className="w-4 h-4" />
//                   </button>
//                 </div>

//                 {/* Hover Overlay with Quick Actions */}
//                 <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//                   <button className="bg-white text-slate-800 font-bold py-3 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl">
//                     Quick View
//                   </button>
//                 </div>
//               </div>

//               {/* Product Details */}
//               <div className="p-6 lg:p-8">
//                 {/* Header */}
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
//                       {product.name}
//                     </h3>
//                     <div className="flex items-center gap-2">
//                       <div className="flex items-center bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full shadow-md">
//                         <Star className="w-4 h-4 fill-current mr-1" />
//                         <span className="font-bold text-sm">{product.rating}</span>
//                       </div>
//                       <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                
//                 {/* Color Palette */}
//                 <div className="flex items-center gap-3 mb-6">
//                   <span className="text-sm font-semibold text-slate-700">Colors:</span>
//                   <div className="flex gap-2">
//                     {product.colors.map((color, index) => (
//                       <div 
//                         key={index} 
//                         className="w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform hover:scale-110"
//                         style={{ backgroundColor: color }}
//                         title={`Color option ${index + 1}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Premium Features */}
//                 <div className="mb-6">
//                   <div className="flex flex-wrap gap-2">
//                     {product.features.map((feature, index) => (
//                       <span 
//                         key={index} 
//                         className="inline-flex items-center text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-2 rounded-full border border-blue-200/50 font-medium"
//                       >
//                         <Shield className="w-3 h-3 mr-1" />
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Price and CTA */}
//                 <div className="flex justify-between items-center pt-4 border-t border-slate-200">
//                   <div className="flex flex-col">
//                     <div className="flex items-baseline gap-3">
//                       <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         {product.price}
//                       </span>
//                       {product.oldPrice && (
//                         <span className="text-lg text-slate-400 line-through">{product.oldPrice}</span>
//                       )}
//                     </div>
//                     <span className="text-sm text-green-600 font-semibold">Free Installation</span>
//                   </div>
                  
//                   <button className="group/btn relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
//                     <span className="relative z-10 flex items-center gap-2">
//                       <ShoppingCart className="w-5 h-5" />
//                       Add to Cart
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="relative inline-block">
//             <button className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-black text-lg px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden">
//               <span className="relative z-10 flex items-center gap-3">
//                 Explore Complete Collection
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//             </button>
            
//             {/* Floating Elements */}
//             <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-700"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;




import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Search, Star, Eye, Filter, Grid, List, Award, Shield, Zap } from 'lucide-react';
import img1 from '../assets/images/feature-durability.png'
import img2 from '../assets/images/feature-customization.jpg'
import img3 from '../assets/images/feature-easy-maintenance.jpg'
import img4 from '../assets/images/gallary1.jpg'

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Premium Roller Blinds',
      description: 'Sleek and modern roller blinds for perfect light control with smooth operation and premium materials.',
      image:img3,
      price: 2499,
      oldPrice: 3199,
      rating: 4.8,
      reviews: 124,
      category: 'premium',
      colors: ['#1a365d', '#718096', '#ecc94b'],
      features: ['UV Protection', 'Light Filtering', 'Child Safe'],
      badge: 'Best Seller',
      discount: 22,
      inStock: true
    },
    {
      id: 2,
      name: 'Artisan Wooden Blinds',
      description: 'Classic wooden blinds crafted for a warm and natural aesthetic with premium wood finish.',
      image:img1,
      price: 4899,
      oldPrice: 5999,
      rating: 4.9,
      reviews: 156,
      category: 'premium',
      colors: ['#5f370e', '#975a16', '#b7791f'],
      features: ['Premium Wood', 'Handcrafted', 'Durable'],
      badge: 'Luxury',
      discount: 18,
      inStock: true
    },
    {
      id: 3,
      name: 'Designer Roman Blinds',
      description: 'Luxurious fabric blinds that create elegant folds when raised with premium materials.',
      image: img2,
      price: 3599,
      oldPrice: 4299,
      rating: 4.5,
      reviews: 67,
      category: 'classic',
      colors: ['#805ad5', '#d53f8c', '#f6ad55'],
      features: ['Soft Fabric', 'Elegant Folds', 'Light Filtering'],
      badge: 'Designer',
      discount: 16,
      inStock: true
    },
    {
      id: 4,
      name: 'Total Blackout Blinds',
      description: 'Complete light blocking solution for better sleep and media rooms with advanced materials.',
      image: img4,
      price: 3199,
      oldPrice: 3899,
      rating: 4.7,
      reviews: 143,
      category: 'premium',
      colors: ['#000000', '#1a202c', '#2d3748'],
      features: ['100% Blackout', 'Energy Saving', 'Noise Reducing'],
      badge: 'Pro Series',
      discount: 18,
      inStock: true
    },
    
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  const categories = [
    { id: 'all', name: 'All Products', icon: Grid, count: products.length },
    { id: 'premium', name: 'Premium', icon: Award, count: products.filter(p => p.category === 'premium').length },
    { id: 'classic', name: 'Classic', icon: Shield, count: products.filter(p => p.category === 'classic').length },
    { id: 'smart', name: 'Smart', icon: Zap, count: products.filter(p => p.category === 'smart').length }
  ];

  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Window Blinds
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your space with our collection of high-quality blinds designed for style and functionality
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="mb-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filters & Categories
            </button>
          </div>

          {/* Filter Controls */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white rounded-lg p-4 shadow-sm border">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                      <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden ${
                viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${viewMode === 'list' ? 'sm:w-1/3' : 'aspect-square'} overflow-hidden`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.badge}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      favorites.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`p-4 ${viewMode === 'list' ? 'sm:w-2/3 flex flex-col justify-between' : ''}`}>
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-yellow-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Colors */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-500">Colors:</span>
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <div 
                          key={index}
                          className="w-5 h-5 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                          title={`Color ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-green-600 font-medium">Free Installation</span>
                  </div>

                  <button 
                    disabled={!product.inStock}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try changing your filters or search terms</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;