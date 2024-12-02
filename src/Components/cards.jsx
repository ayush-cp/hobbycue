import React from 'react';
import { Users, MapPin, ShoppingBag, CheckSquare } from 'lucide-react';

const HobbyCategoryGrid = () => {
  const categories = [
    {
      title: 'People',
      description: 'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.',
      icon: <Users className="w-8 h-8 text-purple-600" />,
      buttonText: 'Connect',
      buttonClass: 'text-purple-600 border-purple-600 hover:bg-purple-50'
    },
    {
      title: 'Place',
      description: 'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.',
      icon: <MapPin className="w-8 h-8 text-olive-600" />,
      buttonText: 'Meet up',
      buttonClass: 'text-purple-600 border-purple-600 hover:bg-purple-50'
    },
    {
      title: 'Product',
      description: 'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.',
      icon: <ShoppingBag className="w-8 h-8 text-red-400" />,
      buttonText: 'Get it',
      buttonClass: 'text-purple-600 border-purple-600 hover:bg-purple-50'
    },
    {
      title: 'Program',
      description: 'Find events, meetups and workshops related to your hobby. Register or buy tickets online.',
      icon: <CheckSquare className="w-8 h-8 text-blue-400" />,
      buttonText: 'Attend',
      buttonClass: 'text-purple-600 border-purple-600 hover:bg-purple-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-rows-2 gap-6">
        {/* Top row */}
        <div className="flex gap-6">
          {categories.slice(0, 2).map((category) => (
            <div 
              key={category.title}
              className="w-1/2 bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                {category.icon}
                <h2 className="text-xl font-semibold">
                  {category.title}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              
              <button 
                className={`px-6 py-2 rounded-md border transition-colors 
                duration-200 font-medium ${category.buttonClass}`}
              >
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        {/* Bottom row */}
        <div className="flex gap-6">
          {categories.slice(2, 4).map((category) => (
            <div 
              key={category.title}
              className="w-1/2 bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                {category.icon}
                <h2 className="text-xl font-semibold">
                  {category.title}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              
              <button 
                className={`px-6 py-2 rounded-md border transition-colors 
                duration-200 font-medium ${category.buttonClass}`}
              >
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyCategoryGrid;
