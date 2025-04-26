// src/App.js
import React, { useState } from "react";
import Questionnaire from "./components/Questionnaire";
import Results from "./components/Results";

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {!profile ? (
        <Questionnaire onResult={setProfile} />
      ) : (
        <Results profile={profile} />
      )}
    </div>
  );
}

export default App;
