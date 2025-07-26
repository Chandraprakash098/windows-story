import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import SEO from './components/SEO';
import AboutUs from './components/AboutUs';
import WhatsAppChat from './components/WhatsAppChat';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <SEO />
      <Header />
      <section id="home">
    <Hero />
  </section>
       <section id="about">
    <AboutUs />
  </section>
      <section id="products">
    <Products />
  </section>
      <section id="features">
    <Features />
  </section>
      <section id="testimonials">
    <Testimonials />
  </section>
       <section id="contact">
    <Contact />
  </section>
      <Footer />

      <WhatsAppChat/>
    </div>
  );
}

export default App;