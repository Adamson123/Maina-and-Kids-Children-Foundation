import { useDonateModal } from "../context/DonateModalContext";
import Button from "./Button";

const DonateButton = ({ btnStyle, linkStyle }) => {
    const { openModal } = useDonateModal();
    return (
        <Button
            onclick={openModal}
            content={"Donate"}
            btnStyle={`bg-[#336699] text-white before:bg-[#0f172a] border-none ${btnStyle}`}
            linkStyle={`${linkStyle}`}
        />
    );
};

export default DonateButton;
