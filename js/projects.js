var projectData = JSON.parse(data);
var tags = ["Featured"]

for (proj of projectData) {
	for (tag of proj.tags) {
		if (!tags.includes(tag)) {
			tags.push(tag);
		}
	}
}

var i;
for (i = 1; i < tags.length; i++) {
	let labelfor = tags[i];
	let label = document.createElement("LABEL");
	label.setAttribute("for", labelfor);

	let input = document.createElement("INPUT");
	input.setAttribute("type", "radio");
	input.setAttribute("name", "tag-select");
	input.setAttribute("id", labelfor);
	input.setAttribute("autocomplete", "off");
	input.setAttribute("onclick", "tagClick()");

	label.appendChild(input);
	label.insertAdjacentText("beforeend", tags[i]);
	document.getElementById("selection-nav").appendChild(label);
}

for (proj of projectData) {
	let textbox = document.createElement("DIV");
	textbox.setAttribute("class", "project-card");
	textbox.setAttribute("id", proj.name + "_card");

	let link = document.createElement("a");
	link.setAttribute("href", proj.link);
	link.setAttribute("target", "_blank");

	let title = document.createElement("H3");
	title.innerText = proj.name;

	let description = document.createElement("P");
	description.innerText = proj.description;

	link.appendChild(title);
	link.appendChild(description);
	textbox.appendChild(link);
	document.getElementById("selection-grid").appendChild(textbox);
}

tagClick();
function tagClick() {
	let tagSelection = document.getElementsByName("tag-select");
	for (tag of tagSelection) {
		if (tag.checked) {
			tagSelection = tag.id;
			console.log(tagSelection);
			break;
		}
	}

	for (proj of projectData) {
		let project_card = document.getElementById(proj.name + "_card");
		project_card.style.display = "flex";

		if (!proj.tags.includes(tagSelection)) {
			project_card.style.display = "none";
		}
	}
}

function revealAll() {
	for (proj of projectData) {
		let project_card = document.getElementById(proj.name + "_card");
		project_card.style.display = "flex";
	}
}