$("#exampleModal").on('hidden.bs.modal', function (e) {
	$("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
});

$(function () {
	// Header_fixed
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	checkScroll(scrollPos, introH);


	$(window).on("scroll resize", function () {
		let introH = intro.innerHeight();
		let scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH - 20) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		console.log(elementOffset);

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 50
		}, 700);
	});
});