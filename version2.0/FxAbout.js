function aboutFx(){
	document.getElementById("home_cell_content").remove();

	div_about = document.createElement("DIV");
	div_about.setAttribute("id","home_cell_content");
	home_cell.appendChild(div_about);
	about_paragraph = document.createElement("P");
	about_paragraph.setAttribute("id","about_text")
	div_about.appendChild(about_paragraph)
	
	titleFx(about_paragraph,"seasense.about","h3")

	about_paragraph.appendChild(document.createElement("P"));

	piece_of_textFx(about_paragraph,"Making a space with and for people intrigued in investigating and "
		+"supporting the cognitive mechanisms involved in discovery learning "
		+"- a process of self-actualization that unfolds cyclically in mental acts of sense-making attempts.")	

	buttonFx(div_about,"seasense.directory","directoryFx()")
	
}