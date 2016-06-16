    /*    Access Maps
        //    by knaaptime
        //
        */

//MAP 1

    var map1 = L.map('map1', {
        maxZoom: 18
    });


    var info = L.control();

    info.onAdd = function (map1) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h4>Total Jobs Accessible</h4>' + (props ?
            '<b> All Jobs : ' + props.all_jobs + '</b><br />' + 'Low-Skill : ' + props.low_skill + '<br />' + 'Mid-Skill : ' + props.mid_skill + '<br />' + 'High-Skill : ' + props.high_skill : 'Hover over a tract');
    };

    info.addTo(map1);


  function getColor(d) {
        return d > 40000 ? '#800026' :
            d > 20000 ? '#BD0026' :
            d > 10000 ? '#E31A1C' :
            d > 5000 ? '#FC4E2A' :
            d > 2500 ? '#FD8D3C' :
            d > 1500 ? '#FEB24C' :
            '#FFEDA0' ;
    };





  function access_style(feature) {
        return {
            fillColor: getColor(feature.properties.low_skill),
            weight: 0,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.5
        };
    };

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: 'yellow',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);

    }


    var access;    

    function resetHighlight(e) {
        access.resetStyle(e.target);
        info.update();

    };

    function zoomToFeature(e) {
        map1.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }






    access = new L.geoJson(null, {
        style: access_style,
        onEachFeature: onEachFeature,
        opacity: 0.8,
        fillOpacity: 0.6,
        weight: 1,
        attribution: "HUD"
    });

omnivore.topojson('/data/access-ms.json', null, access).addTo(map1);





    // basemap variables


    var CartoDB_Positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });

    var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });


    map1.setView(new L.LatLng(39.3, -76.6), 12);
    map1.addLayer(CartoDB_Positron);
    map1.addLayer(access);



    //container variable for basemaps     
    var baseMaps = {
        "Positron": CartoDB_Positron,
        "Dark Matter": CartoDB_DarkMatter
    };

    //container variable for overlays
    var overlayMaps = {
        "Access to Jobs": access

    };


    //create layer switcher
    L.control.layers(baseMaps, overlayMaps).addTo(map1);

  // add geocoder
    new L.Control.GeoSearch({
        provider: new L.GeoSearch.Provider.Google()
    }).addTo(map1);



var legend = L.control({position: 'bottomright'});


legend.onAdd = function (map1) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 2500, 5000, 10000, 20000, 40000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map1);


L.marker([39.3041275, -76.6441591]).addTo(map1)
    .bindPopup('Sandtown-Winchester')
    .openPopup();


    