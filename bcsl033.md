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
