
function relatedFx(){

	document.getElementById("home_cell_content").remove();

	div_related = document.createElement("DIV");
	div_related.setAttribute("id","home_cell_content");
	home_cell.appendChild(div_related);
	related_paragraph = document.createElement("P");
	related_paragraph.setAttribute("id","related_text")
	div_related.appendChild(related_paragraph)
	
	titleFx(related_paragraph,"seasense.related","h3")
	related_paragraph.appendChild(document.createElement("P"));

	titleFx(related_paragraph,".projects","strong")
	related_paragraph.appendChild(document.createElement("br"));

	omfix_focus = "Search of memory during divergent thinking"
	linkInsideFx(related_paragraph,"omfix","projectFx('omfix','Overcoming Mental Fixation','Austrian Science Fund (FWF)','https://omfix.wordpress.com',omfix_focus)")
	related_paragraph.appendChild(document.createTextNode(" "));

	merits_focus = "Search of memory when reflecting on Web content"
	linkInsideFx(related_paragraph,"merits","projectFx('merits','MEmory Retrieval In Tagging Socially','Austrian Science Fund (FWF)','https://meritsblog.wordpress.com',merits_focus)")
	related_paragraph.appendChild(document.createTextNode(" "));

	related_paragraph.appendChild(document.createElement("P"));
	titleFx(related_paragraph,".researchGroups","strong")
	related_paragraph.appendChild(document.createElement("br"));
	
	linkInsideFx(related_paragraph,"eduLab","researchGroupFx('eduLab','Co-creating Educational Innovations with Estonian Schools','School of Educational Sciences (Tallinn University)','http://ceiter.tlu.ee/living-labs/')")
	related_paragraph.appendChild(document.createTextNode(" "));

	linkInsideFx(related_paragraph,"css","researchGroupFx('Cognitive Science Section','Cognitive-psychological design of smart technologies','University of Graz','http://cognitive-science.at')")
	related_paragraph.appendChild(document.createTextNode(" "));

	buttonFx(div_related,"seasense.directory","directoryFx()")

}




