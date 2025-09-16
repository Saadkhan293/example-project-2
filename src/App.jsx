import React, { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      if (
        event.origin !==
        "https://example-project-1-huwv2rygx-saadkhan293s-projects.vercel.app"
      )
        return; // ✅ security check
      if (event.data?.token) {
        setToken(event.data.token);
        console.log("Token received:", event.data.token);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div>
      <h1>Child React App (Iframe)</h1>
      {token ? <p>Received Token: {token}</p> : <p>No token yet.</p>}
    </div>
  );
}

export default App;
