function FxContact(){

	document.getElementById("home_cell_content").remove()
	div_contact = document.createElement("DIV");
	div_contact.setAttribute("id","home_cell_content");
	home_cell.appendChild(div_contact);
	contact_paragraph = document.createElement("P");
	contact_paragraph.setAttribute("id","contact_text")
	div_contact.appendChild(contact_paragraph)

	titleFx(contact_paragraph,"seasense.contact","h3")
	contact_paragraph.appendChild(document.createElement("P"));

	titleFx(contact_paragraph,"Do you have questions about our research work?","strong");
	contact_paragraph.appendChild(document.createElement("br"));
	piece_of_textFx(contact_paragraph,"Please contact paul.seitlinger(at)tlu.ee")

	contact_paragraph.appendChild(document.createElement("P"));
	titleFx(contact_paragraph,"Do you have questions about an ongoing online study?","strong");
	contact_paragraph.appendChild(document.createElement("br"));
	piece_of_textFx(contact_paragraph,"Please send your questions to seasenselab(at)gmail.com")
	
	contact_paragraph.appendChild(document.createElement("P"));
	buttonFx(contact_paragraph,"seasense.directory","directoryFx()")

}