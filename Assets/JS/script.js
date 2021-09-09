var rootEl = $("#root");
var dayDisplayEl = $("#currentDay");
var containerEl = $("#container");
//Form elements
var formElOne = $("#one");
var formElTwo = $("#two");
var formElThree = $("#three");
var formElFour = $("#four");
var formElFive = $("#five");
var formElSix = $("#six");
var formElSeven = $("#seven");
var formElEight = $("#eight");
var formElNine = $("#nine");
var formElTen = $("#ten");
var formElEleven = $("#eleven");
var formElTwelve = $("#twelve");
var calendarInput = $(".calendarInput");
var timeEntry = $(".timeEntry");
//calendar list item elements
var calListEight = $("#calApptEight");
var calListNine = $("#calApptNine");
var calListTen = $("#calApptTen");
var calListEleven = $("#calApptEleven");
var calListTwelve = $("#calApptTwelve");
var calListOne = $("#calApptOne");
var calListTwo = $("#calApptTwo");
var calListThree = $("#calApptThree");
var calListFour = $("#calApptFour");
var calListFive = $("#calApptFive");
var calListSix = $("#calApptSix");
var calListSeven = $("#calApptSeven");

function displayTime() {
  Date.prototype.getDay();
  dayDisplayEl.text(rightNow);
}

var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var calendarAppt = $('input[name="calendar-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!calendarAppt) {
    console.log("No shopping item filled out in form!");
    return;
  }

  // print to the page
  calListEight.append("<li>" + calendarAppt + "</li>");
  $('input[name="calendar-input"]').val("");
  calListNine.append("<li>" + calendarInputNine + "</li>");
  $('input[name="calendar-input"]').val("");
  calListTen.append("<li>" + calendarInputTen + "</li>");
  $('input[name="calendar-input"]').val("");
  calListEleven.append("<li>" + calendarInputEleven + "</li>");
  $('input[name="calendar-input"]').val("");
  calListTwelve.append("<li>" + calendarInputTwelve + "</li>");
  $('input[name="calendar-input"]').val("");
  calListOne.append("<li>" + calendarInputOne + "</li>");
  $('input[name="calendar-input"]').val("");
  calListTwo.append("<li>" + calendarInputTwo + "</li>");
  $('input[name="calendar-input"]').val("");
  calListThree.append("<li>" + calendarInputThree + "</li>");
  $('input[name="calendar-input"]').val("");
  calListFour.append("<li>" + calendarInputFour + "</li>");
  $('input[name="calendar-input"]').val("");
  calListFive.append("<li>" + calendarInputFive + "</li>");
  $('input[name="calendar-input"]').val("");
  calListSix.append("<li>" + calendarInputSix + "</li>");
  $('input[name="calendar-input"]').val("");
  calListSeven.append("<li>" + calendarInputSeven + "</li>");
  $('input[name="calendar-input"]').val("");
}

// Create a submit event listener on the form element
formElEight.on("submit", handleFormSubmit);
formElNine.on("submit", handleFormSubmit);
formElTen.on("submit", handleFormSubmit);
formElEleven.on("submit", handleFormSubmit);
formElTwelve.on("submit", handleFormSubmit);
formElOne.on("submit", handleFormSubmit);
formElTwo.on("submit", handleFormSubmit);
formElThree.on("submit", handleFormSubmit);
formElFour.on("submit", handleFormSubmit);
formElFive.on("submit", handleFormSubmit);
formElSix.on("submit", handleFormSubmit);
formElSeven.on("submit", handleFormSubmit);

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
