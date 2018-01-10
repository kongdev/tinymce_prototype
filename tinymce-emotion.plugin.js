tinymce.PluginManager.add('emotion', function (editor, url) {
	editor.addButton('emotion', {
		title: 'Pantip Toy',
		image: 'https://www.vinted.cz/assets/emoticons/smile.gif',
		onclick: function () {
			editor.windowManager.open({
				title: 'Pantip Toy',
				file: 'toy/tab1.php',
				resizable : "yes",
				width: 700,
				height: 600,
				
			});
			
		}
	});
});