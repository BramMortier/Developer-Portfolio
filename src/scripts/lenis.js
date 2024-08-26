import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import "lenis/dist/lenis.css"

const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
	direction: "vertical",
	gestureDirection: "vertical",
	smooth: true,
	smoothTouch: false,
	touchMultiplier: 2
})

lenis.on("scroll", ScrollTrigger.update)

gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
