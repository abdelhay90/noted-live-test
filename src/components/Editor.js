import React from 'react';
import CodeMirror from 'react-codemirror';

class Editor extends React.Component {
  handleChange = content => {
    const { id, onChange } = this.props;
    onChange(content, id);
  };

  render() {
    const { body } = this.props;
    return (
      <CodeMirror
        className='content__pane'
        value={body}
        onChange={this.handleChange}
        options={{
          mode: 'markdown',
          lineNumbers: true,
          lineWrapping: true,
          autofocus: true,
        }}
      />
    );
  }
}

export default Editor;
