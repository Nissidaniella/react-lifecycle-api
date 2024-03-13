Here is a suggested README file for the React users class component:

# Users Class Component

This React component displays a list of users by fetching data in a class component.

## Usage

Import and render the UsersClass component.

```jsx
import UsersClass from './UsersClass';

function App() {
  return <UsersClass />
}
```

## Data Fetching

The component uses the Fetch API in componentDidMount lifecycle method to make a GET request to a JSONplaceholder API.

## State

The user data is stored in component state and updated on fetch response.

## Rendering 

The users array is mapped over to display name, username and email details.

## Key Features

- Class component structure
- Fetching data in componentDidMount 
- Updating state on response
- Mapping over data to display

## Requirements

- React
- PropTypes 
- Fetch API

## Usage

Make requests to API for dummy user data.
Rendered data is fetched from external API source.

## Contributing

Pull requests welcome! Please open issues for any bugs.

## Author

[Nissi Diallo](/)

