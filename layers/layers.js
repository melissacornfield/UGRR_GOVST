var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.654000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1830s_1 = new ol.format.GeoJSON();
var features_1830s_1 = format_1830s_1.readFeatures(json_1830s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1830s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1830s_1.addFeatures(features_1830s_1);
var lyr_1830s_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1830s_1, 
                style: style_1830s_1,
                popuplayertitle: "1830s",
                interactive: true,
                title: '<img src="styles/legend/1830s_1.png" /> 1830s'
            });
var format_1840s_2 = new ol.format.GeoJSON();
var features_1840s_2 = format_1840s_2.readFeatures(json_1840s_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1840s_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1840s_2.addFeatures(features_1840s_2);
var lyr_1840s_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1840s_2, 
                style: style_1840s_2,
                popuplayertitle: "1840s",
                interactive: true,
                title: '<img src="styles/legend/1840s_2.png" /> 1840s'
            });
var format_1850s_3 = new ol.format.GeoJSON();
var features_1850s_3 = format_1850s_3.readFeatures(json_1850s_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1850s_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1850s_3.addFeatures(features_1850s_3);
var lyr_1850s_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1850s_3, 
                style: style_1850s_3,
                popuplayertitle: "1850s",
                interactive: true,
                title: '<img src="styles/legend/1850s_3.png" /> 1850s'
            });
var format_1860s_4 = new ol.format.GeoJSON();
var features_1860s_4 = format_1860s_4.readFeatures(json_1860s_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1860s_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1860s_4.addFeatures(features_1860s_4);
var lyr_1860s_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1860s_4, 
                style: style_1860s_4,
                popuplayertitle: "1860s",
                interactive: true,
                title: '<img src="styles/legend/1860s_4.png" /> 1860s'
            });
var format_All_5 = new ol.format.GeoJSON();
var features_All_5 = format_All_5.readFeatures(json_All_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_5.addFeatures(features_All_5);
var lyr_All_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_5, 
                style: style_All_5,
                popuplayertitle: "All",
                interactive: true,
                title: '<img src="styles/legend/All_5.png" /> All'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1830s_1.setVisible(true);lyr_1840s_2.setVisible(true);lyr_1850s_3.setVisible(true);lyr_1860s_4.setVisible(true);lyr_All_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1830s_1,lyr_1840s_2,lyr_1850s_3,lyr_1860s_4,lyr_All_5];
lyr_1830s_1.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', 'Start Date': 'Start Date', 'End Date': 'End Date', });
lyr_1840s_2.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', 'Start Date': 'Start Date', 'End Date': 'End Date', });
lyr_1850s_3.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', 'Start Date': 'Start Date', 'End Date': 'End Date', });
lyr_1860s_4.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', 'Start Date': 'Start Date', 'End Date': 'End Date', });
lyr_All_5.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', 'Start Date': 'Start Date', 'End Date': 'End Date', });
lyr_1830s_1.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'Range', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', 'Start Date': 'TextEdit', 'End Date': 'TextEdit', });
lyr_1840s_2.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'Range', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', 'Start Date': 'TextEdit', 'End Date': 'TextEdit', });
lyr_1850s_3.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'Range', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', 'Start Date': 'TextEdit', 'End Date': 'TextEdit', });
lyr_1860s_4.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'Range', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', 'Start Date': 'TextEdit', 'End Date': 'TextEdit', });
lyr_All_5.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'Range', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', 'Start Date': '', 'End Date': '', });
lyr_1830s_1.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'inline label - visible with data', 'freedom seeker name related to site': 'inline label - visible with data', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'date of settlement in Illinois': 'inline label - visible with data', 'Time Active': 'inline label - visible with data', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'header label - always visible', 'Access': 'header label - visible with data', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', 'Start Date': 'inline label - always visible', 'End Date': 'no label', });
lyr_1840s_2.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'inline label - visible with data', 'freedom seeker name related to site': 'inline label - visible with data', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'date of settlement in Illinois': 'inline label - visible with data', 'Time Active': 'inline label - visible with data', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'hidden field', 'Access': 'hidden field', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', 'Start Date': 'no label', 'End Date': 'no label', });
lyr_1850s_3.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'inline label - visible with data', 'freedom seeker name related to site': 'inline label - visible with data', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'date of settlement in Illinois': 'inline label - visible with data', 'Time Active': 'inline label - visible with data', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'hidden field', 'Access': 'hidden field', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', 'Start Date': 'no label', 'End Date': 'no label', });
lyr_1860s_4.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'inline label - visible with data', 'freedom seeker name related to site': 'inline label - visible with data', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'date of settlement in Illinois': 'inline label - visible with data', 'Time Active': 'inline label - visible with data', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'hidden field', 'Access': 'hidden field', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', 'Start Date': 'no label', 'End Date': 'no label', });
lyr_All_5.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'inline label - visible with data', 'freedom seeker name related to site': 'inline label - visible with data', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'date of settlement in Illinois': 'inline label - visible with data', 'Time Active': 'inline label - visible with data', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'hidden field', 'Access': 'hidden field', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', 'Start Date': 'no label', 'End Date': 'no label', });
lyr_All_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});