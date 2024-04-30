// src/App.jsx
import React from "react";
import "./styles.css"; // Ensure you have an App.css file for styles
// At the top of your src/App.jsx
import logo from "./logo.png"; // or './logo.png'

const users = [
  {
    id: 1,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    username: "@clementine",
  },
  {
    id: 2,
    name: "Jamie Johnson",
    email: "jamiejohnson@example.com",
    username: "jamiejohnson",
  },
  // ... other users
];

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <a href="#users">Users</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
        <li>
          <a href="#deploy">Deploy</a>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  const handleDelete = (userId: number) => {
    // Here you would handle the deletion logic, perhaps updating the state
    console.log("Delete user with id:", userId);
  };

  return (
    <>
      <div className="App"></div>
      <div className="app-content">
        {" "}
        {/* This div wraps the main content */}
        <Sidebar />;
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <div className="User-list">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
