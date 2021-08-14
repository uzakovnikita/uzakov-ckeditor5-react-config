import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import '@ckeditor/ckeditor5-build-classic/build/translations/ru';

const editorConfiguration = {
	plugins: [Essentials, Bold, Italic, Paragraph, Strikethrough, Underline, Link],
	toolbar: ['bold', 'italic', 'strikethrough', 'underline', 'link'],
	language: 'ru'
};

const App = ({data, onReady, onChange, onBlur, onFocus}) => {
	return (
		<div className="App">
				<CKEditor
					editor={ClassicEditor}
					config={editorConfiguration}
					data="<p>Hello from CKEditor 5!</p>"
					onReady={editor => {
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
			</div>
	)
}
	

export default App;