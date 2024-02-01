document.addEventListener("DOMContentLoaded", function () {
  // Initialize Showdown.js
  const converter = new showdown.Converter();
  // Define a variable to hold the file path based on the current page
  let markdownFilePath;

  // Determine the file path based on the current page
  if (currentPageIsCpp()) {
    markdownFilePath = "./bcsl032.md";
  } else {
    markdownFilePath = "./bcsl033.md";
  }

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

  function currentPageIsCpp() {
    return window.location.pathname === "/c++.html";
  }
});
