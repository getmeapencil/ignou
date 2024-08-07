### JavaScript Variables and Data Types

**Variables in JavaScript**  
JavaScript variables are containers for storing data values. They are declared using `var`, `let`, or `const`.

- **`var`**: Declares a variable, optionally initializing it to a value.
- **`let`**: Declares a block-scoped, local variable, optionally initializing it to a value.
- **`const`**: Declares a block-scoped, read-only constant.

**Example:**

```javascript
let x = 5;
const pi = 3.14;
```

**Data Types in JavaScript**  
JavaScript supports several data types, including:

1. **Number**: Represents both integer and floating-point numbers.
   - Example: `let age = 30;`
2. **String**: Represents a sequence of characters.
   - Example: `let name = "Alice";`
3. **Boolean**: Represents `true` or `false`.
   - Example: `let isActive = true;`
4. **Object**: Represents an instance through which we can access members.
   - Example:
     ```javascript
     let person = {
       firstName: "John",
       lastName: "Doe",
       age: 25,
     };
     ```
5. **Undefined**: A variable that has been declared but not assigned a value.
   - Example: `let notDefined;`
6. **Null**: Represents the intentional absence of any object value.
   - Example: `let emptyValue = null;`
7. **Symbol**: A unique and immutable primitive value, often used as keys for object properties.
   - Example: `let sym = Symbol('description');`
8. **BigInt**: Represents whole numbers larger than the range of the `Number` type.
   - Example: `let bigNumber = BigInt(1234567890123456789012345678901234567890);`

### Statements and Operators in JavaScript

**Statements**  
Statements are instructions executed by the browser to perform actions.

- **Example:**
  ```javascript
  let sum = a + b;
  ```

**Operators**  
Operators are used to perform operations on variables and values.

1. **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
   - Example: `let result = 5 + 10;`
2. **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
   - Example: `if (x === 10) { // code }`
3. **Logical Operators**: `&&`, `||`, `!`
   - Example: `if (a > 0 && b > 0) { // code }`
4. **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
   - Example: `x += 5; // equivalent to x = x + 5`
5. **Other Operators**: `typeof`, `instanceof`, `? :` (ternary)
   - Example: `let type = typeof x;`

### Control Structures in JavaScript

**Conditional Statements**  
Control the flow of execution based on conditions.

- **if, else if, else**:

  ```javascript
  if (condition) {
    // code
  } else if (anotherCondition) {
    // code
  } else {
    // code
  }
  ```

- **switch**:
  ```javascript
  switch (expression) {
    case value1:
      // code
      break;
    case value2:
      // code
      break;
    default:
    // code
  }
  ```

**Loop Statements**  
Repeat a block of code while a condition is true.

- **for**:

  ```javascript
  for (let i = 0; i < 5; i++) {
    // code
  }
  ```

- **while**:

  ```javascript
  while (condition) {
    // code
  }
  ```

- **do...while**:
  ```javascript
  do {
    // code
  } while (condition);
  ```

### Object-Based Programming in JavaScript

JavaScript uses objects to model real-world entities. Objects are collections of properties and methods.

**Example:**

```javascript
let car = {
  make: "Toyota",
  model: "Camry",
  start: function () {
    return "Starting";
  },
};
```

JavaScript is prototype-based, meaning objects can inherit properties and methods from other objects.

### Defining and Using Functions in JavaScript

Functions are blocks of code designed to perform a particular task. Functions are defined using the `function` keyword and invoked by their name.

**Example:**

```javascript
function myFunction() {
  // code
}
myFunction();
```

### Deferred Scripts in JavaScript

Deferred scripts are executed after the HTML document has been fully parsed. They are declared using the `defer` attribute in the `<script>` tag.

**Example:**

```html
<script src="myscript.js" defer></script>
```

### JavaScript Objects

Objects are collections of properties (key-value pairs) and methods.

**Example:**

```javascript
let car = {
  make: "Toyota",
  model: "Camry",
  start: function () {
    return "Starting";
  },
};
```

### Creating a Message Box in JavaScript

Message boxes can be created using the `alert()`, `confirm()`, and `prompt()` methods.

**Types of Dialog Boxes:**

1. **alert(message)**: Displays an alert box with a message and an OK button.
   - Example: `alert('Hello, world!');`
2. **confirm(message)**: Displays a dialog box with a message, OK, and Cancel buttons.
   - Example: `confirm('Are you sure?');`
3. **prompt(message, default)**: Displays a dialog box that prompts the user for input.
   - Example: `prompt('Please enter your name:', 'Harry Potter');`

### JavaScript Interaction with HTML

JavaScript interacts with HTML through the Document Object Model (DOM), a programming interface that allows scripts to update the content, structure, and style of a document while it is being viewed. The DOM represents the document as a tree of nodes, with each node corresponding to a part of the document (such as an element, attribute, or text).

#### Accessing HTML Elements

**1. `getElementById` Method:**
This method retrieves an element by its `id` attribute.

```javascript
// HTML: <div id="myElement">Hello World</div>
let element = document.getElementById("myElement");
console.log(element.innerHTML); // Output: Hello World
```

**2. `getElementsByClassName` Method:**
This method retrieves all elements with a specified class name.

```javascript
// HTML: <div class="myClass">Hello</div><div class="myClass">World</div>
let elements = document.getElementsByClassName("myClass");
console.log(elements[0].innerHTML); // Output: Hello
console.log(elements[1].innerHTML); // Output: World
```

**3. `getElementsByTagName` Method:**
This method retrieves all elements with a specified tag name.

```javascript
// HTML: <p>First Paragraph</p><p>Second Paragraph</p>
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].innerHTML); // Output: First Paragraph
console.log(paragraphs[1].innerHTML); // Output: Second Paragraph
```

**4. `querySelector` Method:**
This method returns the first element that matches a specified CSS selector.

```javascript
// HTML: <div class="container"><p>Paragraph</p></div>
let element = document.querySelector(".container p");
console.log(element.innerHTML); // Output: Paragraph
```

**5. `querySelectorAll` Method:**
This method returns all elements that match a specified CSS selector.

```javascript
// HTML: <div class="container"><p>First</p><p>Second</p></div>
let elements = document.querySelectorAll(".container p");
elements.forEach((el) => console.log(el.innerHTML));
// Output:
// First
// Second
```

#### Manipulating HTML Elements

**1. Changing Inner HTML:**
You can change the content inside an HTML element using the `innerHTML` property.

```javascript
// HTML: <div id="myElement">Old Content</div>
document.getElementById("myElement").innerHTML = "New Content";
```

**2. Changing Attributes:**
You can change the attributes of an HTML element using the `setAttribute` method.

```javascript
// HTML: <img id="myImage" src="old.jpg">
document.getElementById("myImage").setAttribute("src", "new.jpg");
```

**3. Changing Styles:**
You can change the CSS styles of an HTML element using the `style` property.

```javascript
// HTML: <p id="myParagraph">Styled Paragraph</p>
let paragraph = document.getElementById("myParagraph");
paragraph.style.color = "blue";
paragraph.style.fontSize = "20px";
```

#### Adding and Removing Elements

**1. Creating New Elements:**
You can create new HTML elements using the `createElement` method.

```javascript
// Creating a new paragraph element
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is a new paragraph.";
document.body.appendChild(newParagraph);
```

**2. Removing Elements:**
You can remove HTML elements using the `remove` method.

```javascript
// HTML: <div id="myElement">This will be removed</div>
let element = document.getElementById("myElement");
element.remove();
```

**3. Modifying the DOM Tree:**
You can insert elements at specific positions using methods like `appendChild`, `insertBefore`, and `replaceChild`.

```javascript
// HTML: <div id="parent"><p id="child">Child Paragraph</p></div>
let parent = document.getElementById("parent");
let newChild = document.createElement("p");
newChild.innerHTML = "New Child Paragraph";
let oldChild = document.getElementById("child");
parent.replaceChild(newChild, oldChild);
```

#### Event Handling

JavaScript can interact with HTML by responding to user actions, known as events. Common events include clicks, form submissions, and key presses.

**1. Adding Event Listeners:**
You can add event listeners to elements using the `addEventListener` method.

```javascript
// HTML: <button id="myButton">Click Me</button>
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

**2. Removing Event Listeners:**
You can remove event listeners using the `removeEventListener` method.

```javascript
function clickHandler() {
  alert("Button was clicked!");
}

button.addEventListener("click", clickHandler);
button.removeEventListener("click", clickHandler);
```

**3. Event Object:**
Event handlers can access an event object that contains information about the event.

```javascript
button.addEventListener("click", function (event) {
  console.log("Event type:", event.type);
  console.log("Element clicked:", event.target);
});
```

#### Form Handling

JavaScript can interact with HTML forms to capture and process user input.

**1. Accessing Form Elements:**
You can access form elements via the DOM.

```javascript
// HTML: <form id="myForm"><input type="text" id="myInput"></form>
let form = document.getElementById("myForm");
let input = document.getElementById("myInput");
```

**2. Handling Form Submission:**
You can handle form submissions using the `submit` event.

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents default form submission
  console.log("Form submitted with value:", input.value);
});
```

**3. Validating Form Data:**
You can validate form data before submission.

```javascript
form.addEventListener("submit", function (event) {
  if (input.value === "") {
    alert("Input cannot be empty!");
    event.preventDefault(); // Prevent form submission
  }
});
```

By interacting with HTML elements through the DOM, JavaScript can dynamically update the content and structure of a web page, making it more interactive and responsive to user actions.

### Forms Array in JavaScript

The `forms` array is a collection of all the forms in a document, accessible via `document.forms`. Each form is an element in the array.

**Example:**

```javascript
let myForm = document.forms[0]; // Accesses the first form in the document
let formName = myForm.name; // Gets the name of the form
```

These notes provide a comprehensive overview of JavaScript variables, data types, control structures, object-oriented programming, functions, and interactions with HTML and forms.
