import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

class Services extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const pinnedElement = this.querySelector(".services__intro")

		const mediaQuery = gsap.matchMedia()

		mediaQuery.add("(min-width: 1024px)", () => {
			ScrollTrigger.create({
				trigger: this,
				pin: pinnedElement,
				end: "bottom bottom"
			})
		})
	}
}

customElements.define("js-services", Services)
