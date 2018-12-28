/**
 * jspsych-button-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["button-response-act"] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    // default trial parameters
    trial.button_html = trial.button_html || '<button class="jspsych-btn">%choice%</button>';
    trial.response_ends_trial = (typeof trial.response_ends_trial === 'undefined') ? true : trial.response_ends_trial;
    trial.timing_stim = trial.timing_stim || -1; // if -1, then show indefinitely
    trial.timing_response = trial.timing_response || -1; // if -1, then wait for response forever
    trial.prompt = (typeof trial.prompt === 'undefined') ? "" : trial.prompt;
    trial.prompt2 = (typeof trial.prompt2 === 'undefined') ? "" : trial.prompt2;
    trial.is_html = (typeof trial.is_html === 'undefined') ? false : trial.is_html;
    trial.showEndButton = (typeof trial.showEndButton === 'undefined') ? false : trial.showEndButton;
    //trial.presentedItems = (typeof trial.presentedItems === 'undefined') ? false : trial.presentedItems;
    
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


    // display already clicked letters
    var alreadyClicked = "<p style='color:green; font-size:30; margin:50px' id='alreadyClicked'>"+'<b>'+(iter_i+1)+". Assoziation</b>"+"<span style=font-size:18>"+": Zur Eingabe klicke die Buchstaben-Buttons... </p>"
    display_element.append(alreadyClicked);

    //show prompt if there is one
    if (trial.prompt !== "") {
      display_element.append(trial.prompt);
    }

    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.letters1.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.letters1.length; i++) {
        buttons.push(trial.button_html);
      }
    }
    var buttons_2ndRow = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.letters2.length) {
        buttons_2ndRow = trial.button_html;
      } else {
        console.error('Error in button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.letters2.length; i++) {
        buttons_2ndRow.push(trial.button_html);
      }
    }
    //display buttons row 1
    display_element.append('<div id="jspsych-button-response-btngroup" class="center-content block-center"></div>')
    for (var i = 0; i < trial.letters1.length; i++) {
     
        var str = buttons[i].replace(/%choice%/g, trial.letters1[i]);
        $('#jspsych-button-response-btngroup').append(
        $(str).attr('id', 'jspsych-button-response-button-' + i).data('choice', i).addClass('jspsych-button-response-button').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            var row = 1;
            after_response(choice,row);
            //this.disabled = true
            //this.style.borderColor = "#A9A9A9"
          })
        );
    }
    //display buttons row 2
    display_element.append('<div id="jspsych-button-response-btngroup2" class="center-content block-center"></div>')
    for (var i = 0; i < trial.letters2.length; i++) {
     
        var str = buttons[i].replace(/%choice%/g, trial.letters2[i]);
        $('#jspsych-button-response-btngroup2').append(
        $(str).attr('id', 'jspsych-button-response-button-' + i).data('choice', i).addClass('jspsych-button-response-button').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            var row = 2;
            after_response(choice,row);
            //this.disabled = true
            //this.style.borderColor = "#A9A9A9"
          })
        );
    }
    //display buttons row 3
    display_element.append('<div id="jspsych-button-response-btngroup3" class="center-content block-center"></div>')
    for (var i = 0; i < trial.letters3.length; i++) {
     
        var str = buttons[i].replace(/%choice%/g, trial.letters3[i]);
        $('#jspsych-button-response-btngroup3').append(
        $(str).attr('id', 'jspsych-button-response-button-' + i).data('choice', i).addClass('jspsych-button-response-button').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            var row = 3;
            after_response(choice,row);
            //this.disabled = true
            //this.style.borderColor = "#A9A9A9"
          })
        );
    }
    
    
    
    //display doneButton
    var buttonsClicked = [];

    if (trial.showEndButton) {
      if(iter_i<(nAsso_per_stim-1)){var doneButton = "<button id='doneButton' class='jspsych-btn-weiter' style=margin:50px>Weiter zur "+(iter_i+2)+". Assoziation</div>"}else{
        var doneButton = "<button id='doneButton' class='jspsych-btn-weiter' style=margin:50px>Assoziationskette beenden</div>"
      }
      display_element.append(doneButton);
    }
    $("#doneButton").on('click', function(e) {
          if(buttonsClicked.length>0){end_trial();}
    })
    

    //show 2nd prompt if there is one
    if (trial.prompt2 !== "") {
      display_element.append(trial.prompt2);
    }
    
    // store response
    var response = {
      rt: -1,
      button: -1
    };

    // function to display already clicked buttons
    function showClickedLetters (buttonsClicked){document.getElementById('alreadyClicked').innerHTML='<span style = font-size:18>'+(iter_i+1)+'. Assoziation: </span>'+'<b style=font-size:30>'+buttonsClicked.join("")};
    
    
    
    // start time
    var start_time = 0;
    
    var k = 0;
    
    // function to handle responses by the subject
    function after_response(choice,row) {
      
      k += 1;
      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      response.button = choice;
      response.rt = rt;
      
      if(row==1){
        if(trial.letters1[choice]=="L\xf6schen"){buttonsClicked.pop()}else{buttonsClicked.push(trial.letters1[choice])}
        showClickedLetters(buttonsClicked);
        $("#jspsych-button-response-stimulus").addClass('responded');
      }
      if(row==2){
        buttonsClicked.push(trial.letters2[choice])
        showClickedLetters(buttonsClicked);
        $("#jspsych-button-response-stimulus").addClass('responded');
      }
      if(row==3){
        buttonsClicked.push(trial.letters3[choice])
        showClickedLetters(buttonsClicked);
        $("#jspsych-button-response-stimulus").addClass('responded');
      }


      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      

      
    };

    // function to end trial when it is time
      function end_trial() {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
      
      
      
      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "button_pressed": response.button,
        "choicesAvailable": trial.letters1,
        "clickedLetters": buttonsClicked.join(""),
        
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
