import * as assets from "@assets/images/index"

export const content = {
	hero: {
		title: "Interior design website",
		intro: "Carine is an experienced interior design specialist who has spent many years honing her skills in the industry. Throughout her career, she has developed a keen eye for detail and a deep understanding of how to create spaces that are both functional and aesthetically pleasing. Now she's taking her expertise and starting her own business, where she will bring her unique vision and passion for design to create beautiful, personalized spaces for her clients.",
		completed: "2024",
		services: ["Branding,", "Design,", "Development"],
		industry: "Interior design",
		client: "Carine De Geyter",
		image: assets.InteriorDesignWebsiteHero,
		imageMobile: assets.InteriorDesignWebsiteHeroMobile,
		technologies: ["SEO", "Astro", "Typescript", "Web components", "SCSS"]
	},
	projectShowcase: {
		title: "Digital footprint & Website",
		text: "To make sure Carine has a strong digital footprint, we created a website that not only showcases her expertise but also serves as an interactive platform for potential clients to explore her portfolio, learn about her design philosophy, and get inspired by her past projects.",
		image: assets.InteriorDesignWebsiteShowcase
	},
	projectFullwidthGallery1: {
		image: assets.InteriorDesignWebsiteFullwidthGallery1
	},
	projectSplitHighlight: {
		text: "An elegant and unqiue business card was made to create better networking opportunities. We used a bright color palette to stand out from the mountain of other boring business cards",
		image: assets.InteriorDesignWebsiteSplitHighlight
	},
	projectFullwidthGallery2: {
		image: assets.InteriorDesignWebsiteFullwidthGallery2
	},
	projectColumnGallery: {
		images: [
			assets.InteriorDesignWebsiteColumnGallery1,
			assets.InteriorDesignWebsiteColumnGallery2
		]
	},
	nextProject: {
		href: "/projects/westsite-training-platform",
		text: "The Westsite training platform is a place were members of the Westsite board shop can find info on future training sessions and events.\n\nThe platform also allows wakeboarders to track their progression with a personalized trick list and new things to try.",
		image: assets.WestsiteTrainingPlatformNextCase
	}
}
