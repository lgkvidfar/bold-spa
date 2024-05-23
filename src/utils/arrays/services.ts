const baseUrl = import.meta.env.BASE_URL;

const socialMediaMarketing = {
    serviceId: "social-media-management",
    serviceNumber: "01.",
    serviceTitle: "Social Media Management",
    serviceDescription: "We develop platform-specific strategies for your organic and paid social media campaigns that suit your niche and consistently grow your online presence.",
    serviceImage: baseUrl+"assets/services/social-media-management.png"
}

const contentBank = {
    serviceId: "content-bank",
    serviceNumber: "02.",
    serviceTitle: "Content Bank",
    serviceDescription: "We curate a ready-to-use library with a consistent collection of qualitative photos, Reels and videos that perfectly synchronize with our proposed social media content strategy.",
    serviceImage: baseUrl+"assets/services/content-bank.png"
}

const contentCreation = {
    serviceId: "content-creation",
    serviceNumber: "03.",
    serviceTitle: "Content Creation",
    serviceDescription: "We collaborate with professional photographers and videographers to ensure every visual asset produced is of the highest quality, captivating and aligned with your brand’s vision.",
    serviceImage: baseUrl+"assets/services/content-creation.png"
}

const eventManagement = {
    serviceId: "event-management",
    serviceNumber: "04.",
    serviceTitle: "Event Management",
    serviceDescription: "We adopt a bespoke and seamless approach to plan and execute events that are memorable and personalised to your brand’s unique concept.",
    serviceImage: baseUrl+"assets/services/event-management.png"
}

const influencerMarketing = {
    serviceId: "influencer-marketing",
    serviceNumber: "05.",
    serviceTitle: "Influencer Marketing",
    serviceDescription: "We create and execute goal-centric influencer campaigns through a strategic selection of influencers dedicated to increase brand awareness, create authentic content and bring results.",
    serviceImage: baseUrl+"assets/services/influencer-marketing.png"
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