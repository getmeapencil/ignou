# IGNOU PYQ: Object Oriented Technology and Java Programming

#### 1. Applet to take name and address as input and display them in different colors

```java
import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class NameAddressApplet extends Applet implements ActionListener {
    TextField nameField, addressField;
    Label nameLabel, addressLabel;
    Button displayButton;
    String name, address;
    boolean showResult = false;

    public void init() {
        nameLabel = new Label("Name: ");
        addressLabel = new Label("Address: ");
        nameField = new TextField(20);
        addressField = new TextField(20);
        displayButton = new Button("Display");

        add(nameLabel);
        add(nameField);
        add(addressLabel);
        add(addressField);
        add(displayButton);

        displayButton.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        name = nameField.getText();
        address = addressField.getText();
        showResult = true;
        repaint();
    }

    public void paint(Graphics g) {
        if (showResult) {
            g.setColor(Color.RED);
            g.drawString("Name: " + name, 20, 100);
            g.setColor(Color.BLUE);
            g.drawString("Address: " + address, 20, 120);
        }
    }
}
```

#### 2. Applet to take lengths of two roads and display their sum in kilometers

```java
import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class RoadLengthApplet extends Applet implements ActionListener {
    TextField length1Field, length2Field;
    Label length1Label, length2Label, resultLabel;
    Button calculateButton;
    double length1, length2, totalLength;

    public void init() {
        length1Label = new Label("Length of Road 1 (m): ");
        length2Label = new Label("Length of Road 2 (m): ");
        length1Field = new TextField(10);
        length2Field = new TextField(10);
        calculateButton = new Button("Calculate");
        resultLabel = new Label();

        add(length1Label);
        add(length1Field);
        add(length2Label);
        add(length2Field);
        add(calculateButton);
        add(resultLabel);

        calculateButton.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        length1 = Double.parseDouble(length1Field.getText());
        length2 = Double.parseDouble(length2Field.getText());
        totalLength = (length1 + length2) / 1000;
        resultLabel.setText("Total Length: " + totalLength + " km");
    }
}
```

#### 3. Applet to draw a circle or triangle based on button press

```java
import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class ShapeApplet extends Applet implements ActionListener {
    Button circleButton, triangleButton;
    String shape = "";

    public void init() {
        circleButton = new Button("Draw Circle");
        triangleButton = new Button("Draw Triangle");

        add(circleButton);
        add(triangleButton);

        circleButton.addActionListener(this);
        triangleButton.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        shape = e.getActionCommand();
        repaint();
    }

    public void paint(Graphics g) {
        if (shape.equals("Draw Circle")) {
            g.drawOval(50, 50, 100, 100);
        } else if (shape.equals("Draw Triangle")) {
            int[] xPoints = {100, 150, 50};
            int[] yPoints = {50, 150, 150};
            g.drawPolygon(xPoints, yPoints, 3);
        }
    }
}
```

#### 4. Applet to take a number and display its multiplication table

```java
import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class MultiplicationTableApplet extends Applet implements ActionListener {
    TextField numberField;
    Label numberLabel;
    TextArea tableArea;
    Button displayButton;

    public void init() {
        numberLabel = new Label("Enter Number: ");
        numberField = new TextField(10);
        displayButton = new Button("Display Table");
        tableArea = new TextArea(10, 20);

        add(numberLabel);
        add(numberField);
        add(displayButton);
        add(tableArea);

        displayButton.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        int number = Integer.parseInt(numberField.getText());
        StringBuilder table = new StringBuilder();
        for (int i = 1; i <= 10; i++) {
            table.append(number).append(" x ").append(i).append(" = ").append(number * i).append("\n");
        }
        tableArea.setText(table.toString());
    }
}
```

#### 5. Applet to take a name and display its reverse

```java
import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class ReverseNameApplet extends Applet implements ActionListener {
    TextField nameField;
    Label nameLabel, resultLabel;
    Button reverseButton;

    public void init() {
        nameLabel = new Label("Enter Name: ");
        nameField = new TextField(20);
        reverseButton = new Button("Reverse");
        resultLabel = new Label();

        add(nameLabel);
        add(nameField);
        add(reverseButton);
        add(resultLabel);

        reverseButton.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        String name = nameField.getText();
        String reversedName = new StringBuilder(name).reverse().toString();
        resultLabel.setText("Reversed Name: " + reversedName);
    }
}
```

To run these applets, you would typically embed them in an HTML file or use an applet viewer tool provided by Java. For example, you can create an HTML file like this:

```html
<html>
  <body>
    <applet code="NameAddressApplet.class" width="300" height="200"></applet>
  </body>
</html>
```

Replace `NameAddressApplet` with the respective class name for the other applets when testing them.

#### 6. Multiplication of Two Matrices

```java
public class MatrixMultiplication {
    public static void main(String[] args) {
        int[][] matrix1 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int[][] matrix2 = {
            {9, 8, 7},
            {6, 5, 4},
            {3, 2, 1}
        };

        try {
            int[][] result = multiplyMatrices(matrix1, matrix2);
            displayMatrix(result);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static int[][] multiplyMatrices(int[][] matrix1, int[][] matrix2) {
        int rows1 = matrix1.length;
        int cols1 = matrix1[0].length;
        int rows2 = matrix2.length;
        int cols2 = matrix2[0].length;

        if (cols1 != rows2) {
            throw new IllegalArgumentException("Matrix multiplication is not possible, incompatible dimensions.");
        }

        int[][] result = new int[rows1][cols2];

        for (int i = 0; i < rows1; i++) {
            for (int j = 0; j < cols2; j++) {
                for (int k = 0; k < cols1; k++) {
                    result[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            }
        }

        return result;
    }

    public static void displayMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int elem : row) {
                System.out.print(elem + " ");
            }
            System.out.println();
        }
    }
}
```

#### 7. Account and Saving_Account Classes

```java
class Account {
    protected String accountNumber;
    protected double balance;

    public Account(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void Display_Account_Detail() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }

    public double Account_Balance() {
        return balance;
    }
}

class Saving_Account extends Account {
    private double interestRate;

    public Saving_Account(String accountNumber, double balance, double interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    @Override
    public void Display_Account_Detail() {
        super.Display_Account_Detail();
        System.out.println("Interest Rate: " + interestRate + "%");
    }
}

public class Main {
    public static void main(String[] args) {
        Saving_Account sa = new Saving_Account("123456", 5000.0, 3.5);
        sa.Display_Account_Detail();
    }
}
```

#### 8. Sum of Elements in Array with Exception Handling

```java
public class ArraySum {
    public static void main(String[] args) {
        int[] array = new int[20];
        for (int i = 0; i < array.length; i++) {
            array[i] = i + 1;
        }

        try {
            int sum = calculateSum(array);
            System.out.println("Sum of all elements: " + sum);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array index out of bounds.");
        }
    }

    public static int calculateSum(int[] array) throws ArrayIndexOutOfBoundsException {
        int sum = 0;
        for (int i = 0; i <= array.length; i++) { // Intentional error for demo
            sum += array[i];
        }
        return sum;
    }
}
```

#### 9. Account and Saving_Account Classes with Deposit Method

```java
class Account {
    protected String accountNumber;
    protected double balance;

    public Account(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

class Saving_Account extends Account {
    public Saving_Account(String accountNumber, double balance) {
        super(accountNumber, balance);
    }

    public void Display() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }

    public void Deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
            System.out.println("New Balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Saving_Account sa = new Saving_Account("123456", 5000.0);
        sa.Display();
        sa.Deposit(1500.0);
    }
}
```

#### 10. Copy Contents of a File

```java
import java.io.*;

public class FileCopy {
    public static void main(String[] args) {
        String sourceFile = "source.txt";
        String destinationFile = "destination.txt";

        try {
            copyFile(sourceFile, destinationFile);
            System.out.println("File copied successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void copyFile(String source, String destination) throws IOException {
        FileInputStream fis = null;
        FileOutputStream fos = null;

        try {
            fis = new FileInputStream(source);
            fos = new FileOutputStream(destination);

            byte[] buffer = new byte[1024];
            int length;
            while ((length = fis.read(buffer)) > 0) {
                fos.write(buffer, 0, length);
            }
        } finally {
            if (fis != null) {
                fis.close();
            }
            if (fos != null) {
                fos.close();
            }
        }
    }
}
```

---

# IGNOU Viva: Object Oriented Technology and Java Programming

#### Main Paradigms of Programming Languages

**Question:** What are the main paradigms of programming languages, and how do they differ from each other?

**Answer:** Main paradigms include procedural, object-oriented, and functional. Procedural focuses on functions, OOP on objects and classes, and functional on immutable data and functions as first-class citizens.

#### Evolution of Object-Oriented (OO) Methodology

**Question:** How has Object-Oriented (OO) methodology evolved over time?

**Answer:** OO methodology evolved from procedural programming, incorporating concepts like encapsulation, inheritance, and polymorphism to model real-world problems more naturally.

#### Basic Concepts of Object-Oriented Approach

**Question:** What are the basic concepts of the Object-Oriented approach?

**Answer:** Basic concepts include objects, classes, inheritance, encapsulation, polymorphism, and abstraction.

#### Comparison: Object-Oriented vs Procedure-Oriented Approaches

**Question:** Compare Object-Oriented and Procedure-Oriented approaches.

**Answer:** OO uses objects and classes to encapsulate data and behavior, promoting reuse and modularity.  
Procedure-oriented uses functions to operate on data, leading to a more linear and less modular structure.

#### Benefits of Object-Oriented Programming (OOP)

**Question:** What are the benefits of using Object-Oriented Programming (OOP)?

**Answer:** Benefits include code reusability, scalability, easier maintenance, and better alignment with real-world modeling.

#### Concepts of Classes and Objects

**Question:** Explain the concepts of classes and objects with examples.

**Answer:** A class is a blueprint for objects, defining attributes and methods. An object is an instance of a class.  
**Example:** Class `Car` with attributes like `color` and methods like `drive`; `myCar` is an object of `Car`.

#### Abstraction vs Encapsulation

**Question:** What is the difference between abstraction and encapsulation in OOP?

**Answer:**

- **Abstraction:** Hides complex implementation details and shows only the necessary features.
- **Encapsulation:** Bundles attributes and methods operating on the data into a single unit and restricts access to some components.

#### Inheritance in OOP

**Question:** How does inheritance work in OOP? Provide an example.

**Answer:** Inheritance allows a class (subclass) to inherit attributes and methods from another class (superclass).  
**Example:** `class Dog extends Animal` where `Dog` inherits properties of `Animal`.

#### Method Overriding and Polymorphism

**Question:** What is method overriding, and how does it relate to polymorphism?

**Answer:** Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass. It supports polymorphism by allowing objects to be treated as instances of their superclass.

#### Features of Java

**Question:** Describe the basic features of Java and its significance in programming.

**Answer:** Java is platform-independent, object-oriented, secure, and robust, making it suitable for a wide range of applications from web development to enterprise software.

#### Java Virtual Machine (JVM)

**Question:** Explain the concept of the Java Virtual Machine (JVM) and its role in Java programming.

**Answer:** JVM is a virtual machine that runs Java bytecode, enabling Java's platform independence by allowing the same code to run on any device with a JVM.

#### Primitive Data Types and Variables in Java

**Question:** Write a simple Java program to demonstrate the use of primitive data types and variables.

**Answer:**

```java
public class Main {
    public static void main(String[] args) {
        int num = 10;
        float price = 5.99f;
        char letter = 'A';
        boolean isJavaFun = true;
        System.out.println(num + ", " + price + ", " + letter + ", " + isJavaFun);
    }
}
```

#### Control Statements in Java

**Question:** What are control statements in Java? Provide examples of selection, iterative, and jump statements.

**Answer:** Control statements manage the flow of execution.

- **Selection:** `if-else`, `switch`
- **Iterative:** `for`, `while`, `do-while`
- **Jump:** `break`, `continue`, `return`

#### Arrays in Java

**Question:** How are arrays declared and initialized in Java? Write a code snippet to illustrate this.

**Answer:**

```java
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";
```

#### Fundamentals of a Class in Java

**Question:** What are the fundamentals of a class in Java?

**Answer:** A class in Java is a blueprint for creating objects. It defines attributes (fields) and methods to perform operations.

#### Creating an Object in Java

**Question:** How do you create an object in Java?

**Answer:** An object is created using the `new` keyword.  
**Example:** `ClassName obj = new ClassName();`

#### Constructor vs Method

**Question:** What is a constructor, and how is it different from a method?

**Answer:**

- **Constructor:** Initializes a new object. It has the same name as the class and no return type.
- **Method:** Performs operations on objects and has a return type.

#### The `this` Keyword in Java

**Question:** Explain the use of the `this` keyword in Java.

**Answer:** The `this` keyword refers to the current object instance. It is used to access instance variables and methods and to distinguish them from local variables.

#### Method Overloading

**Question:** What is method overloading?

**Answer:** Method overloading allows multiple methods with the same name but different parameters (type or number) within the same class.

#### Basics of Inheritance in Java

**Question:** What are the basics of inheritance in Java?

**Answer:** Inheritance allows a class to inherit attributes and methods from another class using the `extends` keyword. It promotes code reuse.

#### Method Overriding

**Question:** What is method overriding?

**Answer:** Method overriding allows a subclass to provide a specific implementation for a method already defined in its superclass. The method signature must be the same.

#### Polymorphism in Java

**Question:** Explain the concept of polymorphism in Java.

**Answer:** Polymorphism allows methods to behave differently based on the object calling them. It can be achieved through method overriding and interfaces.

#### Abstract Class

**Question:** What is an abstract class?

**Answer:** An abstract class cannot be instantiated and may contain abstract methods without implementations. It is used as a base class for other classes.

#### The `final` Keyword in Java

**Question:** What is the use of the `final` keyword in Java?

**Answer:** The `final` keyword can be used to prevent inheritance (final class), prevent method overriding (final method), and create constants (final variables).

#### Defining a Package in Java

**Question:** How do you define a package in Java?

**Answer:** A package is defined using the `package` keyword followed by the package name at the beginning of a Java source file.  
**Example:** `package mypackage;`

#### Interface in Java

**Question:** What is an interface in Java?

**Answer:** An interface is a reference type in Java, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields.

#### Implementing an Interface in Java

**Question:** How do you implement an interface in Java?

**Answer:** A class implements an interface using the `implements` keyword and provides concrete implementations for all abstract methods defined in the interface.  
**Example:** `class MyClass implements MyInterface { ... }`

#### Exceptions in Java

**Question:** What is an exception in Java, and how is it handled?

**Answer:** An exception is an event that disrupts the normal flow of a program. It is handled using `try-catch` blocks. The code that might throw an exception is placed in the `try` block, and the exception is caught and handled in the `catch` block.

#### The `finally` Clause in Exception Handling

**Question:** What is the purpose of the `finally` clause in exception handling?

**Answer:** The `finally` clause is used to execute important code such as cleanup actions, regardless of whether an exception is thrown or caught. It always executes after the `try` and `catch` blocks.

#### Multithreading in Java

**Question:** What is multithreading in Java?

**Answer:** Multithreading is the concurrent execution of two or more threads. It allows for performing multiple operations simultaneously within a single program.

#### Creating and Starting a Thread in Java

**Question:** How do you create and start a thread in Java?

**Answer:** A thread can be created by extending the `Thread` class or implementing the `Runnable` interface. It is started using the `start()` method.  
**Example:**

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running.");
    }
}
MyThread t = new MyThread();
t.start();
```

#### Synchronization in Java

**Question:** What is synchronization in Java, and why is it important?

**Answer:** Synchronization is used to control the access of multiple threads to shared resources. It prevents thread interference and consistency problems by ensuring that only one thread can access the resource at a time.

#### Basic I/O Streams in Java

**Question:** What are the basic I/O streams in Java?

**Answer:** Java I/O streams include byte streams (`InputStream`, `OutputStream`) for binary data

and character streams (`Reader`, `Writer`) for character data.

#### File Handling in Java

**Question:** How do you handle files in Java?

**Answer:** File handling in Java involves classes such as `File`, `FileReader`, `FileWriter`, `BufferedReader`, and `BufferedWriter` for reading from and writing to files.

#### Java Collections Framework

**Question:** What is the Java Collections Framework?

**Answer:** The Java Collections Framework is a set of classes and interfaces that implement commonly reusable collection data structures such as lists, sets, and maps.

#### Advantages of the Java Collections Framework

**Question:** What are the advantages of using the Java Collections Framework?

**Answer:** Advantages include reducing programming effort, increasing performance, providing interoperability between unrelated APIs, and enhancing maintainability and reusability of code.

#### Commonly Used Classes in Java Collections

**Question:** Name some commonly used classes in the Java Collections Framework.

**Answer:** Commonly used classes include `ArrayList`, `LinkedList`, `HashSet`, `TreeSet`, `HashMap`, and `TreeMap`.

#### Iterating Through a Collection

**Question:** How do you iterate through a collection in Java?

**Answer:** Iteration can be done using an iterator, enhanced for loop (`for-each` loop), or the `forEach` method.  
**Example:**

```java
ArrayList<String> list = new ArrayList<>();
list.add("One");
list.add("Two");
for (String item : list) {
    System.out.println(item);
}
```

#### Generics in Java

**Question:** What are generics in Java?

**Answer:** Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods. This allows for type-safe code and eliminates the need for type casting.

#### Benefits of Using Generics

**Question:** What are the benefits of using generics in Java?

**Answer:** Benefits include type safety, eliminating the need for type casting, and enabling code reusability.

#### Lambda Expressions in Java

**Question:** What are lambda expressions in Java?

**Answer:** Lambda expressions provide a clear and concise way to implement single-method interfaces (functional interfaces) using an expression or a block of code.

#### Functional Interface

**Question:** What is a functional interface?

**Answer:** A functional interface is an interface with only one abstract method. It can be implemented using lambda expressions, method references, or anonymous classes.  
**Example:** `@FunctionalInterface interface MyFunctionalInterface { void myMethod(); }`
