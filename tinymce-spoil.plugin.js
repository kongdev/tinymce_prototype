tinymce.PluginManager.add('spoil', function (editor) {
	var _self = this;
	var render;
	//	var _showDialog = function () {
	//		//console.log(top.tinymce.activeEditor);
	//		console.log(top.tinymce.activeEditor.selection.getContent());
	//		var win = editor.windowManager.open({
	//			title: 'Text',
	//			body: {
	//				type: 'textbox',
	//				name: 'spoil',
	//				multiline: true,
	//				minWidth: editor.getParam("code_dialog_width", 600),
	//				minHeight: editor.getParam("code_dialog_height", Math.min(tinyMCE.DOM.getViewPort().h - 200, 500)),
	//			},
	//			onsubmit: function (e) {
	//				var range = editor.selection.getRng().startOffset
	//
	//				render = '<spoil>'+e.data.spoil+'</spoil><br/> ';			
	//				top.tinymce.activeEditor.insertContent(render);
	//				
	//			}
	//		});
	//	}




	editor.addButton('spoil', {
		title: 'Pantip Spoil',
		text: 'Spoil',
		icon: false,
		onclick: function () {
			//console.log(tinymce.activeEditor.selection.isCollapsed());
			//editor.dom.toggleClass( editor.selection.getNode(), 'spoil' );
			//this.active( !this.active() ); //toggle the button too
			
			var selection = editor.selection.getNode();
			//console.log(tinymce.activeEditor.dom.select('spoil'));
		
			//console.log(selection);
			if (tinymce.activeEditor.selection.isCollapsed()) {
				var spoil = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil');
				//console.log(spoil);
				//			//tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil').nodeName === 'SPOIL'
				if (spoil !== null && spoil.nodeName === 'SPOIL') {
					console.log('nonono');
				} else {
					render = '<spoil>ใส่ข้อความ</spoil><br/> ';
					top.tinymce.activeEditor.insertContent(render);
				}
			}

			//			tinymce.activeEditor.dom.remove(xx[0]);
			//			console.log(tinymce.activeEditor.dom.select('spoil').length)
			//			tinymce.activeEditor.dom.remove(tinymce.activeEditor.dom.select('strong'));
			//console.log(tinymce.activeEditor.dom.getParent(top.tinymce.activeEditor.selection.getNode(),'spoil'));
			//console.log(top.tinymce.activeEditor.selection.getNode());
			//			if(top.tinymce.activeEditor.selection.getNode().nodeName == 'SPOIL'){
			//				console.log(editor.selection.getBookmark());
			//;			}else{

			//			}
			//			render = '<spoil> ใส่ข้อความ </spoil><br/><br/> ';
			//			top.tinymce.activeEditor.insertContent(render);

		},
	});
});
