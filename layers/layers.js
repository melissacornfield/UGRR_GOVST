var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.654000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UGRRMappingProjectDataSetSheet1_1 = new ol.format.GeoJSON();
var features_UGRRMappingProjectDataSetSheet1_1 = format_UGRRMappingProjectDataSetSheet1_1.readFeatures(json_UGRRMappingProjectDataSetSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGRRMappingProjectDataSetSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UGRRMappingProjectDataSetSheet1_1.addFeatures(features_UGRRMappingProjectDataSetSheet1_1);
var lyr_UGRRMappingProjectDataSetSheet1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UGRRMappingProjectDataSetSheet1_1, 
                style: style_UGRRMappingProjectDataSetSheet1_1,
                popuplayertitle: "UGRR Mapping Project Data Set(Sheet1)",
                interactive: true,
                title: '<img src="styles/legend/UGRRMappingProjectDataSetSheet1_1.png" /> UGRR Mapping Project Data Set(Sheet1)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_UGRRMappingProjectDataSetSheet1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UGRRMappingProjectDataSetSheet1_1];
lyr_UGRRMappingProjectDataSetSheet1_1.set('fieldAliases', {'Title': 'Title', 'Name(s) related to site': 'Name(s) related to site', 'freedom seeker name related to site': 'freedom seeker name related to site', 'short description': 'short description', 'More information': 'More information', 'type (stationary)': 'type (stationary)', 'Routes': 'Routes', 'Town/ City': 'Town/ City', 'present day county': 'present day county', 'state': 'state', 'date of settlement in Illinois': 'date of settlement in Illinois', 'Time Active': 'Time Active', 'Date Range of Travel Through Illinois': 'Date Range of Travel Through Illinois', 'source type': 'source type', 'Reliability': 'Reliability', 'Lat': 'Lat', 'Long': 'Long', 'geoAddress': 'geoAddress', 'Nearest Current Address': 'Nearest Current Address', 'Access': 'Access', 'entered by': 'entered by', 'entry date': 'entry date', 'link to data entry template': 'link to data entry template', 'Start Date': 'Start Date', 'End Date': 'End Date', });
lyr_UGRRMappingProjectDataSetSheet1_1.set('fieldImages', {'Title': 'TextEdit', 'Name(s) related to site': 'TextEdit', 'freedom seeker name related to site': 'TextEdit', 'short description': 'TextEdit', 'More information': 'TextEdit', 'type (stationary)': 'TextEdit', 'Routes': 'TextEdit', 'Town/ City': 'TextEdit', 'present day county': 'TextEdit', 'state': 'TextEdit', 'date of settlement in Illinois': 'Range', 'Time Active': 'TextEdit', 'Date Range of Travel Through Illinois': 'TextEdit', 'source type': 'TextEdit', 'Reliability': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'geoAddress': 'TextEdit', 'Nearest Current Address': 'TextEdit', 'Access': 'TextEdit', 'entered by': 'TextEdit', 'entry date': 'TextEdit', 'link to data entry template': 'TextEdit', 'Start Date': '', 'End Date': '', });
lyr_UGRRMappingProjectDataSetSheet1_1.set('fieldLabels', {'Title': 'inline label - visible with data', 'Name(s) related to site': 'inline label - visible with data', 'freedom seeker name related to site': 'inline label - visible with data', 'short description': 'inline label - visible with data', 'More information': 'hidden field', 'type (stationary)': 'inline label - visible with data', 'Routes': 'hidden field', 'Town/ City': 'inline label - visible with data', 'present day county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'date of settlement in Illinois': 'inline label - visible with data', 'Time Active': 'inline label - visible with data', 'Date Range of Travel Through Illinois': 'hidden field', 'source type': 'hidden field', 'Reliability': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'geoAddress': 'hidden field', 'Nearest Current Address': 'hidden field', 'Access': 'hidden field', 'entered by': 'hidden field', 'entry date': 'hidden field', 'link to data entry template': 'hidden field', 'Start Date': 'no label', 'End Date': 'no label', });
lyr_UGRRMappingProjectDataSetSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});