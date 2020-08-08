document.addEventListener("DOMContentLoaded", function() {

	const container = document.querySelector('.header-menu')
	const primary = container.querySelector('.header-menu-primary')
	const primaryItems = container.querySelectorAll('.header-menu-primary > li:not(.more)')
	container.classList.add('--jsfied')

	// insert "more" button and duplicate the list
	primary.insertAdjacentHTML('beforeend', `
		<li class="more">
			<button class="btn btn-transparent" aria-haspopup="true" aria-expanded="false">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 2H14V4H2V2Z" />
					<path d="M2 7H14V9H2V7Z" />
					<path d="M2 12H14V14H2V12Z" />
				</svg>
				<span>Все разделы</span>
			</button>
			<ul class="-secondary">
				${primary.innerHTML}
			</ul>
		</li>
	`)
	const secondary = container.querySelector('.-secondary')
	const secondaryItems = secondary.querySelectorAll('li')
	const allItems = container.querySelectorAll('li')
	const moreLi = primary.querySelector('.more')
	const moreBtn = moreLi.querySelector('button')
	moreBtn.addEventListener('click', (e) => {
		e.preventDefault()
		container.classList.toggle('--show-secondary')
		moreBtn.setAttribute('aria-expanded', container.classList.contains('--show-secondary'))
	})

	// adapt tabs
	const doAdapt = () => {
		// reveal all items for the calculation
		allItems.forEach((item) => {
			item.classList.remove('--hidden')
		})

		// hide items that won't fit in the Primary
		let stopWidth = moreBtn.offsetWidth
		let hiddenItems = []
		const primaryWidth = primary.offsetWidth
		primaryItems.forEach((item, i) => {
			if(primaryWidth >= stopWidth + item.offsetWidth) {
				stopWidth += item.offsetWidth
			} else {
				item.classList.add('--hidden')
				hiddenItems.push(i)
			}
		})
		
		// toggle the visibility of More button and items in Secondary
		if(!hiddenItems.length) {
			moreLi.classList.add('--hidden')
			container.classList.remove('--show-secondary')
			moreBtn.setAttribute('aria-expanded', false)
		}
		else {  
			secondaryItems.forEach((item, i) => {
				if(!hiddenItems.includes(i)) {
					item.classList.add('--hidden')
				}
			})
		}
	}

	doAdapt() // adapt immediately on load
	window.addEventListener('resize', doAdapt) // adapt on window resize

	// hide Secondary on the outside click

	document.addEventListener('click', (e) => {
		let el = e.target
		while(el) {
			if(el === secondary || el === moreBtn) {
				return;
			}
			el = el.parentNode
		}
		container.classList.remove('--show-secondary')
		moreBtn.setAttribute('aria-expanded', false)
	})

});


jQuery(document).ready(function($) {
	
	// Home slider
	$('.heroes-slider').slick({
		// autoplay: true,
		// autoplaySpeed: 3000,
		// infinite: false,
		dots: true,
	})

	// Toggle Search form
	$('.mobile-action .search-btn').on('click', function() {
		$('.search-form').addClass('is-active')
	})
	$('.search-form .search-form-close').on('click', function() {
		$('.search-form').removeClass('is-active')
	})

});