import { useEffect, useState } from 'react';

const Main = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://via.placeholder.com/1200x300?text=Slide+1",
        "/public/images/food-0.jpg",
        "https://via.placeholder.com/1200x300?text=Slide+3",
        "https://via.placeholder.com/1200x300?text=Slide+1",
        "/public/images/food-0.jpg",
        "https://via.placeholder.com/1200x300?text=Slide+3",
        "https://via.placeholder.com/1200x300?text=Slide+1",
        "/public/images/food-0.jpg",
        "https://via.placeholder.com/1200x300?text=Slide+3",
        "https://via.placeholder.com/1200x300?text=Slide+1",
        "/public/images/food-0.jpg",
        "https://via.placeholder.com/1200x300?text=Slide+3",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 200000000); 
        return () => clearInterval(intervalId); 
    }, [images.length]);

    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="flex">
                <main className="flex-1 p-4 transition-margin duration-300">
                    <div className="slider-container mb-4 w-full h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden relative">
                        <div
                            className="slider-wrapper absolute top-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            ))}
                        </div>
                        <button
                            onClick={goToPreviousSlide}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={goToNextSlide}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${
                                        currentImageIndex === index
                                            ? 'bg-blue-500'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => goToSlide(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Main;
