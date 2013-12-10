function showTab(id) {    
    //contacts page
    if (id == 'contactList') {
        document.getElementById('contactList').style.display = 'inline';
        document.getElementById('addContact').style.display = 'none';
    }
    if (id == 'addContact') {
        document.getElementById('contactList').style.display = 'none';
        document.getElementById('addContact').style.display = 'inline';
    }
    
    // timetable page
    if (id == 'addTimeTable') {
        document.getElementById('addTimeTable').style.display = 'inline';
        document.getElementById('myTimetable').style.display = 'none';
    }
    if (id == 'myTimetable') {
        document.getElementById('addTimeTable').style.display = 'none';
        document.getElementById('myTimeTable').style.display = 'inline';
    }
}
