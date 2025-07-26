import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-primary rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

export default Loader;