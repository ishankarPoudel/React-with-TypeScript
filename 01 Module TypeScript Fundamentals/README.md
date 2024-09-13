# Simple Counter App

This is a simple React-based counter application. The app displays a title and a counter that can be incremented by pressing a button. The counter starts from an initial value, which is passed as a prop. If no initial count is provided, it defaults to 0.

## Features

- Display a title provided through props.
- Display a counter with an initial value that can be incremented by clicking a button.
- Default counter value is set to 0 if no value is passed.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that adds static types to the language.

## Project Structure

- **`App.tsx`**: Contains the main component of the application that renders the title and counter. The `useState` hook is used to manage the counter state.
- **`main.tsx`**: Entry point where the `App` component is rendered, passing the `title` and optional `initialCount` props.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js: [Download here](https://nodejs.org/)
- npm: Node package manager, included with Node.js

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/simple-counter-app.git
   cd simple-counter-app
   ```
