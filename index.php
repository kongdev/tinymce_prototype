<!DOCTYPE html>
<html>
	<head>
		<title>test</title>



		<script type="text/javascript" src="tinymce/js/tinymce/tinymce.min.js"></script>
		<script type="text/javascript" src="lastest_jquery.js"></script>
	</head>
	<body>
		<div class="tinymce">
			<p>Have fun!</p>
		</div>

	</body>
</html>

<script>

	$(document).ready(function () {
		tinymce.init({
			selector: '.tinymce',
			height: 500,
			menubar: false,
			plugins: [
				'advlist autolink lists image charmap print preview anchor textcolor',
				'searchreplace visualblocks code',
				'insertdatetime media table contextmenu paste code help link media'
			],
			toolbar1: 'media |bold italic underline strikethrough | link superscript subscript | alignleft aligncenter alignright | help code ',
		});
	});


</script>