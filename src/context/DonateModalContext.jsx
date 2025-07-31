import { createContext, useState, useContext } from "react";
export const DonateModalContext = createContext();
export const useDonateModal = () => useContext(DonateModalContext);

export const DonateModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <DonateModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </DonateModalContext.Provider>
    );
};
