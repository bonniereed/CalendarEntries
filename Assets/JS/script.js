var rootEl = $("#root");
var dayDisplayEl = $("#currentDay");
var containerEl = $("#container");
var formData = new FormData();
var calendarInput = $(".calendarInput");
var timeEntry = $(".timeEntry");

function displayTime() {
  Date.prototype.getDay();
  dayDisplayEl.text(rightNow);
}

var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  calendarInput = $('input[name="calendar-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!calendarInput) {
    console.log("No shopping item filled out in form!");
    return;
  }

  // print to the page
  timeEntry.append("<li>" + calendarInput + "</li>");

  // clear the form input element
  $('input[name="calendar-input"]').val("");
}

// Create a submit event listener on the form element
timeEntry.on("submit", handleFormSubmit);

// var twelveTimeEntry = containerEl.append(formEl);
// var oneTimeEntry = twelveTimeEntry.append(formEl);
// var twoTimeEntry = containerEl.append(formEl);
// var threeTimeEntry = containerEl.append(formEl);
// var fourTimeEntry = containerEl.append(formEl);
// var fiveTimeEntry = containerEl.append(formEl);
// var sixTimeEntry = containerEl.append(formEl);
// var sevenTimeEntry = containerEl.append(formEl);
// var eightTimeEntry = containerEl.append(formEl);
// var nineTimeEntry = containerEl.append(formEl);
// var tenTimeEntry = containerEl.append(formEl);
// var elevenTimeEntry = containerEl.append(formEl);
// var twelvePTimeEntry = containerEl.append(formEl);
// var onePTimeEntry = containerEl.append(formEl);
// var twoPTimeEntry = containerEl.append(formEl);
// var threePTimeEntry = containerEl.append(formEl);
// var fourPTimeEntry = containerEl.append(formEl);
// var fivePTimeEntry = containerEl.append(formEl);
// var sixPTimeEntry = containerEl.append(formEl);
// var sevenPTimeEntry = containerEl.append(formEl);
// var eightPTimeEntry = containerEl.append(formEl);
// var ninePTimeEntry = containerEl.append(formEl);
// var tenPTimeEntry = containerEl.append(formEl);
// var elevenPTimeEntry = containerEl.append(formEl);

// twelveTimeEntry.first().text("12 AM");
// oneTimeEntry.first().text("1 AM");
// twoTimeEntry.first().text("2 AM");
// threeTimeEntry.first().text("3 AM");
// fourTimeEntry.first().text("4 AM");
// fiveTimeEntry.first().text("5 AM");
// sixTimeEntry.first().text("6 AM");
// sevenTimeEntry.first().text("7 AM");
// eightTimeEntry.first().text("8 AM");
// nineTimeEntry.first().text("9 AM");
// tenTimeEntry.first().text("10 AM");
// elevenTimeEntry.first().text("11 AM");
