
//Initiate the Map Function
//Initiate the Map Function
function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,       //the bigger the number the zoomer
        center: { lat: 41.883100, lng: -87.634350},  // Chicago Illinio. 
        mapId: "f13cb0fcf7cfdb03",      // map style ID
      });

      setMarkers(map);   //marker function invoked

}


//array of location coordinates
// Data for the markers consisting of a name, a LatLng and a zIndex for the order in which these markers should display on top of each other.
// though we can removed the index #, cause it has no use.
const beaches = [                  
      ["x ", 41.883100,  -87.634350, 12],
      ["e ", 41.885880, -87.628330, 13],
      ["r ", 42.045250, -88.045490, 11],
      ["f ", 41.889191, -87.630989, 10],
      ["s ", 41.879990, -87.639076, 9],
      ["d ", 41.849150, -87.930230, 8],
      ["t ", 41.894910, -87.621400, 7],
      ["s ", 41.884740, -87.624140, 6],
      ["y ", 41.888290, -87.635240, 5],
      ["Coogee ", 41.916860, -87.657240, 4],
      ["Manly ", 41.879990, -87.639076, 2],
      ["Maroubra ",  41.849150, -87.930230, 1]
];




function setMarkers(map) {
  
      const image = {           //image objected
              //icon location locally stored
            url: "D:/google map api/images/3330s.png", 
              
              //Marker Size(50, 75) is the "marker icon container size" w/c is not the exact size of the image icon. The image icon file size is 150px x 150px.
            size: new google.maps.Size(50, 75),        
            // size: new google.maps.Size(50, 75),        

              // The origin, is position of the image icon relative to the "marker icon container size" above, affects the viewport of the icons (x, y), if X is increase it will cut the icon width and same for Y
              // its like a frame tag with overflow.
            origin: new google.maps.Point(53, 20), 
            
              // The anchor, is the  "marker icon container size and icon" position relative to the map 
              //x & y (move the marker position 110-x left -110-x right) (110-y up -110-y down)       
            anchor: new google.maps.Point(110, 110),      

      };


      //info window HTML  
      const contentString =
          '<div class="content">' +
            '<a href="http://www.google.com" class="siteheader">PBK EXPRESS DOWNERS GROVE</a>' +
            '<a href="http://www.google.com" class="siteaddress">2589 Ogden Ave Downers Grove, IL 60515</a>' +
            '<a href="http://www.google.com" class="siteaddressbtn">LOCATION DETAILS</a>'
          "</div>"
      ;

      //info window object
      const infowindow = new google.maps.InfoWindow({
          content: contentString
      });


      for (let i = 0; i < beaches.length; i++) {      //loops the beaches array values
          
          const beach = beaches[i];

          let markerIcon =   new google.maps.Marker({
              position: { lat: beach[1], lng: beach[2] }, //position property has 2 values, 1st is coordinates and 2nd is map object.
              map,
              icon: image,
              title: beach[0],  //display index 0 of Location Name
              zIndex: beach[3],  //located index number , i still dont know what is the use though
          });

          //markerIcon or marker event handler to display infowindow when click
          //this should be inside for loop, because its part of the 
          markerIcon.addListener("click", () => {
                infowindow.open({        //opens the window within each coordinates
                  anchor: markerIcon,      
                  map,
                  shouldFocus: false,  // for heuristic purpose 
                });
          });
      }


}



