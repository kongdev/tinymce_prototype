<!DOCTYPE html>
<html>
	<head>
		<title>test</title>



		<script type="text/javascript" src="tinymce/js/tinymce/tinymce.min.js"></script>
		<script type="text/javascript" src="tinymce-charactercount.plugin.js"></script>
		<script type="text/javascript" src="lastest_jquery.js"></script>
	</head>
	<body>
		
		
		<textarea id="txtTinyMCE" ><p>Have fun!</p></textarea>
		<div id="character_count"></div>
	</body>
</html>

<script>

	$(document).ready(function () {
		tinymce.init({
			selector: '#txtTinyMCE',
			height: 500,
			menubar: false,
			init_instance_callback: function (editor) {
				$('.mce-tinymce').show('fast');
				$(editor.getContainer()).find(".mce-path").css("display", "none");
			},
			plugins: [
				
				'charactercount advlist autolink lists image charmap print preview anchor textcolor',
				'searchreplace visualblocks code',
				'insertdatetime media table contextmenu paste code help link media'
			],

			toolbar1: 'media |bold italic underline strikethrough | link superscript subscript | alignleft aligncenter alignright | help code ',
		});
	});
	
	function CountCharacters() {
        var body = tinymce.get("txtTinyMCE").getBody();
        var content = tinymce.trim(body.innerText || body.textContent);
        return content.length;
    };
    function ValidateCharacterLength() {
        var max = 20;
        var count = CountCharacters();
        if (count > max) {
            alert("Maximum " + max + " characters allowed.")
            return false;
        }
        return;
    }


</script>