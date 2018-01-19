tinymce.PluginManager.add('spoil', function (editor) {
	var _self = this;
	var render;
	var _showDialog = function () {
		//console.log(top.tinymce.activeEditor);
		console.log(top.tinymce.activeEditor.selection.getContent());
		var win = editor.windowManager.open({
			title: 'Text',
			body: {
				type: 'textbox',
				name: 'spoil',
				multiline: true,
				minWidth: editor.getParam("code_dialog_width", 600),
				minHeight: editor.getParam("code_dialog_height", Math.min(tinyMCE.DOM.getViewPort().h - 200, 500)),
			},
			onsubmit: function (e) {
				
				render = '<spoil>'+e.data.spoil+'</spoil><br>';
				top.tinymce.activeEditor.insertContent(render);
			}
		});
	}


	editor.addButton('spoil', {
		title: 'Pantip Spoil',
		text: 'Spoil',
		icon: false,
		onclick : _showDialog,
//		onclick: function(){
//			render = '<spoil> text </spoil><br>';
//			top.tinymce.activeEditor.insertContent(render);
//		},
	});
});
