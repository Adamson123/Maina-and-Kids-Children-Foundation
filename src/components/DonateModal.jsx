import { useDonateModal } from "../context/DonateModalContext";
import GTBImage from "/assets/GTB.png";
import UBAImage from "/assets/UBA.png";
import AccessBankImage from "/assets/Access.png";
import { TbCircleX } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { BiX } from "react-icons/bi";

const accountsDetails = [
    {
        name: "GTBANK",
        image: GTBImage,
        acctnumber: "8141941988",
    },
    {
        name: "UBA",
        image: UBAImage,
        acctnumber: "8141941988",
    },
    {
        name: "Access bank",
        image: AccessBankImage,
        acctnumber: "8141941988",
    },
];

const DonateModal = () => {
    const { isOpen, closeModal } = useDonateModal();

    return (
        <div
            onClick={closeModal}
            className={`fixed inset-0 z-[200] bg-black/55 flex items-center justify-center transition-opacity duration-400 p-4 ${
                isOpen
                    ? "opacity-1 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-primary-blue pt-12 pb-7 px-20 sm:px-10 flex flex-col gap-[35px] text-white max-w-[800px]"
            >
                {/* Close button to close the modal */}
                <button
                    onClick={closeModal}
                    className="rounded-full absolute text-center text-white right-5 top-5 border-2 hover:bg-white/40"
                >
                    <BiX className="h-5 w-5" />
                </button>
                {/*accounts details */}
                <div className="flex gap-x-10 sm:gap-x-5">
                    {accountsDetails.map((bank) => (
                        <div
                            key={bank.name}
                            className="flex flex-col items-center gap-y-[4.5px]"
                        >
                            <img
                                src={bank.image}
                                alt={bank.name}
                                className="object-contain h-full"
                            />

                            <h3 className="sm:text-sm">{bank.name}</h3>
                            <p className="text-xs sm:text-[11px]">
                                {bank.acctnumber}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Encouragement */}
                <p className="text-center sm:text-sm">
                    Your Donations will help impact the lives of <br /> thousand
                    kids out there.
                    <br />
                    Make an impact today!
                </p>
            </div>
        </div>
    );
};
export default DonateModal;
