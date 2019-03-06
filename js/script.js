function openNav() {

	let x = document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menuJS";
		document.getElementById("threeline-icon").innerHTML = "&Cross;";
	} else {
		x.className = "navigation";
		document.getElementById("threeline-icon").innerHTML = "&#x2630;";
	}

}
