import { createContext, useContext, useState } from "react";
const UserContext = createContext();

export default function App() {
const [user, setUser] = useState("Ayush");
return (
<UserContext.Provider value={{ user, setUser }}>
<Parent />
</UserContext.Provider>
);
}

function Parent() {
return (
<div>
<Child />
</div>
);
}

function Child() {
const { user, setUser } = useContext(UserContext);
return (
<div>
<p>{user}</p>
<button onClick={() => setUser("Updated")}>Change</button>
</div>
);
}