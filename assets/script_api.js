// geoCoding API: (get city or town name from latlng co-ordinates)
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=
// AIzaSyBrNLhoIcFa9qPY_bPWF-qVPVF9qRS3dc8

// get latlong from js method.(geolocation method): 
GeolocationCoordinates

function fetchPlaceName() {
    // fetch from geoCode API
    // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    // return plaecname
    // add to element
}


// airvisual api: (air quality in nearest city)
// http://api.airvisual.com/v2/nearest_city?lat={{LATITUDE}}&lon={{LONGITUDE}}&key=
// 3e4ec6e7-66fd-4056-9d5b-874e8d797d7c

// get latlong from js method.(geolocation method)
GeolocationCoordinates

function fetchAirData() {
    // fetch from airvisual API
    // return air data
    // add to element

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://api.airvisual.com/v2/nearest_city?lat=35.98&lon=140.33&key={{YOUR_API_KEY}}", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}




