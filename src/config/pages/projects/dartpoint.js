import * as assets from "@assets/images/index"

export const content = {
	hero: {
		title: "Dartpoint / dart detection systems",
		intro: "Dartpoint is a platform that allows for real-time online multiplayer darts games. It connects to Dartpoint detection modules that detect your scores and prevents cheating in games. The detection system is easy to install on a standard dartboard making it super accessible for most people in the sport. This project was made for my Bachelor thesis at Artevelde hogeschool and won the prize for best project of my course.",
		completed: "2024",
		services: ["Branding,", "Design,", "Development,", "Audiovisual"],
		industry: "Entertainment",
		client: "Artevelde hogeschool",
		image: assets.DartpointHero,
		imageMobile: assets.DartpointHeroMobile,
		technologies: [
			"Vue3",
			"PostgreSQL",
			"Hono JS + Bun",
			"OpenCV + python",
			"Raspberry Pi",
			"Websockets"
		]
	},
	projectColumnGallery: {
		images: [assets.DartpointColumnGallery1, assets.DartpointColumnGallery2]
	},
	projectExplaination: {
		text: "The main goal of the platform was to make sure it wasn't a hassle for people. Activating it should be seamless. One beautifull example of this is once a player throws a dart the module detects this and automatically starts a session for u. No need to start anything or configure settings. Joining games or inviting people can also be done mid session to allow for ultimate flexibility."
	},
	projectFullwidthGallery1: {
		image: assets.DartpointFullwidthGallery1
	},
	projectShowcase: {
		title: "Collaboration with Madhouse Aalter",
		text: "During the research phase of the project we worked closely with dartshap Madhouse. They let us try out existing systems and helped us with product design. It's also here that were we were able to gather valuable info with lots of user research.",
		image: assets.DartpointShowcase
	},
	projectHighlight: {
		image: assets.DartpointHighlight,
		text: "We rapidly developed an MVP that showed promising accuracy and durability and then used this prototype to discover flaws on both the product and the software side so we could keep improving the product"
	},
	projectFullwidthGallery2: {
		image: assets.DartpointFullwidthGallery2
	},
	nextProject: {
		href: "/projects/my-goto",
		text: "My Goto is a Danish startup with big ideas for the food industry. Their goal is to provide an assortment of warm and healthy meals through a network of vending machines with build in microwaves.",
		image: assets.DartpointNextProject
	}
}
