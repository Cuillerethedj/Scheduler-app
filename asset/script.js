// global html recall varibles:
var currentDayHtml = $("#currentDay"); //HTML Var
var timeBlock  = $('.time-block') // Save Button
var saveBtn = $('.saveBtn');

currentDayHtml = currentDayHtml.text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function checkTime()
{

        timeBlock.each(function()
	{
               var timeID = parseInt(($(this)).attr('id')); //grabs the time-block ID
	       var hour = moment().format('H');  //gets the current hour(number)
	       var textarea = $(this).children('.description');   // grabbing  the texarea div (to be able manipulate)

		if(timeID == hour)
		{
			textarea.addClass('present');

		}
		else if(timeID < hour)
		{
			textarea.addClass('past');
		}
		else
		{
                        textarea.addClass('future');
		}
        })
}

saveBtn.click(function (event)
{
	var div = $(event.target);
	var timeID = parseInt(div.parent().attr('id'));
	var textdisplay = div.siblings('.description').val();
	
	localStorage.setItem(timeID, textdisplay);
})

function CheckTodo()
{
	timeBlock.each(function ()
	{
		var timeID = parseInt(($(this)).attr('id'));
		var textD = $(this).children('.description');

		if(localStorage.getItem(timeID) === null)
		{
			return;
		}

		else
		{
			textD.val(localStorage.getItem(timeID));
		}

	})
}
checkTime();
CheckTodo();





















// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// *need to use moment.js to add the calender

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

//   *this is complete added in html

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// * we will you a if statement (moment)

// WHEN I click into a timeblock
// THEN I can enter an event

// using the dom add a event handler (save)

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// add a localStorage 

// WHEN I refresh the page
// THEN the saved events persist
// ```

















