const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");
function sanitizeMarkdown(markdownContent) {
  const turndownService = new TurndownService();
  //convert markdown to html
  const convertedHtml = marked.parse(markdownContent);
  //sanitize html
  const pureSanitizedHtml = sanitizeHtml(convertedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat("img"),
  });
  //convert html to markdown
  var markdown = turndownService.turndown(pureSanitizedHtml);

  return markdown;
}

module.exports = sanitizeMarkdown;
