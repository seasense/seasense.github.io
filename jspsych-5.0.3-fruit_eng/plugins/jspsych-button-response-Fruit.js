/**
 * jspsych-button-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["BRFruit"] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    // default trial parameters
    trial.button_html = trial.button_html || '<button class="jspsych-btn">%choice%</button>';
    trial.response_ends_trial = (typeof trial.response_ends_trial === 'undefined') ? true : trial.response_ends_trial;
    trial.timing_stim = trial.timing_stim || -1; // if -1, then show indefinitely
    trial.timing_response = trial.timing_response || -1; // if -1, then wait for response forever
    trial.prompt = (typeof trial.prompt === 'undefined') ? "" : trial.prompt;
    trial.is_html = (typeof trial.is_html === 'undefined') ? false : trial.is_html;

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];
    

    if (trial.prompt !== "") {
      display_element.append(trial.prompt);
    }
    
    duration = (new Date()-startTime)
    timeLeft = (time_limit-duration)/1000
    timeLeft = Math.round(timeLeft)
    if(timeLeft<0){timeLeft="Timeout: this is the last stimulus you need to complete."}else{
      timeLeft = timeLeft+" seconds left"
    }
    
    if(practice==false){
      display_element.append(timeLeft);
    }
    // display stimulus
    if (!trial.is_html) {
      display_element.append($('<img>', {
        src: trial.stimulus,
        id: 'jspsych-button-response-stimulus',
        class: 'shape'
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
    
    // randomizing order of color buttons
    
    // button_pressed from i-1 must not be ith button_correct
    var correct_button_switched = false;
    while(correct_button_switched==false){
      for(var x=0; x<4; x++){
          if(x==0){
              unsampled_indices = [0,1,2,3]
              sampled_indices = []
              button_order = []
            }
            sampled_position = Math.floor(Math.random()*unsampled_indices.length);
            sampled_index = unsampled_indices[sampled_position]
            button_order.push(["yellow","green","red","blue"][sampled_index])
            sampled_indices.push(sampled_index)
            unsampled_indices.splice(sampled_position,1) 
          }
      
      var color_correct = ["yellow","green","red","blue"][i_color];
      var button_correct = button_order.indexOf(color_correct) 
      if(button_correct!=button_pressed){correct_button_switched=true}
    }
    console.log([button_pressed,button_correct])

    for (var i = 0; i < trial.choices.length; i++) {
      

      if(sampled_indices[i]==0){
        var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
          $('#jspsych-button-response-btngroup').append(
          $(str).attr('id', 'jspsych-button-response-Page1B1-' + i).data('choice', i).addClass('jspsych-button-response-Page1B1').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            after_response(choice);
          })
        );
      }
      if(sampled_indices[i]==1){
        var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
          $('#jspsych-button-response-btngroup').append(
          $(str).attr('id', 'jspsych-button-response-Page1B2-' + i).data('choice', i).addClass('jspsych-button-response-Page1B2').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            after_response(choice);
          })
        );
      }
      if(sampled_indices[i]==2){
        var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
          $('#jspsych-button-response-btngroup').append(
          $(str).attr('id', 'jspsych-button-response-Page1B3-' + i).data('choice', i).addClass('jspsych-button-response-Page1B3').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            after_response(choice);
          })
        );
      }
      if(sampled_indices[i]==3){
        var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
          $('#jspsych-button-response-btngroup').append(
          $(str).attr('id', 'jspsych-button-response-Page1B4-' + i).data('choice', i).addClass('jspsych-button-response-Page1B4').on('click', function(e) {
            var choice = $('#' + this.id).data('choice');
            after_response(choice);
          })
        );
      }
      
    }

    

    // store response
    var response = {
      rt: -1,
      button: -1
      //labelsDisplayed:
    };

    // start time
    var start_time = 0;

    // function to handle responses by the subject
    function after_response(choice) {

      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      response.button = choice;
      response.rt = rt;

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      $("#jspsych-button-response-stimulus").addClass('responded');

      // disable all the buttons after a response
      $('.jspsych-button-response-button').off('click').attr('disabled', 'disabled');

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      var color_correct = ["yellow","green","red","blue"][i_color];
      var button_correct = button_order.indexOf(color_correct)
      var color_clicked = button_order[response.button]
      if(color_correct==color_clicked){
        right_or_wrong="right"
      }else{
        right_or_wrong="wrong"
      }
      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "button_order": button_order,
        "button_pressed": response.button,
        "button_correct": button_correct,
        "color_correct": color_correct,
        "color_clicked": color_clicked,
        "right_or_wrong": right_or_wrong,
        "choicesAvailable": trial.choices
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
