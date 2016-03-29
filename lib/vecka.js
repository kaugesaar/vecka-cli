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
  dateRangeForWeek: function(week) {
    var d = new Date(new Date().getFullYear(),0,1);
    week = (d.getDay() <= 4) ? week - 1 : week;
    d.setDate(d.getDate()+4-(d.getDay()||7));
    var thu = new Date(d.getTime() + (((week * 8.64e7) + 1) * 7));
    return [new Date(thu.getTime() - 2.592e8), new Date(thu.getTime() + 2.592e8)];
  }

};

Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};
