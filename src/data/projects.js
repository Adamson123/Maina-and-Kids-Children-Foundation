const getGirlChildProjectsImgPath = (name) => {
    return `/Maina-and-Kids-Children-Foundation/assets/girl-child-projects/${name}.webp`;
};

export const girlChildProjects = [
    {
        title: "World Menstrual Hygiene Day",
        content:
            "To celebrate the world menstrual hygiene day, Girl Child Program in collaboration with Maden Health Care Foundation reached out to under served communities and shared over 250 pads and raised awareness on menstrual health and debunk stigma’s.",
        image: getGirlChildProjectsImgPath("hygiene"),
        id: "hygiene",
    },

    {
        title: "Policy Making Awareness",
        content:
            "Creating awareness the girl child, making decisions and being part of decision making in their community or environment.",
        image: getGirlChildProjectsImgPath("policy-making"),
        id: "policy-making",
    },
    {
        title: "Sister to Sister Mentorship",
        content:
            "A mentor-mentee program curated to help build confidence, improve the state of well being of girl child amd general life.",
        image: getGirlChildProjectsImgPath("sister-to-sister"),
        id: "sister-to-sister",
    },
    {
        title: "International Women’s Day (Rising Stars)",
        content: `To commemorate the international women’s day, Girl Child Program in collaboration with Gals Voices held a one day event where they taught girls from different backgrounds confidence building, vision boarding and how to gauge their strengths.`,
        image: getGirlChildProjectsImgPath("rising-stars"),
        id: "women's-day",
    },
];

export const NavbarProjects = [
    { name: "Girl Child", link: "/girl-child" },
    {
        name: "Almajiri in Tech Initiative",
        link: "/projects/#almajiri-in-tech",
    },
    {
        name: "Safenet Ambassador's Program",
        link: "/projects/#safenet",
    },
    { name: "Child Care", link: "/projects/#child-care" },
    { name: "10 Years Anniversary", link: "/projects/#10-years-anniversary" },
];

const getProjectsImgPath = (name) => {
    return `/Maina-and-Kids-Children-Foundation/assets/projects/${name}.webp`;
};

export const safenetProgram = {
    id: "safenet",
    title: "SAFENET AMBASSADORS PROGRAM",
    contents: [
        {
            image: getProjectsImgPath("safenet-1"),
            texts: [
                {
                    title: "",
                    text: "The Maina & Kids SafeNet Ambassadors Program is an initiative designed to empower Secondary School Students with knowledge on safe and responsible digital practices and also how to use Tech for good. In 2024, we successfully implemented two cohorts, training over 60 ambassadors. Through their peer-to-peer efforts, these ambassadors reached and trained over 545 students across Dutse, Jigawa State.",
                },
            ],
        },
        {
            image: getProjectsImgPath("safenet-2"),
            texts: [
                {
                    title: "",
                    text: "The program emphasizes mentorship, interactive sessions, and community engagement, equipping Secondary School Students to advocate for online safety and positively impact their communities.",
                },
            ],
        },
    ],
};

export const almajiriInTech = {
    id: "almajiri-in-tech",
    title: "Almajiri In Tech",
    contents: [
        {
            image: getProjectsImgPath("almajiri-1"),
            texts: [
                {
                    title: "",
                    text: "For decades, the word “Almajiri” has carried a heavy weight in Northern Nigeria often associated with poverty, begging, and a lack of opportunity. But what if that narrative could be rewritten? What if, instead of seeing Almajiri boys on the streets, we saw them building websites, developing mobile apps, and solving real-world problems through technology?",
                },
            ],
        },
        {
            image: getProjectsImgPath("almajiri-2"),
            texts: [
                {
                    title: "",
                    text: `This is the vision behind Almajiri-in-Tech a bold initiative designed to give vulnerable boys in traditional Islamic schooling systems the tools of the future: digital literacy, coding skills, and entrepreneurial thinking.`,
                },
            ],
        },
    ],
};

export const mainaKidsFoundation = {
    id: "10-years-anniversary",
    title: "Maina And Kids Children Foundation 10 Years Anniversary",
    contents: [
        {
            image: getProjectsImgPath("maina-kids-1"),
            texts: [
                {
                    title: "",
                    text: "To celebrate Maina and Kids Children Foundation turning 10, the organization planned a week long activity to commemorate how far it has come.",
                },
                {
                    title: "School Visitation: ",
                    text: "Creating awareness on child rights amongst children and how they can be a part of policy and decision making",
                },
                {
                    title: "Pediatric Visit: ",
                    text: "Charity and warm visit to sick children in the pediatric units in hospitals.",
                },
            ],
        },
        {
            image: getProjectsImgPath("maina-kids-2"),
            texts: [
                {
                    title: "Street and TV Show: ",
                    text: "A march showing our stance on children rights, interviewing kids on the streets a TV show and celebrating the day with volunteers and well wishers.",
                },
                {
                    title: "Orphanage Visit: ",
                    text: "Charity and fun visit to orphanage homes to spend quality time with the kids and learning their stories.",
                },
            ],
        },
    ],
};

export const childCareStories = [
    {
        image: getProjectsImgPath("child-care-1"),
        title: "Baby Bello’s Journey",
        story: "Rescued in critical condition from Severe Acute Malnutrition, Baby Bello received life-saving care through the support of compassionate donors. His story is a powerful reminder of why we fight for every child’s right to survive and thrive.",
    },
    {
        image: getProjectsImgPath("child-care-2"),
        title: "Zainab’s Courage After the Flames",
        story: "Severely burned in a fire accident, Zainab received emergency care, comfort, and support through our foundation. Her healing journey continues with hope and strength.",
    },
    {
        image: getProjectsImgPath("child-care-3"),
        title: "Zainab’s Recovery from a Painful Burn",
        story: "Rescued in critical condition from Severe Acute Malnutrition, Baby Bello received life-saving care through the support of compassionate donors. His story is a powerful reminder of why we fight for every child’s right to survive and thrive.",
    },
];
