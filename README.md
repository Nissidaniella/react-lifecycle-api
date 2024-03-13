# Users Function Component

This React component displays a list of users by fetching data in a function component with hooks.

## Usage

Import and render the UsersFunction component.

```jsx
import UsersFunction from './UsersFunction';

function App() {
  return <UsersFunction />
} 
```

## Data Fetching

The component uses the Axios library and React Hooks useEffect to make a GET request to a JSONPlaceholder API.

## State Handling

The userState hook useState is used to manage the users state array.

## Rendering

The users array is mapped over to display name, username and email details.

## Key Features

- Function component structure 
- Fetching data with useEffect hook
- State handling with useState
- Mapping data to display

## Requirements

- React
- Axios
- useState, useEffect

## Usage

Fetches dummy user data from external API on mount/update.
Renders fetched data.

## Contributing

Pull requests welcome! Please open issues for any bugs.

## Author

[Nissi Diallo]
