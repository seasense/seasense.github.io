function instrumentsFx(){

	document.getElementById("home_cell_content").remove();

	div_instruments = document.createElement("DIV");
	div_instruments.setAttribute("id","home_cell_content");
	home_cell.appendChild(div_instruments);
	instruments_paragraph = document.createElement("P");
	div_instruments.appendChild(instruments_paragraph)

	titleFx(instruments_paragraph,"seasense.instruments","h3")
	instruments_paragraph.appendChild(document.createElement("P"));

	titleFx(instruments_paragraph,".wordAssociation","strong")
	instruments_paragraph.appendChild(document.createElement("br"));
	ACT_description = "Quickly generating a diverse sequence of words each connecting to its predecessor"
	linkInsideFx(instruments_paragraph,"ACT","taskFx('ACT','Associative Chaining Task',ACT_description,'Verbal flexibility','https://seasense.github.io/index_ACT.html')")
	instruments_paragraph.appendChild(document.createElement("P"));

	titleFx(instruments_paragraph,".complexSpan","strong")
	instruments_paragraph.appendChild(document.createElement("br"));
	SymSpan_description = "Remembering a sequence of flashing cells while judging the symmetry of patterns"
	linkInsideFx(instruments_paragraph,"SymSpan","taskFx('SymSpan','Symmetry Span Task',SymSpan_description,'Working memory capacity','https://seasense.github.io/index_SymSpan.html')")
	instruments_paragraph.appendChild(document.createTextNode(" "));
	Ospan_description = "Remembering a sequence of consecutively presented letters while solving arithmetic problems"
	linkInsideFx(instruments_paragraph,"Ospan","taskFx('Ospan','Operation Span Task',Ospan_description,'Working memory capacity','https://seasense.github.io/index_OSpan.html')")

	instruments_paragraph.appendChild(document.createElement("P"));
	titleFx(instruments_paragraph,".categoryLearning","strong")
	instruments_paragraph.appendChild(document.createElement("br"));
	dinoNimi_description = "Self-guided search of a taxonomy of dinosaurs to learn certain dinosaur categories"
	linkInsideFx(instruments_paragraph,"dinoNimi","taskFx('dinoNimi','dinoNimi',dinoNimi_description,'Category learning','https://seasense.github.io/dinoNimi_review.html')")

	instruments_paragraph.appendChild(document.createElement("P"));
	titleFx(instruments_paragraph,".executiveFunctions","strong")
	instruments_paragraph.appendChild(document.createElement("br"));
	fruitStroop_description = "Naming the 'true' colors of fruits displayed in incorrect colors"
	linkInsideFx(instruments_paragraph,"fruitStroop","taskFx('fruitStroop','Fruit Stroop Test',fruitStroop_description,'Inhibitory control','https://seasense.github.io/index_Fruit.html')")

	buttonFx(div_instruments,"seasense.directory","directoryFx()")

}