/*var cell_i = (Math.floor(Math.random()*4));
console.log(cell_i);*/




function secondCellFx(secondCell_state,thirdCell_state){
	if(secondCell_state=="off"){
		var secondCell = document.createElement("TD");
		secondCell.setAttribute("id","Cell2");

		document.getElementById("row1").appendChild(secondCell);

		var list_of_links = document.createElement("ul");
		secondCell.appendChild(list_of_links);
		secondCell.setAttribute("style","text-decoration:underline")

		point_about = document.createElement("li");
		point_about.setAttribute("id","link_about");
		point_about.setAttribute("style","cursor:pointer");
		point_about.setAttribute("onclick","about_cellFx()");
		var link_about = document.createTextNode("about");
		point_about.appendChild(link_about);
		list_of_links.appendChild(point_about);

		point_related = document.createElement("li");
		point_related.setAttribute("id","link_related");
		point_related.setAttribute("style","cursor:pointer")
		point_related.setAttribute("onclick","related_cellFx()");
		var link_related = document.createTextNode("related");
		point_related.appendChild(link_related)
		list_of_links.appendChild(point_related);

		point_tools = document.createElement("li");
		point_tools.setAttribute("id","link_OS");
		point_tools.setAttribute("style","cursor:pointer")
		point_tools.setAttribute("onclick","tools_cellFx()");
		var link_tools = document.createTextNode("tools");
		point_tools.appendChild(link_tools)
		list_of_links.appendChild(point_tools);

		point_papers = document.createElement("li");
		point_papers.setAttribute("id","link_papers");
		point_papers.setAttribute("style","cursor:pointer")
		point_papers.setAttribute("onclick","papers_cellFx()");
		var link_papers = document.createTextNode("papers");
		point_papers.appendChild(link_papers)
		list_of_links.appendChild(point_papers);
		
		secondCell_state[0] = "on"

		/*var close_button = document.createElement("BUTTON");
		close_button.appendChild(document.createTextNode("close"));
		close_button.setAttribute("align","center");
		secondCell.appendChild(close_button);*/
		
		
	}else{
		if(thirdCell_state=="off"){
			secondCell_state[0] = "off"
			document.getElementById("Cell2").remove()};
		}

};


function about_cellFx(){
	if(thirdCell_state=="off"){
		
			var secondRow = document.getElementById("table").insertRow(1);
			secondRow.setAttribute("id","row2")
			
			/*var thirdRow = document.getElementById("table").insertRow(2);
			thirdRow.setAttribute("id","row3")*/

			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			
			document.getElementById("row1").appendChild(thirdCell);
			//document.getElementById("row2").appendChild(thirdCell);
			var aboutCellDiv = document.createElement("DIV");
			aboutCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(aboutCellDiv);
			
			aboutCellDiv.appendChild(document.createElement("p"));
			aboutCellDiv.appendChild(document.createTextNode("***"));
			aboutCellDiv.appendChild(document.createElement("p"));

			var aboutText1 = document.createTextNode("Conceiving a space with and for people intrigued in investigating"
				+" and supporting the mental processes involved in discovery learning "
				+"- a process of adaptation and self-actualization that unfolds cyclically in individual acts of ");
			
			aboutCellDiv.appendChild(aboutText1);
			

			var sea = document.createTextNode("sea");
			var sea_bold = document.createElement("strong");
			sea_bold.appendChild(sea);
			aboutCellDiv.appendChild(sea_bold);

			var aboutText2 = document.createTextNode("rch & ");
			aboutCellDiv.appendChild(aboutText2);

			var sense = document.createTextNode("sense");
			var sense_bold = document.createElement("strong");
			sense_bold.appendChild(sense);
			aboutCellDiv.appendChild(sense_bold);

			var aboutText3 = document.createTextNode("-making attempts.");
			aboutCellDiv.appendChild(aboutText3);
			aboutCellDiv.appendChild(document.createElement("p"));
			aboutCellDiv.appendChild(document.createTextNode("***"));
			aboutCellDiv.appendChild(document.createElement("p"));
			
			thirdCell_state[0] = "on";
			about_state[0] = "on";

			
		
	}else{

		if(about_state=="off"){

			document.getElementById("ThirdCell").remove();

			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			
			document.getElementById("row1").appendChild(thirdCell);
			var aboutCellDiv = document.createElement("DIV");
			aboutCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(aboutCellDiv);
			
			aboutCellDiv.appendChild(document.createElement("p"));
			aboutCellDiv.appendChild(document.createTextNode("***"));
			aboutCellDiv.appendChild(document.createElement("p"));

			var aboutText1 = document.createTextNode("Conceiving a space with and for people intrigued in investigating"
				+" and supporting the mental processes involved in discovery learning "
				+"- a process of adaptation and self-actualization that unfolds cyclically in individual acts of ");
			
			aboutCellDiv.appendChild(aboutText1);
			

			var sea = document.createTextNode("sea");
			var sea_bold = document.createElement("strong");
			sea_bold.appendChild(sea);
			aboutCellDiv.appendChild(sea_bold);

			var aboutText2 = document.createTextNode("rch & ");
			aboutCellDiv.appendChild(aboutText2);

			var sense = document.createTextNode("sense");
			var sense_bold = document.createElement("strong");
			sense_bold.appendChild(sense);
			aboutCellDiv.appendChild(sense_bold);

			var aboutText3 = document.createTextNode("-making attempts.");
			aboutCellDiv.appendChild(aboutText3);
			aboutCellDiv.appendChild(document.createElement("p"));
			aboutCellDiv.appendChild(document.createTextNode("***"));
			aboutCellDiv.appendChild(document.createElement("p"));

			thirdCell_state[0] = "on";
			about_state[0] = "on";
			related_state[0] = "off"
			papers_state[0] = "off";
			tools_state[0] = "off"

		}else{
			thirdCell_state[0]="off";
			document.getElementById("ThirdCell").remove();
			about_state[0]="off";}
		}
	
};

function related_cellFx(){
	if(thirdCell_state=="off"){
		
			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			
			document.getElementById("row1").appendChild(thirdCell);
			var relatedCellDiv = document.createElement("DIV");
			relatedCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(relatedCellDiv);
			
			relatedCellDiv.appendChild(document.createElement("p"));
			relatedCellDiv.appendChild(document.createTextNode("***"));
			relatedCellDiv.appendChild(document.createElement("p"));

			var CEITER_Link = document.createElement('a');
			CEITER_Link.setAttribute("style","color:black");
			CEITER_Link.href = "http://ceiter.tlu.ee/";
			CEITER_Link.appendChild(document.createTextNode("School of Educational Sciences"));
			relatedCellDiv.appendChild(CEITER_Link);
			relatedCellDiv.appendChild(document.createTextNode("(Tallinn)"));

			relatedCellDiv.appendChild(document.createElement("p"));

			var CSS_Link = document.createElement('a');
			CSS_Link.setAttribute("style","color:black");
			CSS_Link.href = "http://cognitive-science.at/";
			CSS_Link.appendChild(document.createTextNode("Cognitive Science Section"));
			relatedCellDiv.appendChild(CSS_Link);
			relatedCellDiv.appendChild(document.createTextNode("(Graz)"));

			relatedCellDiv.appendChild(document.createElement("p"));

			relatedCellDiv.appendChild(document.createTextNode("***"));
			relatedCellDiv.appendChild(document.createElement("p"));

			

			thirdCell_state[0] = "on";
			related_state[0] = "on";
		
	}else{
			if(related_state=="off"){
				document.getElementById("ThirdCell").remove();

				var thirdCell = document.createElement("TD");	
				thirdCell.setAttribute("id","ThirdCell")
			
				document.getElementById("row1").appendChild(thirdCell);
				var relatedCellDiv = document.createElement("DIV");
				relatedCellDiv.setAttribute("class","scrollable");
				thirdCell.appendChild(relatedCellDiv);
				
				relatedCellDiv.appendChild(document.createElement("p"));
				relatedCellDiv.appendChild(document.createTextNode("***"));
				relatedCellDiv.appendChild(document.createElement("p"));

				var CEITER_Link = document.createElement('a');
				CEITER_Link.setAttribute("style","color:black");
				CEITER_Link.href = "http://ceiter.tlu.ee/";
				CEITER_Link.appendChild(document.createTextNode("School of Educational Sciences"));
				relatedCellDiv.appendChild(CEITER_Link);
				relatedCellDiv.appendChild(document.createTextNode("(Tallinn)"));

				relatedCellDiv.appendChild(document.createElement("p"));

				var CSS_Link = document.createElement('a');
				CSS_Link.setAttribute("style","color:black");
				CSS_Link.href = "http://cognitive-science.at/";
				CSS_Link.appendChild(document.createTextNode("Cognitive Science Section"));
				relatedCellDiv.appendChild(CSS_Link);
				relatedCellDiv.appendChild(document.createTextNode("(Graz)"));

				relatedCellDiv.appendChild(document.createElement("p"));

				relatedCellDiv.appendChild(document.createTextNode("***"));
				relatedCellDiv.appendChild(document.createElement("p"));

				thirdCell_state[0] = "on";
				related_state[0] = "on";
				about_state[0] = "off"
				papers_state[0] = "off";
				tools_state[0] = "off"

			}else{
				thirdCell_state[0]="off";
				document.getElementById("ThirdCell").remove();
				related_state[0]="off";
			}
			
		}
	
};


function tools_cellFx(){
	if(thirdCell_state=="off"){
		
			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			
			document.getElementById("row1").appendChild(thirdCell);
			var toolsCellDiv = document.createElement("DIV");
			toolsCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(toolsCellDiv);
			
			toolsCellDiv.appendChild(document.createElement("p"));
			toolsCellDiv.appendChild(document.createTextNode("***"));
			toolsCellDiv.appendChild(document.createElement("p"));

			var ACT_Link = document.createElement('a');
			ACT_Link.setAttribute("style","color:black");
			ACT_Link.href = "./index_ACT.html";
			ACT_Link.appendChild(document.createTextNode("act"));
			toolsCellDiv.appendChild(ACT_Link);

			toolsCellDiv.appendChild(document.createElement("p"));

			var SymSpan_Link = document.createElement('a');
			SymSpan_Link.setAttribute("style","color:black");
			SymSpan_Link.href = "./index_SymSpan.html";
			SymSpan_Link.appendChild(document.createTextNode("symmetry span"));
			toolsCellDiv.appendChild(SymSpan_Link);

			toolsCellDiv.appendChild(document.createElement("p"));
			toolsCellDiv.appendChild(document.createTextNode("***"));
			toolsCellDiv.appendChild(document.createElement("p"));

			thirdCell_state[0] = "on";
			tools_state[0] = "on";
		
	}else{
			if(tools_state=="off"){
				document.getElementById("ThirdCell").remove();

				var thirdCell = document.createElement("TD");	
				thirdCell.setAttribute("id","ThirdCell")
				
				document.getElementById("row1").appendChild(thirdCell);
				var toolsCellDiv = document.createElement("DIV");
				toolsCellDiv.setAttribute("class","scrollable");
				thirdCell.appendChild(toolsCellDiv);
				
				toolsCellDiv.appendChild(document.createElement("p"));
				toolsCellDiv.appendChild(document.createTextNode("***"));
				toolsCellDiv.appendChild(document.createElement("p"));

				var ACT_Link = document.createElement('a');
				ACT_Link.setAttribute("style","color:black");
				ACT_Link.href = "./index_ACT.html";
				ACT_Link.appendChild(document.createTextNode("act"));
				toolsCellDiv.appendChild(ACT_Link);

				toolsCellDiv.appendChild(document.createElement("p"));

				var SymSpan_Link = document.createElement('a');
				SymSpan_Link.setAttribute("style","color:black");
				SymSpan_Link.href = "./index_SymSpan.html";
				SymSpan_Link.appendChild(document.createTextNode("symmetry span"));
				toolsCellDiv.appendChild(SymSpan_Link);

				toolsCellDiv.appendChild(document.createElement("p"));
				toolsCellDiv.appendChild(document.createTextNode("***"));
				toolsCellDiv.appendChild(document.createElement("p"));

				thirdCell_state[0] = "on";
				related_state[0] = "off";
				about_state[0] = "off"
				papers_state[0] = "off";
				tools_state[0] = "on"

			}else{
				thirdCell_state[0]="off";
				document.getElementById("ThirdCell").remove();
				tools_state[0]="off";
			}
			
		}
	
};

function papers_cellFx(){
	if(thirdCell_state=="off"){
		
			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			
			document.getElementById("row1").appendChild(thirdCell);
			var papersCellDiv = document.createElement("DIV");
			papersCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(papersCellDiv);
			
			papersCellDiv.appendChild(document.createElement("p"));
			papersCellDiv.appendChild(document.createTextNode("***"));
			papersCellDiv.appendChild(document.createElement("p"));

			var CogSci_Link = document.createElement('a');
			CogSci_Link.setAttribute("style","color:black");
			CogSci_Link.href = "./Abstract_CogNetSci2018_PSeitiTLeyHFlemDAlbert.pdf";
			CogSci_Link.appendChild(document.createTextNode("Talk at NetSci 2018 Satellite, Paris"));
			papersCellDiv.appendChild(CogSci_Link);
			

			papersCellDiv.appendChild(document.createElement("p"));
			papersCellDiv.appendChild(document.createTextNode("***"));
			papersCellDiv.appendChild(document.createElement("p"));

			thirdCell_state[0] = "on";
			papers_state[0] = "on";
		
	}else{
			if(papers_state=="off"){
				
				document.getElementById("ThirdCell").remove();

				var thirdCell = document.createElement("TD");	
				thirdCell.setAttribute("id","ThirdCell")
				
				document.getElementById("row1").appendChild(thirdCell);
				var papersCellDiv = document.createElement("DIV");
				papersCellDiv.setAttribute("class","scrollable");
				thirdCell.appendChild(papersCellDiv);
				
				papersCellDiv.appendChild(document.createElement("p"));
				papersCellDiv.appendChild(document.createTextNode("***"));
				papersCellDiv.appendChild(document.createElement("p"));

				var CogSci_Link = document.createElement('a');
				CogSci_Link.setAttribute("style","color:black");
				CogSci_Link.href = "./Abstract_CogNetSci2018_PSeitiTLeyHFlemDAlbert.pdf";
				CogSci_Link.appendChild(document.createTextNode("Talk at NetSci 2018 Satellite, Paris"));
				papersCellDiv.appendChild(CogSci_Link);

				papersCellDiv.appendChild(document.createElement("p"));
				papersCellDiv.appendChild(document.createTextNode("***"));
				papersCellDiv.appendChild(document.createElement("p"));

				thirdCell_state[0] = "on";
				related_state[0] = "off";
				about_state[0] = "off"
				papers_state[0] = "on";
				tools_state[0] = "off"

			}else{
				thirdCell_state[0]="off";
				document.getElementById("ThirdCell").remove();
				papers_state[0]="off";
			}
			
		}
	
};


