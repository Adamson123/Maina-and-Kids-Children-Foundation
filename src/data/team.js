import { base } from "./basename";

/*    const pathname = location.pathname.endsWith("/")
? location.pathname.slice(0, -1)
: location.pathname;*/

const getImagePath = (name) => {
    return `${base.basename}/assets/team/${name}.webp`;
};

export const threeSpeakers1 = [
    {
        image: getImagePath("Afolabi"),
        name: "Afolabi Joshua Voja",
        position: "Programs Manager",
    },
    {
        image: getImagePath("Asaba"),
        name: "Asaba Helen Peter",
        position: "Monitoring & Evaluation Officer",
    },
    {
        image: getImagePath("Taudo"),
        name: "Taudo Theresa Sunu",
        position: "Programs Officer",
    },
];

export const threeSpeakers2 = [
    {
        image: getImagePath("Sadeeq"),
        name: "Sadeeq A. Nuru",
        position: "Finance Manager",
    },
    {
        image: getImagePath("Isaac"),
        name: "Isaac Ololade Kayode",
        position: "Monitoring & Evaluation Officer",
    },
    {
        image: getImagePath("Phoebe"),
        name: "Phoebe Yarima",
        position: "Fundraising and Partnership Officer",
    },
];

export const threeSpeakers3 = [
    {
        image: getImagePath("Emmanuel"),
        name: "Emmanuel Odewale",
        position: "Communications Manager",
    },
    {
        image: getImagePath("Rahab"),
        name: "Rahab David",
        position: "Communications Manager",
    },
    {
        image: getImagePath("Chira"),
        name: "Chira Glory Ekene",
        position: "Social Media Officer",
    },
];

export const twoSpeakers = [
    {
        image: getImagePath("Benjamin"),
        name: "Benjamin Peter",
        position: "Human Resource & Development Manager ",
    },
    {
        image: getImagePath("Florence"),
        name: "Florence Hosea",
        position: "Volunteer & Outreach Coordinator",
    },
];

export const founder = {
    id: 1,
    image: getImagePath("Gambo"),
    name: "Gambo Maina Bawa",
    position: "Founder, Executive Director",
};

//
export const teamInHompage = [
    {
        id: 1,
        image: getImagePath("Gambo"),
        speakerName: "Gambo Maina Bawa",
        speakerPosition: "Founder, Executive Director",
    },
    {
        id: 2,
        image: getImagePath("Afolabi"),
        speakerName: "Afolabi Joshua Voja",
        speakerPosition: "Programs Manager",
    },
    {
        id: 3,
        image: getImagePath("Sadeeq"),
        speakerName: "Sadeeq A. Nuru",
        speakerPosition: "Finance Manager",
    },
    {
        id: 4,
        image: getImagePath("Emmanuel"),
        speakerName: "Emmanuel Odewale",
        speakerPosition: "Communications Manager",
    },
    {
        id: 5,
        image: getImagePath("Benjamin"),
        speakerName: "Benjamin Peter",
        speakerPosition: "Human Resource & Development Manager ",
    },
    {
        id: 6,
        image: getImagePath("Asaba"),
        speakerName: "Asaba Helen Peter",
        speakerPosition: "Monitoring & Evaluation Officer",
    },
];
