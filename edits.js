function hamburg()
{
	var x = document.getElementById("nav_cen");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else
	{
		x.className = "navbar";
	}
	
}