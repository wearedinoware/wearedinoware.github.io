function _(id) {
	return document.getElementById(id);
}

function hover(e) {
	let sender = e.target.id;
	switch(sender) {
		case "about":
			document.body.style.background = "#5278F2";
			return;
		case "work":
			document.body.style.background = "#9052F2";
			return;
		case "contact":
			document.body.style.background = "#7D7D7D";
			return;
	}
}

function reset() {
	document.body.style.background = "#F25252";
}