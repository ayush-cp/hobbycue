import React, { useState } from 'react';
import { Play } from 'lucide-react';

const TestimonialSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-[1240px] h-[472px] mx-auto mt-24 px-24">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-6xl text-purple-500 font-serif">"</span>
        <h2 className="text-2xl font-bold">Testimonials</h2>
      </div>

      <div className="space-y-8">
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>

        <div className="flex items-center justify-between">
          <div className="bg-purple-100 rounded-lg p-4 flex-1 mr-8">
            <div className="flex items-center gap-4">
              <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="w-5 h-5 text-purple-600 ml-1" />
              </button>
              <div className="flex-1 h-1 bg-purple-200 rounded-full">
                <div className="h-1 bg-purple-600 rounded-full w-0" />
              </div>
              <span className="text-purple-700 text-sm">0:00</span>
              <img 
                src="/api/placeholder/40/40" 
                alt="Small profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src="/api/placeholder/80/80" 
              alt="Shubha Nagarajan"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-purple-600 text-lg font-semibold">Shubha Nagarajan</h3>
              <p className="text-blue-400">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;