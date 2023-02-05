const markdownIt = require('markdown-it');

const opts = {
  html: true, // 在源码中启用 HTML 标签
  linkify: false, // 将类似 URL 的文本自动转换为链接。
  typographer: true, // 启用一些语言中立的替换 + 引号美化
  breaks: true, // 转换段落里的 '\n' 到 <br>

  // 高亮函数，会返回转义的HTML。
  // 或 '' 如果源字符串未更改，则应在外部进行转义。
  // 如果结果以 <pre ... 开头，内部包装器则会跳过。
  // highlight,
};

const md = markdownIt(opts)
  .use(require('./md-plugin-link'))
  .use(require('./md-plugin-token'))
  .use(require('./md-plugin-blockquote'))
  .use(require('./md-plugin-heading'))
  .use(require('./md-plugin-image'))
  .use(require('./md-plugin-containers'))
  .use(require('./md-plugin-table'))
  .use(require('./md-plugin-fence'));

module.exports = md;

// 'autolink',      // Automatically convert link text surrounded by angle brackets to <a> tags
// 'backticks',     // Allow inline code blocks using backticks
// 'blockquote',    // > I am a blockquote becomes <blockquote>I am a blockquote</blockquote>
// 'code',          // Code block (4 spaces padded)
// 'emphasis',      // *Emphasize* _emphasize_ **Strong** __Strong__
// 'entity',        // Parse HTML entities e.g. &amp;
// 'escape',        // Automatically escape special characters.
// 'fence',         // Fenced code blocks
// 'heading',       // # Foo becomes <h1>Foo</h1>. ###### becomes <h6>Foo</h6>
// 'hr',            // ***, --- and ___ produce a <hr> tag.
// 'html_block',    // Enable / disable HTML blocks.
// 'html_inline',   // Enable / disable inline HTML.
// 'image'          // Enable / disable inline images.
// 'lheading',      // Use === or --- underneath text for h1 and h2 blocks.
// 'link',          // Process [link](<to> "stuff")
// 'linkify',       // Replace link-like texts with link nodes.
// 'list',          // Ordered and unordered lists.
// 'newline',       // '  \n' -> <br>
// 'normalize',     // Replace newlines with \n, null characters and convert tabs to spaces.
// 'paragraph'      // Use blank lines to indicate a paragraph.
// eslint-disable-next-line max-len
// 'reference',     // Reference style links e.g. [an example][id] reference-style link... further down in the document [id]: http://example.com/  "Optional Title Here"
// 'strikethrough', // ~~strike through~~
// 'table',         // GFM style tables
// 'text_collapse', // Merge adjacent text nodes into one, and re-calculate all token levels
