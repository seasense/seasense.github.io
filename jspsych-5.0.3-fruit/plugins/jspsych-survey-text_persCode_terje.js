/**
 * jspsych-survey-text
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-text-persCode'] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {
    scrollWin();
    trial.preamble = typeof trial.preamble == 'undefined' ? "" : trial.preamble;
    if (typeof trial.rows == 'undefined') {
      trial.rows = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.rows.push(1);
      }
    }
    if (typeof trial.columns == 'undefined') {
      trial.columns = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.columns.push(6);
      }
    }

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);


    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-text-' + i,
        "class": 'jspsych-survey-text-question'
      }));

      // add question text
      $("#jspsych-survey-text-" + i).append('<b class="jspsych-survey-text">' + trial.questions[i] + ' </b>');
      

      // add text box
      $("#jspsych-survey-text-" + i).append('<textarea cols="8" rows="1" style="font-size:20px;" name="#jspsych-survey-text-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
    }

 // show preamble text
    display_element.append($('<div>', {
      "id": 'jspsych-survey-text-preamble',
      "class": 'jspsych-survey-text-preamble'
    }));

    $('#jspsych-survey-text-preamble').html(trial.preamble);
    
    // add submit button
    
      display_element.append($('<button>', {
      'id': 'jspsych-survey-text-next',
      'class': 'jspsych-btn jspsych-survey-text'
      }));
      $("#jspsych-survey-text-next").html('Edasi');
      $("#jspsych-survey-text-next").click(function() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var code_length = []; 
      $("div.jspsych-survey-text-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).children('textarea').val();
        code_length.push(val.length);
        var obje = {};
        obje[id] = val;
        $.extend(question_data, obje);
        
      });

      // save data
      var trialdata = {
        "code_length": code_length,
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.html('');

      // next trial
      
      jsPsych.finishTrial(trialdata);
      
    });
    
    

    

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();