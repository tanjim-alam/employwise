# User Management App

This is a **React.js User Management Application** that allows users to **view, search, edit, delete, and paginate users** fetched from an API. The application uses **Redux for state management** and **Tailwind CSS for styling**.

## Features

- ✅ **User Listing** - Displays users fetched from an API.
- 🔍 **Search Users** - Search users dynamically by name or email.
- ✏ **Edit Users** - Edit user details using a modal (no redirection).
- ❌ **Delete Users** - Remove users from the list.
- 📄 **Pagination** - Navigate through users using Next/Previous buttons.

## Tech Stack

- ⚛ **React.js** - Frontend framework
- 🔄 **Redux Toolkit** - State management
- 🎨 **Tailwind CSS** - Styling
- 🔗 **React Router** - Navigation
- ⚡ **Axios** - API requests

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tanjim-alam/employwise.git
   cd employwise
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage

1. View the list of users.
2. Use the search bar to filter users by name or email.
3. Click the **Edit** button to open the modal and update user details.
4. Click **Delete** to remove a user.
5. Use **Next/Previous** buttons to navigate pages.

## Project Structure

## API Endpoints (Reqres)

This app fetches users from the [Reqres API](https://reqres.in/api/users).

- **Fetch Users**: `GET https://reqres.in/api/users?page=1`
- **Update User**: `PUT https://reqres.in/api/users/:id`
- **Delete User**: `DELETE https://reqres.in/api/users/:id`

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. 😊

## License

This project is open-source and available under the [MIT License](LICENSE).

