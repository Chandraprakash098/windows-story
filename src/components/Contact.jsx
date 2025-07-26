import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    message: ''
  });

  const canvasRef = useRef(null);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    let animationId;
    let rotation = 0;

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 150;

     
      const gradient = ctx.createRadialGradient(
        centerX - 50, centerY - 50, 0,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, '#4ade80');
      gradient.addColorStop(0.5, '#22c55e');
      gradient.addColorStop(1, '#15803d');

      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      
      const shineGradient = ctx.createRadialGradient(
        centerX - 60, centerY - 60, 0,
        centerX - 60, centerY - 60, 80
      );
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = shineGradient;
      ctx.fill();

      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI / 3) + rotation;
        const radiusX = Math.abs(radius * Math.cos(angle * 0.5));
        const radiusY = radius;
        
        if (radiusX > 0 && radiusY > 0) {
          ctx.beginPath();
          ctx.ellipse(centerX, centerY, radiusX, radiusY, angle, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      
      for (let i = 1; i < 4; i++) {
        const offsetY = (radius * (i - 2) / 2);
        const y = centerY + offsetY;
        const radiusSquared = radius * radius - (offsetY * offsetY);
        
        if (radiusSquared > 0) {
          const ellipseRadius = Math.sqrt(radiusSquared);
          const ellipseHeight = ellipseRadius * 0.3;
          
          if (ellipseRadius > 0 && ellipseHeight > 0) {
            ctx.beginPath();
            ctx.ellipse(centerX, y, ellipseRadius, ellipseHeight, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      
      const time = Date.now() * 0.001;
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2 + time;
        const distance = radius + 30 + Math.sin(time + i) * 20;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${0.5 + Math.sin(time + i) * 0.3})`;
        ctx.fill();
      }

      rotation += 0.005;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      state: '',
      message: ''
    });
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
          
          
          <div className="flex-1 flex flex-col items-center text-center lg:text-left">
           
            <div className="relative mb-8">
              <canvas 
                ref={canvasRef}
                className="drop-shadow-2xl"
                style={{filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.3))'}}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
            </div>

            
            <div className="bg-green-500 rounded-3xl px-8 py-6 mb-8 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-4 text-white text-xl font-bold">
                  <Phone className="w-6 h-6" />
                  <span>+91-9999999999</span>
                </div>
                <div className="flex items-center space-x-4 text-white text-lg">
                  <Mail className="w-5 h-5" />
                  <span>order@windows.in</span>
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="font-bold text-lg">Address</h3>
                </div>
                <p className="text-gray-200">123 Business Avenue,</p>
                <p className="text-gray-200">Delhi - 400001</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="font-bold text-lg">Working Hours</h3>
                </div>
                <p className="text-gray-200">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-200">Sunday: Closed</p>
              </div>
            </div>
          </div>

          
          <div className="flex-1 max-w-lg w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                <p className="text-gray-600">We'd love to hear from you. Send us a message!</p>
              </div>

              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 text-gray-800 appearance-none cursor-pointer"
                  >
                    <option value="">Select State</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;