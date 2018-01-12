tinymce.PluginManager.add('media_custom', function (editor) {
	var _self = this;
	var res;
	var render;
	var media_width = '640';
	var media_height = '360';
	var media_class = 'm';
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
						var link = 'https://www.youtube.com/watch?v='+res[1];
						var src = 'https://img.youtube.com/vi/'+res[1]+'/0.jpg';
		
						render = '<span class="youtube-thumbnail neo '+media_class+'"><a class="video_id" title="click"  target="_blank" data-video-id="'+res[1]+'" href="'+link+'" ><img class="video_preview" width="' +media_width+ '" height="'+media_height+'" alt="click" src="'+src+'"><span class="play_btn"></span></a></span>';
						top.tinymce.activeEditor.insertContent(render);
					}
					
					if(res  = e.data.url.match(/^(\s+)?http(?:s)?:\/\/vimeo\.com\/(\d+)/i)){
						
						console.log('vimeo',res);
						render = '<iframe src="https://player.vimeo.com/video/' +res[2]+ '?wmode=opaque&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="'  +media_width+'" height="' +media_height+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
						top.tinymce.activeEditor.insertContent(render);
						
					}
					
					
					
				}
			});
			
		}
	});
	
});