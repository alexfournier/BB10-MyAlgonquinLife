var campusServices=[];
var serviceId;

/***********************
      JSON LOADING
***********************/

function fetch(){
    $.getJSON("campusServices.json", function(data) {
        
        campusServices = data.services;
        listItems=[]
        var item;

        for(i=0;i<campusServices.length;i++){
            item=document.createElement('div');
            item.setAttribute('data-bb-type', 'item');
            item.setAttribute('data-bb-title', campusServices[i].locationName );
            item.setAttribute('onclick', 'showServiceDetails(' + i +')');
            item.setAttribute('style', 'margin-left:-110px;');
            listItems.push(item);
        }
        document.getElementById("imageList").refresh(listItems);
    });
}

function showServiceDetails(id){
    serviceId = id;
    bb.pushScreen('serviceDetails.html', 'serviceDetails');    
}

function populatServiceDetails(){
    listItems=[];
    var item;

    for(i=0;i<campusServices[serviceId].locations.length;i++){
        document.getElementById("servicesDetailsTitle").setCaption(campusServices[serviceId].locationName); 
        
        item=document.createElement('div');
        item.setAttribute('data-bb-type', 'item');
        item.setAttribute('data-bb-title', campusServices[serviceId].locations[i].locationName );
        item.innerHTML = campusServices[serviceId].locations[i].building;
        item.setAttribute('style', 'color: #fff; margin-left:-100px;');
        listItems.push(item);
    }
    document.getElementById("imageListDetails").refresh(listItems);
}