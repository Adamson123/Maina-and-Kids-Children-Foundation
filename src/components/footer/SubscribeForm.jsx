import { useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";

const subscribe = async (email) => {
    let message = { error: "", success: "" };

    const showSuccess = () => {
        const success = "Thank you for signing up for our newsletter";
        toast.success(success, { style: { textAlign: "center" } });
        message = { ...message, success };
    };

    const showError = () => {
        const error = "There was an error signing up. Please try again later.";
        toast.error(error, { style: { textAlign: "center" } });
        message = { ...message, error };
    };

    try {
        await axiosInstance.post("/newsletter/subscribe", {
            email,
        });
        showSuccess();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // console.error(
            //     "❌ Axios error:",
            //     error.response?.data || error.message
            // );
            const status = error.response?.status;

            if (status === 409) {
                showSuccess();
            } else {
                showError();
            }
        } else {
            showError();
            console.error("💀 Unknown error:", error);
        }
    }
    //TODO: Not useful for now
    return message;
};

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [isSubscribing, setIsSubscribing] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubscribing(true);
        await subscribe(email);
        setIsSubscribing(false);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 max-w-[400px] sm:max-w-[330px] sm:items-center"
        >
            <h3 className="text-2xl font-semibold sm:text-center max-w-[300px] sm:text-[22px]">
                Sign Up For Our Monthly Newsletter
            </h3>
            <p className="text-sm sm:text-center">
                Want to hear what we are up to? sign up to get deets on our
                projects and activities
            </p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="Enter your Email"
                className="border border-primary-blue rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent min-w-[calc(100%-70px)] max-w-[calc(100%-70px)] sm:min-w-full"
            />
            <button
                type="submit"
                className="bg-primary-blue text-white rounded-md p-2 hover:bg-blue-500 transition-colors duration-300 max-w-[calc(100%-150px)] min-w-[calc(100%-150px)] sm:min-w-[calc(100%-50px)] flex justify-center items-center gap-2"
            >
                {isSubscribing ? (
                    <>
                        Submitting <LoaderIcon className="h-9 w-9" />
                    </>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
};

export default SubscribeForm;
