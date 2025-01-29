import React, { useEffect, useRef, useState } from 'react';
import Services from './Services';
import OperatingSystems from './OperatingSystems';

const Home = () => {
    const videoRef = useRef(null);
    const [videoState, setVideoState] = useState('loading');
    const [manualPlay, setManualPlay] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleStateUpdate = (state) => {
            console.log(`Video state: ${state}`);
            setVideoState(state);
        };

        const handleCanPlay = async () => {
            try {
                await video.play();
                handleStateUpdate('playing');
            } catch (error) {
                console.error('Autoplay failed:', error);
                handleStateUpdate('error');
                setManualPlay(true);
            }
        };

        const handleError = () => {
            console.error('Video error:', video.error);
            handleStateUpdate('error');
        };

        // Event listeners
        video.addEventListener('loadedmetadata', () => console.log('Metadata loaded'));
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('error', handleError);
        video.addEventListener('waiting', () => handleStateUpdate('buffering'));

        // Initialize video
        video.load();

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('error', handleError);
            video.removeEventListener('waiting', () => {});
        };
    }, []);

    return (
        <div className="bg-gray-50 font-poppins">
            <div className="relative h-[80vh] w-full overflow-hidden"> {/* Adjusted height to 20% of viewport height */}
                {/* Video element with fallback handling */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        videoState === 'playing' ? 'opacity-100' : 'opacity-0'
                    }`}
                    poster="/video-preview.jpg"
                >
                    <source src="/videos/trim_video_project.mp4" type="video/mp4" />
                </video>

                {/* Loading overlay */}
                {videoState === 'loading' && (
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <div className="text-white animate-pulse">
                            Loading video...
                        </div>
                    </div>
                )}

                {/* Manual play fallback */}
                {manualPlay && (
                    <button
                        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/80 text-white text-lg"
                        onClick={() => {
                            videoRef.current?.play();
                            setManualPlay(false);
                        }}
                    >
                        Click to play video
                    </button>
                )}

                
            </div>
            {/* Content overlay */}
            <div className="absolute inset-0  flex items-center justify-end pr-36 mt-96">
                <div className="bg-[#E75033] rounded-full w-80 h-80 flex items-center justify-center text-center animate-fade-in-right">
                    <div>
                        <h2 className="text-white text-2xl font-medium mb-4 tracking-wide">
                            PROFESSIONAL<br />
                            TECH FOR YOUR<br />
                            BUSINESS
                        </h2>
                        <button className="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors duration-300 font-medium">
                            GET QUOTE
                        </button>
                    </div>
                </div>
            </div>

            <OperatingSystems />
            <Services />
        </div>
    );
};

export default Home;