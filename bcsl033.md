**1. Write a program in 'C' language for the multiplication of two matrices.**

```c
#include <stdio.h>

#define MAX_ROWS 10
#define MAX_COLS 10

// Function to multiply two matrices
void multiplyMatrices(int mat1[MAX_ROWS][MAX_COLS], int mat2[MAX_ROWS][MAX_COLS], int result[MAX_ROWS][MAX_COLS], int rows1, int cols1, int rows2, int cols2) {
    if (cols1 != rows2) {
        printf("Matrices cannot be multiplied.\n");
        return;
    }

    for (int i = 0; i < rows1; i++) {
        for (int j = 0; j < cols2; j++) {
            result[i][j] = 0;
            for (int k = 0; k < cols1; k++) {
                result[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }
}

// Function to display a matrix
void displayMatrix(int mat[MAX_ROWS][MAX_COLS], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d\t", mat[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int mat1[MAX_ROWS][MAX_COLS] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int mat2[MAX_ROWS][MAX_COLS] = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};
    int result[MAX_ROWS][MAX_COLS];

    // Assuming mat1 has 3 rows and 3 columns, mat2 has 3 rows and 3 columns
    int rows1 = 3;
    int cols1 = 3;
    int rows2 = 3;
    int cols2 = 3;

    multiplyMatrices(mat1, mat2, result, rows1, cols1, rows2, cols2);

    // Display the result matrix
    printf("Resultant Matrix:\n");
    displayMatrix(result, rows1, cols2);

    return 0;
}

```

**2. Write a program in 'C' language for the multiplication of two sparse matrices.**

```c
#include <stdio.h>

#define MAX_TERMS 50

// Structure to represent a sparse matrix element
struct SparseElement {
    int row;
    int col;
    int value;
};

// Function to multiply two sparse matrices
void multiplySparseMatrices(struct SparseElement matrix1[], struct SparseElement matrix2[], int rows1, int cols1, int cols2) {
    struct SparseElement result[MAX_TERMS];
    int resultIndex = 0;

    // Initialize result matrix
    for (int i = 0; i < rows1; i++) {
        for (int j = 0; j < cols2; j++) {
            result[resultIndex].row = i;
            result[resultIndex].col = j;
            result[resultIndex].value = 0;
            resultIndex++;
        }
    }

    // Perform multiplication
    for (int i = 0; i < rows1; i++) {
        for (int j = 0; j < cols2; j++) {
            for (int k = 0; k < cols1; k++) {
                int index1 = i * cols1 + k;
                int index2 = k * cols2 + j;
                result[i * cols2 + j].value += matrix1[index1].value * matrix2[index2].value;
            }
        }
    }

    // Display the result matrix
    printf("Resultant Matrix:\n");
    for (int i = 0; i < rows1 * cols2; i++) {
        printf("%d %d %d\n", result[i].row, result[i].col, result[i].value);
    }
}

int main() {
    struct SparseElement matrix1[MAX_TERMS] = {{0, 0, 1}, {1, 1, 2}, {-1, -1, -1}};
    struct SparseElement matrix2[MAX_TERMS] = {{0, 0, 2}, {1, 1, 3}, {2, 2, 4}, {-1, -1, -1}};

    // Assuming matrix1 has 3 rows and 2 columns, matrix2 has 2 columns
    int rows1 = 3;
    int cols1 = 2;
    int cols2 = 2;

    multiplySparseMatrices(matrix1, matrix2, rows1, cols1, cols2);

    return 0;
}

```

**3. Write a program in 'C' language for the addition of two sparse matrices.**

```c
#include <stdio.h>

#define MAX_TERMS 50

// Structure to represent a sparse matrix element
struct SparseElement {
    int row;
    int col;
    int value;
};

// Function to add two sparse matrices
void addSparseMatrices(struct SparseElement matrix1[], struct SparseElement matrix2[], int rows, int cols) {
    struct SparseElement result[MAX_TERMS];
    int resultIndex = 0;

    int index1 = 0, index2 = 0;

    while (index1 < MAX_TERMS && index2 < MAX_TERMS && matrix1[index1].row != -1 && matrix2[index2].row != -1) {
        if (matrix1[index1].row == matrix2[index2].row) {
            if (matrix1[index1].col == matrix2[index2].col) {
                result[resultIndex].row = matrix1[index1].row;
                result[resultIndex].col = matrix1[index1].col;
                result[resultIndex].value = matrix1[index1].value + matrix2[index2].value;

                index1++;
                index2++;
            } else if (matrix1[index1].col < matrix2[index2].col) {
                result[resultIndex] = matrix1[index1];
                index1++;
            } else {
                result[resultIndex] = matrix2[index2];
                index2++;
            }
        } else if (matrix1[index1].row < matrix2[index2].row) {
            result[resultIndex] = matrix1[index1];
            index1++;
        } else {
            result[resultIndex] = matrix2[index2];
            index2++;
        }

        resultIndex++;
    }

    // Copy remaining elements from matrix1, if any
    while (index1 < MAX_TERMS && matrix1[index1].row != -1) {
        result[resultIndex++] = matrix1[index1++];
    }

    // Copy remaining elements from matrix2, if any
    while (index2 < MAX_TERMS && matrix2[index2].row != -1) {
        result[resultIndex++] = matrix2[index2++];
    }

    // Display the result matrix
    printf("Resultant Matrix:\n");
    for (int i = 0; i < resultIndex; i++) {
        printf("%d %d %d\n", result[i].row, result[i].col, result[i].value);
    }
}

int main() {
    struct SparseElement matrix1[MAX_TERMS] = {{0, 0, 1}, {1, 1, 2}, {-1, -1, -1}};
    struct SparseElement matrix2[MAX_TERMS] = {{0, 0, 2}, {1, 1, 3}, {2, 2, 4}, {-1, -1, -1}};

    // Assuming the matrices have 3 rows and 3 columns
    int rows = 3;
    int cols = 3;

    addSparseMatrices(matrix1, matrix2, rows, cols);

    return 0;
}

```

---

**4. Write a program in 'C' language for addition of two Polynomials.**

```c
#include <stdio.h>

#define MAX_DEGREE 100

// Function to add two polynomials
void addPolynomials(int poly1[], int poly2[], int result[]) {
    for (int i = 0; i < MAX_DEGREE; i++) {
        result[i] = poly1[i] + poly2[i];
    }
}

// Function to display a polynomial
void displayPolynomial(int poly[]) {
    int degree = MAX_DEGREE - 1;

    printf("Resultant Polynomial: ");
    for (int i = 0; i < MAX_DEGREE; i++) {
        if (poly[i] != 0) {
            printf("%dx^%d ", poly[i], degree);
            if (i < MAX_DEGREE - 1 && poly[i + 1] != 0) {
                printf("+ ");
            }
        }
        degree--;
    }
    printf("\n");
}

int main() {
    int poly1[MAX_DEGREE] = {0};
    int poly2[MAX_DEGREE] = {0};
    int result[MAX_DEGREE] = {0};

    // Example polynomials: 3x^3 + 2x^2 + 5x^1 + 1 and 2x^2 + 4x^1 + 6
    poly1[3] = 3;
    poly1[2] = 2;
    poly1[1] = 5;
    poly1[0] = 1;

    poly2[2] = 2;
    poly2[1] = 4;
    poly2[0] = 6;

    addPolynomials(poly1, poly2, result);

    // Display the result
    displayPolynomial(result);

    return 0;
}

```

---

**5. Write a program in 'C' language that accepts a file as input and prints the number of words in it which have vowels.**

```c
#include <stdio.h>
#include <ctype.h>

int containsVowels(char* word) {
    while (*word) {
        char c = tolower(*word);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            return 1; // Word contains a vowel
        }
        word++;
    }
    return 0; // Word does not contain a vowel
}

int countWordsWithVowels(FILE* file) {
    int wordCount = 0;
    char word[100]; // Assuming a word won't exceed 100 characters

    while (fscanf(file, "%s", word) == 1) {
        if (containsVowels(word)) {
            wordCount++;
        }
    }

    return wordCount;
}

int main() {
    const char* fileName = "input.txt"; // Replace with the name of your input file

    FILE* file = fopen(fileName, "r");
    if (file == NULL) {
        perror("Error opening file");
        return 1;
    }

    int wordsWithVowels = countWordsWithVowels(file);

    fclose(file);

    printf("Number of words with vowels in the file: %d\n", wordsWithVowels);

    return 0;
}
```

**6. Write a program in 'C' that accepts a file as input and prints the number of sentences in it.**

```c
#include <stdio.h>

int countSentences(FILE *file) {
    int sentenceCount = 0;
    char ch;

    while ((ch = fgetc(file)) != EOF) {
        if (ch == '.' || ch == '!' || ch == '?') {
            sentenceCount++;
        }
    }

    return sentenceCount;
}

int main() {
    const char* fileName = "input.txt"; // Replace with the name of your input file

    FILE *file = fopen(fileName, "r");
    if (file == NULL) {
        perror("Error opening file");
        return 1;
    }

    int sentences = countSentences(file);

    fclose(file);

    printf("Number of sentences in the file: %d\n", sentences);

    return 0;
}
```

**7. Write a program in 'C' language that reads two files F1 and F2. Then, it should print the contents of F1 to file F3 followed by F2. Make necessary assumptions.**

```c
#include <stdio.h>
#include <stdlib.h>

void mergeFiles(const char* filename1, const char* filename2, const char* outputFilename) {
    FILE *file1, *file2, *outputFile;

    // Open F1 for reading
    file1 = fopen(filename1, "r");
    if (file1 == NULL) {
        perror("Error opening file F1");
        exit(EXIT_FAILURE);
    }

    // Open F2 for reading
    file2 = fopen(filename2, "r");
    if (file2 == NULL) {
        perror("Error opening file F2");
        fclose(file1);
        exit(EXIT_FAILURE);
    }

    // Open F3 for writing
    outputFile = fopen(outputFilename, "w");
    if (outputFile == NULL) {
        perror("Error opening file F3 for writing");
        fclose(file1);
        fclose(file2);
        exit(EXIT_FAILURE);
    }

    // Read and write contents of F1 to F3
    char ch;
    while ((ch = fgetc(file1)) != EOF) {
        fputc(ch, outputFile);
    }

    // Read and write contents of F2 to F3
    while ((ch = fgetc(file2)) != EOF) {
        fputc(ch, outputFile);
    }

    // Close all files
    fclose(file1);
    fclose(file2);
    fclose(outputFile);

    printf("Contents of %s and %s merged into %s.\n", filename1, filename2, outputFilename);
}

int main() {
    const char* inputFile1 = "F1.txt"; // Assuming the name of the first input file is F1.txt
    const char* inputFile2 = "F2.txt"; // Assuming the name of the second input file is F2.txt
    const char* outputFile = "F3.txt"; // Assuming the name of the output file is F3.txt

    mergeFiles(inputFile1, inputFile2, outputFile);

    return 0;
}
```

---

**8. Write a program in 'C' language for the implementation of a Queue.**

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 5

struct Queue {
    int front, rear;
    int array[MAX_SIZE];
};

int isFull(struct Queue* queue) {
    return (queue->rear == MAX_SIZE - 1);
}

int isEmpty(struct Queue* queue) {
    return (queue->front == -1);
}

void enqueue(struct Queue* queue, int item) {
    if (isFull(queue)) {
        printf("Queue is full. Cannot enqueue.\n");
        return;
    }

    if (isEmpty(queue))
        queue->front = 0;

    queue->rear++;
    queue->array[queue->rear] = item;
    printf("%d enqueued to the queue.\n", item);
}

void dequeue(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return;
    }

    printf("%d dequeued from the queue.\n", queue->array[queue->front]);

    if (queue->front == queue->rear) {
        // Last element is dequeued, reset front and rear
        queue->front = -1;
        queue->rear = -1;
    } else {
        queue->front++;
    }
}

int main() {
    struct Queue queue;
    queue.front = -1;
    queue.rear = -1;

    enqueue(&queue, 1);
    enqueue(&queue, 2);
    enqueue(&queue, 3);
    enqueue(&queue, 4);
    enqueue(&queue, 5);

    enqueue(&queue, 6); // Trying to enqueue when the queue is full

    dequeue(&queue);
    dequeue(&queue);

    enqueue(&queue, 7);
    enqueue(&queue, 8);

    return 0;
}

```

**Write a program in 'C' language for the implementation of a Circular Queue.**

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 5

struct CircularQueue {
    int front, rear;
    int array[MAX_SIZE];
};

int isFull(struct CircularQueue* queue) {
    return (queue->front == (queue->rear + 1) % MAX_SIZE);
}

int isEmpty(struct CircularQueue* queue) {
    return (queue->front == -1);
}

void enqueue(struct CircularQueue* queue, int item) {
    if (isFull(queue)) {
        printf("Queue is full. Cannot enqueue.\n");
        return;
    }

    if (isEmpty(queue))
        queue->front = 0;

    queue->rear = (queue->rear + 1) % MAX_SIZE;
    queue->array[queue->rear] = item;
    printf("%d enqueued to the queue.\n", item);
}

void dequeue(struct CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return;
    }

    printf("%d dequeued from the queue.\n", queue->array[queue->front]);

    if (queue->front == queue->rear) {
        // Last element is dequeued, reset front and rear
        queue->front = -1;
        queue->rear = -1;
    } else {
        queue->front = (queue->front + 1) % MAX_SIZE;
    }
}

int main() {
    struct CircularQueue queue;
    queue.front = -1;
    queue.rear = -1;

    enqueue(&queue, 1);
    enqueue(&queue, 2);
    enqueue(&queue, 3);
    enqueue(&queue, 4);
    enqueue(&queue, 5);

    enqueue(&queue, 6); // Trying to enqueue when the queue is full

    dequeue(&queue);
    dequeue(&queue);

    enqueue(&queue, 7);
    enqueue(&queue, 8);

    return 0;
}

```

**9. Write a program in 'C' language for the implementation of a Dequeue.**

```c
#include <stdio.h>
#include <stdlib.h>

// Node structure for the dequeue
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Dequeue structure
struct Dequeue {
    struct Node* front;
    struct Node* rear;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to initialize a dequeue
void initializeDequeue(struct Dequeue* dq) {
    dq->front = NULL;
    dq->rear = NULL;
}

// Function to check if the dequeue is empty
int isEmpty(struct Dequeue* dq) {
    return dq->front == NULL;
}

// Function to insert an element at the front of the dequeue
void insertFront(struct Dequeue* dq, int data) {
    struct Node* newNode = createNode(data);
    if (isEmpty(dq)) {
        dq->front = newNode;
        dq->rear = newNode;
    } else {
        newNode->next = dq->front;
        dq->front->prev = newNode;
        dq->front = newNode;
    }
}

// Function to insert an element at the rear of the dequeue
void insertRear(struct Dequeue* dq, int data) {
    struct Node* newNode = createNode(data);
    if (isEmpty(dq)) {
        dq->front = newNode;
        dq->rear = newNode;
    } else {
        newNode->prev = dq->rear;
        dq->rear->next = newNode;
        dq->rear = newNode;
    }
}

// Function to delete an element from the front of the dequeue
void deleteFront(struct Dequeue* dq) {
    if (isEmpty(dq)) {
        printf("Dequeue is empty.\n");
    } else {
        struct Node* temp = dq->front;
        dq->front = dq->front->next;
        free(temp);

        if (dq->front == NULL) {
            dq->rear = NULL;
        }
    }
}

// Function to delete an element from the rear of the dequeue
void deleteRear(struct Dequeue* dq) {
    if (isEmpty(dq)) {
        printf("Dequeue is empty.\n");
    } else {
        struct Node* temp = dq->rear;
        dq->rear = dq->rear->prev;
        free(temp);

        if (dq->rear == NULL) {
            dq->front = NULL;
        }
    }
}

// Function to display the elements of the dequeue
void displayDequeue(struct Dequeue* dq) {
    if (isEmpty(dq)) {
        printf("Dequeue is empty.\n");
    } else {
        struct Node* current = dq->front;
        while (current != NULL) {
            printf("%d ", current->data);
            current = current->next;
        }
        printf("\n");
    }
}

// Main function to demonstrate the dequeue
int main() {
    struct Dequeue dq;
    initializeDequeue(&dq);

    insertFront(&dq, 3);
    insertRear(&dq, 7);
    insertFront(&dq, 1);

    printf("Dequeue: ");
    displayDequeue(&dq);

    deleteFront(&dq);
    printf("Dequeue after deleting front: ");
    displayDequeue(&dq);

    deleteRear(&dq);
    printf("Dequeue after deleting rear: ");
    displayDequeue(&dq);

    return 0;
}

```

---

**10. Write a program in 'C' language for implementation of a Singly Linked List.**

```c
#include <stdio.h>
#include <stdlib.h>

// Node structure for the singly linked list
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the list
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}

// Function to display the singly linked list
void displayList(struct Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

// Main function to demonstrate the singly linked list
int main() {
    struct Node* head = NULL;

    insertAtBeginning(&head, 3);
    insertAtBeginning(&head, 7);
    insertAtBeginning(&head, 1);

    printf("Singly Linked List: ");
    displayList(head);

    return 0;
}

```

**11. Write a program in 'C' language for the implementation of a Doubly Linked List.**

```c
#include <stdio.h>
#include <stdlib.h>

// Node structure for the doubly linked list
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the list
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    if (*head == NULL) {
        *head = newNode;
    } else {
        newNode->next = *head;
        (*head)->prev = newNode;
        *head = newNode;
    }
}

// Function to display the doubly linked list
void displayList(struct Node* head) {
    while (head != NULL) {
        printf("%d <-> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

// Main function to demonstrate the doubly linked list
int main() {
    struct Node* head = NULL;

    insertAtBeginning(&head, 3);
    insertAtBeginning(&head, 7);
    insertAtBeginning(&head, 1);

    printf("Doubly Linked List: ");
    displayList(head);

    return 0;
}

```

**12. Write a program in 'C' language for the implementation of Circularly Doubly Linked List.**

```c
#include <stdio.h>
#include <stdlib.h>

// Structure for a node in the circular doubly linked list
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Function to create a new node with the given data
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the circular doubly linked list
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);

    if (*head == NULL) {
        *head = newNode;
        (*head)->next = *head;
        (*head)->prev = *head;
    } else {
        newNode->next = *head;
        newNode->prev = (*head)->prev;
        (*head)->prev->next = newNode;
        (*head)->prev = newNode;
        *head = newNode;
    }

    printf("Inserted %d at the beginning.\n", data);
}

// Function to insert a node at the end of the circular doubly linked list
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = createNode(data);

    if (*head == NULL) {
        *head = newNode;
        (*head)->next = *head;
        (*head)->prev = *head;
    } else {
        newNode->next = *head;
        newNode->prev = (*head)->prev;
        (*head)->prev->next = newNode;
        (*head)->prev = newNode;
    }

    printf("Inserted %d at the end.\n", data);
}

// Function to delete a node with the given data from the circular doubly linked list
void deleteNode(struct Node** head, int data) {
    if (*head == NULL) {
        printf("List is empty. Cannot delete.\n");
        return;
    }

    struct Node* current = *head;
    struct Node* toDelete = NULL;

    do {
        if (current->data == data) {
            toDelete = current;
            break;
        }
        current = current->next;
    } while (current != *head);

    if (toDelete != NULL) {
        if (toDelete == *head) {
            *head = toDelete->next;
        }

        toDelete->prev->next = toDelete->next;
        toDelete->next->prev = toDelete->prev;

        free(toDelete);

        printf("Deleted node with data %d.\n", data);
    } else {
        printf("Node with data %d not found.\n", data);
    }
}

// Function to display the elements in the circular doubly linked list
void displayList(struct Node* head) {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }

    struct Node* current = head;

    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);

    printf("\n");
}

int main() {
    struct Node* head = NULL;

    insertAtBeginning(&head, 10);
    insertAtEnd(&head, 20);
    insertAtEnd(&head, 30);

    displayList(head);

    deleteNode(&head, 20);

    displayList(head);

    return 0;
}

```

---

**13. Write a program in 'C' language for the implementation of a Stack.**

```c
#include <stdio.h>

#define MAX_SIZE 100

// Structure for the stack
struct Stack {
    int arr[MAX_SIZE];
    int top;
};

// Function to initialize the stack
void initializeStack(struct Stack *stack) {
    stack->top = -1;
}

// Function to check if the stack is empty
int isEmpty(struct Stack *stack) {
    return stack->top == -1;
}

// Function to check if the stack is full
int isFull(struct Stack *stack) {
    return stack->top == MAX_SIZE - 1;
}

// Function to push an element onto the stack
void push(struct Stack *stack, int data) {
    if (isFull(stack)) {
        printf("Stack Overflow: Cannot push element %d.\n", data);
    } else {
        stack->arr[++stack->top] = data;
        printf("Pushed %d onto the stack.\n", data);
    }
}

// Function to pop an element from the stack
int pop(struct Stack *stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow: Cannot pop from an empty stack.\n");
        return -1;
    } else {
        int poppedElement = stack->arr[stack->top--];
        printf("Popped %d from the stack.\n", poppedElement);
        return poppedElement;
    }
}

// Function to display the elements in the stack
void displayStack(struct Stack *stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty.\n");
    } else {
        printf("Stack elements: ");
        for (int i = 0; i <= stack->top; ++i) {
            printf("%d ", stack->arr[i]);
        }
        printf("\n");
    }
}

int main() {
    // Initialize the stack
    struct Stack myStack;
    initializeStack(&myStack);

    // Perform stack operations
    push(&myStack, 10);
    push(&myStack, 20);
    push(&myStack, 30);

    displayStack(&myStack);

    pop(&myStack);
    displayStack(&myStack);

    pop(&myStack);
    pop(&myStack);

    displayStack(&myStack);

    return 0;
}
```

---

**14. Write a program in 'C' language for the creation of a Binary Tree.**

```c
#include <stdio.h>
#include <stdlib.h>

// Structure for a binary tree node
struct TreeNode {
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
};

// Function to create a new node with the given data
struct TreeNode* createNode(int data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Function to build a binary tree
struct TreeNode* buildBinaryTree() {
    // Create nodes for the binary tree
    struct TreeNode* root = createNode(1);
    struct TreeNode* node2 = createNode(2);
    struct TreeNode* node3 = createNode(3);
    struct TreeNode* node4 = createNode(4);
    struct TreeNode* node5 = createNode(5);

    // Build the binary tree
    root->left = node2;
    root->right = node3;
    node2->left = node4;
    node2->right = node5;

    return root;
}

// Function to perform in-order traversal of the binary tree
void inOrderTraversal(struct TreeNode* root) {
    if (root != NULL) {
        inOrderTraversal(root->left);
        printf("%d ", root->data);
        inOrderTraversal(root->right);
    }
}

int main() {
    // Build a binary tree
    struct TreeNode* root = buildBinaryTree();

    // Display the in-order traversal of the binary tree
    printf("In-order Traversal of Binary Tree: ");
    inOrderTraversal(root);

    return 0;
}

```

---

**15. Write a program in 'C' language for the implementation of Quick Sort.**

```c
#include <stdio.h>

// Function to perform partition in quicksort
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; ++j) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap arr[i+1] and arr[high] to place pivot in the correct position
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

// Function to perform quicksort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // Get the pivot element such that
        // elements smaller than pivot are on the left
        // and elements greater than pivot are on the right
        int pivot = partition(arr, low, high);

        // Recursively sort elements before and after the pivot
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

int main() {
    int n;

    // Get the size of the array from the user
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    // Get array elements from the user
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; ++i) {
        scanf("%d", &arr[i]);
    }

    // Perform quicksort
    quickSort(arr, 0, n - 1);

    // Display the sorted array
    printf("Sorted array using Quick Sort: ");
    for (int i = 0; i < n; ++i) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

**16. Write a program in C language for the implementation of Quick Sort without using recursion.**

```c
#include <stdio.h>

// Structure to represent a stack frame
struct StackFrame {
    int low;
    int high;
};

// Function to perform partition in quicksort
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; ++j) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap arr[i+1] and arr[high] to place pivot in the correct position
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

// Function to perform iterative quicksort
void iterativeQuickSort(int arr[], int low, int high) {
    // Create a stack for iterative approach
    struct StackFrame stack[high - low + 1];

    // Initialize top of the stack
    int top = -1;

    // Push initial values of low and high to the stack
    stack[++top].low = low;
    stack[top].high = high;

    // Keep popping from the stack while it is not empty
    while (top >= 0) {
        // Pop low and high from the stack
        low = stack[top].low;
        high = stack[top--].high;

        // Get the pivot element such that
        // elements smaller than pivot are on the left
        // and elements greater than pivot are on the right
        int pivot = partition(arr, low, high);

        // If there are elements on the left side of pivot,
        // push them to the stack
        if (pivot - 1 > low) {
            stack[++top].low = low;
            stack[top].high = pivot - 1;
        }

        // If there are elements on the right side of pivot,
        // push them to the stack
        if (pivot + 1 < high) {
            stack[++top].low = pivot + 1;
            stack[top].high = high;
        }
    }
}

int main() {
    int n;

    // Get the size of the array from the user
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    // Get array elements from the user
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; ++i) {
        scanf("%d", &arr[i]);
    }

    // Perform iterative quicksort
    iterativeQuickSort(arr, 0, n - 1);

    // Display the sorted array
    printf("Sorted array using Quick Sort: ");
    for (int i = 0; i < n; ++i) {
        printf("%d ", arr[i]);
    }

    return 0;
}

```

**17. Write a Program in 'C' Language for the implementation of Bubble Sort.**

```c
#include <stdio.h>

// Function to perform bubble sort on an array
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int n;

    // Get the size of the array from the user
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    // Get array elements from the user
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; ++i) {
        scanf("%d", &arr[i]);
    }

    // Perform bubble sort
    bubbleSort(arr, n);

    // Display the sorted array
    printf("Sorted array using Bubble Sort: ");
    for (int i = 0; i < n; ++i) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

---

**18. Write a program in 'C' language for the implementation of Binary Search.**

```c
#include <stdio.h>

// Function to perform binary search
int binarySearch(int arr[], int low, int high, int target) {
    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if the target is present at the middle
        if (arr[mid] == target) {
            return mid;
        }

        // If the target is greater, ignore the left half
        else if (arr[mid] < target) {
            low = mid + 1;
        }

        // If the target is smaller, ignore the right half
        else {
            high = mid - 1;
        }
    }

    // Return -1 if the target is not present in the array
    return -1;
}

int main() {
    int n;

    // Get the size of the array from the user
    printf("Enter the size of the sorted array: ");
    scanf("%d", &n);

    int arr[n];

    // Get sorted array elements from the user
    printf("Enter %d sorted elements:\n", n);
    for (int i = 0; i < n; ++i) {
        scanf("%d", &arr[i]);
    }

    int target;

    // Get the target element to search from the user
    printf("Enter the element to search: ");
    scanf("%d", &target);

    // Perform binary search
    int result = binarySearch(arr, 0, n - 1, target);

    // Display the result
    if (result != -1) {
        printf("Element %d found at index %d.\n", target, result);
    } else {
        printf("Element %d not found in the array.\n", target);
    }

    return 0;
}
```

**19. Write a program in 'C' language for the implementation of Linear Search.**

```c
#include <stdio.h>

// Function to perform linear search
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; ++i) {
        if (arr[i] == target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
}

int main() {
    int n;

    // Get the size of the array from the user
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    // Get array elements from the user
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; ++i) {
        scanf("%d", &arr[i]);
    }

    int target;

    // Get the target element to search from the user
    printf("Enter the element to search: ");
    scanf("%d", &target);

    // Perform linear search
    int result = linearSearch(arr, n, target);

    // Display the result
    if (result != -1) {
        printf("Element %d found at index %d.\n", target, result);
    } else {
        printf("Element %d not found in the array.\n", target);
    }

    return 0;
}
```

---

**20. Write a C++ program to find the factorial of a given number. Define proper constructor and method in this program.**

```c++
#include<iostream>

class FactorialCalculator {
private:
    int number;

public:
    // Constructor
    FactorialCalculator(int num) : number(num) {}

    // Method to calculate factorial
    unsigned long long calculateFactorial() {
        if (number < 0) {
            std::cout << "Factorial is not defined for negative numbers." << std::endl;
            return 0;
        }

        unsigned long long factorial = 1;
        for (int i = 1; i <= number; ++i) {
            factorial *= i;
        }

        return factorial;
    }
};

int main() {
    // Get input from the user
    int input;
    std::cout << "Enter a non-negative integer to find its factorial: ";
    std::cin >> input;

    // Create an instance of the FactorialCalculator class
    FactorialCalculator calculator(input);

    // Calculate and display the factorial
    std::cout << "Factorial of " << input << " is: " << calculator.calculateFactorial() << std::endl;

    return 0;
}
```

---

# Viva

1. **What is a data structure?**

   - **Answer:** A data structure is a way of organizing and storing data to perform operations efficiently.

2. **Differentiate between an array and a linked list.**

   - **Answer:** An array is a collection of elements of the same data type stored in contiguous memory, while a linked list is a collection of elements (nodes) where each node points to the next one.

3. **Explain the concept of time complexity.**

   - **Answer:** Time complexity measures the amount of time an algorithm takes concerning the input size. It provides an estimate of the maximum running time as a function of the input size.

4. **What is the significance of Big-O notation in algorithms?**

   - **Answer:** Big-O notation describes the upper bound on the growth rate of an algorithm's running time in terms of the input size. It helps in analyzing and comparing the efficiency of algorithms.

5. **Define a stack and explain its operations.**

   - **Answer:** A stack is a data structure that follows the Last In, First Out (LIFO) principle. It supports two primary operations: push (to add an element) and pop (to remove the top element).

6. **Describe the difference between BFS and DFS.**

   - **Answer:** BFS (Breadth-First Search) explores a graph level by level, while DFS (Depth-First Search) explores as far as possible along one branch before backtracking.

7. **What is the purpose of a hash table?**

   - **Answer:** A hash table is used to implement an associative array abstract data type, where data is stored in key-value pairs. It provides efficient insertion, deletion, and retrieval of data.

8. **Explain dynamic programming.**

   - **Answer:** Dynamic programming is a technique to solve problems by breaking them into smaller overlapping subproblems and solving each subproblem only once, storing the results for future reference to avoid redundant computations.

9. **What is a binary search tree (BST)?**

   - **Answer:** A binary search tree is a binary tree data structure where each node has at most two children, and the key in each node is greater than or equal to all keys in its left subtree and less than all keys in its right subtree.

10. **Discuss the concept of recursion.**

    - **Answer:** Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. It involves breaking down a problem into smaller subproblems and solving them recursively.

11. **Explain the concept of a queue.**

    - **Answer:** A queue is a linear data structure that follows the First In, First Out (FIFO) principle. It supports two primary operations: enqueue (to add an element to the rear) and dequeue (to remove the front element).

12. **What is the difference between a stack and a queue?**

    - **Answer:** The main difference lies in the order of operations. A stack follows the Last In, First Out (LIFO) principle, while a queue follows the First In, First Out (FIFO) principle.

13. **Define a linked list and discuss its advantages and disadvantages.**

    - **Answer:** A linked list is a data structure where elements are stored in nodes, and each node points to the next one. Advantages include dynamic size and easy insertion/deletion, but disadvantages include increased memory overhead and slower random access compared to arrays.

14. **How does the quicksort algorithm work?**

    - **Answer:** Quicksort is a sorting algorithm that follows the divide-and-conquer approach. It selects a pivot element and partitions the array into two subarrays, with elements less than the pivot on one side and elements greater than the pivot on the other. The process is then applied recursively.

15. **Discuss the concept of a priority queue.**

    - **Answer:** A priority queue is an abstract data type that supports inserting elements with associated priorities and extracting the element with the highest priority. It does not follow the strict FIFO or LIFO order.

16. **What is the purpose of the Dijkstra's algorithm?**

    - **Answer:** Dijkstra's algorithm is used to find the shortest path between two nodes in a weighted graph. It assigns tentative distances to nodes and updates them if a shorter path is found, ultimately determining the shortest paths.

17. **Explain the concept of hashing and collision resolution.**

    - **Answer:** Hashing is a technique used to map data to a fixed-size array (hash table) based on a hash function. Collision resolution deals with situations where two or more keys hash to the same location by employing methods like chaining or open addressing.

18. **Describe the characteristics of a binary heap.**

    - **Answer:** A binary heap is a complete binary tree that satisfies the heap property. In a max heap, the value of each node is greater than or equal to the values of its children; in a min heap, it is less than or equal to the values of its children.

19. **How does the breadth-first search algorithm work?**

    - **Answer:** Breadth-First Search (BFS) explores a graph level by level. It starts from a source node, visits all neighbors at the current depth before moving on to nodes at the next depth. It is often used for finding the shortest path in unweighted graphs.

20. **Discuss the concept of an AVL tree.**

    - **Answer:** An AVL tree is a self-balancing binary search tree where the balance factor of each node (the height difference between its left and right subtrees) is at most 1. Balancing operations are performed during insertion and deletion to maintain this property.

21. **What is the purpose of a hash function in a hash table?**

    - **Answer:** A hash function is used to map data of arbitrary size to a fixed-size array, generating a hash code. It ensures uniform distribution of keys across the array, minimizing collisions and facilitating efficient retrieval.

22. **Explain the concept of a doubly linked list.**

    - **Answer:** A doubly linked list is a linked list where each node contains a data element and two pointers, one pointing to the next node and another pointing to the previous node. This allows for easier traversal in both directions compared to a singly linked list.

23. **How does the Merge Sort algorithm work?**

    - **Answer:** Merge Sort is a divide-and-conquer algorithm. It divides the array into two halves, recursively sorts each half, and then merges the sorted halves to produce a sorted array. It has a time complexity of O(n log n).

24. **Discuss the importance of a balanced tree.**

    - **Answer:** A balanced tree, such as AVL or Red-Black trees, ensures that the height of the tree is logarithmic, resulting in efficient search, insertion, and deletion operations. Unbalanced trees can lead to performance degradation.

25. **What is the significance of the Floyd-Warshall algorithm?**

    - **Answer:** The Floyd-Warshall algorithm is used for all pairs shortest path in a weighted graph. It computes the shortest paths between all pairs of vertices, including intermediate vertices in the paths.

26. **Define a circular queue and explain its advantages.**

    - **Answer:** A circular queue is a variation of a regular queue where the last element is connected to the first element, forming a circular structure. Advantages include better space utilization and avoiding the need to shift elements during enqueue and dequeue operations.

27. **How does the binary search algorithm work, and what are its prerequisites?**

    - **Answer:** Binary search works on a sorted array by repeatedly dividing the search interval in half. Prerequisites include a sorted array and the ability to access elements by index.

28. **Discuss the concept of in-order, pre-order, and post-order traversal in binary trees.**

    - **Answer:** In-order traversal visits the left subtree, then the root, and finally the right subtree. Pre-order traversal visits the root, left subtree, and right subtree. Post-order traversal visits the left subtree, right subtree, and then the root.

29. **What is the purpose of a spanning tree in a graph?**

    - **Answer:** A spanning tree of a graph is a tree that includes all the vertices of the graph with the minimum possible number of edges. It is used in network design, ensuring connectivity without forming cycles.

30. **Explain the concept of a trie.**

    - **Answer:** A trie is a tree-like data structure used to store an associative array where the keys are usually strings. It allows for efficient retrieval and insertion operations with a time complexity proportional to the length of the key.
