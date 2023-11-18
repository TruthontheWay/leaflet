let map1 = L.map('map').setView([29.562047, -82.276517], 8.39);

L.tileLayer('https://api.mapbox.com/styles/v1/truthontheway/clp3a34eu00tr01qd2w3de6ch/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1dGhvbnRoZXdheSIsImEiOiJjbHAzOXk5ZGQwdTB5MmtzNG9sNTZ6ZjFtIn0.mJxfzTjX_b0fymPxNatkIQ', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);

areas.forEach(place => {
    L.marker([place.lat, place.long])
        .bindPopup('<h3>' + place.place + '</h3>' + '<p>' + place.descrip + '</p>')
        .addTo(map1);
});

let map2 = L.map('map2').setView([29.638434,-82.354695], 13.88);

L.tileLayer('https://api.mapbox.com/styles/v1/truthontheway/clp3a34eu00tr01qd2w3de6ch/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1dGhvbnRoZXdheSIsImEiOiJjbHAzOXk5ZGQwdTB5MmtzNG9sNTZ6ZjFtIn0.mJxfzTjX_b0fymPxNatkIQ', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

places.forEach(place => {
    L.marker([place.lat, place.long])
        .bindPopup('<h3>' + place.place + '</h3>' + '<p>' + place.crimeType +' '+ place.date + '</p>')
        .addTo(map2);
});


