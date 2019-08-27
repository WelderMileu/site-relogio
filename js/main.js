(function(){
	const $ = (e) => document.querySelector(e);

	$(".hamburguer").addEventListener('click',() => {
		$(".nav-bar").classList.toggle("open-nav");
		$(".hamburguer").classList.toggle("transforma");
	});
})();