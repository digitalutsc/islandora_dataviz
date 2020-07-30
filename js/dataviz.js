
jQuery(window).load(function(){

	var viewerDiv = jQuery(".islandora-binary-object-content").first();
	var object_pid = Drupal.settings.islandora_dataviz.pid;

	if (object_pid == "islandora:11") {
	        viewerDiv.empty().append('<div width="1120" height="900" id="viz"></div>');
		data = "https://raw.githubusercontent.com/digitalutsc/dragomans_visualizations/master/Network%20Diagram/viz1.json";
		showNetworkDiagram(data);
        } else if (object_pid == "islandora:12") {
        	viewerDiv.empty().append('<div height="700" id="kingship-diagram-1" width="800"></div>');
		data = "http://localhost:8000/sites/all/modules/islandora_dataviz/js/kinship1.js";
		showKinshipDiagram(data);
        }


});
