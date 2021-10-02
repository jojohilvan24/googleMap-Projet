


function initMap(){
      let mylocation= {lat: 41.883100, lng: -87.634350};   //variable to set marker location

      let map = new google.maps.Map(document.getElementById('map'), {  
          center: mylocation,
          zoom: 2,
          mapId: "f13cb0fcf7cfdb03"
      });   

      const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
      "features of the Uluru - Kata Tjuta National Park. Uluru is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>" +
      "</div>";

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

   

      //market object
      //marker of your coordinates OR location called "myLocationEastRemo"
      let marker = new google.maps.Marker( {
            position: mylocation,   
            map: map,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

};





// function initMap(){
//    let myLocationEastRemo = {lat: 41.883100, lng: -87.634350};
//   const locationswe = [
//     { lat: 41.883100, lng: -87.634350 },
//     { lat: 41.885880, lng: -87.628330 },
//     { lat: 42.045250, lng: -88.045490 },
//     { lat: 41.889191, lng: -87.630989 },
//     { lat: 41.879990, lng: -87.639076 },
//     { lat: 41.849150, lng: -87.930230 },
//     { lat: 41.894910, lng: -87.621400 },
//     { lat: 41.884740, lng: -87.624140 },
//     { lat: 41.888290, lng: -87.635240 },
//     { lat: 41.916860, lng: -87.657240 },
// ];

//   let map = new google.maps.Map( document.getElementById("map"), {
//       center:  { lat: 41.883100, lng: -87.634350 },
//       zoom: 10,
//       mapId: 'f13cb0fcf7cfdb03'
//   });

// const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //marker of your address OR set location
//   var iconBase = 'D:/practice2'

//   let marker = new google.maps.Marker({
//       position:   { lat: 41.883100, lng: -87.634350 },
//       map: map,
//       icon: iconBase + './3330.png'
//   });

// }

//create the function called initMap, althoug we can use different name, just make sure its the same in the source attribute in HTML.
//create an object for your location or also called location Marker.
//create the new google.maps.Map() object.
//get the map selector container.
//the "center" property of the map object tell where to center the map when the page loads.
//the "zoom" property specify the zoom level of the map.
    //zoom = 0 is the lowest zoom and display the earth or globe.


//create the google marker() function to for your location marked
// add to parameter and its value
    //   let marker = new google.maps.Marker({     //marker constructor
    // position: myLocationEastRemo,       //marker position
    // map: map                            //google map marker



// // /*With Marker Cluster*/

//     function initMap() {
//       const map = new google.maps.Map(document.getElementById("map"), {
//         center:  { lat: 41.883100, lng: -87.634350 },
//         zoom: 13,
//         mapId: "f13cb0fcf7cfdb03"
//       });

//       // Create an array of alphabetical characters used to label the markers.
//       // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//       // Add some markers to the map.
//       // Note: The code uses the JavaScript Array.prototype.map() method to
//       // create an array of markers based on a given "locations" array.
//       // The map() method here has nothing to do with the Google Maps API.


//       var iconBase = 'D:/practice2'
//       const markers = locations.map((location, i) => {
//         return new google.maps.Marker({
//           position: location,
//           // label: labels[i % labels.length],
//           //  icon: 'https://maps.gstatic.com/mapfiles/transparent.png'
//           icon: iconBase + './3330.png'

//         });
//       });

//  //     Add a marker clusterer to manage the markers.
//       new MarkerClusterer(map, markers, {
//         imagePath:
//         "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",  //image path

//       });

//     }
//     const locations = [
//       { lat: 41.883100, lng: -87.634350 },
//       { lat: 41.885880, lng: -87.628330 },
//       { lat: 42.045250, lng: -88.045490 },
//       { lat: 41.889191, lng: -87.630989 },
//       { lat: 41.879990, lng: -87.639076 },
//       { lat: 41.849150, lng: -87.930230 },
//       { lat: 41.894910, lng: -87.621400 },
//       { lat: 41.884740, lng: -87.624140 },
//       { lat: 41.888290, lng: -87.635240 },
//       { lat: 41.916860, lng: -87.657240 },
//       { lat: -37.759859, lng: 145.128708 },
//       { lat: -37.765015, lng: 145.133858 },
//       { lat: -37.770104, lng: 145.143299 },

//     ];




































//This example requires the Places library. Include the libraries=places
//parameter when you first load the API. For example:
//<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -33.866, lng: 151.196 },
//     zoom: 15,
//   });
//   const request = {
//     placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
//     fields: ["name", "formatted_address", "place_id", "geometry"],
//   };
//   const infowindow = new google.maps.InfoWindow();
//   const service = new google.maps.places.PlacesService(map);
//   service.getDetails(request, (place, status) => {
//     if (
//       status === google.maps.places.PlacesServiceStatus.OK &&
//       place &&
//       place.geometry &&
//       place.geometry.location
//     ) {
//       const marker = new google.maps.Marker({
//         map,
//         position: place.geometry.location,
//       });
//       google.maps.event.addListener(marker, "click", () => {
//         const content = document.createElement("div");
//         const nameElement = document.createElement("h2");
//         nameElement.textContent = place.name;
//         content.appendChild(nameElement);
//         const placeIdElement = document.createElement("p");
//         placeIdElement.textContent = place.place_id;
//         content.appendChild(placeIdElement);
//         const placeAddressElement = document.createElement("p");
//         placeAddressElement.textContent = place.formatted_address;
//         content.appendChild(placeAddressElement);
//         infowindow.setContent(content);
//         infowindow.open(map, marker);
//       });
//     }
//   });
// }