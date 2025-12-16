import React, { useRef, useState } from "react";
import VideoBg from "../../assets/images/videoo.MP4";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function Video() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const enterFullscreen = async () => {
    if (containerRef.current?.requestFullscreen) {
      await containerRef.current.requestFullscreen();
    }

    const video = videoRef.current;
    if (video) {
      video.muted = false; // 🔊 enable sound
      video.volume = 1;
    }

    setIsMuted(false);
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    const video = videoRef.current;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    if (video) {
      video.pause();
      video.muted = true;
    }

    setIsPlaying(false);
    setIsMuted(true);
    setIsFullscreen(false);
  };

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.play();
    setIsPlaying(true);
    enterFullscreen();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative pb-16 -mt-10 px-[240px]">
      <div
        ref={containerRef}
        className={`relative mx-auto ${
          isFullscreen
            ? "fixed inset-0 z-50 bg-black"
            : "max-w-[1000px] cursor-pointer"
        }`}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={VideoBg}
          muted
          className="w-full h-screen object-cover rounded-xl"
        />

        {/* Overlay + Play */}
        {!isPlaying && !isFullscreen && (
          <div
            onClick={playVideo}
            className="absolute inset-0 bg-black/40 rounded-xl flex justify-center items-center cursor-pointer"
          >
            <div className="w-20 h-16 bg-red-700 rounded-lg flex items-center justify-center hover:bg-opacity-50 transition">
              <div className="w-0 h-0 border-l-[28px] border-white border-y-[16px] border-y-transparent" />
            </div>
          </div>
        )}

        {/* Close Button */}
        {isFullscreen && (
          <button
            onClick={exitFullscreen}
            className="absolute top-6 left-6 z-50 bg-black/60 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            ✕ Close
          </button>
        )}

        {/* Sound Button */}
        {isFullscreen && (
          <button
            onClick={toggleMute}
            className="absolute top-6 right-6 z-50 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
          >
            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
