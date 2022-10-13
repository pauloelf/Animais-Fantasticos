export default class Accordion {
	constructor(list) {
		this.accordionList = document.querySelectorAll(list)
		this.activeClass = 'ativo'
	}

	toggleAccordion(i) {
		i.classList.toggle(this.activeClass)
		i.nextElementSibling.classList.toggle(this.activeClass)
	}

	addAccordionEvent() {
		this.accordionList.forEach((i) => {
			i.addEventListener('click', () => this.toggleAccordion(i))
		})
	}

	init() {
		if(this.accordionList.length) {
			this.toggleAccordion(this.accordionList[0])
			this.addAccordionEvent()
		}
		return this
	}
}
