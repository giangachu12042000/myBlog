import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.scss';

export default class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const {defaultValue_editor} = this.props;
    const html =  defaultValue_editor ? `<p> ${defaultValue_editor}</p>`  : '<p></p>'
    ;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState); 
      this.state = {
        editorState,
      }; 
    }
  }
  
  onEditorStateChange = (editorState) => {
    let editorStateView = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({editorState});
    this.props.handleChangeEditor(editorStateView);
  };
  render() {
    const { editorState } = this.state;  
    return (
      <div>
        <Editor
          editorState = {editorState}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={ this.onEditorStateChange.bind(this) } 
        /> 
      </div>
    );
  }
}