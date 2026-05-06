import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Ayush");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Context API Demo</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

function Parent() {
  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Parent Component</h2>
      <p>This is the parent component. Data is passed through Context.</p>
      <Child />
    </div>
  );
}

function Child() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      <h3>Child Component (Nested)</h3>
      <p><strong>User from Context:</strong> {user}</p>
      <button
        style={{ 
          marginTop: "10px", 
          padding: "8px 15px", 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={() => setUser("Updated User")}
      >
        Change User
      </button>
    </div>
  );
}

export default App;