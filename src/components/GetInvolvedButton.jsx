import Button from "./Button";

const GetInvolvedButton = ({ btnStyle, linkStyle }) => {
    return (
        <Button
            content={"get involved"}
            btnStyle={`text-[#453838] before:bg-[#0f172a] hover:text-white hover:border-none w-full ${btnStyle}`}
            linkStyle={`${linkStyle}`}
            link={"https://forms.gle/enFrUh2xQ1VqmP8CA"}
        />
    );
};

export default GetInvolvedButton;
