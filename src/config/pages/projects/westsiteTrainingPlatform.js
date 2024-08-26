import * as assets from "@assets/images/index"

export const content = {
	hero: {
		title: "Westsite training platform",
		intro: "Westsite is a boardshop located in the centre of Ghent. They have many years of experience selling skateboards, snowboards and other board related gadgets. They also organise training sessions were people can join to learn from experienced riders. The Westsite training platform was created to give those members a central point of information.",
		completed: "2023",
		services: ["Design,", "Development"],
		industry: "Retail",
		client: "Westsite Ghent",
		image: assets.WestsiteTrainingPlatformHero,
		imageMobile: assets.WestsiteTrainingPlatformHeroMobile,
		technologies: ["SCSS", "MongoDB", "React", "Express JS"]
	},
	projectFullwidthGallery: {
		image: assets.WestsiteTrainingPlatformFullwidthGallery
	},
	projectExplaination: {
		text: "Together with the manager and trainers, we developed a comprehensive dashboard that serves as an invaluable tool for managing the large number of members and coaches. This dashboard not only allowed to efficiently add new training sessions to the calendar but also to update the tricks list with new guides and video examples.\n\nBy providing a clear and organized overview of all activities, the dashboard ensures that everything runs smoothly, helping us maintain a high level of organization. It’s an essential resource in our daily management tasks, enabling us to respond quickly to changes and keep everyone on track."
	},
	projectColumnGallery: {
		images: [
			assets.WestsiteTrainingPlatformColumnGallery1,
			assets.WestsiteTrainingPlatformColumnGallery2
		]
	},
	projectShowcase: {
		title: "Asset management",
		text: "Managing a large amount of assets was crucial because most guides included video tutorials and multiple images. Thats why we build a user friendly interface on top of the asset storage. This way coaches could easily handle guide updates or additions",
		image: assets.WestsiteTrainingPlatformShowcase
	},
	projectFullwidthGallery2: {
		image: assets.WestsiteTrainingPlatformFullwidthGallery2
	},
	nextProject: {
		href: "/projects/dartpoint",
		text: "Dartpoint is a platform that allows for real-time online multiplayer darts games. It connects to Dartpoint detection modules that detect your scores and prevent cheating in games.\n\nThe detection system is easy to install on a standard dartboard making it super accessible for most people in the sport.",
		image: assets.DartpointNextCase
	}
}
