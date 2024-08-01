### 1. Applet to take name and address as input and display them in different colors

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

### 2. Applet to take lengths of two roads and display their sum in kilometers

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

### 3. Applet to draw a circle or triangle based on button press

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

### 4. Applet to take a number and display its multiplication table

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

### 5. Applet to take a name and display its reverse

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

### 6. Multiplication of Two Matrices

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

### 7. Account and Saving_Account Classes

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

### 8. Sum of Elements in Array with Exception Handling

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

### 9. Account and Saving_Account Classes with Deposit Method

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

### 10. Copy Contents of a File

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
