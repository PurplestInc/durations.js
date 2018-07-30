/**
 * @fileoverview duration.js - animated durations library
 * @author Rob Dukarski <rob@purplest.com> (https://github.com/RobDukarski)
 * @copyright Purplest, Inc. 2018
 * @version 1.0.5
 */

/**
 * Animates a duration change among two dates based on the current time.
 * 
 * @param {String} selector - Element(s) to add the duration message
 * @param {Object} start - Object of start date, before text, after text, text
 *                         to display if before the start date, and a callback
 *                         function to execute when animated duration starts
 * @param {Object} end - Object of end date, before text, after text, text to
 *                       display when past the end date, and a callback function
 *                       to execute when the end date has been passed
 * @param {Boolean} stop - Whether duration should stop or not, if not then it
 *                         will continue counting without ever displaying the
 *                         end text
 */

const durations = (selector, start, end, stop) => {
  let duration = document.querySelectorAll(selector);
  let elementCount = duration.length;
  let elementIterator = 0;
  let options = {
    end: {
      afterText: (end.afterText !== undefined) ? end.afterText : '',
      beforeText: (end.beforeText !== undefined) ? end.beforeText : '',
      callback: (end.callback !== undefined && typeof end.callback === 'function') ? end.callback : undefined,
      date: (end.date !== undefined) ? end.date : 'Dec 31, 9999 12:00:00 (EST)',
      text: (end.text !== undefined) ? end.text : 'Event has passed.'
    },
    start: {
      afterText: (start.afterText !== undefined) ? start.afterText : '',
      beforeText: (start.beforeText !== undefined) ? start.beforeText : '',
      callback: (start.callback !== undefined && typeof start.callback === 'function') ? start.callback : undefined,
      date: (start.date !== undefined) ? start.date : 'July 30, 2018 12:00:00 (EST)',
      text: (start.text !== undefined) ? start.text : 'Coming Soon!'
    },
    stop: (stop !== undefined && typeof stop === 'boolean') ? stop : true
  };


  if (duration) {
    let endDate = new Date(options.end.date).getTime();
    let hasEndCallbackBeenExecuted = false;
    let hasStartCallbackBeenExecuted = false;
    let startDate = new Date(options.start.date).getTime();
    let timer = setInterval((timer) => {
      let now = new Date().getTime();
      let distance = endDate - now;
      let days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
      let hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      let minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
      let timeText = ['days', 'hours', 'minutes', 'seconds'];

      if (days === 1) {
        timeText[0] = 'day';
      }

      if (hours === 1) {
        timeText[1] = 'hour';
      }

      if (minutes === 1) {
        timeText[2] = 'minute';
      }

      if (seconds === 1) {
        timeText[3] = 'second';
      }

      if (now > startDate && !hasStartCallbackBeenExecuted) {
        if (options.start.callback !== undefined) {
          hasStartCallbackBeenExecuted = true;
          options.start.callback();
        }
      }

      if (now > endDate && !hasEndCallbackBeenExecuted) {
        if (options.end.callback !== undefined) {
          hasEndCallbackBeenExecuted = true;
          options.end.callback();
        }
      }

      for (let i = 0; i < elementCount; i++) {
        if (now < startDate) {
          duration[i].innerText = options.start.text;
        } else if (distance > 0) {
          duration[i].innerText = options.start.beforeText + days + ' ' + timeText[0] + ', ' + hours + ' ' + timeText[1] + ', ' + minutes + ' ' + timeText[2] + ', and ' + seconds + ' ' + timeText[3] + options.start.afterText;
        } else if (distance <= 0 && !stop) {
          duration[i].innerText = options.end.beforeText + days + ' ' + timeText[0] + ', ' + hours + ' ' + timeText[1] + ', ' + minutes + ' ' + timeText[2] + ', and ' + seconds + ' ' + timeText[3] + options.end.afterText;
        } else {
          duration[i].innerText = options.end.text;
        }

        elementIterator++;

        if (elementIterator === elementCount) {
          if (distance < 0 && stop) {
            clearInterval(timer);
          }
        }
      }
    }, 1000);
  } else {
    console.log('No selector or DOM element was found.');
  }
};