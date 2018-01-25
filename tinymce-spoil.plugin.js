
tinymce.PluginManager.add('spoil3', function (editor) {
	var _self = this;
	
	editor.addButton('spoil3',{
		title: 'Pantip Spoil',
		text: 'Spoil3',
		icon: false,
		onclick : function(){
			
			var cnt = tinymce.activeEditor.dom.select('spoil').length
			var str = tinymce.activeEditor.selection.getContent();
			var spoil = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil');
			var regex = /<spoil>(.*?)<\/spoil>/g;
			
			console.log(typeof spoil, spoil ,regex.test(str));
			console.log(typeof spoil.nodeName);

			//return false;
			
			if(regex.test(str) === false && spoil == null && spoil.nodeName !== 'SPOIL'){
				str = (str === '')?'ใส่ข้อความ':str;
				tinymce.activeEditor.insertContent('<spoil>'+str+'</spoil><br> ');
				tinymce.activeEditor.selection.select(tinymce.activeEditor.dom.select('spoil')[cnt])
			}
			
		}
	})
});

tinymce.PluginManager.add('spoil2', function (editor) {
	var _self = this;
	editor.addButton('spoil2', {
		title: 'Pantip Spoil',
		text: 'Spoil2',
		icon: false,
		onclick: function () {
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

					if (tinymce.activeEditor.selection.isCollapsed() && e.data.spoil !== '') {
						var spoil = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil');

						if (spoil !== null && spoil.nodeName === 'SPOIL') {
							console.log('nonono');
						} else {


							tinymce.activeEditor.insertContent('<spoil>' + e.data.spoil + '</spoil><br/><br/><br/> ');
							var cnt = tinymce.activeEditor.dom.select('spoil').length
							//tinymce.activeEditor.selection.select(tinymce.activeEditor.dom.select('spoil')[cnt])
						}
					}

				}
			});
		},

	});
});
tinymce.PluginManager.add('spoil1', function (editor) {
	var _self = this;

	editor.addButton('spoil1', {
		title: 'Pantip Spoil',
		text: 'Spoil1',
		icon: false,
		/*onPostRender: function() {
			
			editor.on('NodeChange', function(e) {
				console.log('zzzz');
				
			})
		},*/
		onclick: function () {
			var cnt = tinymce.activeEditor.dom.select('spoil').length
			var spoil = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil');
			//console.log(tinymce.activeEditor.selection.isCollapsed());
			if (tinymce.activeEditor.selection.isCollapsed()) 
			{
				if (spoil !== null && spoil.nodeName === 'SPOIL') {
					console.log('nonono');
				} else {


					tinymce.activeEditor.insertContent('<spoil>ใส่ข้อความ</spoil><br/><br/> ');
					
					tinymce.activeEditor.selection.select(tinymce.activeEditor.dom.select('spoil')[cnt])
				}
			}
		},

	});

});



	//		onclick: function () {
		//			//console.log(tinymce.activeEditor.selection.isCollapsed());
		//			//editor.dom.toggleClass( editor.selection.getNode(), 'spoil' );
		//			//this.active( !this.active() ); //toggle the button too
		//			
		//			//var selection = editor.selection.getNode();
		//			//console.log(tinymce.activeEditor.dom.select('spoil'));
		//		
		//			//console.log(selection);
		//			if (tinymce.activeEditor.selection.isCollapsed()) {
		//				var spoil = tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil');
		//				//console.log(spoil);
		//				//			//tinymce.activeEditor.dom.getParent(tinymce.activeEditor.selection.getNode(), 'spoil').nodeName === 'SPOIL'
		//				if (spoil !== null && spoil.nodeName === 'SPOIL') {
		//					console.log('nonono');
		//				} else {
		//					
		//					
		//					tinymce.activeEditor.insertContent('<spoil>ใส่ข้อความ</spoil><br/> ');
		//					
		//				}
		//			}
		//
		//			//			tinymce.activeEditor.dom.remove(xx[0]);
		//			//			console.log(tinymce.activeEditor.dom.select('spoil').length)
		//			//			tinymce.activeEditor.dom.remove(tinymce.activeEditor.dom.select('strong'));
		//			//console.log(tinymce.activeEditor.dom.getParent(top.tinymce.activeEditor.selection.getNode(),'spoil'));
		//			//console.log(top.tinymce.activeEditor.selection.getNode());
		//			//			if(top.tinymce.activeEditor.selection.getNode().nodeName == 'SPOIL'){
		//			//				console.log(editor.selection.getBookmark());
		//			//;			}else{
		//
		//			//			}
		//			//			render = '<spoil> ใส่ข้อความ </spoil><br/><br/> ';
		//			//			top.tinymce.activeEditor.insertContent(render);
		//
		//		},