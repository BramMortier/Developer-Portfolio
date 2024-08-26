import Swiper from "swiper/bundle"

import "swiper/css/bundle"

class TestimonialSlider extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		new Swiper(".swiper", {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 16,

			grabCursor: true,
			keyboard: {
				enabled: true
			},

			navigation: {
				nextEl: ".c-testimonial-slider__next",
				prevEl: ".c-testimonial-slider__prev"
			},

			breakpoints: {
				420: {
					slidesPerView: 1.25,
					spaceBetween: 24
				},
				768: {
					slidesPerView: 1.75,
					spaceBetween: 32
				},
				1400: {
					slidesPerView: 2.5,
					spaceBetween: 64
				}
			}
		})
	}
}

customElements.define("js-testimonial-slider", TestimonialSlider)
