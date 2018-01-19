<!DOCTYPE html>
<html>
	<head>
		<title>test</title>
		<meta charset="UTF-8">
		<script type="text/javascript" src="tinymce/js/tinymce/tinymce.min.js?t=<?php echo time(); ?>"></script>
		<script type="text/javascript" src="tinymce-emotion.plugin.js"></script>
		<script type="text/javascript" src="tinymce-media.plugin.js"></script>
		<script type="text/javascript" src="tinymce-charactercount.plugin.js"></script>
		<script type="text/javascript" src="tinymce-spoil.plugin.js"></script>
		<script type="text/javascript" src="lastest_jquery.js"></script>
	</head>
	<body>
		<form >
			<textarea id="txtTinyMCE"></textarea>
			<div id="character_count"></div>
		</form>
	</body>
</html>

<script>

	$(document).ready(function () {
		$(document).on('focusin', function (e) {
			if ($(e.target).closest('.mce-window').length) {
				e.stopImmediatePropagation();
			}
		});

		$(window).on("beforeunload", function () {
			return "Are you sure? You didn't finish the form!";
		});

		$(document).ready(function () {
			$("#myForm").on("submit", function (e) {
				//check form to make sure it is kosher
				//remove the ev
				$(window).off("beforeunload");
				return true;
			});
		});

		tinymce.init({
			//language: 'th_TH',
			theme: 'modern',
			object_resizing: false,
			selector: '#txtTinyMCE',
			height: 500,
			menubar: false,
			force_br_newlines: true,
			force_p_newlines: false,
			allow_script_urls: true,
			forced_root_block: '', // Needed for 3.x
			content_css: "css/custom_spoil.css",
			init_instance_callback: function (editor) {
				editor.on('click', function (e) {
					//console.log('Element clicked:', e.target);
				});
				//$('.mce-tinymce').show();
				//$(editor.getContainer()).find(".mce-path").css("display", "none");
			},
			extended_valid_elements: "spoil,",
			custom_elements: "spoil",
			plugins: [
				'spoil media_custom emotion  image imagetools code hr spoil',
			],
			toolbar1: ' media_custom emotion | bold italic underline strikethrough | alignleft aligncenter alignright | link hr superscript subscript | spoil code',
		});


	});

</script>