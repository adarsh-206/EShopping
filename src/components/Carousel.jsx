import { useState, useEffect } from "react";

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const startAutoSlide = () => {
            setIntervalId(setInterval(nextSlide, 5000));
        };

        const stopAutoSlide = () => {
            clearInterval(intervalId);
        };

        startAutoSlide();

        return () => {
            stopAutoSlide();
        };
    }, [current]);

    return (
        <div className="overflow-hidden relative h-[50vh] sm:h-[80vh]">
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <img key={index} src={s.image} className="h-[80vh] sm:h-full" alt="slider" />
                ))}
            </div>

            <div className="absolute top-0 mx-5 w-full text-black top-[7rem]">
                {slides.map((s, index) => (
                    <div
                        key={index}
                        className={`flex ${index === current ? 'block' : 'hidden'} justify-around items-center`}
                    >
                        <div className="flex flex-col items-center">
                            <p className="max-w-full hero-icon">{s.text}</p>
                            <button className="bg-black text-white p-2 rounded text-sm mt-4 hover:bg-transparent hover:text-black hover:border-black border border-transparent">Shop Now</button>
                        </div>
                        <img src={s.icon} alt="slider" className="max-w-full h-auto" />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-1 h-1 cursor-pointer ${i === current ? "bg-black" : "bg-gray-500"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}