/**
 * jspsych-button-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["button-response-hitCells"] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    // default trial parameters
    
    trial.response_ends_trial = (typeof trial.response_ends_trial === 'undefined') ? true : trial.response_ends_trial;
    trial.timing_stim = trial.timing_stim || -1; // if -1, then show indefinitely
    trial.timing_response = trial.timing_response || -1; // if -1, then wait for response forever
    trial.prompt = (typeof trial.prompt === 'undefined') ? "" : trial.prompt;
    trial.prompt2 = (typeof trial.prompt2 === 'undefined') ? "" : trial.prompt2;
    trial.is_html = (typeof trial.is_html === 'undefined') ? false : trial.is_html;
    trial.showEndButton = (typeof trial.showEndButton === 'undefined') ? false : trial.showEndButton;
    trial.flashedCells = (typeof trial.flashedCells === 'undefined') ? false : trial.flashedCells;
    
    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];
    
    // display stimulus
    if (!trial.is_html) {
      display_element.append($('<img>', {
        src: trial.stimulus,
        id: 'jspsych-button-response-stimulus',
        class: 'block-center'
      }));
    } else {
      display_element.append($('<div>', {
        html: trial.stimulus,
        id: 'jspsych-button-response-stimulus',
        class: 'block-center'
      }));
    }
    var clicked_cells = [];
    var vector_score = [];
    // display matrix
    function matRecallFx(){
    // http://www.dotnetlearners.com/javascript/find%20table%20cell%20value%20on%20cell%20(table)%20click%20using%20javascript.aspx
      var mat = document.createElement("TABLE");
      mat.setAttribute("id", "rememberMat");
      //mat.setAttribute("border", "1");
      mat.setAttribute('align','center');
      mat.setAttribute('style','text-align:center; color:white');
      
      document.body.appendChild(mat);
   
      var click_nr = [1];
      
      function changeColor_and_save(id,vector_score){
          
          id.setAttribute("style","font-size: var(--numberSize_remMat)");
          var id_number = id.getAttribute("cellNumber");
          if(clicked_cells.includes(id_number)===false){
            clicked_cells.push(id_number);

            if(id_number==trial.flashedCells[click_nr-1]){vector_score.push(1)}else{
              vector_score.push(0);};

            var id_label = document.createTextNode(click_nr[0]+'.');
            click_nr[0] = click_nr[0]+1;
            id.appendChild(id_label);
            
          }
      }

      var nRows = 4;
      //var sampled_cell_ID = [Math.floor(Math.random()*(nRows*nRows))];
      var c = 0;
      for( j=0; j<4 ; j++) {
          
          var newRow   = rememberMat.insertRow(0);
          newRow.setAttribute("id", "newRow");

          for( i=0; i<4 ; i++) {
              var z = document.createElement("TD");
              z.setAttribute("class","remStim");
              var z_button = document.createElement("button");
              z_button.setAttribute("class","recallMat");
              var cellNumber = j*3+j+i;
              z_button.setAttribute("cellNumber",cellNumber);
              z.appendChild(z_button);
              z_button.onclick = function() { changeColor_and_save(this,vector_score); };
              document.getElementById("newRow").appendChild(z);
              c=c+1;
          }
          
      }

      return(mat)

    };
    display_element.append(matRecallFx())

    
      
    //show prompt if there is one
    if (trial.prompt !== "") {
      display_element.append(trial.prompt);
    }
    //show prompt if there is one
    if (trial.prompt2 !== "") {
      display_element.append(trial.prompt2);
    }
    
    
    
    //display doneButton
    if (trial.showEndButton) {
      var doneButton = "<button id='doneButton' class='jspsych-btn' style='margin:20px'>Best&#xE4;tigen und Weiter </button></div>" /*Submit recalled letters*/
      display_element.append(doneButton);
    }
    $("#doneButton").on('click', function(e) {
          end_trial();
        })
    
    // store response
    var response = {
      rt: -1,
      button: -1
    };

    

    // start time
    var start_time = 0;
    
    var k = 0;
    
    // function to handle responses by the subject
    

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      /// differentiating 4 response categories: Recall_correctPosition, Recall_incorrectPosition, False_memory, Miss
      var cells_recalled_correctPosition = [];
      var cells_recalled_incorrectPosition = [];
      var cells_missed = [];
      var cells_falseMemory = [];

      var clicked_cells_num = [];
      for(y=0; y<clicked_cells.length; y++){
        var n_y = clicked_cells[y];
        for (yy=0;yy<(4*4);yy++){
          if(n_y==yy){clicked_cells_num.push(yy)}
        }
      }
      var flashedCells_num = [];
      for(y=0; y<trial.flashedCells.length; y++){
        var n_y = trial.flashedCells[y];
        for (yy=0;yy<(4*4);yy++){
          if(n_y==yy){flashedCells_num.push(yy)}
        }
      }

      for(ci=0; ci < flashedCells_num.length; ci++){
        var flashed_cell_i = flashedCells_num[ci]
        if(clicked_cells_num.includes(flashed_cell_i)){
          if(clicked_cells_num.indexOf(flashed_cell_i)==ci){cells_recalled_correctPosition.push(flashed_cell_i)}else{
            cells_recalled_incorrectPosition.push(flashed_cell_i)
          }
        }else{cells_missed.push(flashed_cell_i)}
      };
      for(ci=0; ci < clicked_cells_num.length; ci++){
        var clicked_cell_i = clicked_cells_num[ci];
        if(flashedCells_num.includes(clicked_cell_i)===false){cells_falseMemory.push(clicked_cell_i)}
      };
      console.log("Correct: "+cells_recalled_correctPosition+", FalseMem: "+cells_falseMemory+", IncorPos: "+
        cells_recalled_incorrectPosition+", Cells_missed: "+cells_missed+"")
       // gather the data to store for the trial

      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "clicked_cells": clicked_cells,
        "flashed_cells": flashedCells_num,
        "Cells_RecCorPos": cells_recalled_correctPosition,
        "Cells_RecIncorPos": cells_recalled_incorrectPosition,
        "Cells_missed": cells_missed,
        "Cells_FalseMem": cells_falseMemory
      };

      // clear the display
      display_element.html('');

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };
    
    

    // start timing
    start_time = Date.now();

    // hide image if timing is set
    if (trial.timing_stim > 0) {
      var t1 = setTimeout(function() {
        $('#jspsych-button-response-stimulus').css('visibility', 'hidden');
      }, trial.timing_stim);
      setTimeoutHandlers.push(t1);
    }

    // end trial if time limit is set
    if (trial.timing_response > 0) {
      var t2 = setTimeout(function() {
        end_trial();
      }, trial.timing_response);
      setTimeoutHandlers.push(t2);
    }

  };

  return plugin;
})();
