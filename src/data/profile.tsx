
export type Contact = {
    label: string;
    value: string;
    icon: "email" | "phone" | "birthday" | "location";
};

export type Social = {
    name: string;
    href: string;
};

export type Profile = {
    name: string;
    contacts: Contact[];
    socials: Social[];
    about: string[];
};

export const profile: Profile = {
    name: 'Kevin Langga',
    contacts: [
        {label: "email", value: "kikoirfan45@gmail.com", icon: "email"},
        {label: "phone", value: "085842503952", icon: "phone"},
        {label: "birthday", value: "5 August 1997", icon: "birthday"},
        {label: "location", value: "Yogyakarta, Indonesia", icon: "location"},
    ],
    socials: [
        {name: "Github", href: "www"},
        {name: "LinkedIn", href: ""},
        {name: "Instagram", href: ""},
        {name: "TikTok", href: ""}
    ],
    about: [
        "Hey i am Kevin langga, a junior web developer who start to build career as a fullstack software engineer",
        "I am currently starting to learn several tech stacks for web development, such as React, Next.js, NestJS, Prisma ORM, and Postman"
    ]
}