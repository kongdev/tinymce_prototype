tinymce.PluginManager.add('charactercount', function (editor) {
	var _self = this;
	var _limit = 50;

	editor.on('init', function () {
		var statusbar = editor.theme.panel && editor.theme.panel.find('#statusbar')[0];

		if (statusbar) {
			statusbar.insert({
				type: 'label',
				name: 'charactercount',
				text: ['Characters: {0}/'+_limit, _self.getCount()],
				classes: 'charactercount',
				disabled: editor.settings.readonly
			}, 0);

			editor.on('KeyDown BeforeSetContent PastePreProcess PastePreProcess', function (e) {
				if (_self.getCount() > _limit && e.keyCode != 8) {
					//console.log('z');
					return tinymce.dom.Event.cancel(e);

				}
				editor.theme.panel.find('#charactercount').text(['Characters: {0}/'+_limit, _self.getCount()]);
			});

		}
	});
	
	_self.getCount = function () {

		return _self.getCharacters() + _self.getEmotions();
	}

	_self.getEmotions = function () {
		return 0;
		var tx = editor.getContent({format: 'raw'});
		var decoded = decodeHtml(tx);

	}

	_self.getCharacters = function () {

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