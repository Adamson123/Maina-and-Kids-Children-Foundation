import { BiChevronRight } from "react-icons/bi";

export const ProfileCard = ({ image, name, position, style }) => {
    return (
        <div className={`flex flex-col items-center gap-4 ${style}`}>
            <img
                src={image}
                alt={name}
                className={`w-[120px] h-[120px] rounded-full object-cover sm:w-[70px] sm:h-[70px]`}
            />
            <div className="text-center">
                <h4 className="text-sm font-bold sm:text-xs">{name}</h4>
                <p className="text-gray-600 text-sm sm:text-xs">{position}</p>
            </div>
        </div>
    );
};

export const MultiProfileContainer = ({ profiles }) => {
    const firstProfile = profiles[0];
    const lastProfile = profiles[profiles.length - 1];
    //If the amount of profile is greater than 2, we will try to get the one's in the middle
    let middleProfiles = profiles.slice(1, profiles.length - 1);
    // if (!middleProfiles.length && profiles.length === 3)
    //     middleProfiles = [profiles.length - 2];

    return (
        <div
            className={`border-dashed border-2 border-purple-400 w-[270px] sm:w-[150px] p-5 rounded-tl-xl rounded-bl-xl flex flex-col  border-r-0 relative ${
                middleProfiles.length ? "h-auto" : "max-h-[290px]"
            }`}
        >
            <span className="absolute bg-white flex items-center w-[220px] sm:w-[120px] h-3 -top-[7px] right-0">
                <BiChevronRight className="inline fill-purple-400" />
            </span>
            <ProfileCard
                image={firstProfile.image}
                name={firstProfile.name}
                position={firstProfile.position}
                style="-translate-y-[75px]"
            />
            {middleProfiles.length
                ? middleProfiles.map((profile, i) => (
                      <div
                          key={i}
                          className={`relative ${i > 0 && "mt-[75px]"}`}
                      >
                          <span className="absolute w-20 sm:w-[50px] h-2  top-1/2 sm:top-[35%] -translate-x-8 bg-white -translate-y-1/2 flex justify-center items-center px-4 sm:pr-2">
                              <hr className="border-dashed border-t-2 w-full border-purple-400 h-[1px]" />
                          </span>

                          <ProfileCard
                              image={profile.image}
                              name={profile.name}
                              position={profile.position}
                              style={"z-[90]"}
                          />
                      </div>
                  ))
                : ""}

            <ProfileCard
                image={lastProfile.image}
                name={lastProfile.name}
                position={lastProfile.position}
                style={`z-50 ${
                    middleProfiles.length
                        ? "translate-y-[105px]"
                        : "translate-y-[5px] "
                }`}
            />

            <span className="absolute bg-white flex items-center w-[220px] sm:w-[120px] h-3 -bottom-[7px] right-0">
                <BiChevronRight className="inline fill-purple-400" />
            </span>
        </div>
    );
};
