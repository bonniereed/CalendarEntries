var rootEl = $("#root");
var dayDisplayEl = $("#currentDay");
var containerEl = $("#container");
//Form elements
var calendarTable = $("#calendar-table");
var inputElEight = $("#eight-input");
var inputElNine = $("#nine-input");
var inputElTen = $("#ten-input");
var inputElEleven = $("#eleven-input");
var inputElTwelve = $("#twelve-input");
var inputElOne = $("#one-input");
var inputElTwo = $("#two-input");
var inputElThree = $("#three-input");
var inputElFour = $("#four-input");
var inputElFive = $("#five-input");
var calendarInput = $(".calendarInput");
var timeEntry = $(".timeEntry");

window.onload = function () {
  // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
  if (sessionStorage.getItem(inputElEight) == inputElEight) {
    return;
  }

  // If values are not blank, restore them to the fields
  var name = sessionStorage.getItem(inputElEight);
  if (name !== null) inputElEight.val(inputElEight);
};

function displayTime() {
  Date.prototype.getUTCDay();
}
x;
projectFormEl.on("submit", handleProjectFormSubmit);
projectDisplayEl.on("click", ".delete-project-btn", handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
