document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map-container').setView([37.8, -96], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // City Data
    const cities = [
        {name: "Miami, FL", lat: 25.7617, lon: -80.1918, info: "<br>Miami is rapidly becoming a key player in the tech industry, particularly known for its roles in digital media, finance technology, and international trade. <br><br> With a significant Latin American influence, the city offers unique opportunities for bilingual IT professionals looking to engage in cross-border digital initiatives. <br><br> The city also hosts vibrant tech startups and annual tech events that draw global attention."},
        {name: "San Francisco, CA", lat: 37.7749, lon: -122.4194, info: "<br>Home to Silicon Valley, San Francisco offers vast opportunities in tech innovation, software development, and startup culture. <br><br> Opportunities abound in areas from software engineering to biotech. <br><br> San Francisco also offers a dynamic lifestyle and robust networking opportunities that are unparalleled in the tech world."},
        {name: "New York City, NY", lat: 40.7128, lon: -74.0060, info: "<br>NYC's tech sector is booming with roles in fintech, media, and entertainment tech. The city's fast-paced lifestyle is perfect for driven IT professionals. <br><br> NYC also offers extensive career development resources through numerous bootcamps, meetups, and universities dedicated to tech education."},
        {name: "Seattle, WA", lat: 47.6062, lon: -122.3321, info: "<br>Known for its tech giants like Amazon and Microsoft, Seattle is ideal for IT graduates looking to engage in cloud computing, AI, and ecommerce. <br><br> The city fosters a culture of innovation, supported by a highly skilled workforce and cutting-edge research at local universities."},
        {name: "Austin, TX", lat: 30.2672, lon: -97.7431, info: "<br>Austin's tech scene is rapidly growing with a focus on hardware and software development. It's also known for its friendly culture and innovation in tech startups. <br><br> The city also hosts SXSW, an annual set of film, interactive media, and music festivals and conferences that include significant tech industry participation."}
    ];

    // Markers for each city
    cities.forEach(city => {
        var marker = L.marker([city.lat, city.lon]).addTo(map);
        marker.bindPopup(`<b>${city.name}</b>`);
        marker.on('click', function() {
            document.getElementById('city-info').innerHTML = `<h2>${city.name}</h2><p>${city.info}</p>`;
        });
    });
});
