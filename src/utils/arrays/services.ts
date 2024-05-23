const baseUrl = import.meta.env.BASE_URL;

const socialMediaMarketing = {
    serviceId: "social-media-management",
    serviceNumber: "01.",
    serviceTitle: "Social Media Management",
    serviceDescription: "We develop platform-specific strategies for your organic and paid social media campaigns that suit your niche and consistently grow your online presence.",
    serviceImage: baseUrl+"assets/services/social-media-management.png",
    goodFits: [
        "Brands looking to enhance their online presence.",
        "Businesses aiming to target a specific audience on social media platforms.",
        "Companies seeking to balance both organic and paid social media efforts."
    ],
    badFits: [
        "Brands with no interest in engaging with their audience on social media.",
        "Businesses not open to investing in paid social media campaigns.",
        "Companies without a long-term commitment to social media strategies."
    ]
}

const contentBank = {
    serviceId: "content-bank",
    serviceNumber: "02.",
    serviceTitle: "Content Bank",
    serviceDescription: "We curate a ready-to-use library with a consistent collection of qualitative photos, Reels and videos that perfectly synchronize with our proposed social media content strategy.",
    serviceImage: baseUrl+"assets/services/content-bank.png",
    goodFits: [
        "Businesses needing a consistent stream of high-quality content.",
        "Brands looking to maintain a cohesive visual identity across social media.",
        "Companies seeking to save time by having ready-to-use content."
    ],
    badFits: [
        "Brands with no need for visual content.",
        "Businesses that prefer to create all content in-house.",
        "Companies not focused on social media marketing."
    ]
}

const contentCreation = {
    serviceId: "content-creation",
    serviceNumber: "03.",
    serviceTitle: "Content Creation",
    serviceDescription: "We collaborate with professional photographers and videographers to ensure every visual asset produced is of the highest quality, captivating and aligned with your brand’s vision.",
    serviceImage: baseUrl+"assets/services/content-creation.png",
    goodFits: [
        "Brands aiming for top-tier visual content.",
        "Companies needing professional photos and videos for campaigns.",
        "Businesses that value high-quality, captivating visuals."
    ],
    badFits: [
        "Brands with minimal visual content needs.",
        "Companies on a tight budget with no room for professional content creation.",
        "Businesses that handle all their content creation in-house."
    ]
}

const eventManagement = {
    serviceId: "event-management",
    serviceNumber: "04.",
    serviceTitle: "Event Management",
    serviceDescription: "We adopt a bespoke and seamless approach to plan and execute events that are memorable and personalised to your brand’s unique concept.",
    serviceImage: baseUrl+"assets/services/event-management.png",
    goodFits: [
        "Brands planning large-scale events.",
        "Companies seeking professional event management services.",
        "Businesses wanting personalized and memorable events."
    ],
    badFits: [
        "Small businesses with minimal event needs.",
        "Companies with an in-house event planning team.",
        "Brands not interested in external event management services."
    ]
}

const influencerMarketing = {
    serviceId: "influencer-marketing",
    serviceNumber: "05.",
    serviceTitle: "Influencer Marketing",
    serviceDescription: "We create and execute goal-centric influencer campaigns through a strategic selection of influencers dedicated to increase brand awareness, create authentic content and bring results.",
    serviceImage: baseUrl+"assets/services/influencer-marketing.png",
    goodFits: [
        "Brands looking to increase visibility through influencers.",
        "Companies seeking to leverage influencer content for marketing.",
        "Businesses aiming for authentic connections with their target audience."
    ],
    badFits: [
        "Brands with no interest in influencer marketing.",
        "Companies that prefer traditional marketing methods.",
        "Businesses with a very limited marketing budget."
    ]
}

const services = [
    socialMediaMarketing,
    contentBank,
    contentCreation,
    eventManagement,
    influencerMarketing,
]

export type IService = typeof services[number];

export default services;
