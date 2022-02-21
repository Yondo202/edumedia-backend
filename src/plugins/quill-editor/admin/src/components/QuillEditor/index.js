import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';

// const Video = Quill.import('formats/video');
// const Link = Quill.import('formats/link');

Quill.register('modules/imageResize', ImageResize);


const Editor = ({ onChange, name, value }) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      [{ size: ['13, 14, 15, 16'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'video'],
      ['clean'],
    ],
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={(content, event, editor) => {
        onChange({ target: { name, value: content } });
      }}
    />
  );
};

export default Editor;