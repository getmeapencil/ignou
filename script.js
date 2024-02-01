document.addEventListener("DOMContentLoaded", function () {
  // Initialize Showdown.js
  const converter = new showdown.Converter();

  // Fetch Markdown content from an external file
  fetch("./bcsl033.md")
    .then((response) => response.text())
    .then((markdownText) => {
      // Convert Markdown to HTML
      const htmlContent = converter.makeHtml(markdownText);

      // Display HTML content
      document.getElementById("markdown-content").innerHTML = htmlContent;

      // Apply syntax highlighting using Highlight.js
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    })
    .catch((error) => console.error("Error fetching Markdown content:", error));
});
