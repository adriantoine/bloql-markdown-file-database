
// Set markdown
// ------------------------------

import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

// Set up markdown it with language highlight
const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value;
    }
    return hljs.highlightAuto(str).value;
  }
});

// Set up emojis
md.use(require('markdown-it-emoji'));
md.renderer.rules.emoji = function (token, idx) {
  return require('twemoji').parse(token[idx].content, {
    folder: 'svg',
    ext: '.svg'
  });
};

export default md;
