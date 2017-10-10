'use strict';

module.exports = exports = {

  date: new Date(),

  /**
   * Set date.
   *
   * @param  {Date} date
   * @return {void}
   */
  setDate: function(date) {
    this.date = date;
  },

  /**
   * Get week number.
   *
   * @return {Number}
   */
  week: function () {
    var d = this.date;
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
  },

  /**
   * Get date range for a week.
   *
   * @param  {Number} week a week for current year
   * @return {Array} [start,end]
   */
  dateRangeForWeek: function(w) {
    var simple = new Date(new Date().getFullYear(), 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var wStart = simple;
    if (dow <= 4) {
        wStart.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
        wStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    
    return [wStart, new Date(wStart.getTime() + 60480000];
    }

};

Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};
