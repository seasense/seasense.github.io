/**
 * jspsych-button-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["button-response-pseiti"] = (function() {

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
    trial.presentedItems = (typeof trial.presentedItems === 'undefined') ? false : trial.presentedItems;
    
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
    //display buttons
    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }
    display_element.append('<div id="jspsych-button-response-btngroup" class="center-content block-center"></div>')
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      $('#jspsych-button-response-btngroup').append(
        $(str).attr('id', 'jspsych-button-response-button-' + i).data('choice', i).addClass('jspsych-button-response-button').on('click', function(e) {
          var choice = $('#' + this.id).data('choice');
          after_response(choice);
          this.disabled = true
          this.style.borderColor = "#A9A9A9"
        })
      );
    }
      
    //show prompt if there is one
    if (trial.prompt !== "") {
      display_element.append(trial.prompt);
    }
    //show prompt if there is one
    if (trial.prompt2 !== "") {
      display_element.append(trial.prompt2);
    }
    
    // display already clicked letters
    var alreadyClicked = "<p id='alreadyClicked'>Bereits ausgew&#xE4hlte Buchstaben: </p>" /*Already clicked letters:*/
    display_element.append(alreadyClicked);
    
    //display doneButton
    if (trial.showEndButton) {
      var doneButton = "<button id='doneButton' class='jspsych-btn'>Weiter</button></div>" /*Submit recalled letters*/
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

    // function to display already clicked buttons
    function showClickedLetters (buttonsClicked){document.getElementById('alreadyClicked').innerHTML='Bereits ausgew&#xE4hlte Buchstaben: <b>'+buttonsClicked.join(", ")};
    
    var buttonsClicked = [];
    
    var numberLettersCorrect = 0;
    var numberLettersIncorrect = 0;
    var correctLetters = [];
    var incorrectLetters = [];

    // start time
    var start_time = 0;
    
    var k = 0;
    
    // function to handle responses by the subject
    function after_response(choice) {
      
      k += 1;
      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      response.button = choice;
      response.rt = rt;
      
      buttonsClicked.push(trial.choices[choice])
      showClickedLetters(buttonsClicked);
      
      if(k>trial.presentedItems.length){
        numberLettersIncorrect += 1
        incorrectLetters.push(trial.choices[choice])
      }else{
        if(trial.choices[choice]==trial.presentedItems[(k-1)]){
          numberLettersCorrect += 1
          correctLetters.push(trial.choices[choice])
        }else{
          numberLettersIncorrect += 1
          incorrectLetters.push(trial.choices[choice])
        }
      }

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      $("#jspsych-button-response-stimulus").addClass('responded');

      
    };

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
      
      //var accuracy = Math.round((numberLettersCorrect/(numberLettersCorrect+numberLettersIncorrect))*100)
      var nPresented = trial.presentedItems.length
      if(k<nPresented){
        var nMissing = (trial.presentedItems.length)-k
        numberLettersIncorrect += nMissing
        for(var j = 0; j < nMissing; j++){
          var tobepushed = nPresented-j
          incorrectLetters.push(trial.presentedItems[tobepushed-1])
        }
      }
      var accuracy = numberLettersCorrect/(numberLettersCorrect+numberLettersIncorrect)
      
      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "button_pressed": response.button,
        "choicesAvailable": trial.choices,
        "clickedLetters": buttonsClicked,
        "presentedItems": trial.presentedItems,
        "numberLettersCorrect": numberLettersCorrect,
        "numberLettersIncorrect": numberLettersIncorrect,
        "correctLetters": correctLetters,
        "incorrectLetters": incorrectLetters,
        "accuracy": accuracy
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
