import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Elysio Components
import Frontpage from "./Frontpage/Frontpage";
import Navbar from "./Navbar/Navbar";
import LoginPage from "./LoginPage/LoginPage";
import JournalForm from "./JournalForm/JournalForm"; // Import the JournalForm component

export default function App() {
  const [user, setUser] = useState(null);

  // Commenting out the useEffect that retrieves user information - Vivian

  // useEffect(() => {
  //   setUser(getUser());
  // }, []);

  return (
    <Router> {/* Wrap your application with Router */}
      <main className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Frontpage /> : <LoginPage />} />
          {/* Route for new journal entry */}
          <Route path="/journal/new" element={<JournalForm />} />
          {/* Temporary route for testing the JournalForm */}
          {/* When SignUpPage is ready, uncomment the following line and remove the temporary route */}
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
          {/* Redirect any undefined route to the JournalForm for testing purposes */}
          <Route path="*" element={<Navigate replace to="/journal/new" />} />
        </Routes>
      </main>
    </Router>
  );
}
