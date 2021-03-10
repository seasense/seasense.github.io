/* jspsych-text.js
 * Josh de Leeuw
 *
 * This plugin displays text (including HTML formatted strings) during the experiment.
 * Use it to show instructions, provide performance feedback, etc...
 *
 * documentation: docs.jspsych.org
 *
 *
 */

jsPsych.plugins.text = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {
    scrollWin();
    trial.cont_key = trial.cont_key || [];
    
    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // set the HTML of the display target to replaced_text.
    display_element.html(trial.text); //
    

    var nav_html = "<div class='jspsych-instructions-nav'>";
    nav_html += "<button id='jspsych-instructions-next' class='jspsych-btn'>Edasi</button></div>" /*Edasi*/
    display_element.append(nav_html);
    $('#jspsych-instructions-next').on('click', function() {
          clear_button_handlers();
          next();
    });
    function clear_button_handlers() {
      $('#jspsych-instructions-next').off('click');
      $('#jspsych-instructions-back').off('click');
    }
    function next(){
      endTrial();
    }
    function endTrial() {

      // kill any remaining setTimeout handlers
      

      // gather the data to store for the trial
      var trial_data = {
        "rt": "NA",
      };

      // clear the display
      display_element.html('');

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };
    var after_response = function(info) {

      display_element.html(''); // clear the display
      

      var trialdata = {
        "rt": info.rt,
        "key_press": info.key
      }

      jsPsych.finishTrial(trialdata);

    };

    var mouse_listener = function(e) {

      var rt = (new Date()).getTime() - start_time;

      display_element.unbind('click', mouse_listener);

      after_response({
        key: 'mouse',
        rt: rt
      });

    };

    // check if key is 'mouse'
    if (trial.cont_key == 'mouse') {
      display_element.click(mouse_listener);
      var start_time = (new Date()).getTime();
    } else {
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.cont_key,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }

  };

  return plugin;
})();
