
function bullet_points_fx(linkTxt,point_fx){
	var newPoint = document.createElement("li");
	newPoint.setAttribute("style","cursor:pointer");
	newPoint.setAttribute("onclick",point_fx);
	var newPoint_txt = document.createTextNode(linkTxt);
	newPoint.appendChild(newPoint_txt);
	return(newPoint)
}

function close_allCells_fx(){
	document.getElementById('home').innerHTML = '';
	
}

function homeCellFx(){
	
	function home_cell_content_fx(home_state){
	
		home_state[0] = "on";	

		document.getElementById('home').innerHTML = '';


		var stars = document.createElement("strong");
		stars.appendChild(document.createElement("p"))
		stars.appendChild(document.createTextNode("***"))
		home.appendChild(stars);
		home.appendChild(document.createElement("p"));

		var list_of_links = document.createElement("ul");
		list_of_links.setAttribute("style","text-decoration:underline");
		home.appendChild(list_of_links);
		

		list_of_links.appendChild(bullet_points_fx("about","about_cellFx()"));
		list_of_links.appendChild(bullet_points_fx("related","related_cellFx()"));
		list_of_links.appendChild(bullet_points_fx("instruments","battery_cellFx()"));
		list_of_links.appendChild(bullet_points_fx("courses","courses_cellFx()"));

		var stars = document.createElement("strong");
		stars.appendChild(document.createElement("p"))
		stars.appendChild(document.createTextNode("***"))
		home.appendChild(stars);
		home.appendChild(document.createElement("p"));
		
		
		
	}
	if(home_state[0]=="off"){home_cell_content_fx(home_state);}

	//home_cell_content_fx()
};


function about_cellFx(){
			
			function about_content_fx(){
			
				
				document.getElementById('home').innerHTML = '';
				
				var about_DIV = document.createElement("DIV");
				about_DIV.setAttribute("class","scrollable_lexicon");
				about_DIV.setAttribute("id","about");
				home.appendChild(about_DIV);

				var stars = document.createElement("strong");
				stars.appendChild(document.createTextNode("***"))
				about_DIV.appendChild(stars);
				about_DIV.appendChild(document.createElement("p"));
				
				var aboutText1 = document.createTextNode("Making a space with and for people intrigued in investigating"
					+" and supporting the ");
				
				about_DIV.appendChild(aboutText1);

				var cogMechs = document.createTextNode("cognitive mechanisms");
				var cogMechs_bold = document.createElement("strong");
				cogMechs_bold.setAttribute("style","text-decoration: underline;cursor:pointer");
				
				cogMechs_bold.appendChild(cogMechs);
				about_DIV.appendChild(cogMechs_bold);

				var aboutText2 = document.createTextNode(" involved in discovery learning "
					+"- a process of self-actualization that unfolds cyclically in mental acts of ");
				about_DIV.appendChild(aboutText2);

				var sea = document.createTextNode("sea");
				var sea_bold = document.createElement("strong");
				sea_bold.setAttribute("style","text-decoration: underline;cursor:pointer");
				sea_bold.appendChild(sea);
				about_DIV.appendChild(sea_bold);

				var aboutText3 = document.createTextNode("rch & ");
				about_DIV.appendChild(aboutText3);

				var sense = document.createTextNode("sense");
				var sense_bold = document.createElement("strong");
				sense_bold.setAttribute("style","text-decoration: underline;cursor:pointer");
				sense_bold.appendChild(sense);
				about_DIV.appendChild(sense_bold);

				
				var aboutText4 = document.createTextNode("-making attempts.");
				about_DIV.appendChild(aboutText4);
				about_DIV.appendChild(document.createElement("p"));
				about_DIV.appendChild(document.createTextNode("***"));
				about_DIV.appendChild(document.createElement("p"));
			
				//home_state[0] = "off";
				var backLink = document.createElement("a");
				backLink.appendChild(document. createTextNode("back"));
				backLink.setAttribute("style","cursor:pointer");
				
				backLink.setAttribute("onclick","fxx()");
				about_DIV.appendChild(backLink);
			
		}
		
		if(about_state[0]=="off"){about_content_fx();}
			
};




function related_cellFx(){
	
	function related_content_fx(){
				var secondRow = document.getElementById("table").insertRow(1);
				secondRow.setAttribute("id","row2")

				var thirdCell = document.createElement("TD");
				var fourthCell = document.createElement("TD");
				thirdCell.setAttribute("id","ThirdCell");
				fourthCell.setAttribute("id","FourthCell");

				document.getElementById("row2").appendChild(thirdCell);
				document.getElementById("row2").appendChild(fourthCell);
				
				var listRelated = document.createElement("UL");
				listRelated.setAttribute("id","list_related");
				var list_related_DIV = document.createElement("DIV");
				list_related_DIV.setAttribute("class","scrollable");
				var stars = document.createElement("strong");
				stars.appendChild(document.createTextNode("***"))
				list_related_DIV.appendChild(stars);
				list_related_DIV.appendChild(document.createElement("p"));
				list_related_DIV.appendChild(listRelated);
				thirdCell.appendChild(list_related_DIV);

				var fourthCell_DIV = document.createElement("DIV");
				fourthCell_DIV.setAttribute("class","scrollable_lexicon");
				fourthCell_DIV.setAttribute("id","project_info_box");
				fourthCell.appendChild(fourthCell_DIV);

				var projectBoxTitle = document.createElement("strong");
				projectBoxTitle.appendChild(document.createTextNode("Project information"));
				fourthCell_DIV.appendChild(projectBoxTitle);
				projectBoxTitle.appendChild(document.createElement("p"));
				var lexicon_instruction = document.createTextNode("Hit a link in the left box.");
				fourthCell_DIV.appendChild(lexicon_instruction);


				function point_in_listRelated_Fx(point_name,fullTitle,sponsor,homepage_link){
					var newPoint = document.createElement("li");
					var newPoint_name = document.createTextNode(point_name);
					newPoint.appendChild(newPoint_name);
					newPoint.setAttribute("class","LinkToImage");
					
						function show_info_in_fourthCell(fullTitle,sponsor,homepage_link){
							
							document.getElementById("project_info_box").remove();

							var fourthCell_DIV = document.createElement("DIV");
							fourthCell_DIV.setAttribute("class","scrollable_lexicon");
							fourthCell_DIV.setAttribute("id","project_info_box");
							fourthCell.appendChild(fourthCell_DIV);

							var fullTitle_I = document.createElement("strong");
							fullTitle_I.appendChild(document.createTextNode("Project title: "))
							document.getElementById("project_info_box").appendChild(fullTitle_I);
							var fullTitle = document.createTextNode(fullTitle);
							document.getElementById("project_info_box").appendChild(fullTitle);
							document.getElementById("project_info_box").appendChild(document.createElement("p"));

							var sponsor_I = document.createElement("strong");
							sponsor_I.appendChild(document.createTextNode("Funding: "));
							document.getElementById("project_info_box").appendChild(sponsor_I);
							var sponsor = document.createTextNode(sponsor);
							document.getElementById("project_info_box").appendChild(sponsor);
							document.getElementById("project_info_box").appendChild(document.createElement("p"));

							var LinkToHomepgae = document.createElement("strong");
							LinkToHomepgae.appendChild(document.createTextNode("More details: "));
							document.getElementById("project_info_box").appendChild(LinkToHomepgae);
							var homepage_a = document.createElement("a");
							homepage_a.appendChild(document.createTextNode("Project homepage"));
							homepage_a.href = homepage_link;
							homepage_a.setAttribute("class","LinkToImage");
							document.getElementById("project_info_box").appendChild(homepage_a);

						}
					
					
						newPoint.onclick = function(){
							
								show_info_in_fourthCell(fullTitle,sponsor,homepage_link)		
							
						}

					return(newPoint)
				}
				
				listRelated.appendChild(point_in_listRelated_Fx("omfix",
					"Overcoming Mental Fixation",
					"Austrian Science Fund (FWF)","https://omfix.wordpress.com"));
				listRelated.appendChild(point_in_listRelated_Fx("merits","MEmory Retrieval In Tagging Socially",
					"Austrian Science Fund (FWF)","https://meritsblog.wordpress.com/"));
				listRelated.appendChild(point_in_listRelated_Fx("ceiter",
					"Cross-Border Educational Innovation thru Technology-Enhanced Research",
					"EU ERA Chair project","http://ceiter.tlu.ee/"));


				home_state[0] = "on";
				
		}

	if(home_state=="off"){
			
		related_content_fx()
		
	}else{
			

				document.getElementById("row2").remove();
				
				//related_content_fx()
				home_state[0]="off"
			
		}
	
};

function courses_cellFx(){
	
	function courses_content_fx(){
				var secondRow = document.getElementById("table").insertRow(1);
				secondRow.setAttribute("id","row2")

				var thirdCell = document.createElement("TD");
				var fourthCell = document.createElement("TD");
				thirdCell.setAttribute("id","ThirdCell");
				fourthCell.setAttribute("id","FourthCell");

				document.getElementById("row2").appendChild(thirdCell);
				document.getElementById("row2").appendChild(fourthCell);
				
				var listCourses = document.createElement("UL");
				listCourses.setAttribute("id","list_courses");
				var list_courses_DIV = document.createElement("DIV");
				list_courses_DIV.setAttribute("class","scrollable");
				var stars = document.createElement("strong");
				stars.appendChild(document.createTextNode("***"))
				list_courses_DIV.appendChild(stars);
				list_courses_DIV.appendChild(document.createElement("p"));
				list_courses_DIV.appendChild(listCourses);
				thirdCell.appendChild(list_courses_DIV);

				var fourthCell_DIV = document.createElement("DIV");
				fourthCell_DIV.setAttribute("class","scrollable_lexicon");
				fourthCell_DIV.setAttribute("id","project_info_box");
				fourthCell.appendChild(fourthCell_DIV);

				var courseBoxTitle = document.createElement("strong");
				courseBoxTitle.appendChild(document.createTextNode("Course information"));
				fourthCell_DIV.appendChild(courseBoxTitle);
				courseBoxTitle.appendChild(document.createElement("p"));
				var lexicon_instruction = document.createTextNode("Hit a link in the left box.");
				fourthCell_DIV.appendChild(lexicon_instruction);


				function point_in_listCourses_Fx(point_name,fullTitle,
													unit0_slides,unit0_reflection,
													unit1_article,unit1_questions, unit1_slides, unit1_reflection,
													unit2_article,unit2_questions, unit2_slides, unit2_reflection,
													unit3_article,unit3_questions, unit3_slides, unit3_reflection,
													unit4_article,unit4_questions, unit4_slides, unit4_reflection,
													unit5_slides,
													extraA){
					var newPoint = document.createElement("li");
					var newPoint_name = document.createTextNode(point_name);
					newPoint.appendChild(newPoint_name);
					newPoint.setAttribute("class","LinkToImage");
					
						function show_info_in_fourthCell(fullTitle,
							unit0_slides,unit0_reflection,
							unit1_article,unit1_questions,unit1_slides, unit1_reflection,
							unit2_article,unit2_questions,unit2_slides, unit2_reflection,
							unit3_article,unit3_questions,unit3_slides, unit3_reflection,
							unit4_article,unit4_questions,unit4_slides, unit4_reflection,
							unit5_slides,
							extraA){
							
							document.getElementById("project_info_box").remove();

							var fourthCell_DIV = document.createElement("DIV");
							fourthCell_DIV.setAttribute("class","scrollable_lexicon");
							fourthCell_DIV.setAttribute("id","course_info_box");
							fourthCell.appendChild(fourthCell_DIV);

							var fullTitle_I = document.createElement("strong");
							fullTitle_I.appendChild(document.createTextNode("Course title: "))
							document.getElementById("course_info_box").appendChild(fullTitle_I);
							var fullTitle = document.createTextNode(fullTitle);
							document.getElementById("course_info_box").appendChild(fullTitle);
							document.getElementById("course_info_box").appendChild(document.createElement("p"));

							var LinkToUnit0slides = document.createElement("strong");
							LinkToUnit0slides.appendChild(document.createTextNode("Unit 0: Intro"));
							document.getElementById("course_info_box").appendChild(LinkToUnit0slides);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var slides_U0_a = document.createElement("a");
							slides_U0_a.appendChild(document.createTextNode("Slides"));
							slides_U0_a.href = unit0_slides;
							slides_U0_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(slides_U0_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var reflex_U0_a = document.createElement("a");
							reflex_U0_a.appendChild(document.createTextNode("Reflection"));
							reflex_U0_a.href = unit0_reflection;
							reflex_U0_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(reflex_U0_a);

							
							document.getElementById("course_info_box").appendChild(document.createElement("p"));

							var LinkToUnit1prep = document.createElement("strong");
							LinkToUnit1prep.appendChild(document.createTextNode("Unit 1: Genes"));
							document.getElementById("course_info_box").appendChild(LinkToUnit1prep);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var article_U1_a = document.createElement("a");
							article_U1_a.appendChild(document.createTextNode("Article"));
							article_U1_a.href = unit1_article;
							article_U1_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(article_U1_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var preparation_U1_a = document.createElement("a");
							preparation_U1_a.appendChild(document.createTextNode("Questions"));
							preparation_U1_a.href = unit1_questions;
							preparation_U1_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(preparation_U1_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var slides_U1_a = document.createElement("a");
							slides_U1_a.appendChild(document.createTextNode("Slides"));
							slides_U1_a.href = unit1_slides;
							slides_U1_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(slides_U1_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var reflex_U1_a = document.createElement("a");
							reflex_U1_a.appendChild(document.createTextNode("Reflection"));
							reflex_U1_a.href = unit1_reflection;
							reflex_U1_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(reflex_U1_a);

							document.getElementById("course_info_box").appendChild(document.createElement("p"));

							var LinkToUnit2prep = document.createElement("strong");
							LinkToUnit2prep.appendChild(document.createTextNode("Unit 2: Theories"));
							document.getElementById("course_info_box").appendChild(LinkToUnit2prep);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var article_U2_a = document.createElement("a");
							article_U2_a.appendChild(document.createTextNode("Article"));
							article_U2_a.href = unit2_article;
							article_U2_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(article_U2_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var preparation_U2_a = document.createElement("a");
							preparation_U2_a.appendChild(document.createTextNode("Questions"));
							preparation_U2_a.href = unit2_questions;
							preparation_U2_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(preparation_U2_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var slides_U2_a = document.createElement("a");
							slides_U2_a.appendChild(document.createTextNode("Slides"));
							slides_U2_a.href = unit2_slides;
							slides_U2_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(slides_U2_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var reflex_U2_a = document.createElement("a");
							reflex_U2_a.appendChild(document.createTextNode("Reflection"));
							reflex_U2_a.href = unit2_reflection;
							reflex_U2_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(reflex_U2_a);

							document.getElementById("course_info_box").appendChild(document.createElement("p"));

							var LinkToUnit3prep = document.createElement("strong");
							LinkToUnit3prep.appendChild(document.createTextNode("Unit 3: Individual differences"));
							document.getElementById("course_info_box").appendChild(LinkToUnit3prep);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var article_U3_a = document.createElement("a");
							article_U3_a.appendChild(document.createTextNode("Article"));
							article_U3_a.href = unit3_article;
							article_U3_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(article_U3_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var preparation_U3_a = document.createElement("a");
							preparation_U3_a.appendChild(document.createTextNode("Questions"));
							preparation_U3_a.href = unit3_questions;
							preparation_U3_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(preparation_U3_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var slides_U3_a = document.createElement("a");
							slides_U3_a.appendChild(document.createTextNode("Slides"));
							slides_U3_a.href = unit3_slides;
							slides_U3_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(slides_U3_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var reflex_U3_a = document.createElement("a");
							reflex_U3_a.appendChild(document.createTextNode("Reflection"));
							reflex_U3_a.href = unit3_reflection;
							reflex_U3_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(reflex_U3_a);

							document.getElementById("course_info_box").appendChild(document.createElement("p"));

							var LinkToUnit4prep = document.createElement("strong");
							LinkToUnit4prep.appendChild(document.createTextNode("Unit 4: Cognitive training"));
							document.getElementById("course_info_box").appendChild(LinkToUnit4prep);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var article_U4_a = document.createElement("a");
							article_U4_a.appendChild(document.createTextNode("Article"));
							article_U4_a.href = unit4_article;
							article_U4_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(article_U4_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var preparation_U4_a = document.createElement("a");
							preparation_U4_a.appendChild(document.createTextNode("Questions"));
							preparation_U4_a.href = unit4_questions;
							preparation_U4_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(preparation_U4_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var slides_U4_a = document.createElement("a");
							slides_U4_a.appendChild(document.createTextNode("Slides"));
							slides_U4_a.href = unit4_slides;
							slides_U4_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(slides_U4_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var reflex_U4_a = document.createElement("a");
							reflex_U4_a.appendChild(document.createTextNode("Reflection"));
							reflex_U4_a.href = unit4_reflection;
							reflex_U4_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(reflex_U4_a);

							document.getElementById("course_info_box").appendChild(document.createElement("p"));
							var LinkToUnit5prep = document.createElement("strong");
							LinkToUnit5prep.appendChild(document.createTextNode("Unit 5: Recap"));
							document.getElementById("course_info_box").appendChild(LinkToUnit5prep);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));
							var slides_U5_a = document.createElement("a");
							slides_U5_a.appendChild(document.createTextNode("Slides"));
							slides_U5_a.href = unit5_slides;
							slides_U5_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(slides_U5_a);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));

							document.getElementById("course_info_box").appendChild(document.createElement("p"));
							/*var LinkToExam = document.createElement("strong");
							LinkToExam.appendChild(document.createTextNode("Exam"));
							document.getElementById("course_info_box").appendChild(LinkToExam);
							document.getElementById("course_info_box").appendChild(document.createElement("br"));*/
							var exam_a = document.createElement("a");
							exam_a.appendChild(document.createTextNode("Extra Assignment *"));
							exam_a.href = extraA;
							exam_a.setAttribute("class","LinkToImage");
							document.getElementById("course_info_box").appendChild(exam_a);

						}
					
					
						newPoint.onclick = function(){
							
								show_info_in_fourthCell(fullTitle,unit0_slides,unit0_reflection,
									unit1_article,unit1_questions,unit1_slides,unit1_reflection,
									unit2_article,unit2_questions,unit2_slides,unit2_reflection,
									unit3_article,unit3_questions,unit3_slides,unit3_reflection,
									unit4_article,unit4_questions,unit4_slides,unit4_reflection,
									unit5_slides,extraA)		
							
						}

					return(newPoint)
				}
				
				listCourses.appendChild(point_in_listCourses_Fx("CogniDev","Typical & Atypical Cognitive Development",
					"cogDev/Unit_0_slides_CogniDev.pdf","cogDev/Unit_0_reflection_cogniDev.pdf",
					"cogDev/Tucker2013_Heritability.pdf","cogDev/Unit_1_questions_cogniDev.pdf",
					"cogDev/Unit_One_slides_CogniDev.pdf","cogDev/Unit_1_reflection_cogniDev.pdf",
					"cogDev/Westerman2011_Neuroconstructivism.pdf","cogDev/Unit_2_questions_cogniDev.pdf",
					"cogDev/Unit_2_slides_cogniDev.pdf","cogDev/Unit_2_reflection_cogniDev.pdf",
					"cogDev/Morasch2013_CognitiveControlDevelopment.pdf","cogDev/Unit_3_questions_cogniDev.pdf",
					"cogDev/Unit_3_slides_cogniDev.pdf","cogDev/Unit_3_reflection_cogniDev.pdf",
					"cogDev/Gathercole2008_WorkingMemInTheClassroom.pdf","cogDev/Unit_4_questions_cogniDev.pdf",
					"cogDev/Unit_4_slides_cogniDev.pdf","cogDev/Unit_4_reflection_cogniDev.pdf",
					"cogDev/Unit_5_slides_cogniDev.pdf",
					"cogDev/ExtraA_CognitiveDevelopment_Spring2019.pdf"));


				secondRow_state[0] = "on";
				
		}

	if(secondRow_state=="off"){

		courses_content_fx()
		
	}else{
			

				document.getElementById("row2").remove();
				
				courses_content_fx()

			
		}
	
};

function battery_cellFx(){
	
	function battery_content_fx(){

				var secondRow = document.getElementById("table").insertRow(1);
				secondRow.setAttribute("id","row2")

				var thirdCell = document.createElement("TD");
				var fourthCell = document.createElement("TD");
				thirdCell.setAttribute("id","ThirdCell");
				fourthCell.setAttribute("id","FourthCell");

				document.getElementById("row2").appendChild(thirdCell);
				document.getElementById("row2").appendChild(fourthCell);
				
				var listTasks = document.createElement("UL");
				listTasks.setAttribute("id","list_tasks");
				var listTasks_DIV = document.createElement("DIV");
				listTasks_DIV.setAttribute("class","scrollable");
				var stars = document.createElement("strong");
				stars.appendChild(document.createTextNode("***"))
				listTasks_DIV.appendChild(stars);
				listTasks_DIV.appendChild(document.createElement("p"));
				listTasks_DIV.appendChild(listTasks);
				thirdCell.appendChild(listTasks_DIV);

				var fourthCell_DIV = document.createElement("DIV");
				fourthCell_DIV.setAttribute("class","scrollable_lexicon");
				fourthCell_DIV.setAttribute("id","task_info_box");
				fourthCell.appendChild(fourthCell_DIV);

				var taskBoxTitle = document.createElement("strong");
				taskBoxTitle.appendChild(document.createTextNode("Information about the instrument"));
				fourthCell_DIV.appendChild(taskBoxTitle);
				taskBoxTitle.appendChild(document.createElement("p"));
				var lexicon_instruction = document.createTextNode("Hit a link in the left box.");
				fourthCell_DIV.appendChild(lexicon_instruction);


				function point_in_listTasks_Fx(point_name,fullTitle,description,construct,task_link,
					task_logo, task_logo_address){
					var newPoint = document.createElement("li");
					var newPoint_name = document.createTextNode(point_name);
					newPoint.appendChild(newPoint_name);
					newPoint.setAttribute("class","LinkToImage");
					
						function show_info_in_fourthCell(fullTitle,description,construct,task_link,task_logo,
							task_logo_address){
							
							document.getElementById("task_info_box").remove();

							var fourthCell_DIV = document.createElement("DIV");
							fourthCell_DIV.setAttribute("class","scrollable_lexicon");
							fourthCell_DIV.setAttribute("id","task_info_box");
							fourthCell.appendChild(fourthCell_DIV);

							var fullTitle_I = document.createElement("strong");
							fullTitle_I.appendChild(document.createTextNode("Task name: "))
							document.getElementById("task_info_box").appendChild(fullTitle_I);
							var fullTitle = document.createTextNode(fullTitle);
							document.getElementById("task_info_box").appendChild(fullTitle);
							document.getElementById("task_info_box").appendChild(document.createElement("p"));

							var description_I = document.createElement("strong");
							description_I.appendChild(document.createTextNode("Description: "));
							document.getElementById("task_info_box").appendChild(description_I);
							var description = document.createTextNode(description);
							document.getElementById("task_info_box").appendChild(description);
							document.getElementById("task_info_box").appendChild(document.createElement("p"));

							var construct_I = document.createElement("strong");
							construct_I.appendChild(document.createTextNode("Targeted construct: "));
							document.getElementById("task_info_box").appendChild(construct_I);
							var construct = document.createTextNode(construct);
							document.getElementById("task_info_box").appendChild(construct);
							document.getElementById("task_info_box").appendChild(document.createElement("p"));

							var LinkTask = document.createElement("strong");
							LinkTask.appendChild(document.createTextNode("Participate: "));
							document.getElementById("task_info_box").appendChild(LinkTask);
							var task_a = document.createElement("a");
							
							if(task_logo==1){
								var task_a_pic = document.createElement("IMG");
								task_a_pic.setAttribute("src",task_logo_address);
								task_a.appendChild(task_a_pic);
							}else{
								task_a.appendChild(document.createTextNode("Link to task"));
							}
							task_a.href = task_link;
							task_a.setAttribute("class","LinkToImage");
							document.getElementById("task_info_box").appendChild(task_a);

						}
					
					
						newPoint.onclick = function(){
							
								show_info_in_fourthCell(fullTitle,description,construct,task_link,task_logo,
									task_logo_address)		
							
						}

					return(newPoint)
				}
				
				listTasks.appendChild(point_in_listTasks_Fx("act","Associative Chaining Task",
					"Quickly generating a diverse sequence of words each connecting to its predecessor",
					"Verbal flexibility","./index_ACT.html",0,""));
				listTasks.appendChild(point_in_listTasks_Fx("symspan","Symmetry Span task",
					"Remembering a sequence of flashing cells while judging the symmetry of patterns",
					"Working memory capacity","./index_SymSpan.html",0,""));
				listTasks.appendChild(point_in_listTasks_Fx("ospan","Operation Span task",
					"Remembering a sequence of consecutively presented letters while solving arithmetic problems",
					"Working memory capacity","./index_OSpan.html",0,""));
				listTasks.appendChild(point_in_listTasks_Fx("dinoNimi","dinoNimi",
					"Self-guided search of a taxonomy of dinosaurs to learn certain dinosaur categories",
					"Category learning","./dinoNimi_review.html",1,"./imgHP/dinoNimi.png"));


				secondRow_state[0] = "on";

		};

		

	if(secondRow_state=="off"){

			battery_content_fx()
		
	}else{	

				document.getElementById("row2").remove();		

				battery_content_fx();

			
		}
	
};
