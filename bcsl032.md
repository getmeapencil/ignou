**1. Write a C++ program to create an `Account` class to manage the savings account of a bank. Define methods `display_balance()` and `withdraw()` in the `Account` class. Also, define a friend function `display_info()` to display basic information of the account holder. Use appropriate data types for data members and utilize proper access specifiers in your program. Make necessary assumptions.**

```c++
#include <iostream>
#include <string>

class Account {
private:
    std::string accountHolderName;
    long accountNumber;
    double balance;

public:
    // Constructor
    Account(const std::string& name, long number, double initialBalance)
        : accountHolderName(name), accountNumber(number), balance(initialBalance) {}

    // Method to display account balance
    void display_balance() const {
        std::cout << "Account Balance: $" << balance << std::endl;
    }

    // Method to withdraw money
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            std::cout << "Withdrawal successful. Remaining balance: $" << balance << std::endl;
        } else {
            std::cout << "Invalid withdrawal amount or insufficient balance." << std::endl;
        }
    }

    // Friend function to display account information
    friend void display_info(const Account& account);
};

// Friend function definition
void display_info(const Account& account) {
    std::cout << "Account Holder: " << account.accountHolderName << std::endl;
    std::cout << "Account Number: " << account.accountNumber << std::endl;
    account.display_balance(); // Using the display_balance method inside the friend function
}

int main() {
    // Creating an Account object
    Account myAccount("John Doe", 123456789, 1000.0);

    // Displaying account information using the friend function
    display_info(myAccount);

    // Performing a withdrawal
    myAccount.withdraw(500.0);

    // Displaying updated account information
    display_info(myAccount);

    return 0;
}

```

**2. Write a C++ program to create an `Array` class. This class should have an array of integers as its data member. Define appropriate constructor and destructor for this class. Define a method `Find_Element()` to find a given value in the `Array` object. Define a method `Average()` to find the average of array elements in the `Array` object.**

```c++
#include <iostream>

class Array {
private:
    int* elements; // Array of integers
    int size;      // Size of the array

public:
    // Constructor to initialize the array with a given size
    Array(int arraySize) {
        size = arraySize;
        elements = new int[size];
        std::cout << "Array created with size " << size << std::endl;
    }

    // Destructor to free the dynamically allocated memory
    ~Array() {
        delete[] elements;
        std::cout << "Array destroyed" << std::endl;
    }

    // Method to find a given value in the array
    bool Find_Element(int value) const {
        for (int i = 0; i < size; ++i) {
            if (elements[i] == value) {
                std::cout << "Element " << value << " found at index " << i << std::endl;
                return true;
            }
        }
        std::cout << "Element " << value << " not found in the array" << std::endl;
        return false;
    }

    // Method to find the average of array elements
    double Average() const {
        if (size == 0) {
            std::cerr << "Cannot calculate average for an empty array" << std::endl;
            return 0.0;
        }

        double sum = 0.0;
        for (int i = 0; i < size; ++i) {
            sum += elements[i];
        }

        return sum / size;
    }
};

int main() {
    // Creating an Array object with a size of 5
    Array myArray(5);

    // Filling the array with values
    for (int i = 0; i < 5; ++i) {
        myArray.Find_Element(i); // Checking if the element is already present
        myArray.Find_Element(i * 2); // Checking if double of the element is present
        myArray.Find_Element(i * 3); // Checking if triple of the element is present
        myArray.Find_Element(i * 4); // Checking if quadruple of the element is present
        myArray.Find_Element(i * 5); // Checking if quintuple of the element is present
        myArray.Find_Element(i * 6); // Checking if sextuple of the element is present
    }

    // Displaying the average of array elements
    std::cout << "Average of array elements: " << myArray.Average() << std::endl;

    return 0;
}

```

**3. Write a C++ program to find the factorial of a given number. Define a `Factorial` class and include `read_Number()` and `display_Factorial()` methods in the `Factorial` class. Use appropriate access specifiers in your program. Also, make provision for exception handling.**

```c++
#include <iostream>
#include <stdexcept>

class Factorial {
private:
    int number;
    long long factorial;

public:
    // Method to read the number from the user
    void read_Number() {
        std::cout << "Enter a non-negative integer: ";
        std::cin >> number;

        // Check for negative input
        if (number < 0) {
            throw std::invalid_argument("Input must be a non-negative integer.");
        }
    }

    // Method to calculate and display the factorial
    void display_Factorial() {
        if (number == 0 || number == 1) {
            factorial = 1;
        } else {
            factorial = 1;
            for (int i = 2; i <= number; ++i) {
                // Check for overflow
                if (factorial > LLONG_MAX / i) {
                    throw std::overflow_error("Factorial exceeds the limit for long long.");
                }
                factorial *= i;
            }
        }

        std::cout << "Factorial of " << number << " is: " << factorial << std::endl;
    }
};

int main() {
    Factorial factObj;

    try {
        factObj.read_Number();
        factObj.display_Factorial();
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}

```

**4. Write a C++ program to create a `Student` class. Define a constructor and a `display()` method to display student information. Derive a `Working_Student` class from the `Student` class. Also, override the `display()` method of the `Student` class in the `Working_Student` class. Make necessary assumptions and use appropriate data types for data members of both classes.**

```c++
#include <iostream>
#include <string>

// Base class: Student
class Student {
protected:
    std::string name;
    int age;

public:
    // Constructor to initialize student information
    Student(const std::string& studentName, int studentAge)
        : name(studentName), age(studentAge) {}

    // Method to display student information
    virtual void display() const {
        std::cout << "Student Name: " << name << std::endl;
        std::cout << "Student Age: " << age << std::endl;
    }
};

// Derived class: Working_Student
class Working_Student : public Student {
private:
    std::string jobTitle;

public:
    // Constructor to initialize working student information
    Working_Student(const std::string& studentName, int studentAge, const std::string& job)
        : Student(studentName, studentAge), jobTitle(job) {}

    // Override display method to include job information
    void display() const override {
        // Call the base class display method
        Student::display();

        // Display additional information for working student
        std::cout << "Job Title: " << jobTitle << std::endl;
    }
};

int main() {
    // Creating a Student object
    Student student1("John Doe", 20);

    // Displaying student information
    std::cout << "Student Information:" << std::endl;
    student1.display();
    std::cout << std::endl;

    // Creating a Working_Student object
    Working_Student workingStudent1("Jane Smith", 22, "Software Engineer");

    // Displaying working student information
    std::cout << "Working Student Information:" << std::endl;
    workingStudent1.display();

    return 0;
}

```

**5. Write a C++ program to copy the contents of a given file into a new file.**

```c++
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::string inputFileName, outputFileName;

    // Get input and output file names from the user
    std::cout << "Enter the name of the input file: ";
    std::cin >> inputFileName;

    std::cout << "Enter the name of the output file: ";
    std::cin >> outputFileName;

    // Open the input file for reading
    std::ifstream inputFile(inputFileName);

    // Check if the input file is opened successfully
    if (!inputFile.is_open()) {
        std::cerr << "Error: Could not open the input file." << std::endl;
        return 1;
    }

    // Open the output file for writing
    std::ofstream outputFile(outputFileName);

    // Check if the output file is opened successfully
    if (!outputFile.is_open()) {
        std::cerr << "Error: Could not open the output file." << std::endl;
        inputFile.close(); // Close the input file before returning
        return 1;
    }

    // Copy contents from input file to output file
    char ch;
    while (inputFile.get(ch)) {
        outputFile.put(ch);
    }

    // Close both files
    inputFile.close();
    outputFile.close();

    std::cout << "File contents copied successfully." << std::endl;

    return 0;
}

```

**6. Write a C++ program to create a `Book` class. Define a method `Display_Book_Detail()` to display the book details such as title, author, publisher, price, and edition. Define appropriate constructor(s) in your program.**

```c++
#include <iostream>
#include <string>

class Book {
private:
    std::string title;
    std::string author;
    std::string publisher;
    double price;
    int edition;

public:
    // Constructor to initialize book details
    Book(const std::string& bookTitle, const std::string& bookAuthor,
         const std::string& bookPublisher, double bookPrice, int bookEdition)
        : title(bookTitle), author(bookAuthor), publisher(bookPublisher),
          price(bookPrice), edition(bookEdition) {}

    // Method to display book details
    void Display_Book_Detail() const {
        std::cout << "Title: " << title << std::endl;
        std::cout << "Author: " << author << std::endl;
        std::cout << "Publisher: " << publisher << std::endl;
        std::cout << "Price: $" << price << std::endl;
        std::cout << "Edition: " << edition << std::endl;
    }
};

int main() {
    // Creating a Book object
    Book myBook("The Catcher in the Rye", "J.D. Salinger", "Little, Brown and Company", 15.99, 1);

    // Displaying book details
    std::cout << "Book Details:" << std::endl;
    myBook.Display_Book_Detail();

    return 0;
}

```

**7. Write a C++ program to create an abstract class `Shape` with a method `area()`. Derive `Circle` and `Triangle` classes from the `Shape` class. Override the `area()` method in the derived classes to find the area of respective shapes. Also, define appropriate constructors in your program. Make necessary assumptions required.**

```c++
#include <iostream>
#include <cmath>

// Abstract base class: Shape
class Shape {
public:
    // Pure virtual method to calculate the area (making the class abstract)
    virtual double area() const = 0;

    // Virtual destructor (required for a class with virtual methods)
    virtual ~Shape() {}
};

// Derived class: Circle
class Circle : public Shape {
private:
    double radius;

public:
    // Constructor to initialize the radius of the circle
    Circle(double circleRadius) : radius(circleRadius) {}

    // Override the area method to calculate the area of the circle
    double area() const override {
        return 3.141592653589793 * radius * radius; // Assuming pi value
    }
};

// Derived class: Triangle
class Triangle : public Shape {
private:
    double base;
    double height;

public:
    // Constructor to initialize the base and height of the triangle
    Triangle(double triangleBase, double triangleHeight)
        : base(triangleBase), height(triangleHeight) {}

    // Override the area method to calculate the area of the triangle
    double area() const override {
        return 0.5 * base * height;
    }
};

int main() {
    // Creating a Circle object
    Circle myCircle(5.0);

    // Calculating and displaying the area of the circle
    std::cout << "Area of the Circle: " << myCircle.area() << std::endl;

    // Creating a Triangle object
    Triangle myTriangle(4.0, 3.0);

    // Calculating and displaying the area of the triangle
    std::cout << "Area of the Triangle: " << myTriangle.area() << std::endl;

    return 0;
}

```

**8. Write a C++ program to find the factorial of a given number. Define a proper class, constructor, and methods in your program.**

```c++
#include <iostream>

class FactorialCalculator {
private:
    int number;
    long long factorial;

public:
    // Constructor to initialize the number
    FactorialCalculator(int n) : number(n), factorial(1) {}

    // Method to calculate the factorial of the given number
    void calculateFactorial() {
        if (number < 0) {
            std::cerr << "Factorial is not defined for negative numbers." << std::endl;
            return;
        }

        factorial = 1;
        for (int i = 2; i <= number; ++i) {
            factorial *= i;
        }
    }

    // Method to display the calculated factorial
    void displayFactorial() const {
        if (number < 0) {
            std::cerr << "Cannot display factorial for negative numbers." << std::endl;
            return;
        }

        std::cout << "Factorial of " << number << " is: " << factorial << std::endl;
    }
};

int main() {
    int userInput;

    // Get input from the user
    std::cout << "Enter a non-negative integer to calculate its factorial: ";
    std::cin >> userInput;

    // Create a FactorialCalculator object
    FactorialCalculator calculator(userInput);

    // Calculate and display the factorial
    calculator.calculateFactorial();
    calculator.displayFactorial();

    return 0;
}

```

**9. Write a C++ program to create a `Time` class. Define a constructor to create a time object in a 12-hour format. Define a method to convert the time into 24-hour format and display it.**

```c++
#include <iostream>

class Time {
private:
    int hours;
    int minutes;
    std::string period; // AM or PM

public:
    // Constructor to create a time object in 12-hour format
    Time(int h, int m, const std::string& p) : hours(h), minutes(m), period(p) {}

    // Method to convert and display time in 24-hour format
    void display24HourFormat() const {
        if ((period == "AM" || period == "am") && hours == 12) {
            // Midnight (12:00 AM) in 24-hour format is 00:00
            std::cout << "Time in 24-hour format: 00:" << minutes << std::endl;
        } else if (period == "PM" || period == "pm") {
            // Afternoon/Evening
            std::cout << "Time in 24-hour format: " << (hours == 12 ? 12 : hours + 12) << ":"
                      << minutes << std::endl;
        } else {
            // Morning
            std::cout << "Time in 24-hour format: " << (hours == 12 ? 0 : hours) << ":"
                      << minutes << std::endl;
        }
    }
};

int main() {
    // Creating a Time object in 12-hour format
    Time myTime(3, 30, "PM");

    // Displaying time in 24-hour format
    myTime.display24HourFormat();

    return 0;
}

```

**10. Write a C++ program to define a `Shape` class. Derive `Circle` and `Triangle` classes from the `Shape` class. Define a method `area()` in the `Shape` class and override it in classes `Circle` and `Triangle` to calculate their area. Make necessary assumptions required.**

```c++
#include <iostream>
#include <cmath>

// Base class: Shape
class Shape {
public:
    // Virtual method to calculate the area (to be overridden in derived classes)
    virtual double area() const {
        std::cout << "Area of the base class Shape is not defined." << std::endl;
        return 0.0;
    }

    // Virtual destructor (required for a class with virtual methods)
    virtual ~Shape() {}
};

// Derived class: Circle
class Circle : public Shape {
private:
    double radius;

public:
    // Constructor to initialize the radius of the circle
    Circle(double circleRadius) : radius(circleRadius) {}

    // Override the area method to calculate the area of the circle
    double area() const override {
        return 3.141592653589793 * radius * radius; // Assuming pi value
    }
};

// Derived class: Triangle
class Triangle : public Shape {
private:
    double base;
    double height;

public:
    // Constructor to initialize the base and height of the triangle
    Triangle(double triangleBase, double triangleHeight)
        : base(triangleBase), height(triangleHeight) {}

    // Override the area method to calculate the area of the triangle
    double area() const override {
        return 0.5 * base * height;
    }
};

int main() {
    // Creating a Circle object
    Circle myCircle(5.0);

    // Displaying the area of the circle
    std::cout << "Area of the Circle: " << myCircle.area() << std::endl;

    // Creating a Triangle object
    Triangle myTriangle(4.0, 3.0);

    // Displaying the area of the triangle
    std::cout << "Area of the Triangle: " << myTriangle.area() << std::endl;

    // Creating a Shape object (base class)
    Shape* baseShape = new Shape;

    // Displaying the area of the base class (will use the base class implementation)
    std::cout << "Area of the Shape (base class): " << baseShape->area() << std::endl;

    // Deleting the dynamically allocated baseShape object
    delete baseShape;

    return 0;
}

```

**11. Write a C++ program to create a `Matrix` class. Define a constructor to create a 3 x 3 matrix. Overload the `+` operator to add two matrices.**

```c++
#include <iostream>

class Matrix {
private:
    int data[3][3];

public:
    // Constructor to create a 3x3 matrix
    Matrix(int a11, int a12, int a13,
           int a21, int a22, int a23,
           int a31, int a32, int a33) {
        data[0][0] = a11; data[0][1] = a12; data[0][2] = a13;
        data[1][0] = a21; data[1][1] = a22; data[1][2] = a23;
        data[2][0] = a31; data[2][1] = a32; data[2][2] = a33;
    }

    // Overloading + operator to add two matrices
    Matrix operator+(const Matrix& other) const {
        Matrix result(0, 0, 0, 0, 0, 0, 0, 0, 0);
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                result.data[i][j] = data[i][j] + other.data[i][j];
            }
        }
        return result;
    }

    // Method to display the matrix
    void display() const {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                std::cout << data[i][j] << ' ';
            }
            std::cout << std::endl;
        }
    }
};

int main() {
    // Creating two Matrix objects
    Matrix matrix1(1, 2, 3, 4, 5, 6, 7, 8, 9);
    Matrix matrix2(9, 8, 7, 6, 5, 4, 3, 2, 1);

    // Displaying the original matrices
    std::cout << "Matrix 1:" << std::endl;
    matrix1.display();
    std::cout << "Matrix 2:" << std::endl;
    matrix2.display();

    // Adding the matrices using the overloaded + operator
    Matrix sumMatrix = matrix1 + matrix2;

    // Displaying the result
    std::cout << "Sum of Matrix 1 and Matrix 2:" << std::endl;
    sumMatrix.display();

    return 0;
}

```

**12. Write a C++ program to create a `Matrix` class. Define a constructor to create a 3 x 3 matrix. Define a method to display the sum of diagonal elements of the matrix.**

```c++
#include <iostream>

class Matrix {
private:
    int data[3][3];

public:
    // Constructor to create a 3x3 matrix
    Matrix(int a11, int a12, int a13,
           int a21, int a22, int a23,
           int a31, int a32, int a33) {
        data[0][0] = a11; data[0][1] = a12; data[0][2] = a13;
        data[1][0] = a21; data[1][1] = a22; data[1][2] = a23;
        data[2][0] = a31; data[2][1] = a32; data[2][2] = a33;
    }

    // Method to display the sum of diagonal elements
    void displayDiagonalSum() const {
        int sum = 0;
        for (int i = 0; i < 3; ++i) {
            sum += data[i][i]; // Summing the diagonal elements
        }
        std::cout << "Sum of diagonal elements: " << sum << std::endl;
    }

    // Method to display the matrix
    void display() const {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                std::cout << data[i][j] << ' ';
            }
            std::cout << std::endl;
        }
    }
};

int main() {
    // Creating a Matrix object
    Matrix myMatrix(1, 2, 3, 4, 5, 6, 7, 8, 9);

    // Displaying the original matrix
    std::cout << "Matrix:" << std::endl;
    myMatrix.display();

    // Displaying the sum of diagonal elements
    myMatrix.displayDiagonalSum();

    return 0;
}

```

**13. Write a C++ program to define a `Number` class. Define a constructor for this class. Implement a method to check whether the number is even or odd. Also, define a method to find the factorial of the number.**

```c++
#include <iostream>

class Number {
private:
    int value;

public:
    // Constructor to initialize the number
    Number(int num) : value(num) {}

    // Method to check whether the number is even or odd
    void checkEvenOdd() const {
        if (value % 2 == 0) {
            std::cout << value << " is an even number." << std::endl;
        } else {
            std::cout << value << " is an odd number." << std::endl;
        }
    }

    // Method to find the factorial of the number
    void calculateFactorial() const {
        if (value < 0) {
            std::cerr << "Factorial is not defined for negative numbers." << std::endl;
            return;
        }

        long long factorial = 1;
        for (int i = 2; i <= value; ++i) {
            factorial *= i;
        }

        std::cout << "Factorial of " << value << " is: " << factorial << std::endl;
    }
};

int main() {
    // Creating a Number object
    Number myNumber(5);

    // Checking whether the number is even or odd
    myNumber.checkEvenOdd();

    // Finding the factorial of the number
    myNumber.calculateFactorial();

    return 0;
}
```

**14. Write a C++ program to define a `Player` class. Define a constructor and a method `display_info()` in this class. Inherit `Cricket_Player` and `Football_Player` from the `Player` class and override the `display_info()` method of the `Player` class in derived classes. Make necessary assumptions required.**

```c++
#include <iostream>
#include <string>

// Base class: Player
class Player {
protected:
    std::string name;
    int age;

public:
    // Constructor to initialize player information
    Player(const std::string& playerName, int playerAge)
        : name(playerName), age(playerAge) {}

    // Method to display player information
    virtual void display_info() const {
        std::cout << "Player Name: " << name << std::endl;
        std::cout << "Player Age: " << age << std::endl;
    }
};

// Derived class: Cricket_Player
class Cricket_Player : public Player {
private:
    std::string role;

public:
    // Constructor to initialize cricket player information
    Cricket_Player(const std::string& playerName, int playerAge, const std::string& playerRole)
        : Player(playerName, playerAge), role(playerRole) {}

    // Override display_info method to include cricket player role
    void display_info() const override {
        // Call the base class display_info method
        Player::display_info();

        // Display additional information for cricket player
        std::cout << "Cricket Player Role: " << role << std::endl;
    }
};

// Derived class: Football_Player
class Football_Player : public Player {
private:
    std::string position;

public:
    // Constructor to initialize football player information
    Football_Player(const std::string& playerName, int playerAge, const std::string& playerPosition)
        : Player(playerName, playerAge), position(playerPosition) {}

    // Override display_info method to include football player position
    void display_info() const override {
        // Call the base class display_info method
        Player::display_info();

        // Display additional information for football player
        std::cout << "Football Player Position: " << position << std::endl;
    }
};

int main() {
    // Creating a Cricket_Player object
    Cricket_Player cricketPlayer("Virat Kohli", 32, "Batsman");

    // Displaying cricket player information
    std::cout << "Cricket Player Information:" << std::endl;
    cricketPlayer.display_info();
    std::cout << std::endl;

    // Creating a Football_Player object
    Football_Player footballPlayer("Lionel Messi", 34, "Forward");

    // Displaying football player information
    std::cout << "Football Player Information:" << std::endl;
    footballPlayer.display_info();

    return 0;
}

```

**15. Write a C++ program to overload the `+` operator so that any two complex numbers can be added using it. Define a proper class, constructor, and methods in your program. Make necessary assumptions required.**

```c++
#include <iostream>

class Complex {
private:
    double real;
    double imag;

public:
    // Constructor to initialize the complex number
    Complex(double r, double i) : real(r), imag(i) {}

    // Overloading the + operator for complex numbers
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Method to display the complex number
    void display() const {
        std::cout << "Complex Number: " << real << " + " << imag << "i" << std::endl;
    }
};

int main() {
    // Creating two complex numbers
    Complex complex1(2.5, 3.0);
    Complex complex2(1.5, 2.0);

    // Displaying the original complex numbers
    std::cout << "Original Complex Numbers:" << std::endl;
    complex1.display();
    complex2.display();

    // Adding the complex numbers using the overloaded + operator
    Complex sum = complex1 + complex2;

    // Displaying the sum of complex numbers
    std::cout << "\nSum of Complex Numbers:" << std::endl;
    sum.display();

    return 0;
}

```

**16. Write a C++ program to create an `Account` class to manage Savings Bank Account. Define a constructor for this class. Define a method to display the account details, including the current balance in the account. Also, define and implement a friend function to calculate simple interest. Make necessary assumptions required.**

```c++
#include <iostream>
#include <cmath>

class Account {
private:
    std::string accountHolder;
    long accountNumber;
    double balance;

public:
    // Constructor to initialize account details
    Account(const std::string& holder, long number, double initialBalance)
        : accountHolder(holder), accountNumber(number), balance(initialBalance) {}

    // Method to display account details, including current balance
    void displayAccountDetails() const {
        std::cout << "Account Holder: " << accountHolder << std::endl;
        std::cout << "Account Number: " << accountNumber << std::endl;
        std::cout << "Current Balance: $" << balance << std::endl;
    }

    // Friend function to calculate simple interest
    friend double calculateSimpleInterest(const Account& account, double rate, int time);
};

// Friend function definition
double calculateSimpleInterest(const Account& account, double rate, int time) {
    // Simple Interest formula: SI = P * R * T / 100
    double principal = account.balance;
    double interest = (principal * rate * time) / 100.0;

    return interest;
}

int main() {
    // Creating an Account object
    Account myAccount("John Doe", 123456789, 5000.0);

    // Displaying account details
    std::cout << "Account Information:" << std::endl;
    myAccount.displayAccountDetails();

    // Calculating and displaying simple interest using the friend function
    double interestRate = 5.0; // 5% interest rate
    int timePeriod = 2;       // 2 years

    double interest = calculateSimpleInterest(myAccount, interestRate, timePeriod);

    std::cout << "\nSimple Interest for " << timePeriod << " years at "
              << interestRate << "% rate: $" << interest << std::endl;

    return 0;
}

```

**17. Write a C++ program to display the marks scored by a student in the final semester examination. The student appears in exams for Math, Science, Hindi, English, and Computer Application courses in the final semester. Each course is of 100 marks. Define a proper class, constructor, and method(s) in your program. Make necessary assumptions required.**

```c++
#include <iostream>
#include <iomanip>

class Student {
private:
    std::string studentName;
    int mathMarks;
    int scienceMarks;
    int hindiMarks;
    int englishMarks;
    int computerMarks;

public:
    // Constructor to initialize student details and marks
    Student(const std::string& name, int math, int science, int hindi, int english, int computer)
        : studentName(name), mathMarks(math), scienceMarks(science),
          hindiMarks(hindi), englishMarks(english), computerMarks(computer) {}

    // Method to display the marks for each course
    void displayMarks() const {
        std::cout << "Student Name: " << studentName << std::endl;
        std::cout << "Math Marks: " << mathMarks << "/100" << std::endl;
        std::cout << "Science Marks: " << scienceMarks << "/100" << std::endl;
        std::cout << "Hindi Marks: " << hindiMarks << "/100" << std::endl;
        std::cout << "English Marks: " << englishMarks << "/100" << std::endl;
        std::cout << "Computer Application Marks: " << computerMarks << "/100" << std::endl;
    }
};

int main() {
    // Creating a Student object with marks
    Student myStudent("John Doe", 85, 90, 75, 88, 92);

    // Displaying the marks for each course
    myStudent.displayMarks();

    return 0;
}

```

**18. Write a C++ program to define an `Account` class. Derive classes `Saving_Account` and `Current_Account` from the `Account` class. Define proper constructors for all three classes. Define methods to display account details and account balance.**

```c++
#include <iostream>
#include <string>

class Account {
protected:
    std::string accountHolder;
    long accountNumber;
    double balance;

public:
    // Constructor for the base class Account
    Account(const std::string& holder, long number, double initialBalance)
        : accountHolder(holder), accountNumber(number), balance(initialBalance) {}

    // Method to display account details
    void displayAccountDetails() const {
        std::cout << "Account Holder: " << accountHolder << std::endl;
        std::cout << "Account Number: " << accountNumber << std::endl;
    }

    // Method to display account balance
    void displayBalance() const {
        std::cout << "Account Balance: $" << balance << std::endl;
    }
};

class Saving_Account : public Account {
private:
    double interestRate;

public:
    // Constructor for the derived class Saving_Account
    Saving_Account(const std::string& holder, long number, double initialBalance, double rate)
        : Account(holder, number, initialBalance), interestRate(rate) {}

    // Method to display additional details for Saving_Account
    void displaySavingAccountDetails() const {
        std::cout << "Account Type: Saving Account" << std::endl;
        std::cout << "Interest Rate: " << interestRate << "%" << std::endl;
    }
};

class Current_Account : public Account {
private:
    double overdraftLimit;

public:
    // Constructor for the derived class Current_Account
    Current_Account(const std::string& holder, long number, double initialBalance, double limit)
        : Account(holder, number, initialBalance), overdraftLimit(limit) {}

    // Method to display additional details for Current_Account
    void displayCurrentAccountDetails() const {
        std::cout << "Account Type: Current Account" << std::endl;
        std::cout << "Overdraft Limit: $" << overdraftLimit << std::endl;
    }
};

int main() {
    // Creating a Saving_Account object
    Saving_Account savingAccount("John Doe", 123456789, 5000.0, 4.5);

    // Displaying Saving_Account details
    std::cout << "Saving Account Details:" << std::endl;
    savingAccount.displayAccountDetails();
    savingAccount.displaySavingAccountDetails();
    savingAccount.displayBalance();

    std::cout << std::endl;

    // Creating a Current_Account object
    Current_Account currentAccount("Jane Doe", 987654321, 3000.0, 1000.0);

    // Displaying Current_Account details
    std::cout << "Current Account Details:" << std::endl;
    currentAccount.displayAccountDetails();
    currentAccount.displayCurrentAccountDetails();
    currentAccount.displayBalance();

    return 0;
}

```

**19. Write a C++ program to create a `Book` class. Define a proper constructor for the `Book` class. Define methods to do the following:**
**(a) Display the price of the book.**
**(b) Display the name(s) of the author(s) of the book.**
**(c) Display the ISBN number of the book.**

```c++
#include <iostream>
#include <string>

class Book {
private:
    std::string title;
    double price;
    std::string author;
    std::string isbn;

public:
    // Constructor to initialize book details
    Book(const std::string& bookTitle, double bookPrice, const std::string& bookAuthor, const std::string& bookISBN)
        : title(bookTitle), price(bookPrice), author(bookAuthor), isbn(bookISBN) {}

    // Method to display the price of the book
    void displayPrice() const {
        std::cout << "Price of the book \"" << title << "\": $" << price << std::endl;
    }

    // Method to display the name(s) of the author(s) of the book
    void displayAuthor() const {
        std::cout << "Author(s) of the book \"" << title << "\": " << author << std::endl;
    }

    // Method to display the ISBN number of the book
    void displayISBN() const {
        std::cout << "ISBN of the book \"" << title << "\": " << isbn << std::endl;
    }
};

int main() {
    // Creating a Book object
    Book myBook("The C++ Programming Language", 39.99, "Bjarne Stroustrup", "9780134852480");

    // Displaying book details
    myBook.displayPrice();
    myBook.displayAuthor();
    myBook.displayISBN();

    return 0;
}

```

**20. Write a C++ program to create an `Account` class. Define a proper constructor for this class. Define methods for `display_account_detail` and `display_simple_interest`. Make necessary assumptions required.**

```c++
#include <iostream>
#include <iomanip>

class Account {
private:
    std::string accountHolder;
    long accountNumber;
    double balance;

public:
    // Constructor to initialize account details
    Account(const std::string& holder, long number, double initialBalance)
        : accountHolder(holder), accountNumber(number), balance(initialBalance) {}

    // Method to display account details
    void display_account_detail() const {
        std::cout << "Account Holder: " << accountHolder << std::endl;
        std::cout << "Account Number: " << accountNumber << std::endl;
        std::cout << "Current Balance: $" << balance << std::endl;
    }

    // Method to calculate and display simple interest
    void display_simple_interest(double rate, int time) const {
        double interest = (balance * rate * time) / 100.0;
        std::cout << std::fixed << std::setprecision(2);
        std::cout << "Simple Interest for " << time << " years at "
                  << rate << "% rate: $" << interest << std::endl;
    }
};

int main() {
    // Creating an Account object
    Account myAccount("John Doe", 123456789, 5000.0);

    // Displaying account details
    std::cout << "Account Information:" << std::endl;
    myAccount.display_account_detail();

    // Calculating and displaying simple interest
    double interestRate = 4.5; // 4.5% interest rate
    int timePeriod = 2;       // 2 years

    myAccount.display_simple_interest(interestRate, timePeriod);

    return 0;
}

```

# Viva

1. **What is Object-Oriented Programming (OOP)?**

   - **Answer:** OOP is a programming paradigm that organizes data and behavior into reusable structures called objects. It emphasizes concepts like encapsulation, inheritance, and polymorphism.

2. **Explain the four pillars of Object-Oriented Programming.**

   - **Answer:**
     - **Encapsulation:** It is the bundling of data and methods that operate on the data into a single unit or class.
     - **Inheritance:** It allows a class to inherit properties and behavior from another class, promoting code reusability.
     - **Polymorphism:** It enables a single interface to represent different types, allowing objects to be treated as instances of their parent class.
     - **Abstraction:** It involves simplifying complex systems by modeling classes based on their essential features.

3. **What is a class and object in C++?**

   - **Answer:** A class is a blueprint or template for creating objects, while an object is an instance of a class. A class defines the properties and behaviors common to all objects of that type.

4. **How is encapsulation implemented in C++?**

   - **Answer:** Encapsulation is implemented in C++ by using access specifiers like private, protected, and public. Data members are often declared as private, and member functions provide controlled access to them.

5. **Explain the concept of inheritance in C++.**

   - **Answer:** Inheritance allows a class (derived or child class) to inherit properties and behaviors from another class (base or parent class). It promotes code reuse and establishes an "is-a" relationship between classes.

6. **What is the difference between public, private, and protected access specifiers in C++?**

   - **Answer:**
     - **Public:** Members are accessible from outside the class.
     - **Private:** Members are only accessible within the class.
     - **Protected:** Members are accessible within the class and its derived classes.

7. **What is polymorphism? Explain runtime and compile-time polymorphism in C++.**

   - **Answer:** Polymorphism allows objects of different types to be treated as objects of a common type.
     - **Runtime Polymorphism:** Achieved through function overloading and virtual functions. Resolved at runtime using late binding.
     - **Compile-time Polymorphism:** Achieved through function overloading and operator overloading. Resolved at compile time using early binding.

8. **What is an abstract class?**

   - **Answer:** An abstract class is a class that cannot be instantiated and may contain abstract methods. It serves as a blueprint for other classes and is meant to be subclassed.

9. **Explain the difference between shallow copy and deep copy.**

   - **Answer:**
     - **Shallow Copy:** Copies the values of the members, including pointers. The memory addresses pointed by the pointers are not duplicated.
     - **Deep Copy:** Creates a new object with a new set of members and duplicates the memory pointed by the pointers, ensuring the original and the copy are independent.

10. **How are friend functions used in C++?**

    - **Answer:** Friend functions are functions that are not members of a class but are granted access to its private and protected members. They are declared using the `friend` keyword in the class declaration.

11. **What is a constructor and destructor in C++?**

    - **Answer:**
      - **Constructor:** A special member function that gets called when an object is created. It initializes the object's data members and can be overloaded.
      - **Destructor:** A special member function that gets called when an object goes out of scope or is explicitly deleted. It cleans up resources allocated by the object and can also be overloaded.

12. **Explain the concept of function overloading.**

    - **Answer:** Function overloading allows multiple functions with the same name but different parameter lists to coexist in the same scope. The compiler determines the appropriate function to call based on the number and types of arguments provided.

13. **What is the purpose of the `this` pointer in C++?**

    - **Answer:** The `this` pointer is a pointer that points to the object for which the member function is called. It is used to differentiate between the object's data members and local variables with the same name.

14. **How is polymorphism achieved through function overloading?**

    - **Answer:** Polymorphism through function overloading involves defining multiple functions with the same name but different parameter lists. The appropriate function is selected at compile time based on the number and types of arguments used in the function call.

15. **What is a virtual function? How does it contribute to runtime polymorphism?**

    - **Answer:** A virtual function is a function declared in a base class with the `virtual` keyword and is meant to be overridden by derived classes. It allows the appropriate function to be called at runtime based on the actual type of the object, contributing to runtime polymorphism.

16. **What is an interface in C++?**

    - **Answer:** In C++, an interface is a class with only pure virtual functions. It provides a way to achieve abstraction and is meant to be inherited by other classes, which must implement the pure virtual functions.

17. **Explain the concept of multiple inheritance in C++.**

    - **Answer:** Multiple inheritance in C++ allows a class to inherit from more than one base class. It enables a derived class to have the properties and behaviors of multiple classes, leading to complex class hierarchies.

18. **What is the difference between function overloading and operator overloading?**

    - **Answer:** Function overloading involves defining multiple functions with the same name but different parameter lists, while operator overloading involves defining how operators behave with user-defined types. Operator overloading is achieved by defining special member functions such as `operator+`, `operator-`, etc.

19. **How are static members different from instance members in a class?**

    - **Answer:** Static members belong to the class itself rather than instances of the class. They are shared among all instances and can be accessed using the class name. Instance members are specific to each object created from the class.

20. **Explain the concept of a template in C++.**
    - **Answer:** Templates in C++ allow the creation of generic classes and functions that can work with different data types without having to rewrite the code. They provide a mechanism for generic programming.
