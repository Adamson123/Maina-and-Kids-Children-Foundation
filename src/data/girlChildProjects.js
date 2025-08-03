import { base } from "./basename";

const getGirlChildProjectsImgPath = (name) => {
    return `${base.basename}/assets/girl-child-projects/${name}.webp`;
};

export const girlChildProjects = [
    {
        title: "World Menstrual Hygiene Day",
        brief: "To celebrate the world menstrual hygiene day, Girl Child Program in collaboration with Maden Health Care Foundation reached out to under served communities and shared over 250 pads and raised awareness on menstrual health and debunk stigma’s.",
        image: getGirlChildProjectsImgPath("hygiene"),
        id: "hygiene",
    },

    {
        id: "policy-making",
        title: "Policy Making Awareness",
        brief: "Creating awareness the girl child, making decisions and being part of decision making in their community or environment.",
        image: getGirlChildProjectsImgPath("policy-making"),
        explanation: [
            {
                type: "paragraph",
                content:
                    "Building Confidence. Creating Connection. Empowering the Girl Child.",
            },
        ],
    },
    {
        id: "sister-to-sister",
        title: "Sister to Sister Mentorship",
        brief: "A mentor-mentee program curated to help build confidence, improve the state of well being of girl child amd general life.",
        image: getGirlChildProjectsImgPath("sister-to-sister"),
    },
    {
        id: "women's-day",
        title: "International Women’s Day (Rising Stars)",
        brief: `To commemorate the international women’s day, Girl Child Program in collaboration with Gals Voices held a one day event where they taught girls from different backgrounds confidence building, vision boarding and how to gauge their strengths.`,
        image: getGirlChildProjectsImgPath("rising-stars"),
    },
];

export const girlChildProjectExplanation = [
    {
        id: "hygiene",
        title: "World Menstrual Hygiene Day",
        content: [
            {
                type: "paragraph",
                content:
                    "In commemoration of World Menstrual Health Day, the Girl Child Program, in collaboration with Maden Healthcare Foundation, organized a menstrual health outreach to underserved communities. This initiative focused on breaking the stigma around menstruation, promoting menstrual hygiene, and providing practical support to girls and women in need.",
            },

            { type: "head", content: "The outreach featured:" },
            {
                type: "list",
                content: [
                    "Awareness sessions in local languages (Hausa) to debunk harmful myths and educate about menstrual health",

                    "Distribution of sanitary pads and hygiene kits",

                    "Colorful flashcards, banners, and instructional materials for lasting impact",

                    "Community engagement through placards and open dialogue on menstrual dignity",

                    "Our goal is simple: End period poverty and empower girls with dignity and knowledge. Together, we are creating safe spaces, one community at a time.",
                ],
            },
            {
                type: "paragraph",
                content: `Our goal is simple: End period poverty and empower girls with dignity and knowledge.
              Together, we are creating safe spaces, one community at a time.`,
            },
        ],
    },
    {
        id: "policy-making",
        title: "Policy Awareness",
        content: [
            {
                type: "paragraph",
                content:
                    "This program was designed to educate and empower girls with knowledge about the policies that impact their lives, education, safety, and well-being. Through interactive sessions, group discussions, and community engagement, participants were introduced to key local, national, and international policies, especially those aligned with girls' rights and gender equality.",
            },
            {
                type: "paragraph",
                content:
                    "The goal was to ensure that every girl understands her rights, knows how to access opportunities, and is encouraged to speak up, participate in decision-making, and contribute meaningfully to her community.",
            },
        ],
    },
    {
        id: "sister-to-sister",
        title: "Sister-to-Sister Mentorship Program",
        content: [
            {
                type: "paragraph",
                content:
                    "Building Confidence. Creating Connection. Empowering the Girl Child.",
            },
            {
                type: "paragraph",
                content:
                    "The Sister-to-Sister Mentorship Program is a core initiative under Girl Child Program by Maina & Kids Children Foundation. It is designed to support, guide, and uplift girls, many of whom have experienced vulnerability, by pairing them with inspiring female mentors who serve as role models and safe guides.",
            },
            {
                type: "paragraph",
                content:
                    "Through a close-knit, relationship-based model, mentors provide consistent emotional, educational, and personal support, helping girls build confidence, embrace their identities, and develop the skills they need to thrive.",
            },
            {
                type: "head",
                content: "Key Features:",
            },
            {
                type: "list",
                content: [
                    "1-on-1 or Small Group Mentorships",
                    "Monthly Empowerment Meetups",
                    "Thematic Learning (e.g., self-esteem, communication, goal setting)",
                    "Safe and Supportive Environment",
                    "Focus on Girls’ Rights, Digital Skills & Personal Growth",
                ],
            },
            {
                type: "paragraph",
                content:
                    "The program creates lasting sisterhoods rooted in trust and encouragement, ensuring no girl walks her journey alone. Together, we are nurturing a generation of strong, confident girls ready to take on the future.",
            },
        ],
    },
    {
        id: "women's-day",
        title: "Rising Stars: Building Your Brilliant Future",
        content: [
            {
                type: "paragraph",
                content: "Empowering Girls to Rise with Confidence and Purpose",
            },
            {
                type: "paragraph",
                content:
                    "For International Women's Day, Girl Child Program in collaboration with Gals Voices held a one-day event to provide adolescent girls with the tools, mentorship, and safe space they need to discover their voice, define their goals, and build their futures.",
            },
            {
                type: "paragraph",
                content:
                    "The first edition of Rising Stars brought together 20 girls for a one-day empowerment program filled with inspiring conversations, vision-setting exercises, and connection with mentors. Through storytelling, vision boarding and strength circles, the girls were encouraged to step into their strengths and envision a future beyond limitations.",
            },
            {
                type: "head",
                content: "Program Highlights",
            },
            {
                type: "list",
                content: [
                    "Strength Circles because we all need to know our core arc.",
                    "One-on-one mentorship and guidance from inspiring women",
                    "Vision boarding because we all need to see that we can achieve so much when we plan and work towards it.",
                    "Commitment Card activity where girls set personal goals",
                ],
            },
            {
                type: "paragraph",
                content:
                    "The success of the first edition laid the foundation for a growing movement, one that believes every girl, no matter her background, deserves to rise.",
            },
            {
                type: "quote",
                content:
                    "When girls are seen, heard, and supported they shine.",
            },
        ],
    },
];
