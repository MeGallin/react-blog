import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillEditor.css';

function QuillEditor({ value, onChange, className }) {
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

export default QuillEditor;
