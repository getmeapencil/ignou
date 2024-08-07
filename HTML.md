## Explanation of HTML Tags

### `<html>` Tag

- **Definition**: The `<html>` tag is the root element of an HTML document.
- **Usage**: Encloses all other elements on the page.
- **Example**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Webpage</title>
    </head>
    <body>
      <p>Hello, world!</p>
    </body>
  </html>
  ```

### `<title>` Tag

- **Definition**: Defines the title of the HTML document.
- **Display**: Shown in the browser's title bar or tab.
- **Example**:
  ```html
  <head>
    <title>My Webpage Title</title>
  </head>
  ```

### `<body>` Tag

- **Definition**: Contains the content of an HTML document.
- **Content**: Text, images, links, and other media.
- **Example**:
  ```html
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph.</p>
    <img src="image.jpg" alt="An image" />
  </body>
  ```

### `<pre>` Tag

- **Definition**: Displays preformatted text, preserving spaces and line breaks.
- **Usage**: Useful for code snippets or poetry.
- **Example**:
  ```html
  <pre>
  function helloWorld() {
      console.log("Hello, world!");
  }
  </pre>
  ```

### Text Formatting in HTML

- **Tags**:
  - `<b>` for bold
  - `<i>` for italics
  - `<u>` for underline
  - `<br>` for line breaks
- **Examples**:
  ```html
  <p>This is <b>bold</b> text.</p>
  <p>This is <i>italic</i> text.</p>
  <p>This is <u>underlined</u> text.</p>
  <p>First line<br />Second line</p>
  ```

### HTML Headers

- **Tags**: `<h1>` to `<h6>`
- **Hierarchy**: `<h1>` is the highest level, `<h6>` the lowest.
- **Example**:
  ```html
  <h1>Main Heading</h1>
  <h2>Subheading</h2>
  <h3>Sub-subheading</h3>
  ```

### Including Images in HTML

- **Tag**: `<img>`
- **Attributes**:
  - `src`: Source of the image
  - `alt`: Alternative text
  - `width` and `height`: Dimensions
- **Example**:
  ```html
  <img
    src="path/to/image.jpg"
    alt="Description of image"
    width="600"
    height="400"
  />
  ```

### `<meta>` Tag

- **Definition**: Provides metadata about the HTML document.
- **Attributes**:
  - `charset`: Character set
  - `name`: Name of the metadata (e.g., description, keywords, author)
  - `content`: Content of the metadata
  - `viewport`: Settings for responsive design
- **Example**:
  ```html
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="A brief description of the page" />
    <meta name="keywords" content="HTML, CSS, JavaScript" />
    <meta name="author" content="John Doe" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  ```

### Creating Links in HTML

- **Tag**: `<a>`
- **Attribute**: `href` specifies the URL of the linked document or resource.
- **Example**:
  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```

### Types of Lists in HTML

- **Unordered lists** (`<ul>`):
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```
- **Ordered lists** (`<ol>`):
  ```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  ```
- **Definition lists** (`<dl>`):
  ```html
  <dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2</dd>
  </dl>
  ```

### Table Tags in HTML

- **Basic Tags**:
  - `<table>`: Defines a table
  - `<tr>`: Defines a table row
  - `<td>`: Defines a table cell
- **Example**:
  ```html
  <table border="1">
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </table>
  ```

### Cell Spacing and Cell Padding

- **Attributes**:
  - `cellspacing`: Space between cells
  - `cellpadding`: Space between cell content and borders
- **Example**:
  ```html
  <table border="1" cellspacing="5" cellpadding="10">
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </table>
  ```

### Colspan and Rowspan Attributes

- **Colspan**: Allows a cell to span multiple columns.
- **Rowspan**: Allows a cell to span multiple rows.
- **Example**:
  ```html
  <table border="1">
    <tr>
      <td colspan="2">Spans two columns</td>
    </tr>
    <tr>
      <td rowspan="2">Spans two rows</td>
      <td>Cell 1</td>
    </tr>
    <tr>
      <td>Cell 2</td>
    </tr>
  </table>
  ```

### Frames in HTML

- **Tags**:
  - `<frameset>`: Defines a frameset
  - `<frame>`: Defines a frame
  - `<noframes>`: Content to be displayed if frames are not supported
- **Example**:
  ```html
  <frameset cols="25%,75%">
      <frame src="nav.html">
      <frame src="content.html">
  </frameset>
  <noframes>
      <p>Your browser does not support frames.</p>
  </noframes>
  ```

### Creating Forms in HTML

- **Tag**: `<form>`
- **Form Elements**: `<input>`, `<textarea>`, `<select>`, `<button>`
- **Example**:
  ```html
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
    <textarea id="message" name="message">Your message here</textarea>
    <select name="options">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <button type="submit">Submit</button>
  </form>
  ```

### `<input>` Tag in HTML Forms

- **Definition**: Creates various types of input fields.
- **Types**: Text boxes, radio buttons, checkboxes, submit/reset buttons.
- **Example**:
  ```html
  <input type="text" name="username" />
  <input type="radio" name="gender" value="male" /> Male
  <input type="radio" name="gender" value="female" /> Female
  <input type="checkbox" name="subscribe" value="newsletter" /> Subscribe to
  newsletter
  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
  ```

### `<select>` and `<option>` Tags

- **Definition**:
  - `<select>`: Creates a drop-down list.
  - `<option>`: Defines items in the list.
- **Example**:
  ```html
  <select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  ```

### `<textarea>` Tag

- **Definition**: Creates a multi-line text input field in an HTML form.
- **Example**:
  ```html
  <textarea name="comments" rows="5" cols="40">
  Enter your comments here</textarea
  >
  ```
