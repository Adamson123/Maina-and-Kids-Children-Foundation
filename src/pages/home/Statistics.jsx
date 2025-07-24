//TODO: Rename some things (file name, data name)
const statistics = [
    {
        number: "5000+",
        name: "Children Reached",
    },
    {
        number: "6+",
        name: "States Reached",
    },
    {
        number: "10+",
        name: "Years of Impact",
    },
    {
        number: "9M+",
        name: "Raised In Funding",
    },
];

const Support = () => {
    return (
        <div className="flex bg-[#2563EB] sm:flex-col py-[80px] text-white sm:gap-20 justify-center xl:gap-32 2xl:gap-32 md:gap-16 lg:gap-20">
            {statistics.map((stat, i) => (
                <div className="text-center" key={i}>
                    <h3 className="text-6xl font-bold">{stat.number}</h3>
                    <p className="text-sm">{stat.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Support;
