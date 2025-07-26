// import React, { useState } from 'react';
// import { ReactComponent as Logo } from '../assets/images/logo.svg';
// import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <Logo className="h-12 w-auto" />
//             <span className="ml-2 text-xl font-bold text-primary">HighTech Window Blinds</span>
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             <nav className="flex space-x-6">
//               <a href="#home" className="text-primary hover:text-accent font-medium">Home</a>
//               <a href="#products" className="text-primary hover:text-accent font-medium">Products</a>
//               <a href="#features" className="text-primary hover:text-accent font-medium">Features</a>
//               <a href="#testimonials" className="text-primary hover:text-accent font-medium">Testimonials</a>
//               <a href="#contact" className="text-primary hover:text-accent font-medium">Contact</a>
//             </nav>
//             <div className="flex items-center space-x-4 ml-6">
//               <a href="tel:+919876543210" className="flex items-center text-primary hover:text-accent">
//                 <FiPhone className="mr-1" /> +91 98765 43210
//               </a>
//               <a href="mailto:info@hightechwindowblinds.in" className="flex items-center text-primary hover:text-accent">
//                 <FiMail className="mr-1" /> info@hightechwindowblinds.in
//               </a>
//             </div>
//           </div>

//           <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             <nav className="flex flex-col space-y-3">
//               <a href="#home" className="text-primary hover:text-accent font-medium">Home</a>
//               <a href="#products" className="text-primary hover:text-accent font-medium">Products</a>
//               <a href="#features" className="text-primary hover:text-accent font-medium">Features</a>
//               <a href="#testimonials" className="text-primary hover:text-accent font-medium">Testimonials</a>
//               <a href="#contact" className="text-primary hover:text-accent font-medium">Contact</a>
//             </nav>
//             <div className="mt-4 pt-4 border-t border-gray-200">
//               <a href="tel:+919876543210" className="flex items-center text-primary hover:text-accent mb-2">
//                 <FiPhone className="mr-2" /> +91 98765 43210
//               </a>
//               <a href="mailto:info@hightechwindowblinds.in" className="flex items-center text-primary hover:text-accent">
//                 <FiMail className="mr-2" /> info@hightechwindowblinds.in
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/images/logo.svg';
import logo from '../assets/images/window-logo.jpeg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#home' },
    { 
      name: 'Products', 
      link: '#products',
    //   submenu: [
    //     { name: 'Roller Blinds', link: '#roller-blinds' },
    //     { name: 'Vertical Blinds', link: '#vertical-blinds' },
    //     { name: 'Wooden Blinds', link: '#wooden-blinds' },
    //     { name: 'Smart Blinds', link: '#smart-blinds' },
    //   ]
    },
    // { name: 'Products', link: '#products' },
    { name: 'About Us', link: '#about' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'Contact', link: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' }
  ];

  return (
    <>
      
      <div className="bg-gradient-to-r from-accent to-yellow-400 text-dark text-center py-4 px-4 sticky top-0 z-50">
        <p className="font-medium animate-pulse-slow">
          🎉 Special Offer! Get 15% off on all premium blinds this week. 
          <a href="#contact" className="ml-2 underline font-bold hover:text-primary transition-colors">
            Claim Now →
          </a>
        </p>
      </div>

      
      <header className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              {/* <img src={logo} alt="HighTech Blinds" className="h-16 w-auto"  /> */}
              <img 
                src={logo} 
                alt="HighTech Blinds" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-110" 
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Windows Story
              </span>
            </motion.div>

            
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group" 
                  onMouseEnter={() => setOpenSubmenu(index)} 
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <a 
                    href={item.link} 
                    className={`px-4 py-2 rounded-lg flex items-center transition-all ${scrolled ? 'text-dark hover:text-accent' : 'text-white hover:text-accent'} font-medium hover-underline-animation`}
                  >
                    {item.name}
                    {item.submenu && <FiChevronDown className="ml-1" />}
                  </a>

                  {item.submenu && (
                    <AnimatePresence>
                      {openSubmenu === index && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <a 
                              key={subIndex}
                              href={subItem.link}
                              className="block px-4 py-3 text-dark hover:bg-gray-50 hover:text-accent transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            
            <div className="hidden lg:flex items-center space-x-4">
             
              <div className={`relative transition-all duration-300 ${searchOpen ? 'w-64' : 'w-40'}`}>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => !searchQuery && setSearchOpen(false)}
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              
              <div className="relative group">
                <button className="flex items-center text-sm font-medium px-3 py-1 rounded-lg hover:bg-white/10 transition-colors">
                  <span className={`${scrolled ? 'text-dark' : 'text-white'}`}>EN</span>
                  <FiChevronDown className={`ml-1 ${scrolled ? 'text-dark' : 'text-white'}`} />
                </button>
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg hidden group-hover:block border border-gray-100">
                  {languages.map((lang) => (
                    <a 
                      key={lang.code} 
                      href="#" 
                      className="block px-4 py-2 text-dark hover:bg-gray-50 hover:text-accent transition-colors"
                    >
                      {lang.name}
                    </a>
                  ))}
                </div>
              </div>

              
              <button className={`p-2 rounded-full relative ${scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}>
                <FiShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-accent text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              
              <a 
                href="#contact" 
                className="bg-accent hover:bg-yellow-500 text-dark font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center"
              >
                <FiPhone className="mr-2" />
                Get Quote
              </a>
            </div>

            
            <button 
              className="lg:hidden p-2 rounded-lg focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className={`text-2xl ${scrolled ? 'text-dark' : 'text-white'}`} />
              ) : (
                <FiMenu className={`text-2xl ${scrolled ? 'text-dark' : 'text-white'}`} />
              )}
            </button>
          </div>

          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-4 pb-6 space-y-2">
                  
                  <div className="px-4 mb-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {navItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0">
                      <a 
                        href={item.link} 
                        className="block py-3 px-4 text-dark hover:bg-gray-50 rounded-lg font-medium flex justify-between items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {item.submenu && <FiChevronDown />}
                      </a>
                      {item.submenu && (
                        <div className="pl-6 pb-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <a 
                              key={subIndex}
                              href={subItem.link}
                              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  
                  <div className="px-4 pt-2">
                    <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col space-y-3 mt-4 px-4">
                    <a 
                      href="tel:+919876543210" 
                      className="flex items-center justify-center bg-primary/10 text-primary px-4 py-3 rounded-lg font-medium"
                    >
                      <FiPhone className="mr-2" />
                      Call Us
                    </a>
                    <a 
                      href="#contact" 
                      className="bg-accent hover:bg-yellow-500 text-dark font-bold px-4 py-3 rounded-lg text-center transition-all flex items-center justify-center"
                    >
                      <FiShoppingCart className="mr-2" />
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        
        {!scrolled && (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent"></div>
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent/20 blur-xl -translate-y-1/2 -translate-x-1/2"></div>
          </>
        )}
      </header>
    </>
  );
};




export default Header;



