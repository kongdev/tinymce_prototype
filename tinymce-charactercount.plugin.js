tinymce.PluginManager.add('charactercount', function (editor) {
	var _self = this;
	var _limit = 10

	editor.on('init', function () {
		var statusbar = editor.theme.panel && editor.theme.panel.find('#statusbar')[0];

		if (statusbar) {
			statusbar.insert({
				type: 'label',
				name: 'charactercount',
			
				disabled: editor.settings.readonly
			}, 0);

			editor.on('setcontent keyup keydown', function (e) {
				if(_self.getCount() >= _limit && e.keyCode != 8){
					
					tinymce.dom.Event.cancel(e);
					
				}
				editor.theme.panel.find('#charactercount').text(['Characters: {0}/5000', _self.getCount()]);
			});

		}
	});

	_self.getCount = function () {
//		return editor.getContent().length;
//		var tx = editor.getContent({format: 'raw'});
		var tx = editor.getContent({format: 'text'});
		var decoded = decodeHtml(tx);
		var decodedStripped = decoded.replace(/(<([^>]+)>)/ig, '');
		var tc = decodedStripped.length;
		return tc;
	};

	function decodeHtml(html) {
		var txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	}
});