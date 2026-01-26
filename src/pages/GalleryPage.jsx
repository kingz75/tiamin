import React, { useState, useEffect, useCallback, useMemo } from 'react';
import GalleryBg from "../assets/tiamin-photo/2.webp";

const CATEGORIES = [
    "All",
    "Harvest",
    "Rice Transplanting",
    "Factory",
    "Equitorial Guinea Ambassador's visit to Bauchi",
    "Drone Pictures",
    "Rice Bags",
    "Chinese Ambassador visits Tiamin",
    "Courtesy visit to the Indian High Commissioner"
];

// Map image IDs to categories
const getCategoryForId = (id) => {
    if (id >= 106 && id <= 119) return "Drone Pictures";
    if (id >= 1 && id <= 17) return "Harvest";
    if (id >= 19 && id <= 29) return "Rice Transplanting";
    if (id >= 33 && id <= 47) return "Factory";
    if (id >= 56 && id <= 102) return "Equitorial Guinea Ambassador's visit to Bauchi";
    if (id >= 132 && id <= 136) return "Rice Bags";
    if (id >= 139 && id <= 144) return "Chinese Ambassador visits Tiamin";
    if (id >= 145 && id <= 148) return "Courtesy visit to the Indian High Commissioner";
    return "All";
};

// Generate image paths for all 148 images
const generateImagePaths = () => {
    const images = [];

    // Images 1-28 are .webp, 29-148 are .jpg
    for (let i = 1; i <= 28; i++) {
        images.push({
            id: i,
            src: require(`../assets/tiamin-photo/${i}.webp`),
            alt: `Tiamin Gallery Image ${i}`,
            category: getCategoryForId(i)
        });
    }

    for (let i = 29; i <= 148; i++) {
        images.push({
            id: i,
            src: require(`../assets/tiamin-photo/${i}.jpg`),
            alt: `Tiamin Gallery Image ${i}`,
            category: getCategoryForId(i)
        });
    }

    return images;
};

const allImages = generateImagePaths();

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    // Filter images based on selected category
    const filteredImages = useMemo(() => {
        if (selectedCategory === "All") return allImages;
        return allImages.filter(img => img.category === selectedCategory);
    }, [selectedCategory]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (selectedIndex === null) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
        } else if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
    }, [selectedIndex, filteredImages]);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex, handleKeyDown]);

    const openLightbox = (index) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section - matching About page style */}
            <div
                className="relative px-4 lg:px-[100px] bg-cover bg-center items-center flex -mt-9 h-[200px] md:h-[250px] lg:h-[300px] justify-center"
                style={{
                    backgroundImage: `url(${GalleryBg})`,
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10">
                    <p className="text-[#ffffff] text-sm md:text-[14px] font-semibold mt-3 drop-shadow text-center uppercase tracking-widest">
                        Home / GALLERY
                    </p>
                    <h1 className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-extrabold drop-shadow-lg text-center">
                        Gallery
                    </h1>
                </div>
            </div>

            {/* Page Heading Caption */}
            <div className="max-w-7xl mx-auto px-4 pt-16 -mb-4 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#194641] tracking-tight">
                    Pioneering Excellence in Manufacturing and Agriculture
                </h2>
                <div className="w-20 h-1 bg-[#194641] mx-auto mt-4 rounded-full opacity-20"></div>
            </div>

            {/* Filter Section */}
            <div className="max-w-7xl mx-auto px-4 pt-12">
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setSelectedIndex(null);
                            }}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                ? 'bg-[#194641] text-white shadow-lg'
                                : 'bg-white text-[#194641] hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Image Count Indicator */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm font-medium">
                        Showing {filteredImages.length} images in <span className="text-[#194641] font-bold">{selectedCategory}</span>
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`relative group cursor-pointer overflow-hidden rounded-xl bg-gray-200 aspect-square transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:z-10`}
                            onClick={() => openLightbox(index)}
                        >
                            {/* Skeleton loader */}
                            {!loadedImages[image.id] && (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                            )}

                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                onLoad={() => handleImageLoad(image.id)}
                                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="flex items-center justify-between">
                                        <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all hover:rotate-90"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-6 left-6 z-[110] px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                        <span className="text-white text-sm font-semibold tracking-wider">
                            {selectedIndex + 1} / {filteredImages.length}
                        </span>
                    </div>

                    {/* Category Label in Lightbox */}
                    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-[110] px-4 py-1.5 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
                        <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
                            {filteredImages[selectedIndex].category}
                        </span>
                    </div>

                    {/* Previous button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-all hover:scale-110 active:scale-95 group"
                    >
                        <svg className="w-8 h-8 text-white transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-all hover:scale-110 active:scale-95 group"
                    >
                        <svg className="w-8 h-8 text-white transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Main image */}
                    <div
                        className="max-w-[95vw] max-h-[80vh] flex items-center justify-center relative group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={filteredImages[selectedIndex].src}
                            alt={filteredImages[selectedIndex].alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-fadeIn transition-opacity duration-300"
                        />
                    </div>

                    {/* Thumbnail strip */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] max-w-[90vw] overflow-x-auto no-scrollbar">
                        <div className="flex gap-3 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                            {filteredImages.slice(
                                Math.max(0, selectedIndex - 4),
                                Math.min(filteredImages.length, selectedIndex + 5)
                            ).map((image, idx) => {
                                // Find global index in filtered list
                                const actualIndexInFiltered = filteredImages.findIndex(img => img.id === image.id);

                                return (
                                    <button
                                        key={image.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedIndex(actualIndexInFiltered);
                                        }}
                                        className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${actualIndexInFiltered === selectedIndex
                                            ? 'ring-2 ring-white scale-110 shadow-xl'
                                            : 'opacity-40 hover:opacity-100 hover:scale-105'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Keyboard hints */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-6 text-white/30 text-[10px] uppercase font-bold tracking-[0.2em]">
                        <span className="flex items-center gap-2"><kbd className="px-1.5 py-0.5 bg-white/5 rounded">←</kbd> <kbd className="px-1.5 py-0.5 bg-white/5 rounded">→</kbd> NAVIGATE</span>
                        <span className="flex items-center gap-2"><kbd className="px-1.5 py-0.5 bg-white/5 rounded">ESC</kbd> CLOSE</span>
                    </div>
                </div>
            )}
        </div>
    );
}
