import * as assets from "@assets/images/index"

export const content = {
	hero: {
		title: "My goto mobile app and dashboard",
		intro: "My Goto is a Danish startup with big ideas for the food industry. Their goal is to provide an assortment of warm and healthy meals through a network of vending machines with build in microwaves. This system allows busy people to get food in an efficient way without compromising on the quality of their meals. Collaboration with nearby restaurants is another way My Goto want to create opportunities and guarantee quality meals.",
		completed: "2023",
		services: ["Branding,", "Design,", "Development"],
		industry: "Food",
		client: "Niels Bjorndahl",
		image: assets.MyGotoHero,
		imageMobile: assets.MyGotoHeroMobile,
		technologies: [
			"Vue3",
			"Supabase",
			"Google geolocation API",
			"PostgreSQL"
		]
	},
	projectHighlight: {
		image: assets.MyGotoHighlight,
		text: "The main goal of the dashboard we created was to provide an easy way of managing a growing network of vending machines and keep track of every single meal location and status"
	},
	projectShowcase: {
		title: "Brandbook & Design system",
		text: "We established a robust foundation for the brand by developing comprehensive guidelines that clearly outline the appropriate usage and representation of the brand. By providing detailed instructions on how certain parts of the brand should be used, we also ensured consistency in how the brand is presented across various platforms.",
		image: assets.MyGotoShowcase
	},
	projectColumnGallery: {
		images: [assets.MyGotoColumnGallery1, assets.MyGotoColumnGallery2]
	},
	projectFullwidthGallery: {
		image: assets.MyGotoFullwidthGallery
	},
	nextProject: {
		text: "Carine De Geyter is an interior designer with years of experience and a keen eye for detail. Together we set out to build a website that conveys her expertise and showcases all the beautiful interiors she has transformed.",
		image: assets.InteriorDesignWebsiteNextCase
	}
}
