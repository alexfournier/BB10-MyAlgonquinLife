// CALENDER VARs:
var courseName;
var classNumber;
var weekDay;
var time;
var eventLength;
var labChoice;
var reminderLength;
var reminderChoice;
var endTime;
var date;
var events = [];

/***********************
        CALENDER
***********************/

    function onSaveSuccessCal(created) {
        // set evt to the object returned in save success callback, which
        // contains the persisted event id
        evt = created.id;
        alert("Event saved to device: " + evt);
    }

    function onSaveErrorCal(error) {
        alert("Error saving event to device: " + error.code);
    }

    function saveEvent() {
        
        date = new Date();

        courseName = document.getElementById("courseName").value;
        classNumber = document.getElementById("classNumber").value;
        
        eventLength = document.getElementById("eventLength").value;
        reminderLength = document.getElementById("reminderLength").value;
        
        reminderChoice = document.getElementById("reminderChoice").setChecked(true);
        labChoice = document.getElementById("labChoice").setChecked(true);

        weekDay = document.getElementById("weekDay").value;
        time = document.getElementById("time").value;
        endTime = new Date(time);
        endTime.setMinutes(eventLength);
    
        if(courseName.length != 0){
            
            var calendar = blackberry.pim.calendar; CalendarEvent = calendar.CalendarEvent, CalendarRepeatRule = calendar.CalendarRepeatRule, 
            calFields = {},

            courseName = {
                type: CalendarEvent.description,
                value: courseName
            },
            classNumber = {
                type: CalendarEvent.description,
                value: classNumber
            },
            weekDay = {
                type: CalendarEvent.description,
                value: weekDay
            },
            time = {
                type: CalendarEvent.description,
                value: time
            },
            eventLength = {
                type: CalendarEvent.description,
                value: eventLength
            },
            labChoice = {
                type: CalendarEvent.description,
                value: labChoice
            },
            reminderLength = {
                type: CalendarEvent.description,
                value: reminderLength
            },
            reminderChoice = {
                type: CalendarEvent.description,
                value: reminderChoice
            },
            rule = {
               "frequency": CalendarRepeatRule.FREQUENCY_WEEKLY,
               "expires": new Date("Dec 31, 2013")
            },
            evt;

            evt = calendar.createEvent({
                
                "summary": courseName,
                "location": classNumber,
                //"recurrence": rule, ** crashes
                "start": new Date("Dec 16, 2013, 12:00"),
                "end": new Date("Dec 16, 2013, 12:30"),
             });
             evt.save(onSaveSuccessCal, onSaveErrorCal);
        }else{
            alert("error: Please enter the course name");
        }
    }
