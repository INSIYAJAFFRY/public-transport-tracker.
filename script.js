let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.6139, lng: 77.209 }, // Example: Delhi
    zoom: 12,
  });
}

function showRoute() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  directionsService.route(
    {
      origin: source,
      destination: destination,
      travelMode: google.maps.TravelMode.TRANSIT,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        alert("Could not get directions: " + status);
      }
    }
  );
}

window.onload = initMap;
