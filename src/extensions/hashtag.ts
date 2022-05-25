import { Node as ProseMirrorNode } from 'prosemirror-model';
import { PluginKey } from 'prosemirror-state';
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion';
import {
  Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes,
} from '@tiptap/core';

export type HashtagOptions = {
  HTMLAttributes: Record<string, any>;
  renderLabel: (props: {
    options: HashtagOptions;
    node: ProseMirrorNode;
  }) => string;
  suggestion: Omit<SuggestionOptions, 'editor'>;
};

export const HashtagPluginKey = new PluginKey('hashtag');

export const hashtagInputRegex = /((?:#)(\w)+)/;
export const underscorePasteRegex = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g;

export const Hashtag = Mark.create<HashtagOptions>({
  name: 'hashtag',
  renderHTML({ HTMLAttributes }) {
    return [
      'strong',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },
  addInputRules() {
    return [
      markInputRule({
        find: hashtagInputRegex,
        type: this.type,
      }),
    ];
  },
  addPasteRules() {
    return [
      markPasteRule({
        find: hashtagInputRegex,
        type: this.type,
      }),
    ];
  },
});
