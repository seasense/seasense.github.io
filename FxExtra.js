
function startPageFx(page_div,ID_OfParagraph){
	page_paragraph = document.createElement("P");
	page_paragraph.setAttribute("id",ID_OfParagraph);
	document.getElementById(page_div).appendChild(page_paragraph);
}
function buttonFx(ID_OfParagraph,button_label,link){
					x_button = document.createElement("Button")
					x_button.appendChild(document.createTextNode(button_label))
					x_button.setAttribute('class', 'button');
					
					a_of_button = document.createElement("A")
					a_of_button.setAttribute("href",link)
					a_of_button.appendChild(x_button)
					
					document.getElementById(ID_OfParagraph).appendChild(a_of_button)
				}
function titleFx(ID_OfParagraph,txtNode,typeOfElement){
		name_of_element = document.createElement(typeOfElement);
		name_of_element_txt = document.createTextNode(txtNode);
		name_of_element.appendChild(name_of_element_txt);
		//placeOfDiv = document.getElementById(ID);
		//placeOfDiv.appendChild(name_of_element);
		document.getElementById(ID_OfParagraph).appendChild(name_of_element)
	}
function piece_of_textFx(ID_OfParagraph,txtNode){
	piece_of_text = document.createTextNode(txtNode)
	document.getElementById(ID_OfParagraph).appendChild(piece_of_text);
}

function linkExternalFx(ID_OfParagraph,textNode,link){
		a_x = document.createElement("a");
		a_x.setAttribute("href",link)
		a_x.setAttribute('target', '_blank')
		document.getElementById(ID_OfParagraph).appendChild(a_x)
		a_x.appendChild(document.createTextNode(textNode))
	}


function linkInternalFx(ID_OfParagraph,textNode,link){
		a_x = document.createElement("a");
		a_x.setAttribute("href",link)
		document.getElementById(ID_OfParagraph).appendChild(a_x)
		a_x.appendChild(document.createTextNode(textNode))
	}


function researchGroupFx(acro,description,affiliation,homepage){
	document.getElementById("home_cell_content").remove();
	RG_DIV = document.createElement("DIV");
	home_cell.appendChild(RG_DIV);
	RG_DIV.setAttribute("id","home_cell_content");

	titleFx(RG_DIV,acro,"strong")
	RG_DIV.appendChild(document.createElement("P"));

	titleFx(RG_DIV,"Focus:","strong")
	RG_DIV.appendChild(document.createElement("br"))
	piece_of_textFx(RG_DIV,description)
	RG_DIV.appendChild(document.createElement("P"));

	titleFx(RG_DIV,"Affiliation:","strong")
	RG_DIV.appendChild(document.createElement("br"))
	piece_of_textFx(RG_DIV,affiliation)

	RG_DIV.appendChild(document.createElement("P"));
	titleFx(RG_DIV,"More details:","strong")
	RG_DIV.appendChild(document.createElement("br"))
	linkExternalFx(RG_DIV,"project homepage",homepage)
	RG_DIV.appendChild(document.createElement("P"));

	buttonFx(RG_DIV,"seasense.related","relatedFx()")
	buttonFx(RG_DIV,"seasense.directory","directoryFx()")

}
function taskFx(acro,fullTitle,description,construct,link){
	document.getElementById("home_cell_content").remove();
	task_DIV = document.createElement("DIV");
	home_cell.appendChild(task_DIV);
	task_DIV.setAttribute("id","home_cell_content");
	task_text = document.createElement("P");
	task_text.setAttribute("id","task_text");
	task_DIV.appendChild(task_text)

	titleFx(task_text,acro,"strong")	
	task_text.appendChild(document.createElement("P"));

	titleFx(task_text,"Task name:","strong")
	task_text.appendChild(document.createElement("br"))
	piece_of_textFx(task_text,fullTitle)
	task_text.appendChild(document.createElement("P"));

	titleFx(task_text,"Description:","strong")
	task_text.appendChild(document.createElement("br"))
	piece_of_textFx(task_text,description)
	task_text.appendChild(document.createElement("P"));

	titleFx(task_text,"Targeted construct:","strong")
	task_text.appendChild(document.createElement("br"))
	piece_of_textFx(task_text,construct)
	task_text.appendChild(document.createElement("P"));

	titleFx(task_text,"Participate:","strong")
	task_text.appendChild(document.createElement("br"))
	linkExternalFx(task_text,"Link to task",link)
	task_text.appendChild(document.createElement("P"));

	buttonFx(task_DIV,"seasense.instruments","instrumentsFx()")
	buttonFx(task_DIV,"seasense.directory","directoryFx()")

}



