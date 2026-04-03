import React, { useState } from "react";
import Videobg from "../../../assets/back/ricevideo.png";
import AboutUsVideo from "../../../assets/videos/ricevideo.mp4";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div
        className=" px-4 lg:px-[100px] bg-cover bg-center items-center flex -mt-9  h-[300px] md:h-[400px] lg:h-[500px] justify-center relative transform overflow-hidden cursor-pointer"
        style={{
          backgroundImage: !isPlaying ? `url(${Videobg})` : 'none',
          backgroundColor: 'black'
        }}
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {!isPlaying ? null : (
          <video
            src={AboutUsVideo}
            className="absolute inset-0 w-full h-full object-cover"
            controls
            autoPlay
          />
        )}
      </div>
    </div>
  );
};

export default Video;
