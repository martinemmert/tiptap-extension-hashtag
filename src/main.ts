import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Hashtag } from './extensions/hashtag';

new Editor({
  element: document.querySelector('#element')!,
  extensions: [
    StarterKit.configure({
      heading: false,
    }),
    Hashtag,
  ],

  editorProps: {
    attributes: {
      class:
        'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 p-2 rounded focus:outline outline-blue-200 outline-1 bg-gray-100',
    },
  },
  content: `#hashtag`,
});
