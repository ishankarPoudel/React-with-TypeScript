
# React with TypeScript: Core Concepts Project

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Overview

This project is designed to help developers understand and implement core **TypeScript** concepts with **React**. It includes modules ranging from basic TypeScript concepts like types and interfaces to more advanced state management techniques in React using TypeScript.

## Features

### Module 1: Basic Types & Interfaces in TypeScript
- Learn how to use **primitive types** (string, number, boolean).
- Define **interfaces** to describe objects and functions.
- Utilize TypeScript's **type-checking** feature to ensure type safety.

### Module 2: Working with Props & State in React
- Learn how to define **functional components** with typed props using TypeScript.
- Understand how to handle **events** (e.g., button clicks, form inputs) with TypeScript.
- Use **useState** with proper TypeScript typing to manage component state.

### Module 3: TypeScript for State Management in React
- Understand how to handle complex state using **arrays** and **objects** with **useState**.
- Learn how to type the **useState** hook and manage states for various data types.
- Build a **simple Todo app** with tasks stored as an array of strings and interact using TypeScript.

### Module 4: Handling Events & Forms in React with TypeScript
- Work with **event handlers** in TypeScript (e.g., `ChangeEvent`, `MouseEvent`).
- Implement a **form** that handles input fields and button clicks.
- Learn how to **validate user input** with TypeScript.

## Technologies Used

- **React** (with hooks)
- **TypeScript**
- **Vite** (for bundling)



### Example Functionality:
- Add a task in the **Todo List** (Module 3) by typing in the input field and clicking the "Add Task" button.
- Watch how **TypeScript** ensures type safety and prevents common JavaScript runtime errors.

## Project Structure

```bash
├── src
│   ├── components
│   │   ├── InputField.tsx   # Form input and button functionality (Module 4)
│   │   └── TodoList.tsx     # Displaying todo items (Module 3)
│   ├── App.tsx              # Main application entry (Module 2)
│   └── main.tsx             # Vite entry point
├── tsconfig.json             # TypeScript configuration file
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

