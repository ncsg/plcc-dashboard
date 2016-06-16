    /*    Access Maps
        //    by knaaptime
        //
        */

//MAP 1

    var subarea_map = L.map('subarea_map', {
        maxZoom: 18
    });


    var info = L.control();

    info.onAdd = function (subarea_map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h4>Corridor Subarea</h4>' + (props ?
            '<b> Name : </b>' + props.Subarea : '');
    };

    info.addTo(subarea_map);


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
            fillColor: 'blue',
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
        subarea_map.fitBounds(e.target.getBounds());
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

    
   // omnivore.topojson('/data/geo/subareas.json', null, access).addTo(subarea_map);
 var access = new L.GeoJSON.AJAX('/data/geo/subareas.json').addTo(subarea_map);




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


    subarea_map.setView(new L.LatLng(38.98, -76.98), 12);
    subarea_map.addLayer(CartoDB_Positron);
    subarea_map.addLayer(access);



    //container variable for basemaps     
    var baseMaps = {
        "Positron": CartoDB_Positron,
        "Dark Matter": CartoDB_DarkMatter
    };

    //container variable for overlays
    var overlayMaps = {
        "Subareas": access

    };


    //create layer switcher
    L.control.layers(baseMaps, overlayMaps).addTo(subarea_map);


    