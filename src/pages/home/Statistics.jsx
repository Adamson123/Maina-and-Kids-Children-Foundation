import { useEffect, useRef, useState } from "react";

//TODO: Rename some things (file name, data name)
const statisticsData = [
    {
        plus: "+",
        name: "Children Reached",
        max: 5000,
        state: 0,
    },
    {
        plus: "+",
        name: "States Reached",
        max: 6,
        state: 0,
    },
    {
        plus: "+",
        name: "Years of Impact",
        max: 10,
        state: 0,
    },
    {
        plus: "M+",
        name: "Raised In Funding",
        max: 9,
        state: 0,
    },
];

const Support = () => {
    const [statistics, setStatistics] = useState(statisticsData);
    const [isOnViewport, setIsOnViewport] = useState(false);
    const statisticsRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const statsSection = statisticsRef.current;
            if (statsSection) {
                const rect = statsSection.getBoundingClientRect();
                setIsOnViewport(
                    rect.top < window.innerHeight && rect.bottom >= 0
                );
            }
        });

        console.log("Statistics section is on viewport:", isOnViewport);
        if (!isOnViewport) return;

        const interval = setInterval(() => {
            setStatistics((prevStats) =>
                prevStats.map((stat) => {
                    if (stat.state < stat.max && stat.max !== 5000) {
                        return { ...stat, state: stat.state + 1 };
                    }
                    return stat;
                })
            );
        }, 500); // Update every 100ms

        const interval5000 = setInterval(() => {
            setStatistics((prevStats) =>
                prevStats.map((stat) => {
                    if (stat.max === 5000 && stat.state < 5000) {
                        return { ...stat, state: stat.state + 1 };
                    }
                    return stat;
                })
            );
        }, 5);

        return () => {
            clearInterval(interval); // Cleanup on unmount
            clearInterval(interval5000); // Cleanup on unmount
        };
    }, [isOnViewport]);

    return (
        <div
            ref={statisticsRef}
            className="flex bg-[#2563EB] sm:flex-col py-[80px] text-white sm:gap-20 justify-center xl:gap-32 2xl:gap-40 md:gap-16 lg:gap-20 sm:items-center"
        >
            {statistics.map((stat, i) => (
                <div
                    className={`text-center ${
                        stat.max === 5000 ? "w-[171px]" : "w-[101px]"
                    }`}
                    key={i}
                >
                    <h3 className="text-6xl font-bold">
                        {stat.state + stat.plus}
                    </h3>
                    <p className="text-sm">{stat.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Support;
