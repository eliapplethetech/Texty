var edit = "no";
function footer() {
	if (edit == "yes") {
		document.querySelector("#edit-footer").innerHTML("Done");
		edit = "no";
	} else {
		document.querySelector("#edit-footer").innerHTML("✎ Edit");
		edit = "yes";
	}
}
