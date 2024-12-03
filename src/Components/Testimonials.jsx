import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const TestimonialSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const durationRef = useRef(0);

  let audioRef = useRef(new Audio("/public/audio/audio1.mp3"));
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      if (audioRef.current) {
        const time =Math.floor( audioRef.current.currentTime);
        setCurrentTime(time);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handleAudio = () => {
    if (isPlaying) {
      // console.log("audio", isPlaying);
      setIsPlaying(false);
      audioRef.current.pause();
      return;
    } else {
      // console.log("audio", isPlaying);
      setIsPlaying(true);
      audioRef.current.play();
      return;
    }
  };

  return (
    <div className="bg-[#F7F5F9] max-w-[1240px] mx-auto mt-8 mb-16 px-4 sm:px-8 md:px-16 lg:px-10 rounded-lg py-10">
      <div className="flex items-center gap-6">
        <span className="text-4xl sm:text-5xl md:text-6xl text-purple-500 font-serif">
          &quot;
        </span>
        <h2 className="text-lg md:text-2xl font-bold text-[#08090A]">
          Testimonials
        </h2>
      </div>

      <div className="space-y-6 md:space-y-8">
        <p className="text-sm md:text-lg text-[#6D747A] leading-relaxed max-w-4xl">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>

        <div className="flex items-center justify-between">
          <div className="bg-purple-100 rounded-lg p-3 sm:p-4 flex-1 mr-6">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* <audio controls src="/public/audio/audio1.mp3"></audio> */}
              <button
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50"
                onClick={handleAudio}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 ml-1" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 ml-1" />
                )}
              </button>
              <div className="relative flex-1 h-1 bg-white rounded-full">
                <div
                  style={{
                    left: `${
                      (currentTime / audioRef.current.duration) * 100 - 1
                    }%`,
                  }}
                  className="absolute top-[-80%] transition-all ease-linear duration-1000 cursor-pointer bg-purple-600 rounded-full w-3 h-3"
                />
                <div
                  style={{
                    width: `${
                      (currentTime / audioRef.current.duration) * 100
                    }%`,
                  }}
                  className={`absolute transition-all ease-linear duration-1000 left-0 top-0 h-1 bg-purple-600 rounded-full `}
                />
              </div>
              <span className="text-purple-700 text-xs">
                {Math.floor(currentTime / 60)}:{currentTime % 60}
              </span>
              <div>
                <img
                  src="/images/image1.png"
                  alt="Shubha Nagarajan"
                  className="w-10 h-10 sm:w-[3.75rem] sm:h-[3.75rem] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/images/image1.png"
              alt="Shubha Nagarajan"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-purple-600 text-base sm:text-lg font-semibold">
                Shubha Nagarajan
              </h3>
              <p className="text-blue-400 text-sm">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
