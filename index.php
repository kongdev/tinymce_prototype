<!DOCTYPE html>
<html>
	<head>
		<title>test</title>
		<script type="text/javascript" src="tinymce/js/tinymce/tinymce.min.js?t=<?php echo time(); ?>"></script>
		<script type="text/javascript" src="tinymce-emotion.plugin.js"></script>

		<script type="text/javascript" src="tinymce-charactercount.plugin.js"></script>

		<script type="text/javascript" src="lastest_jquery.js"></script>
	</head>
	<body>
		<form >
			<textarea id="txtTinyMCE" >ccc</textarea>
			<div id="character_count"></div>
		</form>
	</body>
</html>

<script>
	tinymce.PluginManager.add('myplugin', function (editor) {
		editor.addSidebar('mysidebar', {
			tooltip: 'My sidebar',
			icon: 'settings',
			onrender: function (api) {
				console.log('Render panel', api.element());
			},
			onshow: function (api) {
				console.log('Show panel', api.element());
				api.element().innerHTML = 'Hello world!';
			},
			onhide: function (api) {
				console.log('Hide panel', api.element());
			}
		});
	});
	$(document).ready(function () {
		$(document).on('focusin', function (e) {
			if ($(e.target).closest('.mce-window').length) {
				e.stopImmediatePropagation();
			}
		});

		tinymce.init({
			theme: 'modern',
			object_resizing : false,
			selector: '#txtTinyMCE',
			height: 500,
			menubar: false,
			forced_root_block: '',
//			remove_script_host: false,
//			convert_urls: true,

//			invalid_elements : 'strong',
//			media_live_embeds: true,
//			media_poster: false,
//			mediaembed_max_width: 350,
//			invalid_styles: 'color font-size',
//			document_base_url: 'http://kong-dev.v2.igetweb.com',
			init_instance_callback: function (editor) {
				console.log("Editor: " + editor.id + " is now initialized.");
				$('.mce-tinymce').show('fast');
				$(editor.getContainer()).find(".mce-path").css("display", "none");
			},

			plugins: [
				'myplugin emotion charactercount advlist autolink lists image charmap print preview anchor textcolor',
				'searchreplace visualblocks code',
				'insertdatetime image imagetools media contextmenu paste code help link'
			],
			toolbar1: '| emotion | image media | bold italic underline strikethrough | link superscript subscript | alignleft aligncenter alignright | help code ',
		});

	});

</script>