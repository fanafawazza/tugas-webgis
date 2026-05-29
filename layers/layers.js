var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_pasuruandissolve2_1 = new ol.format.GeoJSON();
var features_pasuruandissolve2_1 = format_pasuruandissolve2_1.readFeatures(json_pasuruandissolve2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasuruandissolve2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasuruandissolve2_1.addFeatures(features_pasuruandissolve2_1);
var lyr_pasuruandissolve2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasuruandissolve2_1, 
                style: style_pasuruandissolve2_1,
                popuplayertitle: 'pasuruan dissolve 2',
                interactive: true,
    title: 'pasuruan dissolve 2<br />\
    <img src="styles/legend/pasuruandissolve2_1_0.png" /> 0-400m<br />\
    <img src="styles/legend/pasuruandissolve2_1_1.png" /> 400-1000m<br />\
    <img src="styles/legend/pasuruandissolve2_1_2.png" /> 1000-1800m<br />\
    <img src="styles/legend/pasuruandissolve2_1_3.png" /> 1800-2400m<br />\
    <img src="styles/legend/pasuruandissolve2_1_4.png" /> 2400-3248m<br />' });
var format_Contours_2 = new ol.format.GeoJSON();
var features_Contours_2 = format_Contours_2.readFeatures(json_Contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_2.addFeatures(features_Contours_2);
var lyr_Contours_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_2, 
                style: style_Contours_2,
                popuplayertitle: 'Contours',
                interactive: true,
                title: '<img src="styles/legend/Contours_2.png" /> Contours'
            });
var format_pasuruankontur_3 = new ol.format.GeoJSON();
var features_pasuruankontur_3 = format_pasuruankontur_3.readFeatures(json_pasuruankontur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasuruankontur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasuruankontur_3.addFeatures(features_pasuruankontur_3);
var lyr_pasuruankontur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasuruankontur_3, 
                style: style_pasuruankontur_3,
                popuplayertitle: 'pasuruan kontur',
                interactive: false,
                title: '<img src="styles/legend/pasuruankontur_3.png" /> pasuruan kontur'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_pasuruandissolve2_1.setVisible(true);lyr_Contours_2.setVisible(false);lyr_pasuruankontur_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_pasuruandissolve2_1,lyr_Contours_2,lyr_pasuruankontur_3];
lyr_pasuruandissolve2_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Ketinggian': 'Ketinggian', });
lyr_Contours_2.set('fieldAliases', {});
lyr_pasuruankontur_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_pasuruandissolve2_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Ketinggian': 'TextEdit', });
lyr_Contours_2.set('fieldImages', {});
lyr_pasuruankontur_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_pasuruandissolve2_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Ketinggian': 'inline label - visible with data', });
lyr_Contours_2.set('fieldLabels', {});
lyr_pasuruankontur_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_pasuruankontur_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});