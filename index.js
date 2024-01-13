function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")

    // The Fetch API is a modern JavaScript API for making network requests, primarily designed to replace older APIs like XMLHttpRequest. 
    // It provides a more flexible and powerful interface for fetching resources from the network.
    // The Fetch API is provided as a high-level function, and in its most basic version, it takes a URL and produces a promise that resolves to the response: fetch("http://example.com/api/endpoint") . then((response) => { // Do something with response }) .

        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                    // It denotes the greater number of cases it will be more deep red.
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,  // If false then we cannot drag our marker
                    color: color
                }).setLngLat([longitude, latitude])
                // Here we have to write longitude first and latitude at last.
                .addTo(map); 
            });
        })
}

let interval = 20000;  // It will update data from every 20 sec. 
// Here set interval is used to run a function at a specific interval of time.
setInterval( updateMap, interval);  // here updateMap is used to take data at different endpoints of data.json and used to populate the marker.