
// Function to create matrix that is symmetrical around the diagonal
/* function matSymmetryFx() {
	
	var mat = document.createElement("TABLE");
    mat.setAttribute("id", "symMat");
    mat.setAttribute("border", "1")
    mat.setAttribute("align","center")
    document.body.appendChild(mat);


    ///////////// Asym

    var stopIt = false;
    while(stopIt==false){
        
        var numbers_above = [];
            for (i=0; i<7;i++){
                var startNumber = 8*i+i+1
                var endNumber = 7*i+(i+7)
                for(k=startNumber;k<=endNumber;k++){
                    numbers_above.push(k)
                }
                
            };
        var numbers_below = [];
            for (i=1; i<8;i++){
                var startNumber = (i*7)+1
                var endNumber = (i*7)+i*2
                for(k=startNumber;k<=endNumber;k++){
                    numbers_below.push(k)
                }
                
            };

        var nFilledCells = 20;
        var subSample_above = [];
        var subSample_below = [];
        var symSample_below = [];
        var symNumber_above = [];
        var symNumber_below = [];
        
        while(subSample_above.length<nFilledCells){
            
            rand_i = Math.floor(Math.random()*8);
            j_max = 8;
            j_min = rand_i+1;
            j = Math.floor(Math.random() * (j_max-j_min) ) + j_min;
            cell_ID_i = rand_i*7+rand_i+j;
            
            if(subSample_above.includes(cell_ID_i)===false){
                subSample_above.push(cell_ID_i);
                cell_ID_j = j*7+j+rand_i;
                symSample_below.push(cell_ID_j);
            };

        };

        while(subSample_below.length<nFilledCells){
            rand_i = Math.floor(Math.random()*numbers_below.length+1);
            cell_i = numbers_below[rand_i];
            if(subSample_below.includes(cell_i)===false){
                subSample_below.push(cell_i);   
            };
        };

        // examining whether subSample_below is identical to subSample_above
        for(i=0;i<nFilledCells;i++){
            if(i==0){var nIdentical=0;}
            for(j=0;j<nFilledCells;j++){
                if(symSample_below[i]==subSample_below[j]){
                    nIdentical+=1
                    symNumber_above.push(subSample_above[i]);
                    symNumber_below.push(subSample_below[j]);
                };
            };
            
        };
       
        if(nIdentical!=nFilledCells){stopIt=true}
    }
    
    if(Math.floor(Math.random() * 2)==1){var pattern = "sym"}else{var pattern = "asym"};
    function patternFx(pattern){
    	if(pattern=="asym"){
    		var sampled_cell_IDs = subSample_above.concat(subSample_below);}else{
    			var sampled_cell_IDs = subSample_above.concat(symSample_below)
    		};
    	return(sampled_cell_IDs);
    };
    sampled_cell_IDs = patternFx(pattern);

    var c = 0;
    for( j=0; j <8 ; j++) {
        
        var newRow   = symMat.insertRow(0);
        newRow.setAttribute("id", "newRow");

        for( i=0; i <8 ; i++) {
            var z = document.createElement("TD");
            z.setAttribute("height", "20");
            z.setAttribute("width", "20");
            if(sampled_cell_IDs.includes(c)){z.setAttribute("style","background-color: black")}
            document.getElementById("newRow").appendChild(z);
            c=c+1;
        }
        
    }

	return{"pattern": pattern, "matrix": mat} 

};*/

// Function to create matrix that is symmetrical around the horizontal
function matSymmetryFx() {
	
	var mat = document.createElement("TABLE");
    mat.setAttribute("id", "symMat");
    mat.setAttribute("border", "1")
    mat.setAttribute("align","center")
    document.body.appendChild(mat);

    /* "the pattern was symmetrical approximately half of the time." 
    (p. 642; https://s3.amazonaws.com/academia.edu.documents/31992815/Unsworthetal%282009%29Memory1-2.pdf?AWSAccessKeyId=AKIAIWOWYYGZ2Y53UL3A&Expires=1542288862&Signature=7r1Oi%2BgWSXeuEqDRbe6wXTQxYvs%3D&response-content-disposition=inline%3B%20filename%3DComplex_working_memory_span_tasks_and_hi.pdf)*/
    

    /* Working example: if I have an 8x8 grid ('GridDimension' is set to "8") then the application 
    has a 64-square grid to work with. The application will fill this square with either a symmetrical or a 
    non-symmetrical pattern (randomly decided each time, 50% prob). The number of squares filled to make the 
    pattern is decided by randomly selecting a number between 'MinSquares' and 'MaxSquares'. The number refers 
    to how many squares on one half of the grid to fill as after filling a random amount of squares on one half 
    it will then mirror those (if a symmetrical trial) or it will randomly pick the same amount of squares for 
    the other half (ensuring it doesn't end up symmetrical by chance). Therefore the value of 'MaxSquares' 
    should always be less than half of the total number of squares in the grid. 
    source: http://www.cognitivetools.uk/cognition/tasks/VisuoSpatial-WM/symmetrySpan/#symm_proc_size' */


    ///////////// Asym

    var stopIt = false;
    while(stopIt==false){
        
        var numbers_above = [];
        for (i=0; i<(8*4);i++){numbers_above.push(i)};
                
            
        var numbers_below = [];
        for (i=(8*4+1); i<(8*8);i++){numbers_below.push(i)};

        var nFilledCells = 20;
        var subSample_above = [];
        var subSample_below = [];
        var symSample_below = [];
        var symNumber_above = [];
        var symNumber_below = [];
        
        while(subSample_above.length<nFilledCells){
            
            cell_ID_i = Math.floor(Math.random()*4);
            cell_ID_j = Math.floor(Math.random()*8);
            cell_ID_ij = (cell_ID_i*8)+cell_ID_j

            if(subSample_above.includes(cell_ID_ij)===false){
                subSample_above.push(cell_ID_ij);
                cell_ID_i_sym = 7-cell_ID_i
                cell_ID_ij_sym = (cell_ID_i_sym*8)+cell_ID_j
                symSample_below.push(cell_ID_ij_sym);
            };

        };

        while(subSample_below.length<nFilledCells){
            rand_i = Math.floor(Math.random()*numbers_below.length+1);
            cell_i = numbers_below[rand_i];
            if(subSample_below.includes(cell_i)===false){
                subSample_below.push(cell_i);   
            };
        };

        // examining whether subSample_below is identical to subSample_above
        for(i=0;i<nFilledCells;i++){
            if(i==0){var nIdentical=0;}
            for(j=0;j<nFilledCells;j++){
                if(symSample_below[i]==subSample_below[j]){
                    nIdentical+=1
                    symNumber_above.push(subSample_above[i]);
                    symNumber_below.push(subSample_below[j]);
                };
            };
            
        };
        /*subSample_above+"   "+subSample_below+"   "+symNumber_above+"   "+symNumber_below+"   "+nIdentical*/
        if(nIdentical!=nFilledCells){stopIt=true}
    }
    
    if(Math.floor(Math.random() * 2)==1){var pattern = "symmetrical"}else{var pattern = "asymmetrical"};
    function patternFx(pattern){
    	if(pattern=="asymmetrical"){
    		var sampled_cell_IDs = subSample_above.concat(subSample_below);}else{
    			var sampled_cell_IDs = subSample_above.concat(symSample_below)
    		};
    	return(sampled_cell_IDs);
    };
    sampled_cell_IDs = patternFx(pattern);

    var c = 0;
    for( j=0; j <8 ; j++) {
        
        var newRow   = symMat.insertRow(0);
        newRow.setAttribute("id", "newRow");

        for( i=0; i <8 ; i++) {
            var z = document.createElement("TD");
            z.setAttribute("class","symStim");
            if(sampled_cell_IDs.includes(c)){z.setAttribute("style","background-color: black")}
            document.getElementById("newRow").appendChild(z);
            c=c+1;
        }
        
    }

	return{"pattern": pattern, "matrix": mat} 

};

function matRememberFx(cellFilled){

	var mat = document.createElement("TABLE");
    mat.setAttribute("id", "rememberMat");
    mat.setAttribute("style","margin-top: 2em");
    mat.setAttribute("border", "1");
    mat.setAttribute('align','center');
    document.body.appendChild(mat);

    var nRows = 4;
    //var sampled_cell_ID = [Math.floor(Math.random()*(nRows*nRows))];
    var c = 0;
    for( j=0; j <nRows ; j++) {
        
        var newRow   = rememberMat.insertRow(0);
        newRow.setAttribute("id", "newRow");

        for( i=0; i<nRows ; i++) {
            var z = document.createElement("TD");
            z.setAttribute("class","remStim");
            var cellNumber = j*3+j+i;
            z.setAttribute("cellNumber",cellNumber);
            if(c==cellFilled){z.setAttribute("style","background-color: #008080")}
            document.getElementById("newRow").appendChild(z);
            c=c+1;
        }
        
    }

    return(mat)

};

function matEmptyFx(){

    var mat = document.createElement("TABLE");
    mat.setAttribute("id", "rememberMat");
    mat.setAttribute("border", "1");
    mat.setAttribute('align','center');
    mat.setAttribute('style','color:white, text-align:center');
    document.body.appendChild(mat);

    var nRows = 4;
    for( j=0; j <nRows ; j++) {
        
        var newRow   = rememberMat.insertRow(0);
        newRow.setAttribute("id", "newRow");

        for( i=0; i<nRows ; i++) {
            var z = document.createElement("TD");
            /*z.setAttribute("height", "30");
            z.setAttribute("width", "30");*/
            z.setAttribute("class","remStim");
            z.setAttribute("style","font-size: var(--numberSize_remMat)");
            var cellNumber = j*3+j+i;
            z.setAttribute("cellNumber",cellNumber);
            document.getElementById("newRow").appendChild(z);
        }
        
    }

    return(mat)

};

function matEmptyFx2(){

    var mat2 = document.createElement("TABLE");
    mat2.setAttribute("id", "emptyMat");
    mat2.setAttribute("border", "1");
    mat2.setAttribute('align','center');
    mat2.setAttribute('style','color:white, text-align:center');
    document.body.appendChild(mat2);

    var nRows = 4;
    for( j=0; j <nRows ; j++) {
        
        var newRoW   = emptyMat.insertRow(0);
        newRoW.setAttribute("id", "newRoW");

        for( i=0; i<nRows ; i++) {
            var z2 = document.createElement("TD");
            /*z2.setAttribute("height", "30");
            z2.setAttribute("width", "30");*/
            z2.setAttribute("class","remStim");
            z2.setAttribute("style","font-size: var(--numberSize_remMat)");
            var cellNumber2 = j*3+j+i;
            z2.setAttribute("cellNumber2",cellNumber2);
            document.getElementById("newRoW").appendChild(z2);
        }
        
    }

    return(mat2)

};



function matFeedbackFx(cells_presented, cells_clicked, cells_RecCorPos, cells_RecIncorPos, cells_Missed, cells_FalseMem, accuracy_score){
    

	var juxTable = document.createElement("TABLE");
	juxTable.setAttribute("id","juxTable")
	juxTable.setAttribute('align','center');
	document.body.appendChild(juxTable);

	var row0   = juxTable.insertRow(0);
	row0.setAttribute("height","20px");
    row0.setAttribute("style","font-weight:bold")
    for(k=0;k<3;k++){
            var tdk = document.createElement("TD");
            tdk.setAttribute("style","font-size: var(--normalTextSize)");
            row0.appendChild(tdk);
            if(k==0){
                tdk.appendChild(document.createTextNode("Feedback: "));
            }
    }
    var row1   = juxTable.insertRow(1);
    row1.setAttribute("height","20px");
    
	var row2   = juxTable.insertRow(2);
    row2.setAttribute("id", "row2");
    

    	var mat1_cell = document.createElement("TD");
    	document.getElementById("row2").appendChild(mat1_cell);

		var matCor = document.createElement("TABLE");
		matCor.setAttribute("id", "correctMat");
		matCor.setAttribute("border", "1");
		matCor.setAttribute('align','center');
		matCor.setAttribute('style','text-align:center; color:white');
		mat1_cell.appendChild(matCor);

		var matCorCaption = document.createElement("CAPTION");
		var captionText2 = document.createTextNode("Presented sequence");
		matCorCaption.setAttribute('style','color:black; font-size: var(--normalTextSize)'); 
		matCorCaption.appendChild(captionText2);
		matCor.appendChild(matCorCaption);

		var nRows = 4;
	    var c = 0;
	    for( j=0; j <nRows ; j++) {
	        
	        var newRow2   = matCor.insertRow(0);
	        newRow2.setAttribute("id", "newRow2");

	        for( k=0; k<nRows ; k++) {
	            var z = document.createElement("TD");
                z.setAttribute("class","remStim")
	            /*z.setAttribute("height", "30");
	            z.setAttribute("width", "30");*/
	         
	            if(cells_presented.includes(c)){
	            	for(sx=0; sx<cells_presented.length; sx++){
	            		if(c==cells_presented[sx]){var posNr = document.createTextNode((sx+1)+".")}
	            	}
	            	z.setAttribute("style","background-color: black; font-size: var(--numberSize_remMat)");
	            	//var posNr = document.createTextNode(posNr)
                    z.appendChild(posNr)
	            }
	            document.getElementById("newRow2").appendChild(z);
	            c+=1;
	        }
	        
	    }

    	var mid_cell = document.createElement("TD");
    	document.getElementById("row2").appendChild(mid_cell);
    	mid_cell.setAttribute("width", "30");

    	var mat2_cell = document.createElement("TD");
        document.getElementById("row2").appendChild(mat2_cell);

        var matResponse = document.createElement("TABLE");
        matResponse.setAttribute("id", "matResponse");
        matResponse.setAttribute('align','center');
        matResponse.setAttribute('style','text-align:center; color:white');
        mat2_cell.appendChild(matResponse);

        var matResponseCaption = document.createElement("CAPTION");
        matResponseCaption.setAttribute('style','color:black; font-size: var(--normalTextSize)'); 
        var captionText3 = document.createTextNode("Your recalled sequence");

        matResponseCaption.appendChild(captionText3);
        matResponse.appendChild(matResponseCaption);
        var matResponse_empty = matEmptyFx();
        matResponse.appendChild(matResponse_empty)
        for(cc_i=0; cc_i<16; cc_i++){
            function bprintr(setx,colortype,abbreviation) {
                for(cc_j=0;cc_j<setx.length;cc_j++){
                    var abbrevTxt = document.createTextNode((cc_j+1)+".");
                    if(cc_i==setx[cc_j]){
                        document.querySelector('[cellNumber='+ CSS.escape(cc_i) +']').style.backgroundColor = colortype;
                        document.querySelector('[cellNumber='+ CSS.escape(cc_i) +']').style.textAlign = "center";
                        document.querySelector('[cellNumber='+ CSS.escape(cc_i) +']').style.color = "white";
                        document.querySelector('[cellNumber='+ CSS.escape(cc_i) +']').appendChild(abbrevTxt);
                    }
                };
            }
            bprintr(cells_clicked,"black","")
        };

        var row3   = juxTable.insertRow(3);
        row3.setAttribute("height","20")

        var row4   = juxTable.insertRow(4);
        row4.setAttribute("id", "row4");
        var accu_title = document.createTextNode("Scoring: ");
        var accuTitle_td = document.createElement("TD");
        
        row4.setAttribute("style","font-weight:bold; font-size: var(--normalTextSize)");
        accuTitle_td.appendChild(accu_title);
        row4.appendChild(accu_title);
        
        var row5   = juxTable.insertRow(5);
        var matResponse2 = matEmptyFx2();
        for(cc_i=0; cc_i<16; cc_i++){
            function bprintr(setx,colortype,abbreviation) {
                for(cc_j=0;cc_j<setx.length;cc_j++){
                    var abbrevTxt = document.createTextNode(abbreviation);
                    if(cc_i==setx[cc_j]){
                        document.querySelector('[cellNumber2='+ CSS.escape(cc_i) +']').style.backgroundColor = colortype;
                        document.querySelector('[cellNumber2='+ CSS.escape(cc_i) +']').style.textAlign = "center";
                        document.querySelector('[cellNumber2='+ CSS.escape(cc_i) +']').appendChild(abbrevTxt);
                    }
                };
            }
            bprintr(cells_RecCorPos,"green","C")
            bprintr(cells_RecIncorPos,"red","O")
            bprintr(cells_Missed,"red","M")
            bprintr(cells_FalseMem,"red","N")
        };

        
        function makeThreeCells (row,matResponse2){
            for(u=0;u<3;u++){
                var td = document.createElement("TD");
                row.appendChild(td)
                if(u==2){
                    td.appendChild(matResponse2)
                }
                if(u==0){
                    var AbbrevTab = document.createElement("TABLE");
                    
                    function addRow (table,rowPos,rowText,td,textCol){
                        var newRowAdded = AbbrevTab.insertRow(rowPos);
                        var newTDAdded = document.createElement("TD");
                        newTDAdded.setAttribute("style","font-size:var(--normalTextSize)")
                        if(textCol=="G"){newRowAdded.setAttribute("style","color:green")}else{newRowAdded.setAttribute("style","color:red")}
                        newTDAdded.appendChild(document.createTextNode(rowText));
                        newRowAdded.appendChild(newTDAdded);
                        td.appendChild(table);
                    };
                    var rx = 0;
                    if(cells_RecCorPos.length>0){
                        addRow(AbbrevTab,rx,"C = Correct",td,"G");
                        rx+=1;
                    }
                    if(cells_RecIncorPos.length>0){
                        addRow(AbbrevTab,rx,"O = Wrong order",td,"R");
                        rx+=1;
                    }
                    if(cells_Missed.length>0){
                        addRow(AbbrevTab,rx,"M = Missed",td,"R");
                        rx+=1;
                    }
                    if(cells_FalseMem.length>0){
                        addRow(AbbrevTab,rx,"N = Not presented",td,"R");
                        rx+=1;
                    }   
                        
                }
                
            }
        };

        makeThreeCells(row5,matResponse2);
        
        var row6   = juxTable.insertRow(6);
        row6.setAttribute("style","font-weight: bold");
        

        /*var accuracy_score = cells_RecCorPos.length / (cells_RecCorPos.length+cells_RecIncorPos.length+cells_Missed.length+cells_FalseMem.length);
        accuracy_score = Math.floor(accuracy_score*100)*/

        for(k=0;k<3;k++){
            var tdk = document.createElement("TD");
            row6.appendChild(tdk);
            if(k==0){
                var accu_txtNode = document.createTextNode("Accuracy: "+accuracy_score+"%");
                tdk.appendChild(accu_txtNode);
                tdk.setAttribute("style","font-size: var(--normalTextSize)");
                
            }
        }

    return[juxTable]

};


