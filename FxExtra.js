
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
function backFx(ID_OfParagraph,back_label,link){
					x_button = document.createElement("A")
					x_button.appendChild(document.createTextNode(back_label))
					x_button.setAttribute('class', 'back');
					
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