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
			var fourthCell = document.createElement("TD");	
			fourthCell.setAttribute("id","FourthCell")

			document.getElementById("row2").appendChild(thirdCell);
			document.getElementById("row2").appendChild(fourthCell);

			var cell4_image = document.createElement("IMG");
			/*cell4_image.setAttribute("src","./imgHP/logo.png");
			cell4_image.setAttribute("class","image");
			fourthCell.appendChild(cell4_image);*/

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
			document.getElementById("FourthCell").remove();

			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			var fourthCell = document.createElement("TD");	
			fourthCell.setAttribute("id","FourthCell")

			document.getElementById("row2").appendChild(thirdCell);
			document.getElementById("row2").appendChild(fourthCell);

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
			document.getElementById("FourthCell").remove();
			about_state[0]="off";}
		}
	
};

function MERITS_Fx(link){
	if(merits_state[0]=="off"){
		var newPic = document.createElement("IMG");
		picture_addresses = ["./imgHP/meritsLogo.jpg",'./imgHP/ceiterLogo.png']
		newPic.setAttribute("src",picture_addresses[0]);
		newPic.setAttribute("class","imageRelated");

		newLink = document.createElement("a");
		newLink.href = link;
		newLink.appendChild(newPic);
		console.log(link)
		var placeOfPic = document.getElementById("FourthCell");
		placeOfPic.appendChild(newLink);
		
		
		merits_state[0]="on"

	}

}
function CEITER_Fx(link){
	
	if(ceiter_state[0]=="off"){
		var newPic = document.createElement("IMG");
		picture_addresses = ["./imgHP/meritsLogo.jpg",'./imgHP/ceiterLogo.png']
		newPic.setAttribute("src",picture_addresses[1]);
		newPic.setAttribute("class","imageRelated");

		newLink = document.createElement("a");
		newLink.href = link;
		newLink.appendChild(newPic);
		console.log(link)
		var placeOfPic = document.getElementById("FourthCell");
		placeOfPic.appendChild(newLink);
		

		ceiter_state[0]="on"
	}

}

function CSS_Fx(link){
	
	if(css_state[0]=="off"){
		var newPic = document.createElement("IMG");
		picture_addresses = ["./imgHP/meritsLogo.jpg",'./imgHP/ceiterLogo.png','./imgHP/TUGraz.png']
		newPic.setAttribute("src",picture_addresses[2]);
		newPic.setAttribute("class","imageRelated");

		newLink = document.createElement("a");
		newLink.href = link;
		newLink.appendChild(newPic);
		console.log(link)
		var placeOfPic = document.getElementById("FourthCell");
		placeOfPic.appendChild(newLink);
		

		css_state[0]="on"
	}

}

function related_cellFx(){
	if(thirdCell_state=="off"){
			
			merits_state[0] = ["off"]
			ceiter_state[0] = ["off"]
			css_state[0] = ["off"]

			var secondRow = document.getElementById("table").insertRow(1);
			secondRow.setAttribute("id","row2")

			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			var fourthCell = document.createElement("TD");	
			fourthCell.setAttribute("id","FourthCell")

			document.getElementById("row2").appendChild(thirdCell);
			document.getElementById("row2").appendChild(fourthCell);

			var relatedCellDiv = document.createElement("DIV");
			relatedCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(relatedCellDiv);
			
			relatedCellDiv.appendChild(document.createElement("p"));
			relatedCellDiv.appendChild(document.createTextNode("***"));
			relatedCellDiv.appendChild(document.createElement("p"));

			var Merits_Link = document.createElement('a');
			picAdress = "./imgHP/meritsLogo.jpg";
			Merits_Link.setAttribute("onclick","MERITS_Fx('https://meritsblog.wordpress.com/')");
			Merits_Link.setAttribute("class","LinkToImage");
			Merits_Link.appendChild(document.createTextNode("merits"));
			relatedCellDiv.appendChild(Merits_Link);
			relatedCellDiv.appendChild(document.createTextNode("(FWF project)"));
			relatedCellDiv.appendChild(document.createElement("p"));

			var CEITER_Link = document.createElement('a');
			CEITER_Link.setAttribute("onclick","CEITER_Fx('http://ceiter.tlu.ee/')");
			CEITER_Link.setAttribute("class","LinkToImage");
			CEITER_Link.appendChild(document.createTextNode("ceiter"));
			relatedCellDiv.appendChild(CEITER_Link);
			relatedCellDiv.appendChild(document.createTextNode("(Tallinn)"));
			relatedCellDiv.appendChild(document.createElement("p"));

			var CSS_Link = document.createElement('a');
			CSS_Link.setAttribute("onclick","CSS_Fx('http://cognitive-science.at/')");
			CSS_Link.setAttribute("class","LinkToImage");
			CSS_Link.setAttribute("style","color:black");
			CSS_Link.appendChild(document.createTextNode("css"));
			relatedCellDiv.appendChild(CSS_Link);
			relatedCellDiv.appendChild(document.createTextNode("(Graz)"));
			relatedCellDiv.appendChild(document.createElement("p"));


			var OMFix_Link = document.createElement('a');
			OMFix_Link.setAttribute("style","color:black");
			OMFix_Link.href = "https://omfix.wordpress.com/";
			OMFix_Link.appendChild(document.createTextNode("omfix"));
			relatedCellDiv.appendChild(OMFix_Link);
			relatedCellDiv.appendChild(document.createTextNode("(FWF project)"));
			relatedCellDiv.appendChild(document.createElement("p"));

			
			relatedCellDiv.appendChild(document.createTextNode("***"));
			relatedCellDiv.appendChild(document.createElement("p"));

			thirdCell_state[0] = "on";
			related_state[0] = "on";
		
	}else{
			if(related_state=="off"){

				merits_state[0] = ["off"]
				ceiter_state[0] = ["off"]
				css_state[0] = ["off"]

				document.getElementById("ThirdCell").remove();
				document.getElementById("FourthCell").remove();

				var thirdCell = document.createElement("TD");	
				thirdCell.setAttribute("id","ThirdCell")
				var fourthCell = document.createElement("TD");	
				fourthCell.setAttribute("id","FourthCell");
			
				document.getElementById("row2").appendChild(thirdCell);
				document.getElementById("row2").appendChild(fourthCell);

				var relatedCellDiv = document.createElement("DIV");
				relatedCellDiv.setAttribute("class","scrollable");
				thirdCell.appendChild(relatedCellDiv);
				
				relatedCellDiv.appendChild(document.createElement("p"));
				relatedCellDiv.appendChild(document.createTextNode("***"));
				relatedCellDiv.appendChild(document.createElement("p"));

				var Merits_Link = document.createElement('a');
				picAdress = "./imgHP/meritsLogo.jpg";
				Merits_Link.setAttribute("onclick","MERITS_Fx('https://meritsblog.wordpress.com/')");
				Merits_Link.setAttribute("class","LinkToImage");
				Merits_Link.appendChild(document.createTextNode("merits"));
				relatedCellDiv.appendChild(Merits_Link);
				relatedCellDiv.appendChild(document.createTextNode("(FWF project)"));
				relatedCellDiv.appendChild(document.createElement("p"));

				var CEITER_Link = document.createElement('a');
				CEITER_Link.setAttribute("onclick","CEITER_Fx('http://ceiter.tlu.ee/')");
				CEITER_Link.setAttribute("class","LinkToImage");
				CEITER_Link.appendChild(document.createTextNode("ceiter"));
				relatedCellDiv.appendChild(CEITER_Link);
				relatedCellDiv.appendChild(document.createTextNode("(Tallinn)"));
				relatedCellDiv.appendChild(document.createElement("p"));

				var CSS_Link = document.createElement('a');
				CSS_Link.setAttribute("onclick","CSS_Fx('http://cognitive-science.at/')");
				CSS_Link.setAttribute("class","LinkToImage");
				CSS_Link.setAttribute("style","color:black");
				CSS_Link.appendChild(document.createTextNode("css"));
				relatedCellDiv.appendChild(CSS_Link);
				relatedCellDiv.appendChild(document.createTextNode("(Graz)"));
				relatedCellDiv.appendChild(document.createElement("p"));


				var OMFix_Link = document.createElement('a');
				OMFix_Link.setAttribute("style","color:black");
				OMFix_Link.href = "https://omfix.wordpress.com/";
				OMFix_Link.appendChild(document.createTextNode("omfix"));
				relatedCellDiv.appendChild(OMFix_Link);
				relatedCellDiv.appendChild(document.createTextNode("(FWF project)"));
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
				document.getElementById("FourthCell").remove();
				related_state[0]="off";
			}
			
		}
	
};

function dinoNimi_Fx(link){
	
	if(dinoNimi_state[0]=="off"){
		var newPic = document.createElement("IMG");
		picture_addresses = ["./imgHP/meritsLogo.jpg",'./imgHP/ceiterLogo.png','./imgHP/TUGraz.png','./imgHP/dinoNimi.png']
		newPic.setAttribute("src",picture_addresses[3]);
		newPic.setAttribute("class","imageTools");

		newLink = document.createElement("a");
		newLink.href = link;
		newLink.appendChild(newPic);
		console.log(link)
		var placeOfPic = document.getElementById("FourthCell");
		placeOfPic.appendChild(newLink);

		dinoNimi_state[0]="on"
	}

}

function act_Fx(link){
	
	if(act_state[0]=="off"){
		var newPic = document.createElement("IMG");
		picture_addresses = ["./imgHP/meritsLogo.jpg",'./imgHP/ceiterLogo.png','./imgHP/TUGraz.png','./imgHP/dinoNimi.png','./imgHP/act.png']
		newPic.setAttribute("src",picture_addresses[4]);
		newPic.setAttribute("class","imageTools");

		newLink = document.createElement("a");
		newLink.href = link;
		newLink.appendChild(newPic);
		console.log(link)
		var placeOfPic = document.getElementById("FourthCell");
		placeOfPic.appendChild(newLink);
		

		act_state[0]="on"
	}

}

function symspan_Fx(link){
	
	if(symspan_state[0]=="off"){
		var newPic = document.createElement("IMG");
		picture_addresses = ["./imgHP/meritsLogo.jpg",'./imgHP/ceiterLogo.png','./imgHP/TUGraz.png',
		'./imgHP/dinoNimi.png','./imgHP/act.png','./imgHP/symspan_logo.png']
		newPic.setAttribute("src",picture_addresses[5]);
		newPic.setAttribute("class","imageTools");

		newLink = document.createElement("a");
		newLink.href = link;
		newLink.appendChild(newPic);
		console.log(link)
		var placeOfPic = document.getElementById("FourthCell");
		placeOfPic.appendChild(newLink);
		

		symspan_state[0]="on"
	}

}

function tools_cellFx(){
	if(thirdCell_state=="off"){

			act_state[0] = ["off"]
			dinoNimi_state[0] = ["off"]
			symspan_state[0] = ["off"]

			var row2 = table.insertRow(1);
			row2.setAttribute("id","row2")

			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			var fourthCell = document.createElement("TD");	
			fourthCell.setAttribute("id","FourthCell")

			document.getElementById("row2").appendChild(thirdCell);
			document.getElementById("row2").appendChild(fourthCell);

			var toolsCellDiv = document.createElement("DIV");
			toolsCellDiv.setAttribute("class","scrollable");
			thirdCell.appendChild(toolsCellDiv);
			
			toolsCellDiv.appendChild(document.createElement("p"));
			toolsCellDiv.appendChild(document.createTextNode("***"));
			toolsCellDiv.appendChild(document.createElement("p"));

			var ACT_Link = document.createElement('a');
			ACT_Link.setAttribute("onclick","act_Fx('./index_ACT.html')");
			ACT_Link.setAttribute("class","LinkToImage");
			ACT_Link.setAttribute("style","color:black");
			ACT_Link.appendChild(document.createTextNode("act"));
			toolsCellDiv.appendChild(ACT_Link);

			toolsCellDiv.appendChild(document.createElement("p"));

			var dinoNimi_Link = document.createElement('a');
			dinoNimi_Link.setAttribute("onclick","dinoNimi_Fx('./dinoNimi_review.html')");
			dinoNimi_Link.setAttribute("class","LinkToImage");
			dinoNimi_Link.setAttribute("style","color:black");
			dinoNimi_Link.appendChild(document.createTextNode("dinoNimi"));
			toolsCellDiv.appendChild(dinoNimi_Link);

			toolsCellDiv.appendChild(document.createElement("p"));

			var symspan_Link = document.createElement('a');
			symspan_Link.setAttribute("onclick","symspan_Fx('./index_SymSpan.html')");
			symspan_Link.setAttribute("class","LinkToImage");
			symspan_Link.setAttribute("style","color:black");
			symspan_Link.appendChild(document.createTextNode("symmetry span"));
			toolsCellDiv.appendChild(symspan_Link);

			toolsCellDiv.appendChild(document.createElement("p"));
			toolsCellDiv.appendChild(document.createTextNode("***"));
			toolsCellDiv.appendChild(document.createElement("p"));

			thirdCell_state[0] = "on";
			tools_state[0] = "on";
		
	}else{
			if(tools_state=="off"){
				act_state[0] = ["off"]
				dinoNimi_state[0] = ["off"]

				document.getElementById("ThirdCell").remove();
				document.getElementById("FourthCell").remove();

				var thirdCell = document.createElement("TD");	
				thirdCell.setAttribute("id","ThirdCell")
				var fourthCell = document.createElement("TD");	
				fourthCell.setAttribute("id","FourthCell")

				document.getElementById("row2").appendChild(thirdCell);
				document.getElementById("row2").appendChild(fourthCell);

				var toolsCellDiv = document.createElement("DIV");
				toolsCellDiv.setAttribute("class","scrollable");
				thirdCell.appendChild(toolsCellDiv);
				
				toolsCellDiv.appendChild(document.createElement("p"));
				toolsCellDiv.appendChild(document.createTextNode("***"));
				toolsCellDiv.appendChild(document.createElement("p"));

				var ACT_Link = document.createElement('a');
				ACT_Link.setAttribute("onclick","act_Fx('./index_ACT.html')");
				ACT_Link.setAttribute("class","LinkToImage");
				ACT_Link.setAttribute("style","color:black");
				ACT_Link.appendChild(document.createTextNode("act"));
				toolsCellDiv.appendChild(ACT_Link);

				toolsCellDiv.appendChild(document.createElement("p"));

				var dinoNimi_Link = document.createElement('a');
				dinoNimi_Link.setAttribute("onclick","dinoNimi_Fx('./dinoNimi_review.html')");
				dinoNimi_Link.setAttribute("class","LinkToImage");
				dinoNimi_Link.setAttribute("style","color:black");
				dinoNimi_Link.appendChild(document.createTextNode("dinoNimi"));
				toolsCellDiv.appendChild(dinoNimi_Link);

				toolsCellDiv.appendChild(document.createElement("p"));

				var symspan_Link = document.createElement('a');
				symspan_Link.setAttribute("onclick","symspan_Fx('./index_SymSpan.html')");
				symspan_Link.setAttribute("class","LinkToImage");
				symspan_Link.setAttribute("style","color:black");
				symspan_Link.appendChild(document.createTextNode("symmetry span"));
				toolsCellDiv.appendChild(symspan_Link);

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
				document.getElementById("FourthCell").remove();
				tools_state[0]="off";
			}
			
		}
	
};

function papers_cellFx(){
	if(thirdCell_state=="off"){
			var row2 = table.insertRow(1);
			row2.setAttribute("id","row2")

			var thirdCell = document.createElement("TD");	
			thirdCell.setAttribute("id","ThirdCell")
			var fourthCell = document.createElement("TD");	
			fourthCell.setAttribute("id","FourthCell")

			document.getElementById("row2").appendChild(thirdCell);
			document.getElementById("row2").appendChild(fourthCell);
			
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
				document.getElementById("FourthCell").remove();

				var thirdCell = document.createElement("TD");	
				thirdCell.setAttribute("id","ThirdCell")
				var fourthCell = document.createElement("TD");	
				fourthCell.setAttribute("id","FourthCell")

				document.getElementById("row2").appendChild(thirdCell);
				document.getElementById("row2").appendChild(fourthCell);
				
				var papersCellDiv = document.createElement("DIV");
				papersCellDiv.setAttribute("class","scrollable");
				thirdCell.appendChild(papersCellDiv);
				
				papersCellDiv.appendChild(document.createElement("p"));
				papersCellDiv.appendChild(document.createTextNode("***"));
				papersCellDiv.appendChild(document.createElement("p"));

				var CogSci_Link = document.createElement('a');
				CogSci_Link.setAttribute("style","color:black");
				CogSci_Link.href = "./Abstract_CogNetSci2018_PSeitiTLeyHFlemDAlbert.PDF";
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
				document.getElementById("FourthCell").remove();
				papers_state[0]="off";
			}
			
		}
	
};


