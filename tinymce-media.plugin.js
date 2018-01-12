tinymce.PluginManager.add('media_custom', function (editor) {
	var _self = this;
	var res;
	editor.addButton('media_custom', {
		title: 'Pantip Media',
		image: 'https://nhsbtdbe.blob.core.windows.net/umbraco-assets-careers-dev/1036/youtube-icon.gif',
		onclick: function () {
			editor.windowManager.open({
				title: 'Insert Media',
				body: {type: 'textbox', name: 'url', label: 'URL'},
				onsubmit: function (e) {
					
					if (res  = e.data.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*v=)|(?:youtu\.be\/))([-|~_0-9A-Za-z]{11})/i)) {
						console.log('youtube',res);
						
					}
					
					if(res  = e.data.url.match(/^(\s+)?http(?:s)?:\/\/vimeo\.com\/(\d+)/i)){
						console.log('vimeo',res);
					}
					//alert(e.data.url);
				}
			});
			
		}
	});
	
});