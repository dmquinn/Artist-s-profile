window.addEventListener("scroll", function () {
	const target = document.querySelectorAll("img, p");
	// const text = document.querySelectorAll("p")
	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		target[index].style.transform = "translate3d(0px, " + pos + "px, 9px)";
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

const ans = document.querySelectorAll("path");

for (let i = 0; i < ans.length; i++) {
	ans[i].addEventListener("mouseover", function () {
		ans[
			i
		].style.animation = `scirclebig 0.5s cubic-bezier(0.25, 0.25, 0.25, 0.5) forwards infinite`;
	});
	ans[i].addEventListener("mouseleave", function () {
		ans[i].style.animation = `circlesmall 0.5s linear`;
	});
}
