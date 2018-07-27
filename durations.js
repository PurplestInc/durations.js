/**
 * @fileoverview duration.js duration timer library
 * @author Rob Dukarski <rob@purplest.com> (https://github.com/RobDukarski)
 * @copyright Purplest, Inc. 2018
 * @version 1.0.1
 */

/**
 * Animates a duration change among two dates based on the current time.
 * 
 * @param {String} selector - Element(s) to add the duration message
 * @param {Object} start - Object of start date, before text, after text, and
 *                         text to display if before the start date
 * @param {Object} end - Object of end date, before text, after text, and text
 *                       to display when past the end date
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
      afterText: end.afterText || '',
      beforeText: end.beforeText || '',
      date: end.date || 'Dec 31, 9999 12:00:00',
      text: end.text || 'Event has passed.'
    },
    start: {
      afterText: start.afterText || '',
      beforeText: start.beforeText || '',
      date: start.date || 'July 27, 2018 12:00:00',
      text: start.text || 'Coming Soon!'
    },
    stop: stop || true
  };


  if (duration) {
    let date = new Date(options.start.date).getTime();
    let timer = setInterval((timer) => {
      let now = new Date().getTime();
      let	distance = date - now;
      let	days = Math.floor(distance / (1000 * 60 * 60 * 24));			
      let	hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let	minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let	seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let	timeText = ['days', 'hours', 'minutes', 'seconds'];

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

      for (let i = 0; i < elementCount; i++) {
        if (now < date) {
          duration[i].innerText = options.start.text;
        } else if (distance > 0) {
          duration[i].innerText = options.start.beforeText + days + ' ' + timeText[0] + ', ' + hours + ' ' + timeText[1] + ', ' + minutes + ' ' + timeText[2] + ', and ' + seconds + ' ' + timeText[3] + options.start.afterText;
        } else if (distance < 0 && !stop) {
          duration[i].innerText = options.start.beforeText + days + ' ' + timeText[0] + ', ' + hours + ' ' + timeText[1] + ', ' + minutes + ' ' + timeText[2] + ', and ' + seconds + ' ' + timeText[3] + options.start.afterText;
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
  }
};