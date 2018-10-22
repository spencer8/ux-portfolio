import './home.scss';

function scrollElementTo(scrollWithin, scrollTo, duration, targetID) {
	scrollWithin.scrollTop = scrollWithin.scrollTop || 0;

	const destY = scrollTo.offsetTop,
				initialOffset = scrollWithin.scrollTop,
				totalOffset = Math.abs(initialOffset - destY),
				direction = initialOffset < destY ? 1 : -1,
				interval = 20,
				totalTicks = duration / interval;

  let i = 0;

	let timerId = setTimeout(function tick() {
	  const progress = i / totalTicks,
	  			ease = progress*(2-progress);
		scrollWithin.scrollTop = initialOffset + (totalOffset * ease * direction);
		i++;
	  if (i <= totalTicks) {
	    timerId = setTimeout(tick, interval)
	  } else {
	  	scrollWithin.tabIndex = "-1";
      scrollWithin.focus();
      window.history.pushState("", "", targetID);
	  }
	}, interval);
}

function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = '#' + this.getAttribute("href").split("#",2)[1];
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;

  const wrapper = document.getElementById('wrapper');
	scrollElementTo(wrapper, targetAnchor, 500, targetID);
}

const linksToAnchors = document.querySelectorAll('a[href*="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));


window.addEventListener('load', function () {
	document.body.classList.add('loaded');
}, false);