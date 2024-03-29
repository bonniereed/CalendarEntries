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
var calDisplay = $("#calendar-display");
var timeEntry = $("#time-display");
var save = $(".saveBtn");

//this time function creates a date and time variable to add the time entry as a text item on the HTML page.
function displayTime() {
  var date = new Date();
  var timeString = date.toLocaleTimeString();
  console.log(timeString);
  return timeEntry.text(timeString);
}

//Upon reload this function will display the time, and pull any saved data from local storage
$(document).ready(function () {
  displayTime();

  var eightData = localStorage.getItem("eight-input");
  console.log(eightData);
  inputElEight.val(eightData);

  var nineData = localStorage.getItem("nine-input");
  console.log(eightData);
  inputElNine.val(nineData);

  var tenData = localStorage.getItem("ten-input");
  console.log(tenData);
  inputElTen.val(tenData);

  var elevenData = localStorage.getItem("eleven-input");
  console.log(elevenData);
  inputElEleven.val(elevenData);

  var twelveData = localStorage.getItem("twelve-input");
  console.log(twelveData);
  inputElTwelve.val(twelveData);

  var oneData = localStorage.getItem("one-input");
  console.log(oneData);
  inputElOne.val(oneData);

  var twoData = localStorage.getItem("two-input");
  console.log(twoData);
  inputElTwo.val(twoData);

  var threeData = localStorage.getItem("three-input");
  console.log(threeData);
  inputElThree.val(threeData);

  var fourData = localStorage.getItem("four-input");
  console.log(fourData);
  inputElFour.val(fourData);

  var fiveData = localStorage.getItem("five-input");
  console.log(fiveData);
  inputElFive.val(fiveData);
});
//This function will save any input from the table and verify which save button was used to enter the time slot and the value within the input
function saveSubmit(event) {
  event.preventDefault();
  // localStorage.setItem(calDisplay.children
  var sibs = $(this).siblings().val();
  var inputId = $(this).siblings().attr("id");
  console.log(inputId);
  console.log(sibs);
  localStorage.setItem(inputId, sibs);
}
//event listener for the save buttons
save.on("click", saveSubmit);
