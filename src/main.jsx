import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";
import { AnniversaryProvider } from "./context/AnniversaryContext.jsx";
import { DonateModalProvider } from "./context/DonateModalContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AnniversaryProvider>
            <MenuProvider>
                <DonateModalProvider>
                    <App />
                </DonateModalProvider>
            </MenuProvider>
        </AnniversaryProvider>
    </StrictMode>
);
