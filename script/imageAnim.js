(() => {
	console.log('fired'); 
	// simple test to see if js works 
	// // set up the puzzle pieces and boards
	window.addEventListener("load", changeHeadline);
	function changeHeadline() {
		document.querySelector("h1").textContent = "Drag & Drop";
		document.querySelector("p").textContent = "a simple drag and drop puzzle game";
	}

	const TheButton = document.querySelector("#buttonHolder img");
	window.addEventListener("click", changeHeadline2);
	function changeHeadline2() {
		document.querySelector("h1").textContent = "Drag & Drop!!!";
	}


})();
