// import React from 'react';
// import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-accent">HighTech Window Blinds</h3>
//             <p className="mb-4">
//               Premium quality window blinds for homes and offices across India.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-accent transition duration-300">
//                 <FiFacebook size={20} />
//               </a>
//               <a href="#" className="text-white hover:text-accent transition duration-300">
//                 <FiTwitter size={20} />
//               </a>
//               <a href="#" className="text-white hover:text-accent transition duration-300">
//                 <FiInstagram size={20} />
//               </a>
//               <a href="#" className="text-white hover:text-accent transition duration-300">
//                 <FiLinkedin size={20} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#home" className="hover:text-accent transition duration-300">Home</a></li>
//               <li><a href="#products" className="hover:text-accent transition duration-300">Products</a></li>
//               <li><a href="#features" className="hover:text-accent transition duration-300">Features</a></li>
//               <li><a href="#testimonials" className="hover:text-accent transition duration-300">Testimonials</a></li>
//               <li><a href="#contact" className="hover:text-accent transition duration-300">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-4">Products</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-accent transition duration-300">Roller Blinds</a></li>
//               <li><a href="#" className="hover:text-accent transition duration-300">Vertical Blinds</a></li>
//               <li><a href="#" className="hover:text-accent transition duration-300">Wooden Blinds</a></li>
//               <li><a href="#" className="hover:text-accent transition duration-300">Day & Night Blinds</a></li>
//               <li><a href="#" className="hover:text-accent transition duration-300">Custom Blinds</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-4">Contact Info</h4>
//             <address className="not-italic">
//               <p className="mb-2">123 Business Avenue,</p>
//               <p className="mb-2">Mumbai, Maharashtra - 400001</p>
//               <p className="mb-2">Phone: +91 98765 43210</p>
//               <p className="mb-2">Email: info@hightechwindowblinds.in</p>
//             </address>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 pt-8 text-center">
//           <p>&copy; {new Date().getFullYear()} HighTech Window Blinds. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from 'react';
// import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 py-16">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
//           {/* Company Info */}
//           <div className="lg:col-span-1 space-y-6">
//             <div className="space-y-4">
//               <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 HighTech Window Blinds
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Transforming spaces with premium quality window blinds. Experience the perfect blend of style, functionality, and innovation.
//               </p>
//             </div>
            
//             {/* Social Media */}
//             <div className="flex space-x-4">
//               {[
//                 { icon: FiFacebook, color: 'hover:text-blue-400' },
//                 { icon: FiTwitter, color: 'hover:text-sky-400' },
//                 { icon: FiInstagram, color: 'hover:text-pink-400' },
//                 { icon: FiLinkedin, color: 'hover:text-blue-500' }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className={`p-3 bg-white/10 backdrop-blur-sm rounded-full ${social.color} hover:scale-110 hover:bg-white/20 transition-all duration-300 group`}
//                 >
//                   <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-white relative">
//               Quick Links
//               <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
//             </h4>
//             <ul className="space-y-3">
//               {['Home', 'Products', 'Features', 'Testimonials', 'Contact'].map((link, index) => (
//                 <li key={index}>
//                   <a 
//                     href={`#${link.toLowerCase()}`} 
//                     className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-white relative">
//               Our Products
//               <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
//             </h4>
//             <ul className="space-y-3">
//               {['Roller Blinds', 'Vertical Blinds', 'Wooden Blinds', 'Day & Night Blinds', 'Custom Solutions'].map((product, index) => (
//                 <li key={index}>
//                   <a 
//                     href="#" 
//                     className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                     {product}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-white relative">
//               Get In Touch
//               <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
//             </h4>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3 group">
//                 <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors duration-300">
//                   <FiMapPin size={18} className="text-pink-400" />
//                 </div>
//                 <div>
//                   <p className="text-gray-300">123 Business Avenue,</p>
//                   <p className="text-gray-300">Mumbai, Maharashtra - 400001</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3 group">
//                 <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors duration-300">
//                   <FiPhone size={18} className="text-blue-400" />
//                 </div>
//                 <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-300">
//                   +91 98765 43210
//                 </a>
//               </div>
              
//               <div className="flex items-center space-x-3 group">
//                 <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors duration-300">
//                   <FiMail size={18} className="text-purple-400" />
//                 </div>
//                 <a href="mailto:info@hightechwindowblinds.in" className="text-gray-300 hover:text-white transition-colors duration-300">
//                   info@hightechwindowblinds.in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Signup */}
//         <div className="mb-12">
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//             <div className="text-center space-y-4">
//               <h4 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Stay Updated
//               </h4>
//               <p className="text-gray-300 max-w-md mx-auto">
//                 Subscribe to our newsletter for the latest designs and exclusive offers.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
//                 />
//                 <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-center md:text-left">
//               &copy; {new Date().getFullYear()} HighTech Window Blinds. All Rights Reserved. | Crafted with ❤️ in India
//             </p>
//             <div className="flex items-center space-x-6">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
//               <button
//                 onClick={scrollToTop}
//                 className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <FiArrowUp size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.4;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Glowing Particles Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.1,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      
      <div className="absolute inset-0 border-t border-white/5 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Windows Story
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transforming spaces with premium quality window blinds. Experience the perfect blend of style, functionality, and innovation.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: FiFacebook, color: 'hover:text-blue-400' },
                { icon: FiTwitter, color: 'hover:text-sky-400' },
                { icon: FiInstagram, color: 'hover:text-pink-400' },
                { icon: FiLinkedin, color: 'hover:text-blue-500' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-3 bg-white/5 backdrop-blur-sm rounded-lg ${social.color} hover:scale-110 hover:bg-white/10 transition-all duration-300 group`}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-underline"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Features', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white relative inline-block">
              Our Products
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-underline"></span>
            </h4>
            <ul className="space-y-3">
              {['Roller Blinds', 'Vertical Blinds', 'Wooden Blinds', 'Day & Night Blinds', 'Custom Solutions'].map((product, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-underline"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-white/5 backdrop-blur-sm rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <FiMapPin size={18} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">123 Business Avenue,</p>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Delhi - 400001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/5 backdrop-blur-sm rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <FiPhone size={18} className="text-blue-400" />
                </div>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 9999999999
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/5 backdrop-blur-sm rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <FiMail size={18} className="text-purple-400" />
                </div>
                <a href="mailto:info@hightechwindowblinds.in" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@window.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-sm opacity-70"></div>
            
            <div className="relative z-10 text-center space-y-4">
              <h4 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </h4>
              <p className="text-gray-400 max-w-md mx-auto">
                Subscribe to our newsletter for the latest designs and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span>Subscribe</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Vedamic Private Limited. All Rights Reserved. | Crafted with ❤️ in India
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 hover:underline">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center relative overflow-hidden group"
              >
                <FiArrowUp size={18} className="relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(20px);
          }
          100% {
            transform: translateY(-200px) translateX(0);
            opacity: 0;
          }
        }
        
        @keyframes animate-underline {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          51% {
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
        
        .animate-underline {
          animation: animate-underline 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;