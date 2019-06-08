function FxDissem(){
	document.getElementById("home_cell_content").remove()
	div_dissem = document.createElement("DIV");
	div_dissem.setAttribute("id","home_cell_content");
	home_cell.appendChild(div_dissem);
	dissem_paragraph = document.createElement("P");
	dissem_paragraph.setAttribute("id","dissem_text")
	div_dissem.appendChild(dissem_paragraph)


	titleFx(dissem_paragraph,"seasense.dissemination","h3")
	dissem_paragraph.appendChild(document.createElement("P"));

	titleFx(dissem_paragraph,".media","strong");
	dissem_paragraph.appendChild(document.createElement("br"));
	piece_of_textFx(dissem_paragraph,"scilog (2019, April) - the magazin of the Austrian Science Fund - reports from our research project ");
	piece_of_textFx(dissem_paragraph,"omfix: project of the week. ");
	linkExternalFx(dissem_paragraph,"link to scilog-article",'https://scilog.fwf.ac.at/kultur-gesellschaft/9582/der-mentalen-echokammer-entkommen')

	dissem_paragraph.appendChild(document.createElement("P"));
	titleFx(dissem_paragraph,".talks","strong");
	dissem_paragraph.appendChild(document.createElement("br"));
	piece_of_textFx(dissem_paragraph,"Seitlinger, P. (2018, June). A neural network account "
		+"of creativity-related differences in memory search: empirical evidence from an association chain task."
		+" Talk presented at the ")
	linkExternalFx(dissem_paragraph,"NetSci 2018 "
		+"Satellite Networks in Cognitive Science","http://cognetsci2018.altervista.org");
	piece_of_textFx(dissem_paragraph,", Paris, France. ")
	linkExternalFx(dissem_paragraph,"View abstract","Abstract_CogNetSci2018_PSeitiTLeyHFlemDAlbert.pdf")
	
	dissem_paragraph.appendChild(document.createElement("P"));
	piece_of_textFx(dissem_paragraph,"Uus, O. (2018, October). The role of working memory capacity "
		+"in a multi-dimensional category-learning task. Talk presented at the ")
	linkExternalFx(dissem_paragraph,"EARLI 2019","https://earli.org/SIG20-26#more-information");
	piece_of_textFx(dissem_paragraph,", Jerusalem, Israel. ")
	linkExternalFx(dissem_paragraph,"View abstract","SeitlingerUusLey_Synopsis_revised.pdf")

	dissem_paragraph.appendChild(document.createElement("P"));
	piece_of_textFx(dissem_paragraph,"Seitlinger, P. (2019, July). A Model-based Approach towards Cognitive Games for "
		+"Discovery Learning: A Web-based Paradigm and Neural Network Analysis. ")
	linkExternalFx(dissem_paragraph,"ALTTAI Meeting","https://home.x-in-y.com");
	piece_of_textFx(dissem_paragraph,", Memphis, Tennessee. ")
	linkExternalFx(dissem_paragraph,"View abstract","Abstract_CognitiveGames_Memphis_PaulSeitlinger.pdf")

	dissem_paragraph.appendChild(document.createElement("P"));
	titleFx(dissem_paragraph,".papers","strong");
	dissem_paragraph.appendChild(document.createElement("br"));
	piece_of_textFx(dissem_paragraph,'Seitlinger, P. & Ley, T. (2016). ')
	linkExternalFx(dissem_paragraph,"Reconceptualizing imitation in social tagging: a "
		+"reflective search model of human web interaction.","https://www.researchgate.net/publication/301216433_Reconceptualizing_imitation_in_social_tagging_a_reflective_search_model_of_human_web_interaction")	
	piece_of_textFx(dissem_paragraph,' Proceedings of the 8th International ACM Web Science Conference 2016 (pp. 146-155). New York: ACM press.')

	dissem_paragraph.appendChild(document.createElement("P"));
	piece_of_textFx(dissem_paragraph,'Seitlinger, P., Ley, T., Kowald, D., Theiler, D., Hasani-Mavriqi, I., Dennerlein, S., Lex, E., & Albert, D. (2018). ')
	linkExternalFx(dissem_paragraph,"Balancing the Fluency-Consistency Tradeoff in Collaborative Information Search with a Recommender Approach",
		"http://dx.doi.org/10.1080/10447318.2017.1379240")	
	piece_of_textFx(dissem_paragraph,'. International Journal of Human-Computer Interaction, 34 (6), 557-575.')


	buttonFx(div_dissem,"seasense.directory","directoryFx()")

}