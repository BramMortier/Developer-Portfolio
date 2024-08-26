import * as assets from "@assets/images/index"

export const content = {
	hero: {
		image: assets.BramMortier
	},
	projects: {
		title: "Work/projects showcase",
		list: [
			{
				href: "/projects/my-goto",
				name: "My Goto mobile app and dashboard",
				text: "My Goto is a Danish startup with big ideas for the food industry. Their goal is to provide an assortment of warm and healthy meals through a network of vending machines with build in microwaves.",
				technologies: [
					"Vue3",
					"Supabase",
					"Google geolocation",
					"PostgreSQL"
				],
				images: [
					assets.MyGotoCase1,
					assets.MyGotoCase2,
					assets.MyGotoCase3
				],
				accentColor: "hsl(35, 100%, 66%)"
			},
			{
				href: "/projects/interior-design-website",
				name: "Interior design website",
				text: "Carine De Geyter is an interior designer with years of experience and a keen eye for detail. Together we set out to build a website that conveys her expertise and showcases all the beautiful interiors she has transformed.",
				technologies: [
					"SEO",
					"Astro",
					"Typescript",
					"Web components",
					"SCSS"
				],
				images: [
					assets.InteriorDesignWebsiteCase1,
					assets.InteriorDesignWebsiteCase2,
					assets.InteriorDesignWebsiteCase3,
					assets.InteriorDesignWebsiteCase3Mobile
				],
				accentColor: "hsl(171, 16%, 42%)"
			},
			{
				href: "/projects/westsite-training-platform",
				name: "Westsite Training Platform",
				text: "The Westsite training platform is a place were members of the Westsite board shop can find info on future training sessions and events. The platform also allows wakeboarders to track their progression with a personalized trick list and new things to try.",
				technologies: ["SCSS", "MongoDB", "React", "Express JS"],
				images: [
					assets.WestsiteTrainingPlatformCase1,
					assets.WestsiteTrainingPlatformCase2
				],
				accentColor: "hsl(0, 0%, 0%)"
			},
			{
				href: "/projects/dartpoint",
				name: "Dartpoint",
				text: "Dartpoint is a platform that allows for real-time online multiplayer darts games. It connects to Dartpoint detection modules that detect your scores and prevent cheating in games.",
				technologies: [
					"Vue3",
					"PostgreSQL",
					"Hono JS + Bun",
					"OpenCV + python",
					"Raspberry Pi",
					"Websockets"
				],
				images: [assets.DartpointCase1, assets.DartpointCase2],
				accentColor: "hsl(4, 65%, 53%)"
			}
		]
	},
	services: {
		title: "My toolset and skills",
		text: "The following list of tools and services are things i've grown a passion for and know a thing or two about. My primary expertise is the creative design & development process for the modern web",
		toolset: [
			{
				name: "Design",
				skills: [
					"Figma",
					"UI/UX Principles",
					"Wireframing",
					"Design Systems",
					"Prototyping/Testing"
				]
			},
			{
				name: "Branding",
				skills: [
					"Logo Design",
					"Brand Guidelines",
					"User Research",
					"Visual Identity"
				]
			},
			{
				name: "Development",
				skills: [
					"Craft CMS",
					"Astro",
					"Vue 3",
					"PostgreSQL",
					"Express (Hono)",
					"GSAP",
					"Laravel",
					"Python"
				]
			},
			{
				name: "Audiovisual",
				skills: ["Premiere Pro", "Photography", "Videography"]
			}
		]
	},
	experience: {
		title: "Work experience",
		cards: [
			{
				image: assets.LittleMissRobot,
				jobTitle: "Craft CMS & Frontend Dev - Internship",
				responsibilities: [
					"Transformed designs into optimized an responsive websites using an in house custom Craft CMS setup.",
					"Documented coding conventions and way of working for future interns. Researched new technologies and presented them to the team in a structured presentation. These presentations allow the whole team to stay up te date and discuss how to handle future projects.",
					"Presented a website to a client and went through the CMS manual with them. Answered questions and processed comments in a structured way so they can easily be handled by the team."
				],
				location: "Ghent",
				locationIcon: "flag-bel",
				companyName: "@LittleMissRobot",
				employmentPeriod: "10 weeks, 2023"
			},
			{
				image: assets.MyGoto,
				jobTitle: "Fullstack Dev & Designer - Internship",
				responsibilities: [
					"Performed target group research and then established a clear branding strategy that conveys the core values and unique selling propositions of My Goto.",
					"Constructed a list of key features to that would solve our target groups pain points and transformed them into a working prototype for user testing. Then finalized the design process with high fidelity designs and a design system.",
					"Created an MVP product that allowed Niels to gather investment for the project and start working on building a team."
				],
				location: "Denmark",
				locationIcon: "flag-den",
				companyName: "@MyGoto",
				employmentPeriod: "3 months, 2022 - 2023 "
			},
			{
				image: assets.Mafoulit,
				jobTitle: "WordPress Dev & Designer",
				responsibilities: [
					"Created a user friendly and elegant designs that allowed customers explore our collection of products online",
					"Developed a fast and reliable website using WordPress. During this process I worked closely with the owners making sure they also could easily update the content of the pages.",
					"Using the the Adobe creative suite I designed and managed digital content for the website. Editing photos, creating SVG graphics and optimizing content for different use cases."
				],
				location: "Ghent",
				locationIcon: "flag-bel",
				companyName: "@LittleMissRobot",
				employmentPeriod: "10 weeks, 2023"
			}
		]
	},
	contact: {
		title: "Lets work together!",
		contactInfo: ["bram.mortier92@gmail.com", "+32 484 79 62 29"],
		location: ["Ghent, Belgium"]
	},
	testimonials: {
		title: "Client voices",
		cards: [
			{
				title: "Working with Bram was a great experience!",
				text: "He was very creative, attentive, and professional - and as our project together came to and end, he delivered above and beyond what was expected of him and made sure that I got a great collection of all of the work that he and his team had been working on in a super hand-off, which will enable me to make use of it in the future (which I am sure that I will). I can warmly recommend hiring Bram to be a part of your team.",
				author: "Niels Bjorndahl",
				authorRole: "CEO @My Goto"
			},
			{
				title: "Bram worked with us for a few years as a web developer.",
				text: "We were very satisfied with his work and professional attitude. He can work independently, has good communication and when needed well thought out solutions. His drive to stay on top of the latest developments in the industry and apply this knowledge our work made him a valuable asset. We would highly recommend him, he is a valuable, reliable employee with a positive impact, a good team player who contributes to a fun work environment.",
				author: "Emmely Foucaert",
				authorRole: "CEO @Mafoulit"
			},
			{
				title: "Working with Bram was a great experience!",
				text: "He was very creative, attentive, and professional - and as our project together came to and end, he delivered above and beyond what was expected of him and made sure that I got a great collection of all of the work that he and his team had been working on in a super hand-off, which will enable me to make use of it in the future (which I am sure that I will). I can warmly recommend hiring Bram to be a part of your team.",
				author: "Niels Bjorndahl",
				authorRole: "CEO @My Goto"
			},
			{
				title: "Bram worked with us for a few years as a web developer.",
				text: "We were very satisfied with his work and professional attitude. He can work independently, has good communication and when needed well thought out solutions. His drive to stay on top of the latest developments in the industry and apply this knowledge our work made him a valuable asset. We would highly recommend him, he is a valuable, reliable employee with a positive impact, a good team player who contributes to a fun work environment.",
				author: "Emmely Foucaert",
				authorRole: "CEO @Mafoulit"
			},
			{
				title: "Working with Bram was a great experience!",
				text: "He was very creative, attentive, and professional - and as our project together came to and end, he delivered above and beyond what was expected of him and made sure that I got a great collection of all of the work that he and his team had been working on in a super hand-off, which will enable me to make use of it in the future (which I am sure that I will). I can warmly recommend hiring Bram to be a part of your team.",
				author: "Niels Bjorndahl",
				authorRole: "CEO @My Goto"
			},
			{
				title: "Bram worked with us for a few years as a web developer.",
				text: "We were very satisfied with his work and professional attitude. He can work independently, has good communication and when needed well thought out solutions. His drive to stay on top of the latest developments in the industry and apply this knowledge our work made him a valuable asset. We would highly recommend him, he is a valuable, reliable employee with a positive impact, a good team player who contributes to a fun work environment.",
				author: "Emmely Foucaert",
				authorRole: "CEO @Mafoulit"
			}
		]
	}
}
