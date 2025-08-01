import { BiX } from "react-icons/bi";
import { useDonateModal } from "../context/DonateModalContext";
import UbaSvg from "/assets/banks/UBA.svg";
import { PiCopySimple } from "react-icons/pi";
import toast from "react-hot-toast";

const DonateModal = () => {
    const { isOpen, closeModal } = useDonateModal();

    const copyToClipboard = () => {
        const accountDetails = "1025549744";
        const msg = "Account details copied to clipboard!";
        if (navigator.clipboard && window.isSecureContext) {
            // Use the modern clipboard API
            navigator.clipboard
                .writeText(accountDetails)
                .then(() => {
                    toast.success(msg);
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = accountDetails;
            textArea.style.position = "fixed"; // Avoid scrolling to bottom
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand("copy");
                toast.success(msg);
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
            document.body.removeChild(textArea);
        }
    };
    return (
        <div
            onClick={closeModal}
            className={`fixed inset-0 z-[200] bg-black/55 flex items-center justify-center transition-opacity duration-400 p-4 ${
                isOpen
                    ? "opacity-1 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            role="dialog"
            aria-modal="true"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
            >
                {/* Close Modal button */}

                <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close dialog"
                >
                    <BiX className="h-4 w-4" />
                </button>
                {/* Circle */}
                <div className="mb-6 flex justify-center absolute p-1 left-44 -top-10 bg-white rounded-full w-24 h-24">
                    <div className="flex items-center justify-center border-black p-1 overflow-hidden rounded-full border-4">
                        <img src={UbaSvg} alt="UBA logo" />
                    </div>
                </div>
                {/* Encouragement */}
                <h2 className="mb-4 text-center text-2xl font-semibold mt-8">
                    Make a Difference Today
                </h2>
                <p className="mb-6 text-center text-gray-600 text-xl">
                    Your generosity helps us empower and build. Every
                    contribution brings us closer to a brighter future.
                </p>
                {/* Details */}
                <div className="mb-4 text-center flex flex-col justify-center items-center">
                    <p className="text-xl font-mono font-extrabold">
                        1025549744
                    </p>

                    <PiCopySimple
                        tabIndex={0}
                        onClick={copyToClipboard}
                        className="lucide lucide-copy cursor-pointer h-7 w-7"
                    />
                </div>

                <p className="mb-6 text-center text-gray-600 text-xl">
                    Maina &amp; Kids Children Foundation
                </p>
                {/*  */}
                <p className="text-center text-sm text-gray-500 text-md">
                    Thank you for supporting our cause!
                </p>
            </div>
        </div>
    );
};

export default DonateModal;
