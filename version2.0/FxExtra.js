function buttonFx(DIV_x,button_label,fx){
					x_button = document.createElement("Button")
					x_button.appendChild(document.createTextNode(button_label))
					x_button.setAttribute('class', 'button');
					x_button.setAttribute("onclick",fx)
					DIV_x.appendChild(x_button)
				}
function titleFx(paragraph,txtNode,typeOfElement){
		name_of_element = document.createElement(typeOfElement);
		name_of_element_txt = document.createTextNode(txtNode);
		name_of_element.appendChild(name_of_element_txt);
		paragraph.appendChild(name_of_element);
	}
function piece_of_textFx(paragraph,txtNode){
	piece_of_text = document.createTextNode(txtNode)
	paragraph.appendChild(piece_of_text);
}
function linkInsideFx(paragraph,textNode,fx){
		a_x = document.createElement("a");
		a_x.setAttribute("onclick",fx)
		paragraph.appendChild(a_x)
		a_x.appendChild(document.createTextNode(textNode))
	}
function linkExternalFx(paragraph,textNode,link){
		a_x = document.createElement("a");
		a_x.setAttribute("href",link)
		paragraph.appendChild(a_x)
		a_x.appendChild(document.createTextNode(textNode))
	}
function projectFx(acro,fullTitle,funding,homepage,description){
	document.getElementById("home_cell_content").remove();
	project_DIV = document.createElement("DIV");
	home_cell.appendChild(project_DIV);
	project_DIV.setAttribute("id","home_cell_content");

	project_acro = document.createElement("strong") 
	titleFx(project_DIV,acro,"strong")	
	project_DIV.appendChild(document.createElement("P"));

	titleFx(project_DIV,"Project title:","strong")
	project_DIV.appendChild(document.createElement("br"))
	piece_of_textFx(project_DIV,fullTitle)
	project_DIV.appendChild(document.createElement("P"));

	titleFx(project_DIV,"Focus:","strong")
	project_DIV.appendChild(document.createElement("br"))
	piece_of_textFx(project_DIV,description)
	project_DIV.appendChild(document.createElement("P"));

	titleFx(project_DIV,"Funding","strong")
	project_DIV.appendChild(document.createElement("br"))
	piece_of_textFx(project_DIV,funding)
	project_DIV.appendChild(document.createElement("P"));

	titleFx(project_DIV,"More details:","strong")
	project_DIV.appendChild(document.createElement("br"))
	linkExternalFx(project_DIV,"project homepage",homepage)
	project_DIV.appendChild(document.createElement("P"));

	buttonFx(project_DIV,"seasense.related","relatedFx()")
	buttonFx(project_DIV,"seasense.directory","directoryFx()")

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



