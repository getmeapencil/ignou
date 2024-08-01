document.addEventListener("DOMContentLoaded", function () {
  // Initialize Showdown.js
  const converter = new showdown.Converter();
  // Define a variable to hold the file path based on the current page
  let markdownFilePath = convertString(window.location.pathname);
  console.log("markdownFilePath:", markdownFilePath);

  // Fetch Markdown content from an external file
  fetch(markdownFilePath)
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

  function convertString(input) {
    return input.replace(/^\//, "./").replace(/\.html$/, ".md");
  }
});
