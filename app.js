window.addEventListener("scroll", function () {
	const target = document.querySelectorAll("img, p");
	// const text = document.querySelectorAll("p")
	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		target[index].style.transform = "translate3d(0px, " + pos + "px, 9px)";
		console.log(target);
	}
});
const progressbar = document.querySelector("progress");
const article = document.querySelector(".container");

let isScrolling = false;

document.addEventListener("scroll", (e) => (isScrolling = true));

render();

function render() {
	requestAnimationFrame(render);

	if (!isScrolling) return;

	progressbar.value =
		(window.scrollY / (article.offsetHeight - window.innerHeight)) * 100;

	isScrolling = false;
}


function animateFrom(elem, direction) {
	direction = direction | 1;

	var x = 0,
		y = direction * 100;
	if (elem.classList.contains("gs_reveal_fromLeft")) {
		x = -100;
		y = 0;
	} else if (elem.classList.contains("gs_reveal_fromRight")) {
		x = 100;
		y = 0;
	}
	gsap.fromTo(
		elem,
		{ x: x, y: y, autoAlpha: 0 },
		{
			duration: 1.25,
			x: 0,
			y: 0,
			autoAlpha: 1,
			ease: "expo",
			overwrite: "auto",
		}
	);
}

function hide(elem) {
	gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
		hide(elem); // assure that the element is hidden when scrolled into view

		ScrollTrigger.create({
			trigger: elem,
			onEnter: function () {
				animateFrom(elem);
			},
			onEnterBack: function () {
				animateFrom(elem, -1);
			},
			onLeave: function () {
				hide(elem);
			}, // assure that the element is hidden when scrolled into view
		});
	});
});
